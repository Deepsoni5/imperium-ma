"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-32 bg-luxe-black relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to Architect <br /> <span className="gold-gradient italic">Your Next Strategic Move?</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
            Join the ranks of global leaders who trust MerzVia for their most critical transactions. Let's discuss your vision and how we can elevate it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-gold hover:bg-gold-muted text-black font-semibold px-12 h-16 text-lg rounded-none group">
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 px-12 h-16 text-lg rounded-none">
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gold-muted/5 blur-[120px] rounded-full" />
    </section>
  )
}
