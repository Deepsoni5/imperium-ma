"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function FoundersQuotes() {
  const quotes = [
    {
      text: "The speed and precision of Imperium's team allowed us to close our roll-up strategy 6 months ahead of schedule. Unparalleled expertise.",
      author: "Marcus Thorne",
      role: "Managing Director, Global Tech Holdings",
      type: "Buyer"
    },
    {
      text: "As a founder, I was looking for more than just a transaction. Imperium understood my vision and secured a legacy-defining exit.",
      author: "Elena Rodriguez",
      role: "Founder, BioStream Systems",
      type: "Founder"
    },
    {
      text: "The level of discretion they maintain in high-stakes negotiations is what sets them apart. They are the ultimate strategic partners.",
      author: "Jameson Blake",
      role: "CEO, Vulcan Logistics",
      type: "Founder"
    }
  ]

  return (
    <section className="py-32 bg-luxe-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
          >
            Voices of Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            What Founders & Buyers Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-luxe-charcoal border border-white/5 relative group hover:border-gold/20 transition-all"
            >
              <Quote className="text-gold/10 absolute top-8 left-8" size={40} />
              <p className="text-zinc-300 text-lg italic mb-10 relative z-10 leading-relaxed">
                "{q.text}"
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-white font-serif text-lg">{q.author}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-zinc-500 text-xs tracking-widest uppercase">{q.role}</p>
                  <span className="text-gold text-[10px] uppercase font-bold tracking-[0.2em]">{q.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
