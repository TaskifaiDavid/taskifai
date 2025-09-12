import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How AI Reseller Analytics Works | Technical Guide - TaskifAI',
  description: 'Learn how AI transforms messy reseller data into insights. Discover our 4-stage automation process and get actionable intelligence. Free consultation available.',
  keywords: 'how does reseller analytics work, AI data processing, automated business intelligence, machine learning analytics',
  alternates: {
    canonical: 'https://www.taskifai.com/how-it-works-detailed'
  },
  openGraph: {
    title: 'How AI Reseller Analytics Works | Technical Guide - TaskifAI',
    description: 'Learn how AI transforms messy reseller data into insights. Discover our 4-stage automation process and get actionable intelligence.',
    type: 'article',
    url: 'https://www.taskifai.com/how-it-works-detailed',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}