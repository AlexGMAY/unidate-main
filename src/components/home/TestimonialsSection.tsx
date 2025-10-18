'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GiHearts, GiSparkles, GiShower } from "react-icons/gi";

const testimonials = [
  {
    id: 1,
    name: "James & Diana",
    status: "Together for 2 years",
    initials: "JD",
    color: "from-pink-500 to-rose-500",
    quote: "We matched on UniDate and immediately connected over our love for hiking. Six months later, we're planning our first backpacking trip together! The conversation starters made breaking the ice so natural.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&auto=format",
    icon: "🏔️"
  },
  {
    id: 2,
    name: "Michael & Sarah",
    status: "Engaged",
    initials: "MS",
    color: "from-purple-500 to-pink-500",
    quote: "After countless disappointing dates on other apps, UniDate's focus on meaningful connections helped me find my soulmate. We're getting married next spring! Thank you for bringing us together.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
    icon: "💍"
  },
  {
    id: 3,
    name: "Alex & Lisa",
    status: "Together for 1 year",
    initials: "AL",
    color: "from-rose-500 to-red-500",
    quote: "The conversation starters made it so easy to break the ice. We talked for hours on our first date and haven't stopped since! UniDate truly understands what makes connections special.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&auto=format",
    icon: "💬"
  },
  {
    id: 4,
    name: "Chris & Emma",
    status: "Married for 6 months",
    initials: "CE",
    color: "from-blue-500 to-cyan-500",
    quote: "We both joined UniDate during our final year of university. Now we're building our life together while pursuing our careers. The platform's focus on genuine connections made all the difference.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop&auto=format",
    icon: "🎓"
  },
  {
    id: 5,
    name: "Ryan & Sophia",
    status: "Together for 8 months",
    initials: "RS",
    color: "from-green-500 to-emerald-500",
    quote: "As busy professionals, we appreciated how UniDate helped us find quality matches efficiently. Our first coffee date turned into a weekend getaway, and we've been inseparable ever since.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&auto=format",
    icon: "💼"
  },
  {
    id: 6,
    name: "David & Maria",
    status: "Engaged",
    initials: "DM",
    color: "from-orange-500 to-red-500",
    quote: "The compatibility matching on UniDate is incredible! We discovered we share the same values, hobbies, and life goals. It felt like we've known each other for years from day one.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&auto=format",
    icon: "🌟"
  }
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 3 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 3 : currentIndex - 1);
  };

  const handleImageError = (testimonialId: number) => {
     console.log(`Image failed to load for testimonial ${testimonialId}`);
    setImageErrors(prev => ({ ...prev, [testimonialId]: true }));
  };

  return (
    <section id="success-stories" className="relative py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-700 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl" />
        
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 text-white/10"
        >
          <GiHearts size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 text-white/10"
        >
          <GiSparkles size={50} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-300 text-transparent bg-clip-text">
              Love Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how UniDate has transformed lives and created lasting connections.
            Real stories from real couples who found their perfect match.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            →
          </button>

          {/* Slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden relative p-8 rounded-xl"
          >
            <motion.div
              className="flex gap-8"
              animate={{ x: `-${currentIndex * (100 / 3)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 h-full flex flex-col">
                    
                    {/* Image Section */}
                    <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                      {imageErrors[testimonial.id] ? (
                        // Fallback icon when image fails to load
                        <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                          {testimonial.icon}
                        </div>
                      ) : (
                        // Actual Image component
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={() => handleImageError(testimonial.id)}
                          priority={index < 3} // Prioritize loading first 3 images
                        />
                      )}
                     
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    </div>

                    {/* Quote Section */}
                    <div className="flex-1">
                      {/* Quote Icon */}
                      <div className="text-4xl text-pink-300 mb-4 transform group-hover:scale-110 transition-transform duration-300">"</div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-gray-200 italic mb-6 leading-relaxed text-lg font-light">
                        {testimonial.quote}
                      </blockquote>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center pt-6 border-t border-white/20">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center font-bold text-white text-lg shadow-lg`}>
                        {testimonial.initials}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-pink-200 text-sm">{testimonial.status}</div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400/30 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-rose-400/40 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2,500+", label: "Matches Made", color: "text-pink-400" },
              { number: "1,200+", label: "Success Stories", color: "text-rose-400" },
              { number: "98.7%", label: "Satisfaction Rate", color: "text-purple-400" },
              { number: "50K+", label: "Active Members", color: "text-cyan-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}