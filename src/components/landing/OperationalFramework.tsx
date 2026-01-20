"use client"

import { motion } from "framer-motion"
import { ShieldAlert, BarChartHorizontal, Lock, CheckCircle2 } from "lucide-react"

export function OperationalFramework() {
    const frameworks = [
        {
            id: "01",
            title: 'The "Pre-Deal Hygiene" Protocol',
            subtitle: "Mock Diligence Process",
            description: 'Merzvia executes a rigorous "Mock Diligence" process before taking any client to market, proactively addressing discrepancies that lead to deal collapses.',
            points: [
                { label: "RPT Benchmarking", text: "Identifying and arm's-length benchmarking all Related Party Transactions." },
                { label: "Statutory Readiness", text: "Ensuring PF, ESI, and GST filings are clinical and up to date." },
                { label: "Asset Title Verification", text: "Verifying land and IP titles are held at the corporate level." }
            ],
            icon: ShieldAlert
        },
        {
            id: "02",
            title: "Valuation Methodology",
            subtitle: "Commercial Guidance",
            description: "We provide Commercial Valuation Guidance focused on real-world market dynamics rather than purely theoretical models.",
            points: [
                { label: "Comparable Transaction Multiples", text: "Moving beyond DCF to focus on clinical 'Comp Sets' and market data." },
                { label: "The 'India Growth Premium'", text: "Quantifying the specific premium India-based assets command globally." },
                { label: "Governance Discount Analysis", text: "Advising on value impacts due to internal control weaknesses." }
            ],
            icon: BarChartHorizontal
        },
        {
            id: "03",
            title: "Compliance Firewalling",
            subtitle: "Internal Protocols",
            description: "To maintain our non-regulated status and protect client interests, we enforce strict internal compliance firewalls.",
            points: [
                { label: "No Handling of Funds", text: "Merzvia never acts as an escrow agent or holds client funds." },
                { label: "No Public Solicitation", text: "All mandates are private treaty with no public marketing of securities." },
                { label: "Strict Disclaimer Usage", text: "Clear documentation that Merzvia acts as a strategic advisor only." }
            ],
            icon: Lock
        }
    ]

    return (
        <section className="py-32 bg-luxe-black relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="w-8 h-px bg-gold" />
                        <span className="text-gold text-xs uppercase tracking-[0.4em]">Operational Framework</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-white leading-tight"
                    >
                        The Mechanics <br /> <span className="gold-gradient italic">of Delivery</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl mt-6 font-light"
                    >
                        Substantiating our advisory through rigorous internal methodologies that ensure high-quality service delivery and clinical execution.
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {frameworks.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 p-10 lg:p-16 border border-white/5 bg-white/[0.01] hover:bg-gold/[0.01] transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-7xl font-serif text-white/[0.03] group-hover:text-gold/5 transition-colors duration-700">{item.id}</span>
                            </div>

                            <div className="lg:col-span-4">
                                <div className="w-14 h-14 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10 mb-8">
                                    <item.icon className="text-gold" size={28} />
                                </div>
                                <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                                <p className="text-gold/60 text-xs uppercase tracking-widest mb-6 font-medium">{item.subtitle}</p>
                                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>

                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-1 gap-6 pt-4 lg:pt-0">
                                <div className="space-y-6">
                                    {item.points.map((point, i) => (
                                        <div key={i} className="flex gap-4 group/point">
                                            <div className="mt-1.5 flex-shrink-0">
                                                <CheckCircle2 className="text-gold/40 group-hover/point:text-gold transition-colors" size={18} />
                                            </div>
                                            <div className="pb-6 border-b border-white/[0.05] w-full group-hover/point:border-gold/20 transition-colors">
                                                <h4 className="text-white text-sm font-medium mb-1 tracking-wide uppercase">{point.label}</h4>
                                                <p className="text-zinc-500 text-xs leading-relaxed">{point.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
