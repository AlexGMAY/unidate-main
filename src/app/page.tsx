import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicFloatingHearts = dynamic(
  () => import("@/components/animations/FloatingHearts"),
  { ssr: false }
);

const DynamicParticleBackground = dynamic(
  () => import("@/components/animations/ParticleBackground"),
  { ssr: false }
);

const DynamicAnimatedStats = dynamic(
  () => import("@/components/animations/AnimatedStats"),
  { ssr: false }
);

const DynamicAnimatedFeatures = dynamic(
  () => import("@/components/animations/AnimatedFeatures"),
  { ssr: false }
);

const DynamicScrollAnimation = dynamic(
  () => import("@/components/animations/ScrollAnimation"),
  { ssr: false }
);

export default async function Home() {
  const session = await auth();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Magical Elements */}
      <section className="bg-red-500 relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        {/* Animated Background */}
        <DynamicParticleBackground />
        
        {/* Floating Hearts Animation */}
        <DynamicFloatingHearts />
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/40 to-rose-300/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-200/30 to-pink-300/20 rounded-full blur-3xl animate-pulse-slower" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center space-y-10 w-full max-w-5xl mx-auto">
            {/* Main Heading with Magic Reveal Effect */}
            <DynamicScrollAnimation>
              <div className="overflow-hidden">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                  <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-transparent bg-clip-text animate-gradient-x">
                    Find Your
                  </span>
                  <span className="block mt-2 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-transparent bg-clip-text animate-gradient-x-reverse">
                    Perfect Match
                  </span>
                </h1>
              </div>
            </DynamicScrollAnimation>

            {/* Subheading */}            
             <DynamicScrollAnimation threshold={0.2}>
               <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                 Where meaningful connections begin through authentic conversations and shared interests
               </p>
             </DynamicScrollAnimation>

             {/* CTA Buttons */}
             <DynamicScrollAnimation threshold={0.3}>
               <div className="flex flex-col items-center gap-6 mt-16">
                 {session ? (
                   <Button
                     as={Link}
                     href="/members"
                     className="relative overflow-hidden group bg-gradient-to-r from-pink-500 to-rose-600 text-white text-lg md:text-xl px-10 py-7 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 shadow-xl"
                   >
                     <span className="relative z-10">Continue to Matches</span>
                     <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                   </Button>
                 ) : (
                   <div className="flex flex-col sm:flex-row gap-6 items-center">
                     <Button
                       as={Link}
                       href="/register"
                       className="relative overflow-hidden group bg-gradient-to-r from-pink-500 to-rose-600 text-white text-lg md:text-xl px-10 py-7 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 shadow-xl"
                     >
                       <span className="relative z-10">Start Your Journey</span>
                       <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                     </Button>
                    
                     <Button
                       as={Link}
                       href="/login"
                       className="relative overflow-hidden group bg-white/90 backdrop-blur-sm text-pink-600 border-2 border-pink-500/30 text-lg md:text-xl px-10 py-7 rounded-2xl hover:bg-white transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-pink-500/50"
                     >
                       <span className="relative z-10">Sign In</span>
                       <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                     </Button>
                   </div>
                 )}
               </div>
             </DynamicScrollAnimation>

             {/* Animated Stats */}
             <DynamicScrollAnimation threshold={0.4}>
               <div className="mt-20">
                 <DynamicAnimatedStats />
               </div>
             </DynamicScrollAnimation>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section with Scroll Animations */}
      <section className="relative min-h-screen w-full bg-gradient-to-br from-white via-rose-50 to-pink-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-100/40 to-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-rose-100/30 to-pink-200/20 rounded-full blur-3xl" />
        
        <DynamicScrollAnimation>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col justify-center items-center min-h-screen">
            <div className="text-center w-full max-w-6xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20">
                <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">
                  Why Choose UniDate?
                </span>
              </h2>
              
              <DynamicAnimatedFeatures />
              
              {/* Additional CTA at bottom of features */}
              <div className="mt-20">
                {!session && (
                  <Button
                    as={Link}
                    href="/register"
                    className="relative overflow-hidden group bg-gradient-to-r from-pink-500 to-rose-600 text-white text-lg md:text-xl px-12 py-7 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 shadow-xl"
                  >
                    <span className="relative z-10">Join Now - It's Free</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DynamicScrollAnimation>
      </section>

       {/* How It Works Section */}
      <section className="relative w-full bg-white py-20 overflow-hidden">
        <div className="absolute -left-40 top-1/3 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute -right-40 bottom-1/3 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <DynamicScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">
                How It Works
              </span>
            </h2>
          </DynamicScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <DynamicScrollAnimation threshold={0.2}>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-100 flex items-center justify-center text-2xl font-bold text-pink-600">1</div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Create Your Profile</h3>
                <p className="text-slate-600">Sign up and build your authentic profile with photos and interests that reflect the real you.</p>
              </div>
            </DynamicScrollAnimation>
            
            <DynamicScrollAnimation threshold={0.3}>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-100 flex items-center justify-center text-2xl font-bold text-pink-600">2</div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Find Your Matches</h3>
                <p className="text-slate-600">Our algorithm connects you with people who share your interests and values.</p>
              </div>
            </DynamicScrollAnimation>
            
            <DynamicScrollAnimation threshold={0.4}>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-100 flex items-center justify-center text-2xl font-bold text-pink-600">3</div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Start Meaningful Conversations</h3>
                <p className="text-slate-600">Break the ice with our conversation starters and build connections that matter.</p>
              </div>
            </DynamicScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full bg-gradient-to-br from-pink-50 to-rose-50 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <DynamicScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">
                Success Stories
              </span>
            </h2>
          </DynamicScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DynamicScrollAnimation threshold={0.2}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">JD</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-800">James & Diana</h4>
                    <p className="text-sm text-slate-500">Together for 2 years</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"We matched on UniDate and immediately connected over our love for hiking. Six months later, we're planning our first backpacking trip together!"</p>
              </div>
            </DynamicScrollAnimation>
            
            <DynamicScrollAnimation threshold={0.3}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-rose-200 rounded-full flex items-center justify-center text-rose-600 font-bold">MS</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-800">Michael & Sarah</h4>
                    <p className="text-sm text-slate-500">Engaged</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"After countless disappointing dates on other apps, UniDate's focus on meaningful connections helped me find my soulmate. We're getting married next spring!"</p>
              </div>
            </DynamicScrollAnimation>
            
            <DynamicScrollAnimation threshold={0.4}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">AL</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-800">Alex & Lisa</h4>
                    <p className="text-sm text-slate-500">Together for 1 year</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"The conversation starters made it so easy to break the ice. We talked for hours on our first date and haven't stopped since!"</p>
              </div>
            </DynamicScrollAnimation>
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="relative w-full bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <DynamicScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">
                Your Safety Matters
              </span>
            </h2>
          </DynamicScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <DynamicScrollAnimation threshold={0.2}>
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-slate-800">We Prioritize Your Privacy and Security</h3>
                <p className="text-slate-600 mb-6">At UniDate, we implement robust measures to ensure a safe and respectful environment for everyone.</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Photo verification for authentic profiles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Advanced reporting and blocking features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Data encryption and privacy controls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">24/7 moderation team</span>
                  </li>
                </ul>
              </div>
            </DynamicScrollAnimation>
            
            <DynamicScrollAnimation threshold={0.3}>
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Dating Safety Tips</h3>
                <ol className="list-decimal list-inside space-y-4">
                  <li>Get to know people before meeting in person</li>
                  <li>Always meet in public places for first dates</li>
                  <li>Tell a friend or family member about your plans</li>
                  <li>Stay sober and aware of your surroundings</li>
                  <li>Trust your instincts - if something feels wrong, leave</li>
                </ol>
              </div>
            </DynamicScrollAnimation>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full bg-gradient-to-br from-pink-500 to-rose-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <DynamicScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Find Your Match?</h2>
            <p className="text-xl text-pink-100 mb-10 max-w-3xl mx-auto">Join thousands of singles who have found meaningful connections on UniDate.</p>
            
            {!session ? (
              <Button
                as={Link}
                href="/register"
                className="bg-white text-pink-600 text-xl px-12 py-7 rounded-2xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold"
              >
                Create Your Profile Now
              </Button>
            ) : (
              <Button
                as={Link}
                href="/members"
                className="bg-white text-pink-600 text-xl px-12 py-7 rounded-2xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold"
              >
                Browse Matches
              </Button>
            )}
          </DynamicScrollAnimation>
        </div>
      </section>

      {/* Add CSS for animations */}
      {/* <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-gradient-x-reverse {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite reverse;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style> */}
    </div>
  );
}

