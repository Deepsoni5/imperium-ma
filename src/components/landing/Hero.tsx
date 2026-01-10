"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with subtle motion */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-luxe-black via-luxe-black/50 to-luxe-black z-10" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          />
        </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-muted/5 blur-[120px] rounded-full z-0" />

      <div className="container max-w-7xl mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/80">
            Global M&A Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight"
        >
          The Architectural Force <br />
          <span className="gold-gradient italic font-normal">Behind Your Legacy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Aurelius Capital orchestrates high-stakes M&A transactions for the world's most ambitious enterprises. Precision, discretion, and unparalleled strategic advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-30"
        >
          <Button size="lg" className="bg-gold hover:bg-gold-muted text-black font-semibold px-10 h-16 text-lg rounded-none group transition-all duration-300">
            Explore Transactions
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <button className="flex items-center gap-4 text-white hover:text-gold transition-colors font-medium tracking-wide group">
            <span className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all">
              <Play className="fill-white group-hover:fill-gold transition-all" size={20} />
            </span>
            Watch Our Vision
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
      </motion.div>
    </section>
  )
}
