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
    default: "TerraQuest Airborne Geophysical Services | Precision Airborne Surveys",
    template: "%s | TerraQuest Airborne Geophysical Services"
  },
  description: "TerraQuest Airborne Geophysical Services Ltd (TAGS) delivers precision airborne surveys for natural resource exploration, environmental monitoring, and geological mapping across 5 continents. Specialists in aeromagnetics, LiDAR, gravity & seepfinder technology.",
  keywords: ["airborne geophysical surveys", "aeromagnetic surveys", "LiDAR mapping", "gravity surveys", "seepfinder", "geological mapping", "mineral exploration", "oil gas exploration", "environmental monitoring", "topographic mapping"],
  authors: [{ name: "TerraQuest Airborne Geophysical Services Ltd" }],
  creator: "TerraQuest Airborne Geophysical Services Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terraquest.com",
    siteName: "TerraQuest Airborne Geophysical Services",
    title: "TerraQuest Airborne Geophysical Services | Precision Airborne Surveys",
    description: "TerraQuest Airborne Geophysical Services Ltd (TAGS) delivers precision airborne surveys for natural resource exploration, environmental monitoring, and geological mapping. 40+ years experience, 2400+ surveys across 24 countries.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TerraQuest Airborne Geophysical Services - Precision Airborne Surveys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TerraQuest Airborne Geophysical Services | Precision Airborne Surveys",
    description: "Precision airborne geophysical surveys for natural resource exploration and environmental monitoring. Aeromagnetics, LiDAR, gravity & seepfinder technology.",
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
