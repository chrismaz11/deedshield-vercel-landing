# Deed Shield Landing Page

A modern, professional landing page for Deed Shield - the first pre-recording verification layer for land records.

## 🚀 Live Sites

- **Production:** [https://deedshield.joblander.me](https://deedshield.joblander.me)
- **Vercel:** [https://deedshield.vercel.app](https://deedshield.vercel.app)

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Email:** Resend
- **Deployment:** Vercel
- **Version Control:** Git/GitHub

## 🛠️ Setup

### Prerequisites

- Node.js >= 20.9.0
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chrismaz11/deedshield-vercel-landing.git
cd deedshield-vercel-landing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your-email@example.com
```

### Getting Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use the test domain `onboarding@resend.dev`
3. Go to API Keys section and create a new API key
4. Copy the key to your `.env.local` file

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📧 Contact Form

The contact form uses Resend to send email notifications. Features:

- Professional React email template
- Form validation (required fields, email format)
- Error handling and user feedback
- Responsive design

### Email Template

The email template is located at `/emails/contact-form-email.tsx` and includes:
- Contact details (name, company, email, phone)
- Message content
- Professional styling

## 🚢 Deployment

This project is configured for automatic deployment on Vercel:

1. Push changes to the `master` branch
2. Vercel automatically builds and deploys
3. Changes are live at both URLs

### Environment Variables on Vercel

Add these environment variables in your Vercel project settings:

- `RESEND_API_KEY` - Your Resend API key
- `CONTACT_EMAIL` - Email address to receive contact form submissions

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/                       # Reusable UI components
│   ├── header.tsx                # Site header
│   ├── hero-section.tsx          # Hero section
│   ├── problem-section.tsx       # Problem statement
│   ├── how-it-works-section.tsx  # How it works
│   ├── value-pillars-section.tsx # Value propositions
│   ├── faq-section.tsx           # FAQ accordion
│   ├── pilot-program-section.tsx # Pilot program details
│   └── footer.tsx                # Site footer
├── emails/
│   └── contact-form-email.tsx    # Email template
├── public/                       # Static assets
└── styles/                       # Additional styles
```

## 🎨 Features

- **Responsive Design:** Works on all devices
- **Interactive Components:** FAQ accordions, contact form modal
- **Smooth Scrolling:** Navigation links with smooth scroll
- **Professional Email:** Styled email notifications
- **SEO Optimized:** Proper meta tags and structure
- **Fast Performance:** Optimized build with Next.js

## 📝 License

Private - All rights reserved

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.
