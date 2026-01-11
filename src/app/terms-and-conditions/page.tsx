"use client"

import { motion } from "framer-motion"

export default function TermsAndConditions() {
  return (
    <div className="bg-luxe-black text-white pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif mb-12 text-gold"
        >
          Terms & Conditions
        </motion.h1>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-white mb-4">Agreement to Terms</h2>
            <p>
              By accessing the website of MerzVia, you agree to be bound by these terms and conditions. These terms govern your use of our digital platforms and the preliminary engagement with our advisory services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">Advisory Services</h2>
            <p>
              The information provided on this website is for informational purposes only and does not constitute a formal offer of advisory services. Formal engagement with MerzVia is subject to a signed Engagement Letter and necessary regulatory compliance checks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and deal structures, is the intellectual property of MerzVia (under MADHYAVARTI SOLUTIONS PRIVATE LIMITED) and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">Limitation of Liability</h2>
            <p>
              MerzVia shall not be liable for any strategic or financial decisions made based solely on the information provided on this website. M&A transactions involve significant risk and should only be undertaken with professional advisory.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
