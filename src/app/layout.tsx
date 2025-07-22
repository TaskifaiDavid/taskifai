import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sell-Out Analytics for Consumer Brands | Real-Time Reseller Insights",
  description: "Sell-out analytics system for brands that sell through resellers. Automate Excel uploads, visualize product performance, and use AI to explore your sales data.",
  keywords: "sell-out analytics, reseller data, consumer brands, retail analytics, Excel automation, dashboard, beauty brands, fashion analytics",
  authors: [{ name: "Sell-Out Analytics" }],
  openGraph: {
    title: "Sell-Out Analytics for Consumer Brands",
    description: "Turn your reseller chaos into clean dashboards and instant insights",
    type: "website",
    locale: "en_US",
    siteName: "Sell-Out Analytics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell-Out Analytics for Consumer Brands",
    description: "Turn your reseller chaos into clean dashboards and instant insights",
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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}