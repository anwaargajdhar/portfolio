// 'use client'

// import React from "react"

// import { FaWhatsapp } from 'react-icons/fa'
// import { useState } from 'react'
// import Link from 'next/link'
// import { ArrowLeft, Mail, Phone, MapPin, Send, Loader } from 'lucide-react'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   })
//   const [loading, setLoading] = useState(false)
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       // Simulate form submission
//       await new Promise((resolve) => setTimeout(resolve, 1500))
//       setSubmitted(true)
//       setFormData({ name: '', email: '', subject: '', message: '' })
//       setTimeout(() => setSubmitted(false), 5000)
//     } catch (error) {
//       console.error('Error submitting form:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <main className="min-h-screen bg-background text-foreground">
//       {/* Header */}
//       <nav className="border-b border-border bg-background/95 backdrop-blur">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <Link
//             href="/"
//             className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             Back to Home
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
//             Get In <span className="text-primary">Touch</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl text-balance">
//             Have a project in mind or want to discuss opportunities? I'd love to hear from you. Reach out using the form below or contact me directly.
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {/* Contact Info */}
//             <div className="md:col-span-1 space-y-8">
//               <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
//                 <div className="flex items-center gap-4 mb-4">
//                   <Mail size={24} className="text-primary" />
//                   <h3 className="text-xl font-bold">Email</h3>
//                 </div>
//                 <p className="text-muted-foreground mb-2">anwarsmailid.com</p>
//                 <p className="text-sm text-muted-foreground">I'll get back to you within 24 hours</p>
//               </div>

//               <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-card to-primary/5 hover:border-primary transition-all duration-300 hover:shadow-lg">
//                 {/* Header */}
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
//                     <Phone size={22} />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Phone & WhatsApp</h3>
//                     <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
//                   </div>
//                 </div>

//                 {/* Number */}
//                 <p className="text-lg font-semibold tracking-wide mb-6">
//                   +91&nbsp;91745&nbsp;12319
//                 </p>

//                 {/* Actions */}
//                 <div className="flex flex-wrap gap-4">
//                   {/* Call Button */}
//                   <a
//                     href="tel:+919174512319"
//                     className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
//                   >
//                     <Phone size={18} />
//                     Call Now
//                   </a>

//                   {/* WhatsApp Button */}
//                   <a
//                     href="https://wa.me/919174512319?text=Hi%20Anwaar,%20I%20visited%20your%20portfolio"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-5 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all"
//                   >
//                     <FaWhatsapp size={20} />
//                     WhatsApp
//                   </a>
//                 </div>

//                 {/* Availability */}
//                 <p className="text-sm text-muted-foreground mt-6">
//                   🕒 Available Mon–Fri · 9AM–6PM IST
//                 </p>
//               </div>



//               <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
//                 <div className="flex items-center gap-4 mb-4">
//                   <MapPin size={24} className="text-primary" />
//                   <h3 className="text-xl font-bold">Location</h3>
//                 </div>
//                 <p className="text-muted-foreground mb-2">Indore and Dewas </p>
//                 <p className="text-sm text-muted-foreground">Remote work available</p>
//               </div>

//               {/* Social Links */}
//               <div className="p-8 rounded-xl border border-border bg-card">
//                 <h3 className="text-xl font-bold mb-4">Follow Me</h3>
//                 <div className="space-y-3">
//                   <a
//                     href="https://github.com/anwaargajdhar"
//                     className="block text-primary hover:text-primary/80 transition-colors font-semibold"
//                   >
//                     GitHub →
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/anwaar-gajdhar-anwaar-gajdhar-234bb5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//                     className="block text-primary hover:text-primary/80 transition-colors font-semibold"
//                   >
//                     LinkedIn →
//                   </a>

//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="md:col-span-2">
//               <form onSubmit={handleSubmit} className="p-8 rounded-xl border border-border bg-card space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-semibold mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-semibold mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                       placeholder="you@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-semibold mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                     placeholder="What is this about?"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-semibold mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
//                     placeholder="Tell me about your project or inquiry..."
//                   />
//                 </div>

//                 {submitted && (
//                   <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 rounded-lg">
//                     Thank you for your message! I'll get back to you soon.
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader size={20} className="animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={20} />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
//             Frequently Asked <span className="text-primary">Questions</span>
//           </h2>

//           <div className="space-y-6">
//             {[
//               {
//                 question: 'What is your typical project timeline?',
//                 answer:
//                   'Project timelines vary based on scope and complexity. Typically, small projects (5-10 days), medium projects (2-4 weeks), and large projects (1-3 months). I provide detailed estimates after initial consultation.',
//               },
//               {
//                 question: 'Do you offer maintenance and support after project completion?',
//                 answer:
//                   'Yes, I offer comprehensive post-launch support including bug fixes, updates, and performance optimization. We can discuss maintenance packages tailored to your needs.',
//               },
//               {
//                 question: 'What is your rate structure?',
//                 answer:
//                   'I offer flexible engagement models: hourly rates, fixed project pricing, or retainer-based support. Rates vary based on project complexity and scope. Contact me for a customized quote.',
//               },
//               {
//                 question: 'Can you work with existing codebases?',
//                 answer:
//                   'Absolutely! I have extensive experience with legacy system modernization, technical debt reduction, and integrating new features into existing applications.',
//               },
//               {
//                 question: 'Do you work with international clients?',
//                 answer:
//                   'Yes, I regularly work with clients worldwide. I have experience across different time zones and can coordinate effectively with distributed teams.',
//               },
//               {
//                 question: 'What is your communication style?',
//                 answer:
//                   'I believe in clear, regular communication. I provide weekly updates, encourage feedback, and maintain transparency throughout the project lifecycle.',
//               },
//             ].map((faq, idx) => (
//               <div key={idx} className="p-6 rounded-xl border border-border bg-card">
//                 <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
//                 <p className="text-muted-foreground">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* Footer */}
//       <footer className="border-t border-border bg-background/50 backdrop-blur mt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-muted-foreground text-sm">
//           <p>&copy;  2026 Anwaar Gajdhar. MERN Stack Developer. All rights reserved.
// </p>
          
//         </div>
//       </footer>
//     </main>
//   )
// }



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
