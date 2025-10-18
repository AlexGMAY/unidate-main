import InternalHero from "@/components/layout/InternalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | UniDate - Your Data Protection",
  description: "Learn how UniDate protects your privacy and handles your personal data. Our commitment to your data security and privacy rights.",
  keywords: "privacy policy, data protection, user privacy, data security",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <InternalHero 
        title="Privacy Policy" 
        description="Your privacy matters. Learn how we protect and respect your personal data."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We collect information that you provide directly to us, including when you create an account, 
                  complete your profile, use our services, or communicate with us.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (name, email, phone number)</li>
                  <li>Profile information (photos, bio, interests, preferences)</li>
                  <li>Usage data and analytics</li>
                  <li>Communication data</li>
                  <li>Payment information (for premium features)</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Create and manage your account</li>
                  <li>Match you with compatible partners</li>
                  <li>Communicate with you about our services</li>
                  <li>Ensure safety and security of our platform</li>
                  <li>Personalize your experience</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-600">
                <p>We do not sell your personal data. We may share information with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Other users (as directed by you through our services)</li>
                  <li>Service providers who assist our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Third parties in connection with a business transfer</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Your Rights and Choices</h2>
              <div className="space-y-4 text-gray-600">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data</li>
                  <li>Object to certain data processing activities</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Data Security</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-semibold">Email: privacy@unidate.com</p>
                  <p className="font-semibold">Address: 123 Bourguiba Street, Tunis City, RC 10001</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
