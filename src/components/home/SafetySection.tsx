'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SafetySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const safetyFeatures = [
    "Photo verification for authentic profiles",
    "Advanced reporting and blocking features",
    "Data encryption and privacy controls",
    "24/7 moderation team",
    "Secure messaging system",
    "Background checks available"
  ];

  const safetyTips = [
    "Get to know people before meeting in person",
    "Always meet in public places for first dates",
    "Tell a friend or family member about your plans",
    "Stay sober and aware of your surroundings",
    "Trust your instincts - if something feels wrong, leave",
    "Keep personal information private initially"
  ];

  return (
    <section id="safety-tips" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">
              Your Safety Matters
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            We prioritize your privacy and security to ensure a safe and respectful environment for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Safety Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Safety Features</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100 hover:border-pink-200 transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Safety Tips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-8">Dating Safety Tips</h3>
            
            <ol className="space-y-4">
              {safetyTips.map((tip, index) => (
                <motion.li
                  key={tip}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-pink-50 leading-relaxed">{tip}</span>
                </motion.li>
              ))}
            </ol>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20"
            >
              <p className="text-sm text-pink-100">
                <strong>Emergency Contact:</strong> Always have a trusted friend&apos;s number saved and ready.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}