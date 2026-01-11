import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-luxe-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/final_logo.png"
                alt="MerzVia Logo"
                width={300}
                height={120}
                className="h-20 md:h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Elite Mergers & Acquisitions firm specializing in high-value corporate transactions and strategic advisory for the global market.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 border border-white/10 hover:border-gold transition-colors text-zinc-400 hover:text-gold">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 border border-white/10 hover:border-gold transition-colors text-zinc-400 hover:text-gold">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Expertise</h4>
            <ul className="space-y-4">
              {["Sell-side M&A", "Buy-side M&A", "Capital Raising", "Valuation Services", "Strategic Advisory"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Team", "Transactions", "Insights", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-zinc-400 hover:text-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-zinc-400">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 90083 67818</span>
              </li>
              <li className="flex gap-3 text-zinc-400">
                <Mail size={18} className="text-gold shrink-0" />
                <span>wecare@merzvia.com</span>
              </li>
              <li className="flex gap-3 text-zinc-400">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>
                  MADHYAVARTI SOLUTIONS PRIVATE LIMITED<br />
                  NO:8, K.NO.13-3, 28TH CROSS,<br />
                  HULIMAVU MAIN ROAD, Hulimavu,<br />
                  Bangalore - 560076, Karnataka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © {currentYear} MerzVia. All rights reserved.
          </p>

          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-zinc-500 hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-zinc-500 hover:text-white transition-colors text-xs">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
