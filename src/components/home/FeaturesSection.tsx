'use client';

import { Session } from "next-auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FeaturesSectionProps {
  session: Session | null;
}

const features = [
  {
    icon: "💬",
    title: "Smart Matching",
    description: "Our algorithm connects you with compatible partners based on shared interests and values."
  },
  {
    icon: "🔒",
    title: "Safe & Secure",
    description: "Verified profiles and advanced security measures ensure a safe dating environment for everyone."
  },
  {
    icon: "🌟",
    title: "Quality Over Quantity",
    description: "Focus on meaningful connections rather than endless swiping. Quality matches that matter."
  },
  {
    icon: "📱",
    title: "Easy to Use",
    description: "Beautiful, intuitive interface designed to make your dating experience enjoyable and stress-free."
  }
];

export default function FeaturesSection({ session }: FeaturesSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="relative py-20 bg-gradient-to-br from-white via-rose-50 to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">
              Why Choose UniDate?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Experience dating that focuses on what truly matters - genuine connections and meaningful conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group hover:scale-105"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {!session && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              as={Link}
              href="/register"
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white text-lg px-12 py-7 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 shadow-xl font-semibold"
              size="lg"
            >
              Join Now - It&apos;s Free
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}