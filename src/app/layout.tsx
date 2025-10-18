import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNav from "@/components/navbar/TopNavGlass";
import { auth } from "@/auth";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: "UniDate - Find Your Perfect Match | Meaningful Connections",
    template: "%s | UniDate"
  },
  description: "Join UniDate to find authentic connections through meaningful conversations and shared interests. Meet your perfect match today.",
  keywords: "dating, relationships, connections, singles, matchmaking, love, meaningful dating",
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
    type: 'website',
    locale: 'en_US',
    url: 'https://unidate-one.vercel.app',
    siteName: 'UniDate',
    title: "UniDate - Find Your Perfect Match",
    description: "Where meaningful connections begin through authentic conversations and shared interests",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UniDate - Find Your Perfect Match',
      },
    ],
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
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId =
    session?.user?.id || null;
  const profileComplete = session?.user
    .profileComplete as boolean;
  return (
    <html lang="en">
      <body>
        <Providers
          profileComplete={
            profileComplete
          }
          userId={userId}
        >
          <TopNav />
          <main className="w-full">
            {children}
            <SpeedInsights/>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
