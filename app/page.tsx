


'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

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
  visible: { transition: { staggerChildren: 0.14 } },
}

const glowHover = {
  whileHover: {
    y: -8,
    boxShadow: '0 25px 70px rgba(99,102,241,0.25)',
    transition: { duration: 0.3 },
  },
}

/* ---------------- Page ---------------- */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const projects = [
    {
      title: 'Shodhavali – Academic Research Platform',
      description:
        'A full-scale academic research platform for publishing and discovering scholarly journals with advanced search and role-based access.',
      tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Aroha Solutions – Corporate Website',
      description:
        'A high-performance, SEO-optimized corporate website built with modern UI and conversion-focused layouts.',
      tags: ['Next.js', 'Tailwind CSS'],
    },
  ]

  const skillsData = [
    {
      icon: '⚛️',
      title: 'Frontend',
      skills: [
        'React & Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Responsive Design',
      ],
    },
    {
      icon: '🔧',
      title: 'Backend',
      skills: [
        'Node.js & Express',
        'MongoDB & PostgreSQL',
        'REST APIs',
        'Authentication',
      ],
    },
    {
      icon: '☁️',
      title: 'DevOps & Tools',
      skills: ['Docker', 'Vercel', 'Git & GitHub', 'Performance Optimization'],
    },
  ]

  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-200">

      {/* ---------------- NAV ---------------- */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-400">
            Anwaar<span className="text-slate-200">.dev</span>
          </span>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-400 transition">
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ---------------- HERO ---------------- */}
      <section className="pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6366f130,transparent_70%)]" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <span className="inline-block px-4 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm border border-indigo-500/20">
              🚀 Full-Stack MERN Developer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-indigo-400">Anwaar Gajdhar</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-xl">
              I design and build scalable, secure, and high-performance web applications
              using React, Next.js, Node.js, and MongoDB — focused on real-world impact.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold shadow-lg shadow-indigo-500/30">
                View Work
              </a>
              <a href="/resume.pdf" download className="px-6 py-3 border border-indigo-400 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition">
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="hidden md:flex justify-center">
            <Image
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="Developer"
              width={320}
              height={320}
              className="rounded-xl border border-white/10 shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section className="py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8"
        >
          {skillsData.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              {...glowHover}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {cat.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    {/* ---------------- PROJECTS ---------------- */}
<section id="projects" className="py-28 bg-black/30">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
      <h2 className="text-4xl font-bold">
        Featured <span className="text-indigo-400">Projects</span>
      </h2>

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-6 py-3
                   bg-indigo-500/10 text-indigo-400 border border-indigo-500/20
                   rounded-full font-medium hover:bg-indigo-500 hover:text-white transition"
      >
        View All Projects <ArrowRight size={18} />
      </Link>
    </div>

    {/* Projects Grid */}
    <motion.div className="grid md:grid-cols-2 gap-8">
      {projects.map((p) => (
        <motion.div
          key={p.title}
          {...glowHover}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur
                     border border-white/10 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              {p.description}
            </p>

            <div className="flex gap-2 flex-wrap">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-indigo-500/10
                             text-indigo-400 rounded-full border border-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card Button */}
          {p.link && (
            <Link
              href={p.link}
              className="mt-6 inline-flex items-center gap-2 text-sm
                         text-indigo-400 hover:text-indigo-300 transition"
            >
              View Project <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">
              👋 About Me
            </span>

            <h2 className="text-4xl font-bold leading-tight">
              Passionate Full-Stack Developer
              <br />
              Turning Ideas Into Scalable Products
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              I’m <strong>Anwaar Gajdhar</strong>, a MERN stack developer dedicated to building
              secure, scalable, and high-performance web applications. I thrive across the entire
              stack — from creating clean and responsive user interfaces to designing robust backend
              APIs and database architectures.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              With hands-on experience in real-world projects, I specialize in modern JavaScript
              frameworks, cloud-ready deployments, and Web3 integrations. My goal is to deliver
              impactful digital solutions that solve real business problems.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold"
              >
                More About Me <ArrowRight size={18} />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-indigo-400 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
  variants={container}
  className="hidden md:grid gap-6"
>
  <motion.div
    variants={fadeUp}
    {...glowHover}
    className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
  >
    <h4 className="text-lg font-semibold mb-2 text-indigo-400">
      Full-Stack Expertise
    </h4>
    <p className="text-sm text-slate-400 leading-relaxed">
      Building complete web solutions from responsive user interfaces to secure,
      scalable backend systems using modern JavaScript technologies.
    </p>
  </motion.div>

  <motion.div
    variants={fadeUp}
    {...glowHover}
    className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
  >
    <h4 className="text-lg font-semibold mb-2 text-indigo-400">
      Real-World Project Experience
    </h4>
    <p className="text-sm text-slate-400 leading-relaxed">
      Hands-on experience delivering production-ready applications with
      performance optimization, authentication, and clean architecture.
    </p>
  </motion.div>

  <motion.div
    variants={fadeUp}
    {...glowHover}
    className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
  >
    <h4 className="text-lg font-semibold mb-2 text-indigo-400">
      Growth & Learning Mindset
    </h4>
    <p className="text-sm text-slate-400 leading-relaxed">
      Continuously exploring new frameworks, tools, and best practices to build
      future-ready digital products.
    </p>
  </motion.div>
</motion.div>

        </motion.div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section
        id="contact"
        className="py-32 text-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great</h2>
        <p className="text-slate-400 mb-8">
          Open to full-time roles, freelance work, and collaborations.
        </p>
        <Link href="/contact" className="px-8 py-3 bg-indigo-500 text-white rounded-lg font-semibold shadow-lg shadow-indigo-500/30">
          Get In Touch
        </Link>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:anwarsmailid@gmail.com" aria-label="Email"><Mail size={18} /></a>
        </div>
        © 2026 Anwaar Gajdhar. All rights reserved.
      </footer>
    </main>
  )
}

