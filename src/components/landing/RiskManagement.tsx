"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Users, Percent, Briefcase, HelpCircle, ArrowUpRight } from "lucide-react"

export function RiskManagement() {
    const strategies = [
        {
            title: 'The "Unregulated" Risk & Mitigation',
            subtitle: "Regulatory Resilience",
            description: "Operating outside standard SEBI registration allows for unmatched speed, while our internal rigor ensures clinical safety.",
            items: [
                { label: "Experience as Proxy", text: "Two decades of survival across multiple market cycles serves as the ultimate proof of stability." },
                { label: "Self-Regulation", text: "Voluntary adoption of global KYC and Anti-Money Laundering (AML) checks for institutional trust." },
                { label: "Partner Ecosystem", text: "Collaborating with Big 4 and top-tier law firms to anchor credibility in every deal." }
            ],
            icon: ShieldCheck
        },
        {
            title: 'The "Boutique" vs. "Bank" Narrative',
            subtitle: "Incentive Alignment",
            description: "Why choose Merzvia? Because big banks need the billion-dollar deal. We need your deal.",
            items: [
                { label: "Senior Partner Direct", text: "We guarantee Senior Partner involvement from start to finish, not junior analyst processing." },
                { label: "Value Creation Merit", text: "Banks profit on transaction volume; we profit on the actual value created for the promoter." },
                { label: "Unwavering Focus", text: "A pure-play advisory model free from the 'Chinese Walls' of large financial institutions." }
            ],
            icon: Users
        },
        {
            title: "Fee Structure Transparency",
            subtitle: "Transparent Economics",
            description: "Building trust through a milestone-based structure that aligns our success purely with yours.",
            items: [
                { label: "Retainer Commitment", text: "A modest monthly fee ensures mutual dedicated commitment and coverage of operational costs." },
                { label: "Success-Weighted", text: "Backend-weighted fees (2-4% of EV) align our team's incentives with your ultimate exit outcome." },
                { label: "Ratchet Mechanism", text: "Higher percentage fees for exceeding valuation targets, rewarding exceptional performance." }
            ],
            icon: Percent
        }
    ]

    return (
        <section className="py-32 bg-luxe-charcoal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="w-8 h-px bg-gold" />
                        <span className="text-gold text-xs uppercase tracking-[0.4em]">Security & Transparency</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8"
                    >
                        Risk Management & <br /> <span className="gold-gradient italic">Strategic Moats</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 text-lg font-light leading-relaxed"
                    >
                        In the high-stakes world of mid-market transactions, our defensive strategies are as robust as our offensive maneuvers. We provide transparency where others provide complexity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {strategies.map((strategy, idx) => (
                        <motion.div
                            key={strategy.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 bg-luxe-black border border-white/5 flex flex-col hover:border-gold/20 transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold transition-all duration-500">
                                <strategy.icon className="text-gold group-hover:text-black transition-colors" size={24} />
                            </div>

                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{strategy.title}</h3>
                            <p className="text-gold/60 text-[10px] uppercase tracking-widest font-bold mb-6">{strategy.subtitle}</p>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
                                {strategy.description}
                            </p>

                            <div className="space-y-6 mt-auto">
                                {strategy.items.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</h4>
                                            <p className="text-zinc-500 text-[11px] leading-relaxed italic">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Narrative Accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-gold/5 rounded-2xl border border-gold/10">
                            <Briefcase className="text-gold" size={32} />
                        </div>
                        <div>
                            <p className="text-white text-xl font-serif italic mb-1">"The Big Banks need the Billion Dollar Deal. We need Your Deal."</p>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest">The Merzvia Commitment</p>
                        </div>
                    </div>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                        View Fee Transparency Disclosure <ArrowUpRight size={14} />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
