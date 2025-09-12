import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excel Automation Guide | AI Spreadsheet Processing - TaskifAI',
  description: 'Complete guide to Excel automation with AI. Eliminate 95% of manual work, reduce errors, and save hundreds of hours. Free consultation available.',
  keywords: 'excel automation, spreadsheet automation, automate excel processing, excel workflow automation, AI data processing, automated spreadsheet management',
  alternates: {
    canonical: 'https://www.taskifai.com/excel-automation-guide'
  },
  openGraph: {
    title: 'Excel Automation Guide | AI Spreadsheet Processing - TaskifAI',
    description: 'Complete guide to Excel automation with AI. Eliminate 95% of manual work, reduce errors, and save hundreds of hours.',
    type: 'article',
    url: 'https://www.taskifai.com/excel-automation-guide',
  },
  twitter: {
    title: 'Excel Automation Guide | AI Spreadsheet Processing - TaskifAI',
    description: 'Complete guide to Excel automation with AI. Learn how to eliminate 95% of manual work and save hundreds of hours.',
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