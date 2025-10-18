import InternalHero from "@/components/layout/InternalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | UniDate - Support & Assistance",
  description: "Get help with UniDate. Find answers to frequently asked questions and learn how to use our platform effectively.",
  keywords: "help center, support, FAQ, user guide, assistance",
};

const faqCategories = [
  {
    title: "Account & Profile",
    questions: [
      {
        question: "How do I create an account?",
        answer: "Click the 'Register' button on our homepage, follow the steps, and complete your profile setup."
      },
      {
        question: "Can I change my username?",
        answer: "Yes, you can change your display name in your profile settings at any time."
      },
      {
        question: "How do I delete my account?",
        answer: "Go to Settings > Account > Delete Account. Please note this action is permanent."
      }
    ]
  },
  {
    title: "Matching & Connections",
    questions: [
      {
        question: "How does the matching algorithm work?",
        answer: "Our algorithm considers your interests, preferences, location, and behavior to suggest compatible matches."
      },
      {
        question: "Can I see who liked my profile?",
        answer: "Yes, you can see who has liked your profile."
      },
      {
        question: "How do I report inappropriate behavior?",
        answer: "Send us a message through our contact page form, or contact our safety team directly."
      }
    ]
  },
  {
    title: "Technical Support",
    questions: [
      {
        question: "The app is not loading properly",
        answer: "Try clearing your browser cache or updating to the latest version of the app. If issues persist, contact support."
      },
      {
        question: "I'm not receiving notifications",
        answer: "Check your device notification settings and ensure you've granted necessary permissions in your browser or app settings."
      },
      {
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email."
      }
    ]
  }
];

export default function HelpCenter() {
  return (
    <div>
      <InternalHero 
        title="Help Center" 
        description="Find answers to common questions and get the support you need."
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600">Get help anytime with our round-the-clock support team.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Support</h3>
            <p className="text-gray-600">Send us an email and we'll respond within 24 hours.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Live Chat</h3>
            <p className="text-gray-600">Chat with our support agents in real-time during business hours.</p>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{category.title}</h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-white mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@unidate.com" 
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors duration-300"
              >
                Email Support
              </a>
              <a 
                href="tel:+21620036648" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}