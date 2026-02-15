
'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  Github,
  Linkedin,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

/* ---------------- Animations ---------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

/* ---------------- Page ---------------- */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setSubmitted(false), 4000)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-200">

      {/* ---------------- NAV ---------------- */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </nav>

      {/* ---------------- HERO ---------------- */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6366f130,transparent_70%)]" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm border border-indigo-500/20 mb-6"
          >
            📬 Contact
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Let’s <span className="text-indigo-400">Connect</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Have a project, idea, or opportunity in mind?  
            I’m always open to meaningful conversations.
          </motion.p>
        </motion.div>
      </section>

      {/* ---------------- CONTACT GRID ---------------- */}
      <section className="py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10"
        >

          {/* -------- LEFT INFO -------- */}
          <motion.div variants={fadeUp} className="space-y-6">

            {/* Email */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Mail className="text-indigo-400 mb-3" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-slate-400 text-sm">
                anwarsmailid@gmail.com
              </p>
            </div>

            {/* Phone + WhatsApp */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Phone className="text-indigo-400 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Phone / WhatsApp</h3>
              <p className="text-slate-300 font-medium mb-4">
                +91 91745 12319
              </p>

              <div className="flex gap-3">
                <a
                  href="tel:+919174512319"
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-semibold"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/919174512319"
                  target="_blank"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold flex items-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="text-indigo-400 mb-3" />
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-slate-400 text-sm">
                Indore & Dewas · Remote Friendly
              </p>
            </div>
          </motion.div>

          {/* -------- FORM -------- */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-indigo-500 outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-indigo-500 outline-none"
                />
              </div>

              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-indigo-500 outline-none"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-indigo-500 outline-none resize-none"
              />

              {submitted && (
                <p className="text-green-400 text-sm">
                  ✅ Message sent successfully!
                </p>
              )}

              <button
                disabled={loading}
                className="w-full py-3 bg-indigo-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-indigo-600 transition"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/anwaargajdhar"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/anwaar-gajdhar-anwaar-gajdhar-234bb5233/"><Linkedin size={18} /></a>
          <a href="mailto:anwarsmailid@gmail.com"><Mail size={18} /></a>
        </div>
        © 2026 Anwaar Gajdhar. All rights reserved.
      </footer>
    </main>
  )
}
