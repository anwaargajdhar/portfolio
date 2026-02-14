'use client'

import { motion, type Variants,AnimatePresence  } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { FaLaptopCode, FaServer, FaCloud } from "react-icons/fa"
import { useState, useEffect } from 'react'

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

/* ---------------- Skills Animations ---------------- */

const containerskill: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const fadeUpskill: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const glowHoverskill = {
  whileHover: {
    scale: 1.05,
    boxShadow: '0 0 30px rgba(99,102,241,0.5)',
  },
}

/* ---------------- Project Slide ---------------- */

const slideVariant = (direction: 'left' | 'right'): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -130 : 130,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
})

/*   hero aniamtion ai ---*/

const fromTop: Variants  = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const fromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
}

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
}

const fromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
}


/* ---------------- Page ---------------- */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /* ✅ FIXED Rain Drops (Client Only) */
  const [drops, setDrops] = useState<
    { left: string; delay: string; duration: string }[]
  >([])

  useEffect(() => {
    const generated = Array.from({ length: 80 }).map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${0.7 + Math.random()}s`,
    }))
    setDrops(generated)
  }, [])

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
      icon: <FaLaptopCode className="animate-bounce text-indigo-400" />,
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
      icon: <FaServer className="animate-pulse text-green-400" />,
      title: 'Backend',
      skills: [
        'Node.js & Express',
        'MongoDB & PostgreSQL',
        'REST APIs',
        'Authentication',
      ],
    },
    {
      icon: <FaCloud className="animate-spin text-blue-400" />,
      title: 'DevOps & Tools',
      skills: ['Docker', 'Vercel', 'Git & GitHub', 'Performance Optimization'],
    },
  ]

  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-200">

      {/* NAV */}
     <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="text-2xl font-bold tracking-wide cursor-pointer"
    >
      <span className="text-indigo-400">Anwaar</span>
      <span className="text-slate-200">.dev</span>
    </motion.span>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-10 text-sm font-medium">
      {navLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          whileHover={{ y: -2 }}
          className="relative text-slate-300 hover:text-white transition-colors duration-300 group"
        >
          {link.name}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
        </motion.a>
      ))}
    </div>

    {/* Mobile Button */}
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden text-slate-200"
    >
      {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
    </motion.button>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
      >
        <div className="flex flex-col items-center py-6 gap-6 text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>


      {/* HERO */}
      <section className="pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6366f130,transparent_70%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">

            {/* Badge */}
            <motion.span
              variants={fromTop}
              className="inline-block px-4 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm border border-indigo-500/20"
            >
              🚀 Full-Stack MERN Developer
            </motion.span>

            {/* Heading from TOP */}
            <motion.h1
              variants={fromTop}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Hi, I’m <span className="text-indigo-400">Anwaar Gajdhar</span>
            </motion.h1>

            {/* Paragraph from BOTTOM */}
            <motion.p
              variants={fromBottom}
              className="text-slate-400 text-lg max-w-xl"
            >
              I design and build scalable, secure, and high-performance web applications
              using React, Next.js, Node.js, and MongoDB.
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.a
                variants={fromLeft}
                href="#projects"
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold shadow-lg shadow-indigo-500/30"
              >
                View Work
              </motion.a>

              <motion.a
                variants={fromRight}
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-indigo-400 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition"
              >
                Resume
              </motion.a>
            </div>
          </div>

          <motion.div
            variants={fromBottom}
            className="hidden md:flex justify-center"
          >
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


      {/* ---------------- about ---------------- */}

      <section id="about" className="py-28 relative overflow-hidden  z-0">
        {/* Background Animated Squares */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bg-indigo-500/20 border border-indigo-500/40 backdrop-blur-sm"
              style={{
                width: `${40 + i * 10}px`,
                height: `${40 + i * 10}px`,
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
            />
          ))}
        </div>

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

      {/* SKILLS with FIXED RAIN */}
      <section className="py-24">
        <motion.div
          variants={containerskill}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8"
        >
          {skillsData.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUpskill}
              {...glowHoverskill}
              className="relative overflow-hidden p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
            >
              {/* Rain Animation (Now inside box only) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {drops.map((drop, i) => (
                  <span
                    key={i}
                    className="rain-drop"
                    style={{
                      left: drop.left,
                      animationDelay: drop.delay,
                      animationDuration: drop.duration,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {cat.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {cat.skills.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="py-28 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
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
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={slideVariant(index % 2 === 0 ? 'left' : 'right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-indigo-500/40 transition-all duration-500 hover:scale-[1.03]"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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

      {/* FOOTER */}
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
