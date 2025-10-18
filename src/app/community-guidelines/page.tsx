import InternalHero from "@/components/layout/InternalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines | UniDate - Community Standards",
  description: "Learn about UniDate's community guidelines and standards for respectful and meaningful interactions.",
  keywords: "community guidelines, rules, conduct, respectful behavior, standards",
};

const guidelines = [
  {
    category: "Respectful Behavior",
    rules: [
      "Treat all members with respect and kindness",
      "No harassment, bullying, or hate speech of any kind",
      "Respect others' boundaries and consent",
      "No discrimination based on race, gender, religion, or orientation"
    ]
  },
  {
    category: "Authentic Profiles",
    rules: [
      "Use recent and accurate photos of yourself",
      "Provide truthful information in your profile",
      "No fake profiles or impersonation",
      "One account per person"
    ]
  },
  {
    category: "Appropriate Content",
    rules: [
      "No explicit, violent, or offensive content",
      "Keep conversations respectful and appropriate",
      "No spam or promotional content",
      "Respect intellectual property rights"
    ]
  },
  {
    category: "Safety & Privacy",
    rules: [
      "No sharing of others' personal information",
      "Respect privacy and confidentiality",
      "No solicitation or financial requests",
      "Report suspicious behavior immediately"
    ]
  }
];

export default function CommunityGuidelines() {
  return (
    <div>
      <InternalHero 
        title="Community Guidelines" 
        description="Help us maintain a respectful and safe community for everyone."
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Community Promise</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At UniDate, we're committed to creating a space where people can connect authentically 
            and build meaningful relationships. These guidelines help ensure our community remains 
            safe, respectful, and welcoming for everyone.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using UniDate, you agree to follow these guidelines. Violations may result in 
            account suspension or permanent removal from our platform.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  {index + 1}
                </div>
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Consequences & Reporting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Consequences</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Warning:</span> Minor violations may result in a warning and content removal
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Suspension:</span> Repeated or serious violations may lead to temporary account suspension
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Permanent Ban:</span> Severe violations or illegal activities result in permanent removal
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">How to Report</h3>
            <ul className="space-y-3 text-green-700">
              <li>Use the report button on profiles or messages</li>
              <li>Contact our safety team at <a href="mailto:safety@unidate.com">safety@unidate.com</a></li>
              <li>Provide as much detail as possible in your report</li>
              <li>All reports are reviewed by our moderation team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}