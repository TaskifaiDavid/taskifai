import { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'Terms of Service - TaskifAI Reseller Analytics',
  description: 'TaskifAI terms of service and conditions for using our AI-powered reseller analytics platform. Review our service terms and user agreements.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.taskifai.com/terms'
  }
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2025
            </p>
          </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and TaskifAI AB, a Swedish corporation ("TaskifAI," "we," "us," or "our"), governing your use of our website and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Company Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Company Name:</strong> TaskifAI AB</p>
              <p><strong>Registration Number:</strong> [Swedish Company Registration Number]</p>
              <p><strong>Registered Address:</strong> Styrbordsgatan 6, 21647 Limhamn, Sweden</p>
              <p><strong>Contact Email:</strong> hello@taskifai.com</p>
              <p><strong>VAT Number:</strong> [VAT Registration Number]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Description of Services</h2>
            <p>
              TaskifAI provides data analytics and processing services for reseller data, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Automated data processing and cleaning from Excel spreadsheets</li>
              <li>Dashboard creation and data visualization</li>
              <li>AI-powered analytics and insights</li>
              <li>Custom reporting and data analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Agreement and Pricing</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Service Plans</h3>
            <p>We offer three service tiers:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Starter:</strong> €20,000–€30,000 setup fee, €1,500/month (1-10 resellers)</li>
              <li><strong>Growth:</strong> €35,000–€50,000 setup fee, €2,500–€3,500/month (11-20 resellers)</li>
              <li><strong>Enterprise:</strong> €55,000–€65,000 setup fee, €4,000+/month (21-50 resellers)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">4.2 Additional Services</h3>
            <p>Additional reseller parsers: €2,000 each</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">4.3 Payment Terms</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Setup fees are due upon contract signing</li>
              <li>Monthly fees are billed in advance</li>
              <li>Payment terms: Net 30 days</li>
              <li>All prices are exclusive of VAT</li>
              <li>Late payment interest: 8% annually (Swedish Interest Rate Act)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide accurate and complete data for processing</li>
              <li>Ensure you have rights to process and share the data provided</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain confidentiality of login credentials and system access</li>
              <li>Notify us promptly of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1 TaskifAI Property</h3>
            <p>
              All software, algorithms, methodologies, and systems developed by TaskifAI remain our exclusive property. You receive a non-exclusive, non-transferable license to use our services during the term of the agreement.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">6.2 Client Data</h3>
            <p>
              You retain ownership of all data you provide. We process your data solely to deliver our services and in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Protection and Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data in accordance with GDPR and Swedish data protection laws. Both parties agree to comply with applicable data protection legislation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Level Agreement</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Uptime:</strong> We target 99.5% service availability</li>
              <li><strong>Support:</strong> Business hours support (Monday-Friday, 9:00-17:00 CET)</li>
              <li><strong>Response Time:</strong> 24 hours for standard inquiries</li>
              <li><strong>Implementation:</strong> Typically 30 days from contract execution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by Swedish law, TaskifAI's total liability for any claim shall not exceed the amount paid by you for services in the 12 months preceding the claim. We shall not be liable for indirect, incidental, special, or consequential damages.
            </p>
            <p className="mt-4">
              This limitation does not apply to liability for personal injury, death, or damages caused by gross negligence or willful misconduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">10.1 Termination by Client</h3>
            <p>You may terminate the agreement with 30 days' written notice. Setup fees are non-refundable.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">10.2 Termination by TaskifAI</h3>
            <p>We may terminate immediately for material breach, non-payment, or violation of these Terms.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">10.3 Effect of Termination</h3>
            <p>Upon termination, you will receive a final data export. We will securely delete your data within 30 days unless legally required to retain it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Force Majeure</h2>
            <p>
              Neither party shall be liable for delays or failures due to circumstances beyond their reasonable control, including natural disasters, government actions, labor disputes, or technical failures of third-party infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by Swedish law. Any disputes shall be resolved through the Swedish courts, with Stockholm District Court as the court of first instance. We encourage good faith negotiations before litigation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Consumer Rights</h2>
            <p>
              If you are a consumer under Swedish law, certain mandatory consumer protection rights apply and cannot be limited by these Terms. For business clients, the Swedish Sale of Goods Act provisions may apply where relevant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Modifications</h2>
            <p>
              We may update these Terms with 30 days' notice to active clients. Material changes affecting existing agreements will require mutual consent. Continued use of services constitutes acceptance of minor updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
            <p>
              If any provision of these Terms is found unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any executed service agreements, constitute the entire agreement between the parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
            <p>
              For questions about these Terms or our services, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>TaskifAI AB</strong></p>
              <p>Email: hello@taskifai.com</p>
              <p>Address: Styrbordsgatan 6, 21647 Limhamn, Sweden</p>
              <p>Business hours: Monday-Friday, 9:00-17:00 CET</p>
            </div>
          </section>

          <section>
            <p className="text-sm text-gray-500 border-t pt-4">
              <em>These Terms of Service are written in accordance with Swedish law and European Union regulations. This English version is provided for convenience; in case of discrepancy, the Swedish version shall prevail for Swedish clients.</em>
            </p>
          </section>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}