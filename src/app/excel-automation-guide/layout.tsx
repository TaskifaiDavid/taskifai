import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excel Automation Guide | How to Automate Spreadsheet Processing',
  description: 'Complete guide to Excel spreadsheet automation. Learn how AI-powered tools can eliminate 95% of manual work, reduce errors, and save hundreds of hours processing reseller data.',
  keywords: 'excel automation, spreadsheet automation, automate excel processing, excel workflow automation, AI data processing, automated spreadsheet management',
  openGraph: {
    title: 'Excel Automation Guide | How to Automate Spreadsheet Processing',
    description: 'Complete guide to Excel spreadsheet automation. Learn how AI-powered tools can eliminate 95% of manual work and save hundreds of hours.',
    type: 'article',
    url: 'https://www.taskifai.com/excel-automation-guide',
  },
  twitter: {
    title: 'Excel Automation Guide | How to Automate Spreadsheet Processing',
    description: 'Complete guide to Excel spreadsheet automation. Learn how AI can eliminate 95% of manual work processing reseller data.',
    card: 'summary_large_image',
  },
};

export default function ExcelAutomationGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}