"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Zap, Target, BarChart3, Scale, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-luxe-black text-white pt-32 pb-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Header Section */}
        <div className="max-w-4xl mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gold/80">Corporate Profile</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tight"
          >
            The <span className="gold-gradient italic font-normal">Merzvia</span> <br /> Paradigm
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Merzvia was established to address a critical vacuum in the Indian financial services landscape.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl font-light">
              While large conglomerates are served by global investment banks and retail investors are served by wealth managers, the Indian Mid-Market Enterprise (MME) often finds itself underserved.
            </p>
          </motion.div>
        </div>

        {/* The Missing Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop"
              alt="Architecture"
              fill
              className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gold/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxe-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-8 border border-white/10 backdrop-blur-md bg-black/40">
              <p className="text-gold text-3xl font-serif mb-2 italic">The "Missing Middle"</p>
              <p className="text-white/70 text-sm tracking-wide leading-relaxed">
                Companies with revenues between ₹50 Cr and ₹500 Cr require sophisticated advisory that transcends simple brokerage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-white">Our Identity</h2>
              <div className="h-px w-20 bg-gold/50" />
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                We are a team of seasoned M&A practitioners with over two decades of experience in the Indian market. We operate as a <span className="text-white font-medium italic underline decoration-gold/30 underline-offset-4">Transaction Facilitation Firm</span>.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                By operating outside the SEBI Merchant Banking framework, we avoid the rigid compliance overheads that slow down large banks, allowing us to move with the speed and discretion that private transactions require.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-gold/[0.02] transition-colors">
                <Scale className="text-gold mb-4" size={24} />
                <h4 className="text-white font-medium mb-2 uppercase text-xs tracking-widest">Pure-Play Advisory</h4>
                <p className="text-zinc-500 text-sm">Focusing purely on strategic and commercial aspects without regulatory friction.</p>
              </div>
              <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-gold/[0.02] transition-colors">
                <BarChart3 className="text-gold mb-4" size={24} />
                <h4 className="text-white font-medium mb-2 uppercase text-xs tracking-widest">Speed & Discretion</h4>
                <p className="text-zinc-500 text-sm">Agile execution designed for the sensitivity of private ecosystem transactions.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <section className="py-32 border-t border-white/5 relative z-10">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-white mb-6"
            >
              Our <span className="gold-gradient italic font-normal">Philosophy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg font-light leading-relaxed"
            >
              We believe that the "Deal" is not the end; it is a transition. The transaction must be structured to survive the "Day 2" reality.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 border border-white/5 bg-white/[0.01] flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center mb-8 border border-gold/10 group-hover:bg-gold/10 transition-colors">
                <Shield className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Pre-Deal Hygiene</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                80% of a deal's value is created before the market knows the business is for sale. We help clean up balance sheets and professionalize management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 border border-white/5 bg-white/[0.01] flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center mb-8 border border-gold/10 group-hover:bg-gold/10 transition-colors">
                <Users className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Equity Story</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We work with promoters to articulate a clear, compelling equity story that resonates with institutional rigor and strategic objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 border border-white/5 bg-white/[0.01] flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center mb-8 border border-gold/10 group-hover:bg-gold/10 transition-colors">
                <Target className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Day 2 Reality</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Transactions are strategic transitions. We ensure the structures are robust enough to withstand post-deal integration and future growth.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
