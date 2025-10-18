import InternalHero from "@/components/layout/InternalHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | UniDate - Get in Touch",
  description: "Contact UniDate support team. Get help with your account, technical issues, safety concerns, or general inquiries.",
  keywords: "contact unidate, support, help, customer service, technical support",
};

export default function ContactUs() {
  return (
    <div>
      <InternalHero 
        title="Contact Us" 
        description="Get in touch with our dedicated support team. We're committed to providing you with exceptional service and timely responses."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ContactInfo />
          
          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
            <div className="text-center text-gray-600 z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📍</span>
              </div>
              <p className="text-lg font-semibold mb-2">Our Location</p>
              <p className="text-sm">123 Bourguiba Street, Tunis City, Tunisia 10001</p>
              <p className="text-xs text-gray-500 mt-2">Visit our headquarters</p>
            </div>
            {/* Decorative map grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-grid-gray-400/[0.4]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
