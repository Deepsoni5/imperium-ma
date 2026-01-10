"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      description: "We operate with absolute transparency and ethical rigor in every transaction."
    },
    {
      title: "Precision",
      description: "Our analytical depth ensures that no detail is overlooked in complex deal structures."
    },
    {
      title: "Discretion",
      description: "Confidentiality is the cornerstone of our advisory, protecting your interests at all times."
    },
    {
      title: "Excellence",
      description: "We strive for unrivaled quality in strategic positioning and execution."
    }
  ]

  return (
      <div className="bg-luxe-black text-white pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-24">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Our Legacy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
            >
              Orchestrating the <br /> <span className="gold-gradient italic">Future of Global Business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-xl font-light leading-relaxed max-w-2xl"
            >
              Imperium M&A was founded on a single principle: that high-stakes M&A requires more than just financial expertise—it requires strategic artistry.
            </motion.p>
          </div>


        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Office"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif mb-6 text-gold">Our Vision</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                To be the world's most trusted architect of corporate legacies, setting the gold standard for strategic advisory and transaction excellence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6 text-gold">Our Mission</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                We empower visionary leaders and enterprises to achieve their most ambitious strategic goals through precision-engineered M&A solutions and unshakeable integrity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4 text-white">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
