"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Aurelius Capital's strategic depth and global network were instrumental in our successful exit. They didn't just find a buyer; they found the right partner for our legacy.",
      author: "David Chen",
      role: "Founder, SolarNet Systems",
      deal: "$450M Exit"
    },
    {
      quote: "The level of discretion and meticulous transaction management displayed by the team was unparalleled. They managed every complexity with absolute precision.",
      author: "Sarah Montgomery",
      role: "CEO, NexaHealth IT",
      deal: "$1.2B Acquisition"
    }
  ]

  return (
    <section className="py-32 bg-luxe-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
          >
            Client Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-luxe-black p-16 relative border border-white/5"
            >
              <Quote className="text-gold/20 absolute top-12 left-12" size={48} />
              <p className="text-zinc-300 text-xl md:text-2xl font-serif italic mb-12 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-serif text-lg">{t.author}</p>
                <p className="text-zinc-500 text-sm tracking-widest uppercase">{t.role}</p>
                <p className="text-gold text-xs mt-2">{t.deal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
