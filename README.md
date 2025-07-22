# Reseller Analytics Website

A modern, responsive landing page for a sell-out analytics service targeting consumer brands that sell through resellers.

## 🚀 Live Demo

Deploy this project to Vercel by connecting your GitHub repository.

## 📋 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Contact Form**: Ready for form submission service integration
- **AI Chat Demo**: Interactive mockup of AI-powered analytics
- **Performance**: Optimized for fast loading and great user experience

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🏗 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO meta tags
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
└── components/
    ├── Hero.tsx            # Hero section with CTA
    ├── Problem.tsx         # Problem statement section
    ├── Solution.tsx        # Solution overview (3-column)
    ├── Features.tsx        # 6 feature cards
    ├── TargetAudience.tsx  # Industry focus section
    ├── Testimonials.tsx    # Customer testimonials
    ├── AIChatDemo.tsx      # AI chat interface mockup
    ├── Pricing.tsx         # 3-tier pricing table
    └── Contact.tsx         # Contact form
```

## 📝 Content Editing Guide

### Updating Text Content

#### Hero Section (`src/components/Hero.tsx`)
- **Headline**: Line 11-13
- **Subheadline**: Line 14-16
- **CTA Button**: Line 20

#### Problem Section (`src/components/Problem.tsx`)
- **Pain Points**: Lines 4-9 (array of strings)
- **Section Title**: Line 15
- **Testimonial Quote**: Line 37

#### Features Section (`src/components/Features.tsx`)
- **Features Array**: Lines 4-56
- Each feature has: `title`, `description`, and `icon`

#### Pricing Table (`src/components/Pricing.tsx`)
- **Plans Array**: Lines 4-50
- Each plan includes: `name`, `setupFee`, `monthlyFee`, `description`, `features`
- **Add-ons**: Lines 52-56

#### Testimonials (`src/components/Testimonials.tsx`)
- **Testimonials Array**: Lines 4-28
- Each testimonial has: `quote`, `name`, `title`, `company`, `initials`

### Updating Contact Form

The contact form (`src/components/Contact.tsx`) is currently set up for Formspree integration:

1. **Setup Formspree**:
   - Go to [formspree.io](https://formspree.io)
   - Create a new form
   - Replace `YOUR_FORM_ID` on line 23 with your actual Formspree form ID

2. **Alternative Form Services**:
   - Netlify Forms: Change the form action and method
   - Custom API: Update the fetch URL and handling logic

### SEO Optimization

Update SEO content in `src/app/layout.tsx`:
- **Title**: Line 8
- **Description**: Line 9
- **Keywords**: Line 10
- **Open Graph**: Lines 12-17

### Styling Customization

The design uses a clean, modern aesthetic with:
- **Primary Colors**: Blue (`blue-600`, `blue-700`)
- **Background**: White and light gray (`gray-50`)
- **Accent Colors**: Green for success, red for problems

To customize colors, update the Tailwind classes throughout the components.

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Type Checking
```bash
npm run lint
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure deployment
3. Your site will be live with automatic deployments on every push

### Manual Deployment
1. Run `npm run build`
2. Deploy the `.next` folder to your hosting provider
3. Ensure Node.js runtime is available

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add any environment variables here
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint_here
```

### Form Integration
To set up the contact form:
1. Choose a form service (Formspree, Netlify Forms, etc.)
2. Update the form submission logic in `src/components/Contact.tsx`
3. Test form submissions in production

## 📱 Responsive Breakpoints

The site is optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

All components use mobile-first responsive design with Tailwind's responsive prefixes (`md:`, `lg:`, etc.).

## 🎨 Design System

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Regular weight, readable line-height

### Spacing
- **Sections**: Consistent `py-16` (64px) vertical padding
- **Containers**: `max-w-6xl` with `mx-auto` centering
- **Grid Gaps**: `gap-8` for most layouts

### Colors
- **Primary**: Blue shades for CTAs and highlights
- **Success**: Green for positive elements
- **Warning**: Red for problems/pain points
- **Neutral**: Gray scales for text and backgrounds

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all imports are correct and components are properly exported
2. **Styling Issues**: Check Tailwind classes are spelled correctly
3. **Form Not Working**: Verify form endpoint configuration
4. **TypeScript Errors**: Run `npm run lint` to identify type issues

### Performance Tips

- Images should be optimized (WebP format recommended)
- Keep bundle size small by avoiding unnecessary dependencies
- Use Next.js Image component for automatic optimization

## 📄 License

This project is created for the reseller analytics landing page. All content and code can be customized as needed.

## 🤝 Support

For technical support or customization requests, please refer to the development team or create an issue in the project repository.