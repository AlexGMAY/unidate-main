'use client';

import { Session } from "next-auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingHearts from "../animations/FloatingHearts";


interface HeroSectionProps {
  session: Session | null;
}

export default function HeroSection({ session }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-white flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-200/20 via-transparent to-transparent" />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/5 rounded-full blur-3xl animate-pulse" />

      {/* Floating Hearts */}
      <FloatingHearts />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12 w-full max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-transparent bg-clip-text leading-tight">
                Find Your
              </span>
              <span className="block mt-2 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-transparent bg-clip-text leading-tight">
                Perfect Match
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Where meaningful connections begin through authentic conversations and shared interests
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            {session ? (
              <Button
                as={Link}
                href="/members"
                className="relative overflow-hidden group bg-gradient-to-r from-pink-500 to-rose-600 text-white text-lg md:text-xl px-12 py-8 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 shadow-xl font-semibold min-w-64"
                size="lg"
              >
                <span className="relative z-10">Continue to Matches</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button
                  as={Link}
                  href="/register"
                  className="relative overflow-hidden group bg-gradient-to-r from-pink-500 to-rose-600 text-white text-lg md:text-xl px-12 py-8 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 shadow-xl font-semibold min-w-64"
                  size="lg"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
                
                <Button
                  as={Link}
                  href="/login"
                  className="relative overflow-hidden group bg-white/80 backdrop-blur-sm text-pink-600 border-2 border-pink-200 text-lg md:text-xl px-12 py-8 rounded-2xl hover:bg-white transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-pink-300 font-semibold min-w-64"
                  size="lg"
                >
                  <span className="relative z-10">Sign In</span>
                </Button>
              </div>
            )}
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">50K+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-rose-600">1K+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-rose-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </motion.div> */}
        </div>
      </div>      
    </section>
  );
}