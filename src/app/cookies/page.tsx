import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | TaskifAI - How We Use Cookies",
  description: "Learn about how TaskifAI uses cookies on our reseller analytics platform. Understand our cookie types, purposes, and how to manage your preferences.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  const cookieSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy",
    "description": "Information about how TaskifAI uses cookies",
    "url": "https://www.taskifai.com/cookies",
    "publisher": {
      "@type": "Organization",
      "name": "TaskifAI"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-600">
                This Cookie Policy explains how TaskifAI AB uses cookies and similar technologies 
                when you visit our website at www.taskifai.com.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: January 15, 2025
              </p>
            </header>

            <div className="modern-card p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) 
                  when you visit our website. They help us provide you with a better experience by remembering 
                  your preferences and understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Essential functionality:</strong> Enable core website features and security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Preferences:</strong> Remember your cookie consent choices and language settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Performance:</strong> Understand how visitors use our website to improve user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Communication:</strong> Remember form inputs to improve contact experience</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      🔒 Essential Cookies (Always Active)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <div className="bg-white p-4 rounded border text-sm">
                      <p><strong>Cookie:</strong> cookie-consent</p>
                      <p><strong>Purpose:</strong> Stores your cookie consent preferences</p>
                      <p><strong>Duration:</strong> 1 year</p>
                      <p><strong>Type:</strong> First-party, Local Storage</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ⚙️ Functional Cookies (Optional)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      These cookies enhance your experience by remembering your preferences.
                    </p>
                    <div className="bg-white p-4 rounded border text-sm">
                      <p><strong>Purpose:</strong> Remember language preferences, form inputs, and user settings</p>
                      <p><strong>Duration:</strong> 30 days to 1 year</p>
                      <p><strong>Type:</strong> First-party</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      📊 Analytics Cookies (Optional)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      These help us understand how visitors interact with our website.
                    </p>
                    <div className="bg-white p-4 rounded border text-sm">
                      <p><strong>Purpose:</strong> Collect anonymous usage statistics to improve website performance</p>
                      <p><strong>Duration:</strong> 2 years</p>
                      <p><strong>Type:</strong> Third-party (when enabled)</p>
                      <p><strong>Provider:</strong> Google Analytics (when consent is given)</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      📢 Marketing Cookies (Optional)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Currently, we do not use marketing cookies. This section is reserved for future use.
                    </p>
                    <div className="bg-white p-4 rounded border text-sm">
                      <p><strong>Status:</strong> Not currently in use</p>
                      <p><strong>Future use:</strong> May be used for targeted advertising and campaign measurement</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-gray-700 mb-4">
                  You have full control over cookie usage on our website:
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent Banner</h3>
                  <p className="text-gray-700 mb-3">
                    When you first visit our website, you'll see a cookie consent banner where you can:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Accept all cookies</li>
                    <li>• Accept only essential cookies</li>
                    <li>• Customize your preferences for each cookie type</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Browser Settings</h3>
                  <p className="text-gray-700 mb-3">
                    You can also manage cookies through your browser settings:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Block all cookies</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set preferences for third-party cookies</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Note: Blocking essential cookies may affect website functionality.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  When you consent to analytics cookies, we may use third-party services that set their own cookies:
                </p>
                
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Google Analytics (Optional)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Used to analyze website usage and improve user experience.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Learn more: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-600 underline">Google Privacy Policy</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Rights</h2>
                <p className="text-gray-700 mb-4">
                  Under GDPR and Swedish data protection law, you have the right to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Withdraw consent:</strong> Change your cookie preferences at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Access your data:</strong> Request information about data we've collected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Delete your data:</strong> Request deletion of personal data collected via cookies</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any significant changes by posting the updated 
                  policy on our website with a new "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>TaskifAI AB</strong></p>
                  <p className="text-gray-700">Email: hello@taskifai.com</p>
                  <p className="text-gray-700">Website: <Link href="/" className="text-blue-600 hover:text-blue-600 underline">www.taskifai.com</Link></p>
                </div>
              </section>

              <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row gap-4">
                  <Link 
                    href="/privacy"
                    className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms"
                    className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}