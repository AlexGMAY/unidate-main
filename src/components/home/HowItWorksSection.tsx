'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and build your authentic profile with photos and interests that reflect the real you.",
    image: "/images/add-contact.png",
    color: "from-pink-500 to-rose-500",
    icon: "👤"
  },
  {
    number: "02",
    title: "Find Your Matches",
    description: "Our smart algorithm connects you with students who share your interests and values.",
    image: "/images/search.png", 
    color: "from-purple-500 to-pink-500",
    icon: "💞"
  },
  {
    number: "03",
    title: "Start Conversations",
    description: "Break the ice with our conversation starters and build connections that matter.",
    image: "/images/speak.png",
    color: "from-rose-500 to-red-500",
    icon: "💬"
  }
];

export default function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse-slower" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding your perfect match has never been easier. Follow these three simple steps to start your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connecting Line for Desktop */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-24 left-3/4 w-full h-1 bg-gradient-to-r from-pink-200 to-rose-200 transform -translate-y-1/2 z-0" />
                  <div className="hidden lg:block absolute top-24 left-3/4 w-4 h-4 bg-pink-400 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-10 animate-ping" />
                </>
              )}

              <div className="relative z-10">
                {/* Step Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-pink-200/50 group-hover:scale-105 h-full flex flex-col">
                  
                  {/* Number Badge with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Image Placeholder with Fallback */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                    <div className="text-6xl text-gray-400 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    {/* You can uncomment this when you have actual images */}
                    
                    {/* <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    /> */}
                   
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Indicator for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 pt-6 border-t border-gray-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                        ↓
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-pink-200/30 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-rose-200/40 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have found meaningful connections through UniDate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started Now
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-300 hover:border-pink-300 hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}