"use client"

import { motion } from "framer-motion"
import { Layers, Zap, Target, Repeat } from "lucide-react"

export function RollupDeals() {
  const features = [
    {
      title: "Concurrent Execution",
      description: "Manage multiple acquisitions simultaneously with our proprietary DealFlow engine.",
      icon: Layers
    },
    {
      title: "Rapid Integration",
      description: "Accelerated post-merger integration playbooks designed for roll-up efficiency.",
      icon: Zap
    },
    {
      title: "Precision Targeting",
      description: "Identify and filter targets that fit your platform criteria with extreme accuracy.",
      icon: Target
    },
    {
      title: "Scalable Advisory",
      description: "Advisory services that grow with your platform, from initial seed to global dominance.",
      icon: Repeat
    }
  ]

  return (
    <section className="py-32 bg-luxe-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Platform Expansion
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
            >
              Execute Concurrent <br /> <span className="gold-gradient italic">Roll-up Deals Faster</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-lg mb-12 font-light leading-relaxed"
            >
              MerzVia specializes in high-velocity roll-up strategies. We provide the infrastructure and expertise required to acquire and integrate multiple entities at scale, ensuring valuation multiples are maximized.
            </motion.p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-luxe-black border border-white/5 hover:border-gold/30 transition-all group"
              >
                <f.icon className="text-gold mb-6 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-white font-serif text-xl mb-3">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
