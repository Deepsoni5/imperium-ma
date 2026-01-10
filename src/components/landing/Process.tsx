"use client"

import { motion } from "framer-motion"

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Valuation",
      description: "Comprehensive assessment of business operations, financial performance, and market positioning."
    },
    {
      number: "02",
      title: "Strategic Positioning",
      description: "Crafting a compelling narrative and identifying key value drivers for prospective buyers or targets."
    },
    {
      number: "03",
      title: "Market Engagement",
      description: "Discreet and targeted outreach to a global network of qualified strategic and financial partners."
    },
    {
      number: "04",
      title: "Negotiation & Closing",
      description: "Meticulous management of due diligence, transaction structuring, and final execution."
    }
  ]

  return (
    <section id="process" className="py-32 bg-luxe-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
          >
            The Imperium Method
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white leading-tight"
          >
            A Systematic Approach to <br /> Unlocking Maximum Value
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pt-12 border-t border-white/10"
            >
              <span className="absolute top-0 left-0 text-5xl font-serif text-gold/20 -translate-y-1/2">
                {step.number}
              </span>
              <h3 className="text-xl font-serif text-white mb-4">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
