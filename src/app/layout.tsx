import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import CookieConsent from "@/components/CookieConsent"
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"
import MobilePerformanceProvider from "@/components/MobilePerformanceProvider"

// Using system fonts to avoid GDPR issues with Google Fonts
// If you need Inter specifically, download and host it locally

export const metadata: Metadata = {
  title: "AI Reseller Analytics Platform | TaskifAI Automation",
  description: "Transform messy reseller spreadsheets into automated insights with AI. Get 95% time savings, real-time dashboards, and actionable analytics. Free consultation available.",
  keywords: "excel spreadsheet automation, reseller data management, ai-powered data cleaning, automated data processing software, channel partner analytics, reseller analytics platform, brand analytics dashboard, distributor data analysis, business intelligence, spreadsheet automation, data visualization",
  authors: [{ name: "TaskifAI" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Reseller Analytics",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "AI Reseller Analytics Platform | TaskifAI Automation",
    description: "Transform messy reseller spreadsheets into automated insights with AI. Get 95% time savings, real-time dashboards, and actionable analytics.",
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
    title: "AI Reseller Analytics Platform | TaskifAI Automation",
    description: "Transform messy reseller spreadsheets into automated insights with AI. Get 95% time savings and real-time dashboards. Free consultation available.",
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
    "name": "Excel Spreadsheet Automation & Reseller Analytics Platform",
    "description": "AI-powered Excel spreadsheet automation and reseller data management platform that transforms messy spreadsheets into automated insights for consumer brands",
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
      "Excel spreadsheet automation",
      "AI-powered data cleaning",
      "Automated reseller data processing",
      "Real-time dashboard insights",
      "Natural language business intelligence",
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preload" href="https://snap.licdn.com/li.lms-analytics/insight.min.js" as="script" />
        <link rel="canonical" href="https://www.taskifai.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
        
        {/* LinkedIn Insight Tag */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "8648577";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(l) {
                if (!l){
                  window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}} 
            alt="" 
            src="https://px.ads.linkedin.com/collect/?pid=8648577&fmt=gif"
            loading="lazy"
          />
        </noscript>
      </head>
      <body className="font-sans">
        <MobilePerformanceProvider>
          {children}
          <CookieConsent />
          <ServiceWorkerRegister />
        </MobilePerformanceProvider>
        <Analytics />
      </body>
    </html>
  )
}