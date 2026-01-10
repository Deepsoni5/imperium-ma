"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"]
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  )

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Transactions", href: "#transactions" },
    { name: "Process", href: "#process" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 py-4 transition-all duration-300"
    >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold flex items-center justify-center text-black font-serif font-bold text-xl rounded-sm group-hover:bg-gold-muted transition-colors">
              I
            </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-serif font-bold tracking-tighter gold-gradient whitespace-nowrap">
                  IMPERIUM M&A
                </span>
              </div>
          </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-gold hover:bg-gold-muted text-black font-semibold px-6 rounded-none">
            Get Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-luxe-black border-b border-white/10 p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-300 hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-gold hover:bg-gold-muted text-black font-semibold w-full rounded-none">
            Get Consultation
          </Button>
        </motion.div>
      )}
    </motion.nav>
  )
}
