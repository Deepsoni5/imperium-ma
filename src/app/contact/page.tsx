"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  transactionType: z.string().min(1, { message: "Please specify transaction type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form Submitted:", data)

    toast.success("Inquiry Sent Successfully", {
      description: "Our partner will reach out to you within 24 hours.",
    })

    reset()
    setIsSubmitting(false)
  }

  return (
    <div className="pt-32 pb-20 bg-luxe-black min-h-screen">
      <Toaster position="top-right" richColors theme="dark" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
          >
            Connect With Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-white mb-8"
          >
            Start Your Strategic <br /> <span className="gold-gradient italic">Consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg font-light leading-relaxed"
          >
            Our partners are ready to discuss your objectives with absolute discretion and precision. Reach out to explore how MerzVia can facilitate your next move.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-luxe-charcoal border border-white/5">
                <Phone className="text-gold mb-6" size={24} />
                <h3 className="text-white font-serif text-lg mb-2">Direct Line</h3>
                <p className="text-zinc-400 text-sm font-medium">+91 90083 67818</p>
              </div>
              <div className="p-8 bg-luxe-charcoal border border-white/5">
                <Mail className="text-gold mb-6" size={24} />
                <h3 className="text-white font-serif text-lg mb-2">Email Support</h3>
                <p className="text-zinc-400 text-sm font-medium">wecare@merzvia.com</p>
              </div>
            </div>

            <div className="p-8 bg-luxe-charcoal border border-white/5">
              <MapPin className="text-gold mb-6" size={24} />
              <h3 className="text-white font-serif text-lg mb-4">Our Headquarters</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                MADHYAVARTI SOLUTIONS PRIVATE LIMITED<br />
                NO:8, K.NO.13-3, 28TH CROSS,<br />
                HULIMAVU MAIN ROAD, Hulimavu,<br />
                Bangalore South, Bangalore - 560076, Karnataka
              </p>

              <div className="w-full aspect-video grayscale invert contrast-125 opacity-70 hover:opacity-100 transition-opacity">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7778.901402925576!2d77.607355!3d12.878715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152a98db83ad%3A0x19fef03a9fe461e7!2s8%20k%2C%2013%2C%2028th%20Cross%20Rd%2C%20Raghavendra%20Layout%2C%20Hanuman%20Nagar%2C%20Hanuman%20Nagar%2C%20Hulimavu%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1767703515407!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-10 bg-luxe-charcoal border border-white/5"
          >
            <h2 className="text-3xl font-serif text-white mb-8">Confidential Inquiry</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Full Name</label>
                  <Input
                    {...register("fullName")}
                    className={`bg-luxe-black border-white/10 text-white rounded-none h-12 focus:border-gold transition-colors ${errors.fullName ? "border-red-500" : ""}`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] uppercase tracking-tight">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Email Address</label>
                  <Input
                    {...register("email")}
                    className={`bg-luxe-black border-white/10 text-white rounded-none h-12 focus:border-gold transition-colors ${errors.email ? "border-red-500" : ""}`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-tight">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Phone Number</label>
                  <Input
                    {...register("phone")}
                    className={`bg-luxe-black border-white/10 text-white rounded-none h-12 focus:border-gold transition-colors ${errors.phone ? "border-red-500" : ""}`}
                    placeholder="+91 00000 00000"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] uppercase tracking-tight">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Company Name</label>
                  <Input
                    {...register("companyName")}
                    className={`bg-luxe-black border-white/10 text-white rounded-none h-12 focus:border-gold transition-colors ${errors.companyName ? "border-red-500" : ""}`}
                    placeholder="Acme Corp"
                  />
                  {errors.companyName && <p className="text-red-500 text-[10px] uppercase tracking-tight">{errors.companyName.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Transaction Type</label>
                <Input
                  {...register("transactionType")}
                  className={`bg-luxe-black border-white/10 text-white rounded-none h-12 focus:border-gold transition-colors ${errors.transactionType ? "border-red-500" : ""}`}
                  placeholder="Sell-side / Buy-side / Other"
                />
                {errors.transactionType && <p className="text-red-500 text-[10px] uppercase tracking-tight">{errors.transactionType.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Message</label>
                <Textarea
                  {...register("message")}
                  className={`bg-luxe-black border-white/10 text-white rounded-none min-h-[150px] focus:border-gold transition-colors ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Please describe your inquiry briefly..."
                />
                {errors.message && <p className="text-red-500 text-[10px] uppercase tracking-tight">{errors.message.message}</p>}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-gold hover:bg-gold-muted text-black font-semibold h-16 rounded-none mt-4 group transition-all"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>
                    Send Confidential Inquiry
                    <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
