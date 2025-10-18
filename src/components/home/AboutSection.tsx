'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "50K+", label: "Active Members" },
    { number: "1K+", label: "Success Stories" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Authentic Connections",
      description: "We believe in fostering genuine relationships based on shared values and interests."
    },
    {
      icon: "🔒",
      title: "Safety First",
      description: "Your security and privacy are our top priorities in creating a trusted environment."
    },
    {
      icon: "💕",
      title: "Meaningful Relationships",
      description: "We're committed to helping you find connections that go beyond superficial matching."
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl" />
      
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
              About UniDate
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing online dating by focusing on what truly matters - 
            meaningful connections and authentic relationships.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-pink-100 leading-relaxed">
              To create a dating platform where people can form genuine connections based on 
              shared values, interests, and authentic interactions. We're committed to making 
              online dating safer, more meaningful, and ultimately more successful for everyone.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}