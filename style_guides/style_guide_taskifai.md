# TaskifAI Style Guide

## Brand Identity

### Logo & Branding
- **Brand Name**: TaskifAI
- **Positioning**: AI-powered reseller data management and analytics platform
- **Tagline**: "Never Touch a Reseller Spreadsheet Again"

## Typography

### Font Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

### Font Weights & Sizes
- **Headers (H1)**: `text-4xl md:text-5xl font-bold` (36px/48px on mobile/desktop)
- **Headers (H2)**: `text-3xl md:text-4xl font-bold` (30px/36px)
- **Headers (H3)**: `text-xl md:text-2xl font-bold` (20px/24px)
- **Body Large**: `text-lg md:text-2xl` (18px/24px)
- **Body Regular**: `text-base` (16px)
- **Small Text**: `text-sm` (14px)

### Text Styling
- **Gradient Text**: `.gradient-text` - Blue to purple gradient for headings
- **Line Height**: 1.6 (globally applied)
- **Text Balance**: `.text-balance` for optimized line breaks

## Colors

### Primary Colors
```css
--background: #ffffff
--foreground: #1a1a1a

/* Primary Blue Palette */
primary-50: #eff6ff
primary-100: #dbeafe
primary-500: #3b82f6
primary-600: #2563eb
primary-700: #1d4ed8
```

### Accent Colors
```css
accent-pink: #ec4899
accent-purple: #8b5cf6
accent-cyan: #06b6d4
accent-emerald: #10b981
accent-orange: #f59e0b
```

### Grayscale
- **Gray 50**: `#f9fafb`
- **Gray 100**: `#f3f4f6`
- **Gray 200**: `#e5e7eb`
- **Gray 600**: `#4b5563`
- **Gray 700**: `#374151`

## Gradients

### Background Gradients
```css
/* Hero Section */
bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50

/* Button Gradient */
background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%)

/* Modern Gradient */
background-image: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)

/* Glass Effect */
background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))
```

### Text Gradients
```css
.gradient-text {
  background: linear-gradient(to right, #2563eb, #8b5cf6, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Components

### Cards

#### Modern Card
```css
.modern-card {
  @apply bg-white rounded-2xl shadow-modern border border-gray-100 hover:shadow-2xl transition-all duration-300;
}
```

#### Glass Card
```css
.glass-card {
  @apply backdrop-blur-md bg-white/10 border border-white/20 shadow-glass;
}
```

### Buttons

#### Primary Button (Gradient)
```css
.gradient-button {
  @apply bg-button-gradient text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300;
}

/* Mobile Optimization */
@media (max-width: 768px) {
  .gradient-button {
    min-height: 44px;
    padding: 12px 24px;
    font-size: 16px;
    touch-action: manipulation;
  }
}
```

#### Navigation Buttons
```css
/* Base Navigation Button */
.nav-button {
  font-weight: 500;
  transition: colors 200ms;
  color: #374151; /* gray-700 */
}

.nav-button:hover {
  color: #2563eb; /* blue-600 */
}

.nav-button.active {
  color: #2563eb; /* blue-600 */
  font-weight: 600;
}
```

### Layout Components

#### Header/Navigation
- **Background**: Glass effect with backdrop blur (`backdrop-blur-xl bg-white/80`)
- **Position**: Sticky top navigation
- **Mobile**: Hamburger menu with swipe gestures
- **Touch Targets**: Minimum 44px for mobile accessibility

#### Sections
- **Max Width**: `max-w-6xl mx-auto`
- **Padding**: `px-6 py-4` (mobile), `px-6 py-8` (desktop)
- **Spacing**: `space-y-8` between elements

## Shadows

### Shadow System
```css
/* Glass Shadow */
shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.37)

/* Modern Shadow */
shadow-modern: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

/* Card Shadow */
shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
```

## Animations

### Keyframe Animations
```css
/* Gradient Movement */
@keyframes gradient-xy {
  0%, 100% {
    background-size: 400% 400%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

/* Floating Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Animation Classes
- **Gradient Animation**: `animate-gradient-xy` (15s ease infinite)
- **Float Animation**: `animate-float` (6s ease-in-out infinite)
- **Delays**: `animation-delay-2000`, `animation-delay-4000`

### Transitions
- **Standard Duration**: `duration-300` (300ms)
- **Quick Duration**: `duration-200` (200ms)
- **Hover Effects**: `hover:shadow-xl transform hover:-translate-y-1`

## Mobile Optimization

### Touch Targets
```css
.mobile-touch-target {
  @media (max-width: 768px) {
    min-height: 44px;
    min-width: 44px;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }
}
```

### Mobile Navigation
```css
.mobile-nav-button {
  @media (max-width: 768px) {
    padding: 12px 16px;
    min-height: 44px;
    text-align: left;
    width: 100%;
    touch-action: manipulation;
  }
}
```

### Performance Optimizations
- **Safe Area**: `env(safe-area-inset-left)`, `env(safe-area-inset-right)`
- **Smooth Scrolling**: `-webkit-overflow-scrolling: touch`
- **Font Size**: Minimum 16px to prevent zoom on iOS
- **Hardware Acceleration**: `transform: translateZ(0)`

## Accessibility

### Focus States
- All interactive elements must have visible focus indicators
- Focus outline should use brand colors: `focus:ring-2 focus:ring-blue-500`

### Color Contrast
- Text on white background: WCAG AA compliant
- Button text: White on gradient background (tested for contrast)
- Link colors: Blue tones with sufficient contrast

### Touch Accessibility
- Minimum 44px touch targets on mobile
- Haptic feedback for iOS devices
- Swipe gestures for mobile menu

## Content Guidelines

### Tone of Voice
- **Professional but approachable**
- **Direct and solution-focused**
- **Technical accuracy without jargon**

### Key Messaging
- **Problem**: Manual reseller data management is time-consuming and error-prone
- **Solution**: Automated AI-powered data processing and insights
- **Benefit**: Save time, reduce errors, get instant insights

### Call-to-Action Language
- Primary CTA: "Book intro call"
- Secondary CTAs: "Calculate ROI", "Schedule Demo", "Get Custom Quote"

## Code Standards

### CSS Classes
- Use Tailwind utility classes primarily
- Custom components in `@layer components`
- Mobile-first responsive design
- Semantic HTML structure

### Component Structure
```tsx
// Component naming: PascalCase
// Props interface: ComponentProps
// Event handlers: handle[Action] or [action]Handler
// CSS classes: Tailwind utilities + custom component classes
```

### File Organization
```
src/
├── components/     # Reusable UI components
├── app/           # Next.js app directory
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── styles/        # Global styles and Tailwind config
```

## Brand Assets

### Logo Usage
- Always use the gradient text treatment for "TaskifAI"
- Maintain adequate white space around the logo
- Do not modify the gradient colors

### Icon Style
- Use outline icons for consistency
- 24px default size for UI icons
- Stroke width: 2px
- Current color for adaptability

### Imagery
- Clean, modern aesthetic
- Light backgrounds with subtle gradients
- Avoid heavy shadows or outdated design elements
- Consistent with the overall minimalist approach