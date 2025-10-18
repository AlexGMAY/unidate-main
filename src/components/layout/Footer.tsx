'use client';

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { 
  GiSelfLove, 
  GiCheckMark,
  GiHearts,
  GiEnvelope,
  GiHeartMinus,
  GiLoveLetter,
  GiHeartPlus,
  GiQuillInk
} from "react-icons/gi";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/unidate',
      color: 'hover:bg-blue-400 hover:shadow-blue-500/50'
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: 'https://facebook.com/unidate',
      color: 'hover:bg-blue-600 hover:shadow-blue-600/50'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/unidate',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:shadow-pink-500/50'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://linkedin.com/company/unidate',
      color: 'hover:bg-blue-700 hover:shadow-blue-700/50'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: GiCheckMark },
    { name: 'About', href: '/#about', icon: GiCheckMark },
    { name: 'Features', href: '/#features', icon: GiCheckMark },
    { name: 'Success Stories', href: '/#success-stories', icon: GiCheckMark },
    { name: 'Safety', href: '/#safety-tips', icon: GiCheckMark }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help-center', icon: GiCheckMark },
    { name: 'Safety Tips', href: '/safety-tips', icon: GiCheckMark },
    { name: 'Community Guidelines', href: '/community-guidelines', icon: GiCheckMark },
    { name: 'Contact Us', href: '/contact-us', icon: GiCheckMark },
    { name: 'Privacy Policy', href: '/privacy-policy', icon: GiCheckMark }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy', icon: GiCheckMark },
    { name: 'Terms of Service', href: '/terms', icon: GiCheckMark },
    { name: 'Cookie Policy', href: '/cookies', icon: GiCheckMark }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-pink-500/25">
                <GiSelfLove size={28} className="text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text">
                  UniDate
                </span>
                <p className="text-xs text-rose-300 font-medium">Find Your Perfect Match</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm max-w-xs">
              Where meaningful connections begin through authentic conversations and shared interests.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-white/20 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent 
                      className="text-slate-300 group-hover:text-white transition-colors duration-300 text-lg" 
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              {/* <GiQuillInk className="text-rose-400 mr-2" /> */}
              Quick Links
            </h3>            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 flex items-center group py-2"
                  >
                    <GiCheckMark className="text-rose-400 mr-3 group-hover:scale-110 transition-transform duration-300 text-sm" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              {/* <GiHearts className="text-rose-400 mr-2" /> */}
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 flex items-center group py-2"
                  >
                    <GiCheckMark className="text-rose-400 mr-3 group-hover:scale-110 transition-transform duration-300 text-sm" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <GiLoveLetter className="text-rose-400 mr-2" />
              Stay Updated
            </h3>
            <p className="text-slate-300 mb-4 text-sm">
              Subscribe to get updates on new features and success stories.
            </p>
            
            {isSubscribed ? (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 text-center">
                <GiHeartPlus className="text-green-400 text-2xl mx-auto mb-2" />
                <p className="text-green-300 text-sm font-medium">
                  Thank you for subscribing! 🎉
                </p>
                <p className="text-green-400/80 text-xs mt-1">
                  Welcome to the UniDate family!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 text-white placeholder-slate-400 transition-all duration-300"
                    required
                  />
                  <Button 
                    type="submit"
                    isLoading={isSubmitting}
                    className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-rose-500/25 transform hover:scale-105 transition-all duration-300 min-w-20 border border-rose-500/30"
                  >
                    {isSubmitting ? '' : 'Join'}
                  </Button>
                </div>
                <p className="text-slate-400 text-xs">
                  By subscribing, you agree to our{' '}
                  <Link href="/privacy-policy" className="text-rose-400 hover:text-rose-300 underline transition-colors">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm flex items-center">
              <GiHeartMinus className="text-rose-400 mr-2" />
              © {currentYear} UniDate. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <GiCheckMark className="text-rose-400 mr-2 group-hover:scale-110 transition-transform duration-300 text-xs" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}