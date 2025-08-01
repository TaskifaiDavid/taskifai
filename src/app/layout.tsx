import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reseller Analytics Platform | AI-Powered Data Management for Brands",
  description: "Transform reseller data chaos into actionable insights with our AI-powered analytics platform. Save 95% of manual processing time and make data-driven decisions instantly.",
  keywords: "reseller analytics, reseller data management, brand analytics dashboard, distributor data analysis, channel partner reporting, reseller performance tracking, retail partner insights, AI analytics platform, automated data processing",
  authors: [{ name: "Reseller Analytics Platform" }],
  openGraph: {
    title: "Reseller Analytics Platform | AI-Powered Data Management",
    description: "Save 20-40 hours monthly with automated reseller data processing. Turn spreadsheet chaos into clean dashboards and instant insights.",
    type: "website",
    locale: "en_US",
    siteName: "Reseller Analytics Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reseller Analytics Platform | AI-Powered Data Management",
    description: "Save 20-40 hours monthly with automated reseller data processing. Turn spreadsheet chaos into clean dashboards and instant insights.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Reseller Analytics Platform",
    "description": "AI-powered reseller data management platform that transforms spreadsheet chaos into actionable insights for consumer brands",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "1500",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31",
      "description": "Starting monthly subscription for reseller analytics platform"
    },
    "provider": {
      "@type": "Organization",
      "name": "Reseller Analytics Platform",
      "description": "Helping brands make sense of reseller data with AI-powered analytics"
    },
    "featureList": [
      "Automated reseller data processing",
      "AI-powered chat interface", 
      "Real-time dashboard insights",
      "95% time savings on manual work",
      "Custom reseller parser integration"
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}