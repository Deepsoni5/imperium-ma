"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Factory, HeartPulse, Laptop, ArrowRight } from "lucide-react"

export function SectoralDeepDives() {
    const sectors = [
        {
            title: "Manufacturing & Industrials",
            tagline: '"Make in India" Tailwinds',
            trend: "The Production Linked Incentive (PLI) schemes and the global 'China + 1' strategy are driving M&A in Indian manufacturing.",
            narrative: "Global supply chains are rewiring, and India is the new node. We help Indian component manufacturers—from auto ancillaries to specialty chemicals—find global partners who bring not just capital, but technology and market access.",
            driver: "Outbound M&A where Indian firms acquire European technology firms to move up the value chain.",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Healthcare & Life Sciences",
            tagline: "Institutional Delivery Model",
            trend: "Post-COVID consolidation in hospitals and the rise of single-specialty chains (IVF, Eye Care).",
            narrative: "Healthcare is moving from a 'Doctor-Entrepreneur' model to an 'Institutional Delivery' model. We help standalone hospitals merge into larger networks to survive the capex/opex pressure.",
            driver: "Private Equity rollout of regional hospital chains.",
            icon: HeartPulse,
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Technology & D2C Brands",
            tagline: "Binary Scale Dynamics",
            trend: "The 'Thrasio' model of aggregating D2C brands and the consolidation of SaaS verticals.",
            narrative: "In the digital economy, scale is binary. You are either a platform or a feature. We help niche SaaS players find strategic homes in larger aggregators.",
            driver: "Founder liquidity and the need for growth capital in a 'funding winter' environment.",
            icon: Laptop,
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
        }
    ]

    return (
        <section id="industries" className="py-32 bg-luxe-black relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="w-8 h-px bg-gold" />
                        <span className="text-gold text-xs uppercase tracking-[0.4em]">Sectoral Deep Dives</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-white leading-tight"
                    >
                        Where the <br /> <span className="gold-gradient italic">Opportunities Lie</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl mt-6 font-light"
                    >
                        Leveraging macro-economic trends to demonstrate deep vertical expertise across India's most dynamic sectors.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-luxe-charcoal/50 border border-white/5 hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={sector.image}
                                    alt={sector.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-luxe-charcoal via-transparent to-transparent" />
                                <div className="absolute top-6 right-6">
                                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-gold/90 transition-all duration-500">
                                        <sector.icon className="text-gold group-hover:text-black transition-colors" size={24} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif text-white mb-2">{sector.title}</h3>
                                <p className="text-gold/60 text-xs uppercase tracking-widest mb-6 font-medium italic">{sector.tagline}</p>

                                <div className="space-y-6 mb-8 flex-grow">
                                    <div>
                                        <h4 className="text-white text-[10px] uppercase tracking-tighter mb-2 opacity-40">Macro Trend</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">{sector.trend}</p>
                                    </div>

                                    <div className="p-4 bg-white/[0.02] border-l-2 border-gold/30">
                                        <h4 className="text-gold/80 text-[10px] uppercase tracking-tighter mb-2">The Narrative</h4>
                                        <p className="text-zinc-300 text-xs leading-relaxed italic">{sector.narrative}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-white text-[10px] uppercase tracking-tighter mb-2 opacity-40">Key Deal Driver</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">{sector.driver}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 mt-auto">
                                    <button className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] font-medium group/btn">
                                        Explore Opportunities
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
