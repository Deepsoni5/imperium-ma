"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function Transactions() {
    const transactions = [
          {
            title: "Project Titan",
            sector: "Renewable Energy",
            value: "$450M",
            type: "Sell-Side Advisory",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
          },
  
      {
        title: "Nova Health Acquisition",
        sector: "Healthcare IT",
        value: "$1.2B",
        type: "Buy-Side Advisory",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Global Logistics Merger",
        sector: "Supply Chain",
        value: "$890M",
        type: "Strategic Merger",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
      }
    ]

    return (
      <section id="transactions" className="py-32 bg-luxe-black">
        <div className="w-[90%] lg:w-[85%] max-w-7xl mx-auto px-6">
          <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
          >
            Proven Track Record
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white leading-tight"
          >
            Featured Transactions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {transactions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxe-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-gold text-xs uppercase tracking-widest mb-2">{item.sector}</p>
                  <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-6">
                <div>
                  <p className="text-white font-serif text-xl mb-1">{item.value}</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">{item.type}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                  <ArrowUpRight className="text-white group-hover:text-black transition-colors" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
