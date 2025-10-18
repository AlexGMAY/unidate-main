'use client';

import { Session } from "next-auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  session: Session | null;
}

export default function CTASection({ session }: CTASectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-500 to-rose-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
      
      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-slower" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Ready to Find Your Match?
          </h2>
          
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of single students who have found meaningful connections on UniDate. 
            Your perfect match is waiting.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {!session ? (
              <>
                <Button
                  as={Link}
                  href="/register"
                  className="bg-white text-pink-600 text-lg md:text-xl px-12 py-7 rounded-2xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold min-w-64"
                  size="lg"
                >
                  Create Your Profile Now
                </Button>
                <Button
                  as={Link}
                  href="/login"
                  className="bg-transparent border-2 border-white text-white text-lg md:text-xl px-12 py-7 rounded-2xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 font-semibold min-w-64"
                  size="lg"
                >
                  Sign In
                </Button>
              </>
            ) : (
              <Button
                as={Link}
                href="/members"
                className="bg-white text-pink-600 text-lg md:text-xl px-12 py-7 rounded-2xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold min-w-64"
                size="lg"
              >
                Browse Matches
              </Button>
            )}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-pink-100"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm">Free Membership</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3 min</div>
              <div className="text-sm">Average Signup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Instant</div>
              <div className="text-sm">Matches Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}