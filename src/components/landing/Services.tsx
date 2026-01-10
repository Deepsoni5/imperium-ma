"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, BarChart4, Globe, ShieldCheck, Users } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Sell-Side Advisory",
      description: "Maximizing enterprise value through strategic positioning and access to global capital.",
      icon: Briefcase
    },
    {
      title: "Buy-Side Advisory",
      description: "Identifying and executing strategic acquisitions that drive long-term growth.",
      icon: TrendingUp
    },
    {
      title: "Capital Raising",
      description: "Securing debt and equity financing for expansion, recapitalization, and buyouts.",
      icon: BarChart4
    },
    {
      title: "Corporate Valuation",
      description: "Deep-dive financial modeling and market analysis for precise enterprise valuation.",
      icon: Globe
    },
    {
      title: "Strategic Consulting",
      description: "Tailored advisory on market entry, exit readiness, and corporate restructuring.",
      icon: ShieldCheck
    },
    {
      title: "Post-Merger Integration",
      description: "Ensuring seamless transitions and synergy realization post-transaction.",
      icon: Users
    }
  ]

  return (
    <section id="services" className="py-32 bg-luxe-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-white leading-tight"
            >
              Sophisticated Solutions for <br /> Complex Transactions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400 max-w-sm text-sm leading-relaxed"
          >
            We provide a comprehensive suite of M&A services tailored to the unique needs of mid-market and enterprise-level clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-luxe-charcoal p-12 hover:bg-luxe-black transition-all group cursor-pointer"
            >
              <service.icon className="text-gold mb-8 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
