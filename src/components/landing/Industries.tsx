"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const industries = [
    {
        name: "Technology & SaaS",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
        name: "Healthcare & Biotech",
        image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg"
    },
    {
        name: "Manufacturing",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Consumer Goods",
        image: "https://plus.unsplash.com/premium_photo-1663089525424-ca57c1a28a08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3VtZXIlMjBnb29kc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Financial Services",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Renewable Energy",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    },
]

export function Industries() {
    return (
        <section className="py-24 bg-luxe-black border-y border-white/5 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -mr-64 -mt-64" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
                    >
                        Sectors of Excellence
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-white mb-6"
                    >
                        Industries <span className="gold-gradient italic">We Transform</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gold mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
                        >
                            <Image
                                src={industry.image}
                                alt={industry.name}
                                fill
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <h4 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300">
                                    {industry.name}
                                </h4>
                                <div className="w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500 mt-4 opacity-70" />
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 -mr-8 -mt-8 rotate-45 group-hover:bg-gold/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
