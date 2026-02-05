import { NextResponse } from "next/server";

const API_URL = "https://nets-api.skylightsafety.net/api/forms/submit";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { recaptchaToken, name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email) {
      console.log("Validation failed - missing fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Prepare payload matching the Postman structure
    const payload = {
      recaptchaToken: recaptchaToken || "test_token_12345",
      name: name,
      phone: phone || "",
      company: "Contact Form Submission", // Add company field
      email: email,
      message: message || "",
    };
    // Send to external API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let parsed: any = null;
      try {
        parsed = text ? JSON.parse(text) : null;
      } catch {}
      throw new Error(parsed?.error || text || "Failed to submit");
    }

    const data = await response.json();

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
