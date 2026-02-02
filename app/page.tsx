'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'
import { useState } from 'react'

/* ---------------- Animation Variants ---------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
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
    <main className="min-h-screen bg-background text-foreground">
      {/* ---------------- NAV ---------------- */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">
            Anwaar<span className="text-foreground">.dev</span>
          </span>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary">
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
      <section className="pt-28 pb-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              🚀 Full-Stack MERN Developer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-primary">Anwaar Gajdhar</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-xl">
              I design and build scalable, secure, and high-performance web applications
              using React, Next.js, Node.js, and MongoDB — focused on real-world impact.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
                View Work
              </a>
              <a href="/resume.pdf" download className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold">
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="hidden md:flex justify-center">
            <Image
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="Developer working illustration"
              width={320}
              height={320}
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section className="py-20">
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
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl border border-border bg-card"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {cat.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeUp} className="space-y-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              👋 About Me
            </span>

            <h2 className="text-4xl font-bold leading-tight">
              Passionate Full-Stack Developer
              <br />
              Turning Ideas Into Scalable Products
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I’m <strong>Anwaar Gajdhar</strong>, a MERN stack developer dedicated to building
              secure, scalable, and high-performance web applications. I thrive across the entire
              stack — from creating clean and responsive user interfaces to designing robust backend
              APIs and database architectures.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              With hands-on experience in real-world projects, I specialize in modern JavaScript
              frameworks, cloud-ready deployments, and Web3 integrations. My goal is to deliver
              impactful digital solutions that solve real business problems.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                More About Me <ArrowRight size={18} />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border items-center justify-center"
          >
            <span className="text-8xl">👨‍💻</span>
          </motion.div>
        </motion.div>
      </section>


      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <motion.div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -6 }}
                className="p-8 rounded-xl border border-border bg-card"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Link href="/projects" className="inline-flex items-center gap-2 mt-12 text-primary font-semibold">
            View All Projects <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section
        id="contact"
        className="py-28 text-center bg-gradient-to-r from-primary/10 to-accent/10"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great</h2>
        <p className="text-muted-foreground mb-8">
          Open to full-time roles, freelance work, and collaborations.
        </p>
        <Link href="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
          Get In Touch
        </Link>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/anwaar-gajdhar-anwaar-gajdhar-234bb5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/posts/viriminfotech_hiringfreshers-joinourteam-2026passout-activity-7424039654674501633-DUNc?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADpgUggBV0i7MTW46c7cIrcluYZxxl3KjRk&utm_campaign=whatsapp" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:anwarsmailid@gmail.com" aria-label="Email"><Mail size={18} /></a>
        </div>
        © 2026 Anwaar Gajdhar. All rights reserved.
      </footer>
    </main>
  )
}
