import type { Metadata, Viewport } from "next"
import "./globals.css"
import CookieConsent from "@/components/CookieConsent"
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"
import MobilePerformanceProvider from "@/components/MobilePerformanceProvider"

// Using system fonts to avoid GDPR issues with Google Fonts
// If you need Inter specifically, download and host it locally

export const metadata: Metadata = {
  title: "Reseller Analytics Platform | AI-Powered Data Management for Brands",
  description: "Transform reseller data chaos into actionable insights with our AI-powered analytics platform. Save 95% of manual processing time and make data-driven decisions instantly. Trusted by growing brands for automated reseller data processing and real-time business intelligence.",
  keywords: "reseller analytics, reseller data management, brand analytics dashboard, distributor data analysis, channel partner reporting, reseller performance tracking, retail partner insights, AI analytics platform, automated data processing, business intelligence, data visualization, spreadsheet automation",
  authors: [{ name: "TaskifAI" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Reseller Analytics",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Reseller Analytics Platform | AI-Powered Data Management",
    description: "Save hours monthly with automated reseller data processing. Turn spreadsheet chaos into clean dashboards and instant insights. Trusted by growing brands for AI-powered business intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "TaskifAI - Reseller Analytics Platform",
    url: "https://www.taskifai.com",
    images: [
      {
        url: "https://www.taskifai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TaskifAI Reseller Analytics Platform - AI-powered data management for brands"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Reseller Analytics Platform | AI-Powered Data Management",
    description: "Save hours monthly with automated reseller data processing. Turn spreadsheet chaos into clean dashboards and instant insights. Trusted by growing brands.",
    images: ["https://www.taskifai.com/og-image.jpg"],
    creator: "@TaskifAI"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Reseller Analytics Platform",
    "description": "AI-powered reseller data management platform that transforms spreadsheet chaos into actionable insights for consumer brands",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.taskifai.com",
    "offers": {
      "@type": "Offer",
      "price": "1500",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31",
      "description": "Starting monthly subscription for reseller analytics platform"
    },
    "provider": {
      "@type": "Organization",
      "name": "TaskifAI",
      "alternateName": "Reseller Analytics Platform",
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TaskifAI",
    "alternateName": "Reseller Analytics Platform",
    "description": "AI-powered reseller analytics platform helping consumer brands transform spreadsheet chaos into actionable insights",
    "url": "https://www.taskifai.com",
    "logo": "https://www.taskifai.com/logo.png",
    "foundingDate": "2024",
    "industry": "Software Development",
    "knowsAbout": [
      "Reseller Analytics",
      "Data Management",
      "AI-powered Business Intelligence",
      "Automated Data Processing",
      "Brand Analytics",
      "Distributor Management"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@taskifai.com",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/taskif-ai/"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.taskifai.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Reseller Analytics Platform",
        "item": "https://www.taskifai.com#hero"
      },
      {
        "@type": "ListItem",
        "position": 3, 
        "name": "FAQ",
        "item": "https://www.taskifai.com#faq"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.taskifai.com#contact"
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans">
        <MobilePerformanceProvider>
          {children}
          <CookieConsent />
          <ServiceWorkerRegister />
        </MobilePerformanceProvider>
      </body>
    </html>
  )
}