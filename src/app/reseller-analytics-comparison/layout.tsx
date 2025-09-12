import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reseller Analytics Comparison | TaskifAI vs Traditional BI',
  description: 'Compare reseller analytics platforms: TaskifAI vs BI tools, Excel workflows. Find the best solution with our detailed comparison. Free consultation available.',
  keywords: 'reseller analytics software, compare reseller tools, best reseller analytics platform, channel partner analytics, reseller data management comparison, business intelligence comparison',
  alternates: {
    canonical: 'https://www.taskifai.com/reseller-analytics-comparison'
  },
  openGraph: {
    title: 'Reseller Analytics Comparison | TaskifAI vs Traditional BI',
    description: 'Compare reseller analytics platforms and find the best solution for your brand. See how TaskifAI stacks up against BI tools.',
    type: 'article',
    url: 'https://www.taskifai.com/reseller-analytics-comparison',
  },
  twitter: {
    title: 'Reseller Analytics Comparison | TaskifAI vs Traditional BI',
    description: 'Compare reseller analytics platforms and find the best solution for your brand with our detailed comparison guide.',
    card: 'summary_large_image',
  },
};

export default function ResellerAnalyticsComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}