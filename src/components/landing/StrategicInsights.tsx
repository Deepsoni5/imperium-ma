"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function StrategicInsights() {
    const insights = [
      {
        date: "Oct 24, 2024",
        title: "The State of Mid-Market Tech M&A",
        category: "Market Report",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      },
      {
        date: "Nov 12, 2024",
        title: "Maximizing Exit Value in Volatile Markets",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      },
        {
          date: "Dec 05, 2024",
          title: "The Rise of Strategic Roll-ups in Healthcare",
          category: "Industry Analysis",
          image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
        }
    ]

    return (
      <section className="py-32 bg-luxe-charcoal">
        <div className="w-[90%] lg:w-[85%] max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Intelligence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-white leading-tight"
            >
              Strategic Insights for <br /> Institutional Leaders
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gold hover:text-white transition-colors uppercase text-xs tracking-widest font-bold border-b border-gold/30 pb-2"
          >
            Explore All Insights <ArrowRight size={14} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-zinc-900">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-luxe-black/80 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest px-3 py-1 border border-gold/20">
                    {insight.category}
                  </span>
                </div>
              </div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">{insight.date}</p>
              <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors leading-snug">
                {insight.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
