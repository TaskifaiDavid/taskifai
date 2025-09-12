import { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'Privacy Policy - TaskifAI Reseller Analytics',
  description: 'TaskifAI privacy policy and data protection information. Learn how we protect your data in compliance with GDPR and Swedish data protection laws.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.taskifai.com/privacy'
  }
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2025
            </p>
          </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              TaskifAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are headquartered in Sweden and comply with the General Data Protection Regulation (GDPR) and Swedish data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Controller Information</h2>
            <p><strong>Company:</strong> TaskifAI AB</p>
            <p><strong>Address:</strong> Styrbordsgatan 6, 21647 Limhamn, Sweden</p>
            <p><strong>Contact:</strong> hello@taskifai.com</p>
            <p><strong>Data Protection Officer:</strong> Available upon request via hello@taskifai.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business information</li>
              <li>Communications with us (contact forms, emails)</li>
              <li>Usage data and analytics</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Technical Information</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP address and browser information</li>
              <li>Device information and operating system</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Website usage patterns and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
            <p>Under GDPR, we process your personal data based on:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Consent:</strong> When you voluntarily provide information through contact forms</li>
              <li><strong>Legitimate Interest:</strong> For analytics, marketing, and improving our services</li>
              <li><strong>Contractual Necessity:</strong> To provide services you've requested</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver our analytics and data processing services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p>
              As a Swedish company, your data is primarily processed within the European Economic Area (EEA). If we transfer data outside the EEA, we ensure adequate protection through appropriate safeguards such as Standard Contractual Clauses or adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Typically:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contact form data: 3 years from last contact</li>
              <li>Analytics data: 26 months</li>
              <li>Marketing data: Until you withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights Under GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Limit processing of your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for consent-based processing</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at hello@taskifai.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and serve personalized content. You can control cookies through your browser settings. For detailed information about our cookie usage, please see our Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Security Measures</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>Email:</strong> hello@taskifai.com</p>
              <p><strong>Address:</strong> TaskifAI AB, Styrbordsgatan 6, 21647 Limhamn, Sweden</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Supervisory Authority</h2>
            <p>
              If you believe we have not addressed your concerns adequately, you have the right to lodge a complaint with the Swedish Data Protection Authority (Datainspektionen):
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>Website:</strong> datainspektionen.se</p>
              <p><strong>Email:</strong> datainspektionen@datainspektionen.se</p>
              <p><strong>Phone:</strong> 08-657 61 00</p>
            </div>
          </section>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}