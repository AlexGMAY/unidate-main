import { auth } from "@/auth";
import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SafetySection from "@/components/home/SafetySection";
import CTASection from "@/components/home/CTASection";
import AboutSection from "@/components/home/AboutSection";

export const metadata: Metadata = {
  title: "UniDate - Find Your Perfect Match | Meaningful Connections",
  description: "Join UniDate for university students to find authentic connections through meaningful conversations and shared interests. Meet your perfect match today.",
  keywords: "dating, relationships, connections, singles, matchmaking, love, university, students, university love, study group, study friends",
  authors: [{ name: "UniDate Team" }],
  creator: "UniDate",
  publisher: "UniDate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unidate-one.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "UniDate - Find Your Perfect Match",
    description: "Where meaningful connections begin through authentic conversations and shared interests",
    url: 'https://unidate-one.vercel.app',
    siteName: 'UniDate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UniDate - Find Your Perfect Match',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "UniDate - Find Your Perfect Match",
    description: "Where meaningful connections begin through authentic conversations and shared interests",
    images: ['/og-image.jpg'],
    creator: '@unidate',
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

export default async function Home() {
  const session = await auth();

  return (
    <div className="overflow-x-hidden">
      <HeroSection session={session} />
      <AboutSection />
      <FeaturesSection session={session} />
      <HowItWorksSection />
      <TestimonialsSection />
      <SafetySection />
      <CTASection session={session} />      
    </div>
  );
}
