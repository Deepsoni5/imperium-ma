"use client"

import { motion } from "framer-motion"
import { BookOpen, ExternalLink, FileText, ChevronRight } from "lucide-react"

export default function MethodologyPage() {
    const citations = [
        {
            index: 1,
            source: "Securities and Exchange Board of India - SEBI",
            title: "Board Meeting Files - Jan 2025",
            url: "https://www.sebi.gov.in/sebi_data/meetingfiles/jan-2025/1735725365656_1.pdf",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 2,
            source: "Conventus Law",
            title: "India - SEBI's Final Word On Merchant Bankers Regulations",
            url: "https://conventuslaw.com/report/india-sebis-final-word-on-merchant-bankers-regulations-notification-of-key-amendments/",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 3,
            source: "Maheshwari & Co.",
            title: "SEBI Merchant Banker Rules Amendment 2025 Explained",
            url: "https://www.maheshwariandco.com/blog/sebi-merchant-banker-rules-amendment-2025/",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 4,
            source: "DealStreetAsia",
            title: "Viewpoint: Role of PE in building India's mid-market global champions",
            url: "https://www.dealstreetasia.com/stories/viewpoint-india-mid-market-champions-467557",
            accessed: "January 20, 2026",
            category: "Market Intel"
        },
        {
            index: 5,
            source: "Cyril Amarchand Mangaldas",
            title: "SEBI's final word on Merchant Bankers Regulations",
            url: "https://corporate.cyrilamarchandblogs.com/2025/12/sebis-final-word-on-merchant-bankers-regulations-notification-of-key-amendments/",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 6,
            source: "NBFC Advisor",
            title: "SEBI Issues Stern Warning to Unregistered Investment Advisors",
            url: "https://www.nbfcadvisor.com/blog/detail/sebi-issues-stern-warning-to-unregistered-investment-advisors-are-you-compliant",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 7,
            source: "MSEI",
            title: "SEBI Order in the matter of Unregistered Investment Advisory",
            url: "https://www.msei.in/SX-Content/Circulars/2025/March/Circular-16940.pdf",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 8,
            source: "AMLEGALS",
            title: "SEBI (IA) Regulations, 2013: Registration mandatory for automated advice",
            url: "https://amlegals.com/sebi-ia-regulations-2013-registration-as-investment-adviser-mandatory-for-giving-automated-investment-advise/",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 9,
            source: "Exit Promise",
            title: "Which is Best - Business Broker, M&A Advisor, or Investment Banker?",
            url: "https://exitpromise.com/business-sale-advisor/",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 10,
            source: "KPMG",
            title: "Doing Deals Successfully in India",
            url: "https://assets.kpmg.com/content/dam/kpmg/pdf/2013/10/Doing-Deals-Successfully-in-India-O-201302.pdf",
            accessed: "January 20, 2026",
            category: "Market Intel"
        },
        {
            index: 11,
            source: "CorpBiz",
            title: "Merchant Banker License in India | SEBI Approval Process",
            url: "https://corpbiz.io/merchant-banker-license",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 12,
            source: "SEBI Enforcement",
            title: "Order in the matter of unregistered investment advisory activities",
            url: "https://www.sebi.gov.in/enforcement/orders/nov-2024/order-in-the-matter-of-un",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 13,
            source: "International Bar Association (IBA)",
            title: "India Negotiated M&A Guide",
            url: "https://www.ibanet.org/document?id=NMAIndia",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 14,
            source: "SMV Chambers",
            title: "How to Conduct Legal Due Diligence for M&A in India",
            url: "https://www.smvchambers.com/blog/how-to-conduct-legal-due-diligence-for-mergers-and-acquisitions-in-india",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 15,
            source: "Teji Mandi",
            title: "SEBI Registered vs Unregistered Advisors",
            url: "https://tejimandi.com/blog/tm-learn/sebi-registered-research-analyst-vs-unregistered-advisors",
            accessed: "January 20, 2026",
            category: "Regulatory"
        },
        {
            index: 16,
            source: "Crowe LLP",
            title: "Accelerated Roll-Up Strategies: Opportunities and Risks",
            url: "https://www.crowe.com/insights/accelerated-roll-up-strategies-opportunities-and-risks",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 17,
            source: "Corporate Finance Institute (CFI)",
            title: "Roll Up Strategy - Overview & Practical Example",
            url: "https://corporatefinanceinstitute.com/resources/valuation/roll-up-strategy/",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 18,
            source: "IAG M&A Advisors",
            title: "How to Leverage a Roll-Up Strategy Successfully",
            url: "https://iagmerger.com/leverage-a-roll-up-strategy-successfully/",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 19,
            source: "L40",
            title: "Boutique M&A advisory firms: How to choose the best for your SaaS?",
            url: "https://www.l40.com/insights/boutique-ma-advisory-firm",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 20,
            source: "Translink Corporate Finance",
            title: "India's M&A Momentum: Sector Opportunities & Strategies",
            url: "https://translinkcf.com/2025/09/23/indias-ma-momentum-sector-opportunities-strategies/",
            accessed: "January 20, 2026",
            category: "Market Intel"
        },
        {
            index: 21,
            source: "Dewan P N Chopra & Co",
            title: "Merger & Acquisitions Services",
            url: "https://www.dpncindia.com/services/merger-and-acquisitions",
            accessed: "January 20, 2026",
            category: "Methodology"
        },
        {
            index: 22,
            source: "ANI News (VCCEdge)",
            title: "Inside India's Private Markets: Annual Deals Report 2025",
            url: "https://www.aninews.in/news/business/inside-indias-private-markets-vccedge-and-candle-partners-release-17th-edition-of-indias-dealscape-annual-deals-report-202520260119174307",
            accessed: "January 20, 2026",
            category: "Market Intel"
        },
        {
            index: 23,
            source: "Wall Street Oasis",
            title: "Q&A: Indian Boutique M&A Associate",
            url: "https://www.wallstreetoasis.com/forum",
            accessed: "January 20, 2026",
            category: "Market Intel"
        }
    ]

    return (
        <div className="bg-luxe-black min-h-screen pt-40 pb-20 overflow-hidden">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/5 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <header className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center mx-auto mb-8"
                    >
                        <BookOpen className="text-gold" size={24} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight"
                    >
                        Research <br /><span className="gold-gradient italic">Methodology</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Substantiating the Merzvia Paradigm through clinical analysis of regulatory frameworks, industry trends, and global M&A best practices.
                    </motion.p>
                </header>

                <section className="space-y-16">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-gold text-xs uppercase tracking-[0.5em] font-bold border-b border-gold/20 pb-4 mb-4">Works Cited & Bibliography</h2>

                        <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5">
                            {citations.map((cite, i) => (
                                <motion.div
                                    key={cite.index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-luxe-black p-8 group hover:bg-gold/[0.02] transition-all"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                        <div className="flex-shrink-0 pt-1">
                                            <span className="text-gold/40 font-serif text-lg group-hover:text-gold transition-colors">[{cite.index}]</span>
                                        </div>

                                        <div className="flex-grow space-y-3">
                                            <div className="flex items-center gap-3">
                                                <span className="px-2 py-0.5 border border-white/10 text-[9px] uppercase tracking-widest text-zinc-500 bg-white/5">
                                                    {cite.category}
                                                </span>
                                                <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Accessed {cite.accessed}</span>
                                            </div>

                                            <h3 className="text-white font-serif text-xl leading-snug group-hover:text-gold transition-colors">
                                                {cite.title}
                                            </h3>

                                            <p className="text-zinc-400 text-sm font-light">
                                                {cite.source}
                                            </p>

                                            <a
                                                href={cite.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[11px] underline underline-offset-4 decoration-white/10 hover:decoration-white"
                                            >
                                                View External Resource <ExternalLink size={10} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="mt-32 pt-16 border-t border-white/5 text-center">
                    <div className="inline-flex items-center gap-3 p-6 bg-white/[0.02] border border-white/5">
                        <FileText className="text-gold" size={20} />
                        <p className="text-zinc-500 text-xs italic leading-relaxed">
                            * This bibliography serves as a substantiation of the strategic positioning and regulatory compliance stated across the Merzvia ecosystem.
                            <br className="hidden md:block" /> All research is audited as of Q1 2026.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
