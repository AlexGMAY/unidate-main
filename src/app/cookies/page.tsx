import InternalHero from "@/components/layout/InternalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | UniDate - Cookie Usage",
  description: "Learn about how UniDate uses cookies and similar technologies to enhance your experience.",
  keywords: "cookie policy, cookies, tracking technologies, privacy",
};

export default function CookiePolicy() {
  return (
    <div>
      <InternalHero 
        title="Cookie Policy" 
        description="Understanding how we use cookies to improve your experience."
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Cookies are small text files that are stored on your device when you visit websites. 
                  They help websites remember information about your visit, which can make it easier 
                  to visit the site again and make the site more useful to you.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Use Cookies</h2>
              <div className="space-y-6 text-gray-600">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                  <p>Required for the website to function properly. These include:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Cookies</h3>
                  <p>Help us understand how visitors interact with our website:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Website analytics</li>
                    <li>Error tracking</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Functionality Cookies</h3>
                  <p>Remember your preferences and settings:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Language preferences</li>
                    <li>Login status</li>
                    <li>Theme settings</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cookie Management</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You can control and/or delete cookies as you wish. You can delete all cookies 
                  that are already on your computer and you can set most browsers to prevent them 
                  from being placed.
                </p>
                <p>
                  However, if you do this, you may have to manually adjust some preferences every 
                  time you visit a site and some services and functionalities may not work.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may also use various third-party cookies to report usage statistics of the 
                  service, deliver advertisements on and through the service, and so on.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-semibold">Email: privacy@unidate.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}