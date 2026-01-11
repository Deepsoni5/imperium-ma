"use client"

import { motion } from "framer-motion"

export function LogoWall() {
  const logos = [
    { name: "Goldman Sachs", color: "text-gold" },
    { name: "Morgan Stanley", color: "text-gold" },
    { name: "BlackRock", color: "text-gold" },
    { name: "J.P. Morgan", color: "text-gold" },
    { name: "Carlyle Group", color: "text-gold" },
    { name: "Kohlberg Kravis Roberts", color: "text-gold" },
  ]

  return (
    <section className="py-20 bg-luxe-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-zinc-500 text-[10px] uppercase tracking-[0.3em]">
          Strategic Partners & Institutional Network
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-24 items-center py-4">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`text-xl md:text-2xl font-serif tracking-tighter opacity-60 hover:opacity-100 transition-all cursor-default ${logo.color}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}
