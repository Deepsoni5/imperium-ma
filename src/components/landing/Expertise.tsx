"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function Expertise() {
  const points = [
    "Deep sector expertise across Technology, Healthcare, and Energy.",
    "Access to a global network of institutional investors and strategic buyers.",
    "Proven negotiation strategies that prioritize enterprise value and legacy.",
    "Absolute discretion and confidentiality throughout the transaction lifecycle.",
    "Meticulous due diligence and transaction structuring support.",
    "Bespoke advisory tailored to mid-market and enterprise complexities."
  ]

    return (
      <section className="py-32 bg-luxe-black">
        <div className="w-[90%] lg:w-[85%] max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Why Imperium</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Unrivaled Insight. <br /> Uncompromising Standards.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
              In the world of high-stakes M&A, the difference between a successful exit and a missed opportunity lies in the depth of strategic insight. We don't just facilitate transactions; we orchestrate legacies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="text-gold shrink-0" size={20} />
                  <p className="text-zinc-300 text-sm leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 border border-gold/20 translate-x-6 translate-y-6 z-0" />
            <div className="relative z-10 w-full h-full bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
