"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  return (
    <div className="bg-luxe-black text-white pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif mb-12 text-gold"
        >
          Privacy Policy
        </motion.h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Introduction</h2>
              <p>
                At Imperium M&A, we are committed to protecting the privacy and confidentiality of our clients' information. This Privacy Policy outlines how we collect, use, and safeguard your data in the context of our M&A advisory services.
              </p>
            </section>


          <section>
            <h2 className="text-2xl font-serif text-white mb-4">Information Collection</h2>
            <p>
              We collect information necessary for the execution of transaction advisory, including but not limited to corporate financial data, strategic objectives, and contact information. This data is collected through direct engagement and secure information exchanges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">Data Security</h2>
            <p>
              We employ industry-leading security measures to ensure the absolute protection of sensitive transaction data. Our protocols include encrypted data storage, restricted access controls, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">Confidentiality</h2>
            <p>
              Confidentiality is the cornerstone of our operations. We never share client information with third parties except as required for the execution of a transaction with the client's explicit consent, or as required by law.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
