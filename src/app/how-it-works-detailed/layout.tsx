import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How AI-Powered Reseller Analytics Works | Complete Technical Guide',
  description: 'Detailed explanation of how AI transforms reseller data into insights. Learn the 4-stage process of automated business intelligence and data processing.',
  keywords: 'how does reseller analytics work, AI data processing, automated business intelligence, machine learning analytics',
  openGraph: {
    title: 'How AI-Powered Reseller Analytics Actually Works',
    description: 'Go behind the scenes of automated business intelligence. Understand how AI transforms chaotic reseller data into reliable insights.',
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