"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

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
  ].map((link) => ({
    ...link,
    href:
      link.href.startsWith("#") && pathname !== "/"
        ? `/${link.href}`
        : link.href,
  }))

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 h-20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="relative w-48 md:w-64 h-full group">
          <Image
            src="/final_logo.png"
            alt="MerzVia Logo"
            width={300}
            height={120}
            className="absolute top-[57%] -translate-y-1/2 left-0 h-20 md:h-32 w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            priority
          />
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
          <Link href="/contact">
            <Button className="bg-gold hover:bg-gold-muted text-black font-semibold px-6 rounded-none">
              Get Consultation
            </Button>
          </Link>
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
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="bg-gold hover:bg-gold-muted text-black font-semibold w-full rounded-none">
              Get Consultation
            </Button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  )
}
