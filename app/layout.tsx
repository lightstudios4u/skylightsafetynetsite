import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ZoomControl } from "./components/ZoomControl";
import { Layout } from "./components/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SkylightSafety.NET",
  description: "Purpose-Built Skylight Fall-Through Protection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LfpY10sAAAAALuhCO1d8YKbddhHGqClicnDQ2x-"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <ZoomControl />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
