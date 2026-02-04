import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://nets-api.skylightsafety.net/api/forms/submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    const {
      recaptchaToken,
      firstName,
      lastName,
      phone,
      email,
      company,
      message,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      console.log("Validation failed - missing fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Combine first and last name
    const fullName = `${firstName} ${lastName}`;

    // Prepare payload matching the Postman structure
    const payload = {
      recaptchaToken: recaptchaToken || "test_token_12345",
      name: fullName,
      phone: phone || "",
      company: company || "",
      email: email,
      message: message || "",
    };

    console.log("Sending to external API:", payload);

    // Send to external API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("External API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API error response:", errorText);

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { error: errorText };
      }

      return NextResponse.json(
        { error: "Failed to submit form", details: errorData },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log("External API success response:", data);

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
