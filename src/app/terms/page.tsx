import InternalHero from "@/components/layout/InternalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | UniDate - User Agreement",
  description: "Read UniDate's Terms of Service. Understand your rights and responsibilities when using our dating platform.",
  keywords: "terms of service, user agreement, terms and conditions",
};

export default function TermsOfService() {
  return (
    <div>
      <InternalHero 
        title="Terms of Service" 
        description="Please read these terms carefully before using UniDate services."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                Effective date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-gray-600 italic">
                By accessing or using UniDate, you agree to be bound by these Terms of Service.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Welcome to UniDate. These Terms of Service govern your use of our website, 
                  applications, and services. By creating an account or using our services, 
                  you agree to these terms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Eligibility</h2>
              <div className="space-y-4 text-gray-600">
                <p>To use UniDate, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 18 years old</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Not be prohibited from using our services under applicable laws</li>
                  <li>Provide accurate and complete registration information</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. User Conduct</h2>
              <div className="space-y-4 text-gray-600">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create fake profiles or misrepresent your identity</li>
                  <li>Harass, bully, or threaten other users</li>
                  <li>Post inappropriate, offensive, or illegal content</li>
                  <li>Use the service for commercial purposes without authorization</li>
                  <li>Attempt to circumvent any security measures</li>
                  <li>Collect user information without consent</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Account Security</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You are responsible for maintaining the confidentiality of your account 
                  credentials and for all activities that occur under your account.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Premium Services</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Some features may require payment. By subscribing to premium services, 
                  you agree to our payment terms and automatic renewal policies.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Termination</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may suspend or terminate your account at our discretion if you violate 
                  these terms or engage in harmful behavior.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  UniDate is not liable for any indirect, incidental, or consequential damages 
                  arising from your use of our services.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Changes to Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may modify these terms at any time. Continued use of our services 
                  after changes constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}