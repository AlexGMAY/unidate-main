'use client';

import { useState } from "react";
import { GiPaperPlane, GiCheckMark } from "react-icons/gi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitStatus('submitting');

    try {
      // Simulate API call - to be replaced with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject', disabled: true },
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'safety', label: 'Safety Concern' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="bg-white">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h3>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <GiCheckMark className="text-green-500 text-xl mr-3" />
            <div>
              <p className="text-green-800 font-semibold">Message Sent Successfully!</p>
              <p className="text-green-700 text-sm mt-1">
                Thank you for contacting us. We'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <p className="text-red-800 font-semibold">Something went wrong</p>
              <p className="text-red-700 text-sm mt-1">
                Please try again or contact us directly via email.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 shadow-xl rounded-2xl p-8 border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
              errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
          >
            {subjectOptions.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-vertical ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Please describe your inquiry in detail. The more information you provide, the better we can assist you."
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Minimum 10 characters</span>
            <span>{formData.message.length}/2000</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitStatus === 'submitting'}
          className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {submitStatus === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <GiPaperPlane className="text-lg" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
