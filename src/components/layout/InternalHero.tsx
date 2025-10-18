'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { GiHearts, GiSparkles, GiShower } from "react-icons/gi";

interface InternalHeroProps {
  title: string;
  description?: string;
}

export default function InternalHero({ title, description }: InternalHeroProps) {
  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const spinningAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-rose-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-rose-400/10" />
        
        {/* Animated orbs */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
        />

        {/* Floating decorative elements */}
        <motion.div
          variants={spinningAnimation}
          animate="animate"
          className="absolute top-20 left-20 text-white/10"
        >
          <GiSparkles size={40} />
        </motion.div>
        <motion.div
          variants={spinningAnimation}
          animate="animate"
          transition={{ delay: 5 }}
          className="absolute bottom-20 right-20 text-white/10"
        >
          <GiShower size={50} />
        </motion.div>
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-32 right-32 text-white/15"
        >
          <GiHearts size={30} />
        </motion.div>
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 3 }}
          className="absolute bottom-32 left-32 text-white/15"
        >
          <GiHearts size={25} />
        </motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Glass morphism container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl shadow-purple-500/10 p-8 md:p-12 lg:p-16">
          {/* Breadcrumbs with glass effect */}
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-8"
            aria-label="Breadcrumb"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl px-4 py-2 border border-white/20">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link 
                    href="/" 
                    className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">Home</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-white/40">▶</span>
                  <span className="text-white font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {title}
                  </span>
                </li>
              </ol>
            </div>
          </motion.nav>

          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Title with gradient text and shine effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white via-white to-pink-200 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine" />
            </motion.div>

            {/* Description with fade in */}
            {description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl mx-auto"
              >
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  {description}
                </p>
              </motion.div>
            )}

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-4 pt-8"
            >
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  variants={floatingAnimation}
                  animate="animate"
                  transition={{ delay: item * 0.5 }}
                  className="w-2 h-2 bg-white/40 rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
