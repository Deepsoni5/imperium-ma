"use client"

import { motion } from "framer-motion"

export function Stats() {
  const stats = [
    { label: "Deals Completed", value: "250+", sub: "Total transaction volume" },
    { label: "Transaction Value", value: "$18B+", sub: "Capital orchestrated" },
    { label: "Global Presence", value: "45", sub: "Countries reached" },
    { label: "Client Retention", value: "98%", sub: "Long-term partnerships" },
  ]

    return (
      <section className="py-32 bg-luxe-black">
        <div className="w-[90%] lg:w-[85%] max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl font-serif gold-gradient mb-2">{stat.value}</h3>
              <p className="text-white font-medium text-sm tracking-widest uppercase mb-1">{stat.label}</p>
              <p className="text-zinc-500 text-xs tracking-wide">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
