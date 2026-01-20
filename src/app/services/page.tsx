"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Layers, FileSearch, ShieldCheck, Scale, Globe, Target, Zap } from "lucide-react"

export default function ServicesPage() {
    return (
        <div className="bg-luxe-black text-white pt-32 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gold/80">Expertise & Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tight"
                    >
                        Sophisticated <br /> <span className="gold-gradient italic font-normal">Service Pillars</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-xl font-light leading-relaxed max-w-2xl"
                    >
                        We provide precision-engineered advisory for high-stakes corporate transitions, specifically designed for India's ambitious Mid-Market.
                    </motion.p>
                </div>

                {/* Pillar 1: M&A Advisory */}
                <section className="mb-40">
                    <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
                        <div className="lg:w-1/2">
                            <span className="text-gold text-xs uppercase tracking-[0.4em] block mb-4">Service Pillar 1</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                                M&A Advisory <br />
                                <span className="gold-gradient italic">(Sell-Side & Buy-Side)</span>
                            </h2>
                            <p className="text-zinc-300 text-2xl font-light italic border-l-2 border-gold/30 pl-6 py-2">
                                "Precision Execution for Defining Corporate Moments"
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-zinc-400 text-lg font-light leading-relaxed pt-8">
                                Merzvia levels the playing field in complex transactions. Whether you are liquidating a legacy or building an empire, our advisory is rooted in deep market intelligence and value defense.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {/* Sell-Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 border border-white/5 bg-white/[0.01] rounded-2xl group hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10">
                                    <Briefcase className="text-gold" size={24} />
                                </div>
                                <h3 className="text-2xl font-serif text-white">Sell-Side Advisory</h3>
                            </div>
                            <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                                Selling a business is the crystallization of a lifetime of work. We manage information asymmetry to ensure you capture true enterprise value.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "The 'Blind' Process", desc: "Strict confidentiality using 'Teasers' that keep your identity protected until buyers are fully vetted." },
                                    { title: "Global Discovery", desc: "Targeting strategic buyers across Europe and North America looking for Indian expansion." },
                                    { title: "Value Defense", desc: "Presenting 'Adjusted EBITDA' to showcase the true earning power of your business." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                                        <div>
                                            <p className="text-white text-sm font-medium mb-1">{item.title}</p>
                                            <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Buy-Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-10 border border-white/5 bg-white/[0.01] rounded-2xl group hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10">
                                    <TrendingUp className="text-gold" size={24} />
                                </div>
                                <h3 className="text-2xl font-serif text-white">Buy-Side Advisory</h3>
                            </div>
                            <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                                For Indian corporates looking to grow inorganically, acquisition is a powerful but risky tool. We bring healthy skepticism to every deal.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Target Mapping", desc: "We map the entire sector to find 'off-market' targets that aren't officially for sale, avoiding bidding wars." },
                                    { title: "Synergy Validation", desc: "We rigorously test logistics and cross-selling assumptions to ensure you don't overpay." },
                                    { title: "Risk Mitigation", desc: "Identifying hidden liabilities and cultural misalignments before they become post-deal crises." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                                        <div>
                                            <p className="text-white text-sm font-medium mb-1">{item.title}</p>
                                            <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Pillar 2: Roll-Up Strategies */}
                <section className="mb-40 bg-zinc-900/50 p-12 lg:p-20 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px]" />
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <span className="text-gold text-xs uppercase tracking-[0.4em] block mb-4">Service Pillar 2</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                                Corporate <br /> Roll-Up <br /> Strategies
                            </h2>
                            <div className="flex items-center gap-2 text-gold">
                                <Layers size={20} />
                                <span className="text-sm uppercase tracking-widest font-medium">The Power of Consolidation</span>
                            </div>
                        </div>

                        <div className="lg:w-2/3 space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif text-white italic gold-gradient">The Merzvia Roll-Up Engine</h3>
                                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                                    In fragmented industries, value is created through consolidation. Merzvia acts as your <span className="text-white italic">Outsourced Corporate Development Office</span>, providing a programmatic approach to scaling.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10">
                                        <Zap className="text-gold" size={18} />
                                    </div>
                                    <h4 className="text-white font-medium">Standardized Playbook</h4>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        We develop standardized LOIs, DD checklists, and integration plans that allow you to close acquisitions in 60 days rather than 6 months.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10">
                                        <Target className="text-gold" size={18} />
                                    </div>
                                    <h4 className="text-white font-medium">Cultural Integration</h4>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        We assess "Founder Dependency" and structure Earn-Outs that keep key talent motivated for years post-acquisition.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillar 3: Transaction Structuring */}
                <section className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
                        <div className="lg:w-1/2">
                            <span className="text-gold text-xs uppercase tracking-[0.4em] block mb-4">Service Pillar 3</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                                Transaction Structuring & Facilitation
                            </h2>
                            <p className="text-zinc-300 text-2xl font-light italic border-l-2 border-gold/30 pl-6 py-2">
                                "Beyond the Handshake"
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-zinc-400 text-lg font-light leading-relaxed pt-8">
                                A deal is a complex web of tax, legal, and regulatory considerations. We act as the Transaction Manager, coordinating every workstream to ensure a timely and efficient close.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileSearch,
                                title: "Tax & Structure Efficiency",
                                desc: "Strategic advice on commercial implications of Slump Sales vs. Share Sales vs. Demergers within the Income Tax Act framework."
                            },
                            {
                                icon: Scale,
                                title: "The 'Bad Cop' Role",
                                desc: "We take on the tough negotiations on valuation and indemnities, allowing principals to preserve goodwill for post-deal collaboration."
                            },
                            {
                                icon: Globe,
                                title: "VDR & DD Management",
                                desc: "Pre-screening every document in the Virtual Data Room, anticipating buyer queries, and preparing management for confidence."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-white/5 bg-white/[0.01] hover:bg-gold/[0.02] transition-colors flex flex-col items-start"
                            >
                                <feature.icon className="text-gold mb-6" size={28} />
                                <h4 className="text-white font-medium mb-3">{feature.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
