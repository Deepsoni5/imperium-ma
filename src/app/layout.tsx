import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MerzVia | Premium Mergers, Acquisitions & Strategic Advisory",
  description: "The architectural force behind your legacy. MerzVia orchestrates high-stakes transactions for the world's most ambitious enterprises.",
  icons: {
    icon: '/favicon_1.png',
    shortcut: '/favicon_1.png',
    apple: '/favicon_1.png',
  },
  openGraph: {
    title: "MerzVia | Elite Strategic Advisory",
    description: "Orchestrating high-stakes transactions with precision and discretion.",
    images: ["/favicon_1.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MerzVia | Elite Strategic Advisory",
    description: "Orchestrating high-stakes transactions with precision and discretion.",
    images: ["/favicon_1.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-luxe-black text-foreground">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="660e7450-9ec0-4bf0-ad29-c115f1e20efe"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "MerzVia", "version": "1.0.0"}'
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
