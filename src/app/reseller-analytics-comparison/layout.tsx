import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reseller Analytics Software Comparison | TaskifAI vs Traditional BI Tools',
  description: 'Compare reseller analytics platforms: TaskifAI vs traditional BI tools, Excel workflows, and custom solutions. Find the best fit for your growing brand with detailed feature comparison.',
  keywords: 'reseller analytics software, compare reseller tools, best reseller analytics platform, channel partner analytics, reseller data management comparison, business intelligence comparison',
  openGraph: {
    title: 'Reseller Analytics Software Comparison | TaskifAI vs Traditional BI Tools',
    description: 'Compare reseller analytics platforms and find the best solution for your growing brand. See how TaskifAI stacks up against traditional BI tools.',
    type: 'article',
    url: 'https://www.taskifai.com/reseller-analytics-comparison',
  },
  twitter: {
    title: 'Reseller Analytics Software Comparison | TaskifAI vs Traditional BI',
    description: 'Compare reseller analytics platforms and find the best solution for your growing brand with our detailed comparison guide.',
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