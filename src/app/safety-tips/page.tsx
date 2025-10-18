import InternalHero from "@/components/layout/InternalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Tips | UniDate - Safe Dating Guidelines",
  description: "Essential safety tips for online dating. Learn how to stay safe while meeting new people through UniDate.",
  keywords: "safety tips, online dating safety, meeting safety, dating guidelines",
};

const safetySections = [
  {
    title: "Online Safety",
    icon: "💻",
    tips: [
      "Keep personal information private until you're comfortable",
      "Use our secure messaging system for initial conversations",
      "Be cautious about sharing social media profiles",
      "Report suspicious behavior immediately",
      "Trust your instincts - if something feels wrong, it probably is"
    ]
  },
  {
    title: "Meeting in Person",
    icon: "📍",
    tips: [
      "Always meet in public places for first dates",
      "Tell a friend or family member about your plans",
      "Arrange your own transportation to and from the date",
      "Stay sober and aware of your surroundings",
      "Keep your phone charged and with you at all times"
    ]
  },
  {
    title: "Financial Safety",
    icon: "💰",
    tips: [
      "Never send money to someone you've met online",
      "Be wary of sob stories or emergency financial requests",
      "Keep financial information completely private",
      "Report any requests for money to our safety team",
      "Understand that genuine connections don't involve money"
    ]
  },
  {
    title: "Emotional Safety",
    icon: "❤️",
    tips: [
      "Take things at your own pace",
      "Set clear boundaries and communicate them",
      "Don't feel pressured to share more than you're comfortable with",
      "Be honest about your intentions and expectations",
      "Remember it's okay to say no at any time"
    ]
  }
];

export default function SafetyTips() {
  return (
    <div>
      <InternalHero 
        title="Safety Tips" 
        description="Your safety is our priority. Follow these guidelines for a secure dating experience."
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl">🚨</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h3>
              <p className="text-red-700">
                If you feel unsafe or are in immediate danger, contact local emergency services first.
                <strong className="block mt-2">Emergency: 811 (TN) or your local emergency number</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Safety Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {safetySections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Reporting Section */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Need to Report Something?</h2>
            <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
              Your reports help us maintain a safe community. Don't hesitate to report any concerning behavior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors duration-300"
              >
                Report an Issue
              </a>
              <a 
                href="mailto:safety@unidate.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Contact Safety Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}