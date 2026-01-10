import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Imperium M&A | Premium Mergers, Acquisitions & Strategic Advisory",
  description: "The architectural force behind your legacy. Imperium M&A orchestrates high-stakes transactions for the world's most ambitious enterprises.",
    icons: {
      icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23050505%22/><path d=%22M30 25h40v10H55v40h15v10H30v-10h15V35H30z%22 fill=%22%23D4AF37%22/></svg>',
    },
    openGraph: {
      title: "Imperium M&A | Elite Strategic Advisory",
      description: "Orchestrating high-stakes transactions with precision and discretion.",
      images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"],
      type: "website",
    },
  twitter: {
    card: "summary_large_image",
    title: "Imperium M&A | Elite Strategic Advisory",
    description: "Orchestrating high-stakes transactions with precision and discretion.",
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
          data-custom-data='{"appName": "AureliusCapital", "version": "1.0.0"}'
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
