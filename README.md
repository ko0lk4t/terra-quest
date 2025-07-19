# TerraQuest Executive Search

A professional, responsive website for an executive search firm specializing in technology leadership. Built with Next.js, Tailwind CSS, and designed for deployment on Vercel with headless CMS integration capabilities.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/terra-quest)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with dark hero sections and clean content areas
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, sitemap, and robots.txt
- **Accessibility**: WCAG AA compliant with proper semantic HTML and keyboard navigation
- **Performance**: Next.js image optimization, static generation, and optimized builds
- **CMS Ready**: Clean API layer for easy integration with Contentful, Sanity, or any headless CMS
- **Professional Forms**: Contact form with validation and Formspree integration support

## 📄 Pages & Features

### Core Pages
- **Home (`/`)**: Hero section with company tagline, key services overview, and dual CTAs
- **About (`/about`)**: Company mission, values, and timeline of milestones
- **Team (`/team`)**: Consultant profiles with modal detail views and contact information
- **Services (`/services`)**: Detailed service descriptions with process overview
- **Contact (`/contact`)**: Professional contact form with office locations and direct contacts

### Components
- Responsive navigation with mobile menu
- Professional footer with company links
- Interactive team member modals
- Contact form with validation and submission handling
- SEO meta tags and structured data

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/terra-quest.git
   cd terra-quest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file for local development:

```env
# Base URL for SEO and sitemap generation
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional: CMS Configuration (when ready to integrate)
# CMS_URL=https://your-cms-api.com
# CMS_API_KEY=your-api-key

# Optional: Form handling (Formspree or custom endpoint)
# FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## 🎨 Design System

### Color Palette
- **Primary (Accent)**: `#0055A4` - Professional blue used for branding and CTAs
- **Accent Light**: `#0066CC` - Hover states and secondary elements  
- **Accent Dark**: `#004494` - Active states and emphasis
- **Background**: Clean whites with gray-50 section breaks
- **Text**: Semantic grays (900, 600, 400) for hierarchy

### Typography
- **Font**: Inter (system fallbacks: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Scale**: Responsive typography with mobile-first breakpoints
- **Hierarchy**: Clear heading structure (h1-h4) with appropriate sizing

### Components
- **Cards**: Subtle shadows with hover transforms
- **Buttons**: Solid primary style with outline secondary
- **Forms**: Professional styling with focus states and validation
- **Navigation**: Clean horizontal layout with mobile hamburger menu

## 🔌 CMS Integration

The site is architected for easy CMS integration through the `/src/lib/api.ts` file.

### Current State (Mock Data)
All content is currently served from mock data in the API layer. This allows for:
- Immediate development and testing
- Clear content structure definition
- Easy transition to real CMS

### Integrating with a Headless CMS

#### Option 1: Contentful
```bash
npm install contentful
```

Update `/src/lib/api.ts`:
```typescript
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getCompanyInfo() {
  const entry = await client.getEntry('companyInfo')
  return entry.fields
}
```

#### Option 2: Sanity
```bash
npm install @sanity/client
```

Update `/src/lib/api.ts`:
```typescript
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: 'production',
  useCdn: true,
})

export async function getCompanyInfo() {
  return await client.fetch('*[_type == "companyInfo"][0]')
}
```

#### Option 3: Strapi, Ghost, or Custom API
Simply update the fetch calls in `/src/lib/api.ts` to point to your API endpoints.

### Content Types Needed

When setting up your CMS, create these content types:

1. **Company Information**
   - Name, tagline, description, mission
   - Values (title, description, icon)
   - Office locations
   - Social links

2. **Team Members**
   - Name, role, short bio, full bio
   - Image, email, phone
   - Specializations, social links

3. **Services**
   - Title, description, full description
   - Features list, benefits list
   - Icon reference

4. **Blog Posts** (optional)
   - Title, slug, content, excerpt
   - Author, publish date, featured image
   - Tags/categories

## 📧 Form Integration

The contact form supports multiple integration options:

### Option 1: Formspree (Recommended)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. Update the form action in `/src/app/contact/page.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

### Option 2: Custom API Route
Create `/src/app/api/contact/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()
  
  // Process form submission (email, database, etc.)
  
  return NextResponse.json({ success: true })
}
```

### Option 3: Third-party Services
- **Netlify Forms**: Add `netlify` attribute to form
- **EmailJS**: Client-side email sending
- **SendGrid/Mailgun**: Server-side email APIs

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/terra-quest)

#### Manual Deployment
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push to main

#### Environment Variables for Production
```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
# Add your CMS and form service variables
```

### Other Deployment Options

#### Netlify
```bash
npm run build
npm run export
```
Drag the `out` folder to Netlify deploy.

#### Traditional Hosting
```bash
npm run build
npm run start
```
Run on any Node.js hosting provider.

## 📊 Performance & SEO

### Built-in Optimizations
- **Next.js Image Optimization**: Automatic WebP conversion and lazy loading
- **Static Generation**: Pre-rendered pages for optimal performance
- **Font Optimization**: Inter font with system fallbacks
- **Code Splitting**: Automatic JavaScript bundling optimization

### SEO Features
- Complete meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML structure

### Monitoring
Recommended tools:
- **Google Analytics**: Add your tracking ID to layout
- **Google Search Console**: Monitor search performance
- **Vercel Analytics**: Built-in performance monitoring
- **Lighthouse**: Regular performance audits

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Project Structure
```
src/
├── app/                    # Next.js 13+ app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   └── Footer.tsx         # Site footer
└── lib/                   # Utilities and API
    └── api.ts             # CMS integration layer
```

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Consistent code formatting
- **Tailwind CSS**: Utility-first styling approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs or request features via GitHub Issues
- **Discussions**: Use GitHub Discussions for questions and community support

## 🙏 Acknowledgments

- Design inspiration from [Quantum Chase](https://quantum-chase.com)
- Icons by [Heroicons](https://heroicons.com)
- Images from [Unsplash](https://unsplash.com)
- Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Vercel](https://vercel.com)
