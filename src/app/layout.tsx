import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.merzvia.com"),
  title: {
    default: "MerzVia | Premium Mergers, Acquisitions & Strategic Advisory",
    template: "%s | MerzVia"
  },
  description: "The architectural force behind your legacy. MerzVia orchestrates high-stakes transactions for India's mid-market and global enterprises with precision and discretion.",
  keywords: ["M&A Advisory India", "Mergers and Acquisitions", "Transaction Advisory", "Sell-Side Advisory", "Buy-Side Advisory", "Corporate Roll-Up Strategies", "Indian Mid-Market Advisory", "Boutique M&A Firm"],
  authors: [{ name: "MerzVia" }],
  creator: "MerzVia",
  publisher: "MerzVia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon_1.png',
    shortcut: '/favicon_1.png',
    apple: '/favicon_1.png',
  },
  openGraph: {
    title: "MerzVia | Elite Strategic Advisory",
    description: "Orchestrating high-stakes transactions with precision and discretion. The premier transaction advisory for India’s Mid-Market.",
    url: "https://www.merzvia.com",
    siteName: "MerzVia",
    images: [
      {
        url: "/favicon_1.png",
        width: 1200,
        height: 630,
        alt: "MerzVia | Strategic Advisory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MerzVia | Elite Strategic Advisory",
    description: "Orchestrating high-stakes transactions with precision and discretion. India's premier boutique M&A firm.",
    images: ["/favicon_1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MerzVia",
              "url": "https://www.merzvia.com",
              "logo": "https://www.merzvia.com/final_logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-90083-67818",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.linkedin.com/company/merzvia"
              ]
            })
          }}
        />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
