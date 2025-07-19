import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "TerraQuest Executive Search | Technology Leadership Recruitment",
    template: "%s | TerraQuest Executive Search"
  },
  description: "Leading executive search firm specializing in technology leadership roles. We connect visionary tech executives with innovative companies seeking transformational growth.",
  keywords: ["executive search", "technology recruitment", "CTO search", "tech leadership", "executive hiring"],
  authors: [{ name: "TerraQuest Executive Search" }],
  creator: "TerraQuest Executive Search",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terraquest.com",
    siteName: "TerraQuest Executive Search",
    title: "TerraQuest Executive Search | Technology Leadership Recruitment",
    description: "Leading executive search firm specializing in technology leadership roles. We connect visionary tech executives with innovative companies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TerraQuest Executive Search",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TerraQuest Executive Search | Technology Leadership Recruitment",
    description: "Leading executive search firm specializing in technology leadership roles.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
