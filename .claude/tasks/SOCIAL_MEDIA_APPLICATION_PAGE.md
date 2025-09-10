# Social Media Manager Application Page Implementation Plan

## Overview
Create a hidden application page for the Content Creator & Brand Builder role with 15% revenue-share model. The page will be accessible via direct URL but not linked in site navigation.

## Analysis Results
Based on codebase analysis:

### Current Form Patterns
- **Contact Form**: Uses React state management with TypeScript
- **API Integration**: Make.com webhook integration via `/api/contact/route.ts`
- **Validation**: Comprehensive server-side validation with rate limiting (5 requests per 15 minutes)
- **Styling**: Stripe-inspired design system with `gradient-button`, `modern-card` classes

### Design System
- **Colors**: Primary purple (#635BFF), gradient accents, gray scale
- **Typography**: Inter for UI, system fonts fallback
- **Components**: Modern cards with shadows, gradient buttons
- **Layout**: Max-width 1200px container, responsive grid

## Implementation Plan

### 1. Route Structure
**Path**: `/apply-social-media-manager`
- Hidden page (no navigation links)
- Direct access only via URL sharing
- SEO excluded (noindex meta tag)

### 2. Form Fields (Based on Job Description)
**Personal Information**
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Location (required - focus on Malmö area)

**Professional Background**
- Current Company/Status (required)
- Years of Experience in Content Creation (required)
- Years of Experience in Social Media Management (required)
- Portfolio/Website URL (required)

**Social Media Presence**
- LinkedIn Profile (required)
- TikTok Profile (required)
- Instagram Profile (optional)
- Other Relevant Channels (optional)

**Application Questions**
- Why does this role excite you? (required, 500 chars max)
- One creative idea for turning TaskifAI into engaging content (required, 1000 chars max)
- Experience with B2B content creation (required, 500 chars max)
- Camera/editing equipment you have access to (required, 300 chars max)
- Availability for in-person filming in Malmö (required, select)

**Business Setup**
- Do you have your own company for invoicing? (required, boolean)
- Company Name (conditional on above)
- Entrepreneurial experience (optional, 500 chars max)

**Legal**
- Accept Privacy Policy and Terms (required)

### 3. Technical Implementation

#### Components Structure
```
src/app/apply-social-media-manager/page.tsx (main page)
src/components/SocialMediaApplicationForm.tsx (form component)
src/app/api/social-media-application/route.ts (API endpoint)
```

#### API Endpoint
- **Path**: `/api/social-media-application`
- **Method**: POST
- **Rate Limiting**: Same pattern as contact form (5 requests per 15 minutes)
- **Validation**: Comprehensive input validation and sanitization
- **Integration**: Separate Make.com webhook for applications
- **Response**: Success/error handling matching existing pattern

#### Form Validation
**Client-side**
- Required field validation
- Email format validation
- URL format validation for portfolio/social links
- Character count limits with real-time feedback
- Terms acceptance validation

**Server-side**
- Input sanitization and length limits
- Email format validation
- URL validation for social media profiles
- Rate limiting protection
- CORS headers for security

#### Styling
- **Base**: Modern card container with gradient background
- **Form Elements**: Consistent with Contact component styling
- **Buttons**: Gradient button style matching brand
- **Layout**: Responsive grid layout for optimal mobile/desktop experience
- **Success State**: Similar thank you screen with custom messaging

### 4. UX Enhancements

#### Progressive Disclosure
- Group related fields into logical sections
- Use fieldsets with clear headings
- Collapsible sections for optional information

#### Real-time Feedback
- Character count indicators for text areas
- URL validation feedback for social media links
- Portfolio link preview (if accessible)

#### Mobile Optimization
- Touch-friendly form elements (44px minimum)
- Proper keyboard types for different inputs
- Smooth scrolling between sections

### 5. Security & Privacy

#### Data Protection
- All inputs sanitized on server-side
- Rate limiting to prevent spam
- No data stored locally (direct webhook integration)
- GDPR compliant data handling

#### Access Control
- Page not linked in navigation or sitemap
- Meta tags to exclude from search engines
- Direct URL access only

### 6. Environment Configuration

#### Environment Variables
```
SOCIAL_MEDIA_APPLICATION_WEBHOOK_URL=https://hook.make.com/...
```

### 7. Success Metrics & Follow-up

#### Success Page Content
- Thank you message
- Timeline expectations (24-48 hours response)
- Next steps in application process
- Contact information for questions

#### Application Data Structure
```json
{
  "personalInfo": {
    "name": "string",
    "email": "string", 
    "phone": "string",
    "location": "string"
  },
  "professional": {
    "currentCompany": "string",
    "contentExperience": "number",
    "socialMediaExperience": "number",
    "portfolioUrl": "string"
  },
  "socialMedia": {
    "linkedin": "string",
    "tiktok": "string",
    "instagram": "string",
    "other": "string"
  },
  "applicationQuestions": {
    "whyExcited": "string",
    "creativeIdea": "string", 
    "b2bExperience": "string",
    "equipment": "string",
    "availability": "string"
  },
  "business": {
    "hasCompany": "boolean",
    "companyName": "string",
    "entrepreneurialExp": "string"
  },
  "timestamp": "ISO string",
  "source": "social-media-application",
  "ip": "string"
}
```

## Implementation Steps

1. **Create page route** - `/apply-social-media-manager/page.tsx`
2. **Build form component** - `SocialMediaApplicationForm.tsx`
3. **Create API endpoint** - `/api/social-media-application/route.ts`
4. **Style matching design system** - Use existing Tailwind classes
5. **Add comprehensive validation** - Client and server-side
6. **Test mobile responsiveness** - Ensure optimal mobile experience
7. **Configure webhook integration** - Set up Make.com endpoint

## Risk Considerations

### Technical Risks
- Form complexity may impact mobile UX
- Large payload size for comprehensive application data
- Rate limiting may be too restrictive for legitimate applicants

### Mitigation Strategies
- Progressive disclosure to manage form complexity
- Optimize payload structure for efficiency
- Monitor rate limiting effectiveness and adjust if needed

## Questions for Confirmation

1. **URL Path**: Is `/apply-social-media-manager` appropriate, or do you prefer a different path?
2. **Webhook Setup**: Will you provide the Make.com webhook URL, or should I use a placeholder?
3. **Field Requirements**: Are there any additional fields or modifications to the proposed form structure?
4. **Response Timeline**: Should the success page mention a specific response timeframe?

## Estimated Timeline
- **Setup & Basic Form**: 2-3 hours
- **Validation & API**: 1-2 hours  
- **Styling & UX Polish**: 1-2 hours
- **Testing & Mobile Optimization**: 1 hour
- **Total**: 5-8 hours of development time