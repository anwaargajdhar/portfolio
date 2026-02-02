'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
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
      title: 'E-Commerce Platform',
      description:
        'End-to-end MERN e-commerce application implementing secure user authentication, real-time inventory tracking, Stripe payments, order management, and an admin dashboard for products, users, and sales monitoring.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Web3 DeFi Dashboard',
      description:
        'Blockchain-powered dashboard with wallet integration and live smart contract data.',
      tags: ['React', 'Web3.js', 'Solidity', 'Ethereum'],
    },
  ]

  const skillsData = [
    {
      id: 1,
      icon: '⚛️',
      title: 'Frontend',
      skills: [
        'React & Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Redux & Zustand',
        'Framer Motion',
        'Responsive Design',
      ],
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Backend',
      skills: [
        'Node.js & Express',
        'MongoDB & PostgreSQL',
        'REST & GraphQL APIs',
        'Authentication',
        'Redis & Caching',
        'Microservices',
      ],
    },
    {
      id: 3,
      icon: '☁️',
      title: 'DevOps & Tools',
      skills: [
        'Docker & Kubernetes',
        'AWS & Vercel',
        'CI/CD Pipelines',
        'Git & GitHub',
        'Testing',
        'Performance Optimization',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ---------------- NAV ---------------- */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">DevFolio</span>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary">
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
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
              🚀 MERN Stack Developer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold">
              Building the Future of Web
            </h1>

            <p className="text-muted-foreground text-lg">
              Full-stack MERN developer specializing in building scalable, high-performance web applications with clean architectures, secure APIs, and modern Web3 integrations for real-world use cases.
            </p>


            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
              >
                View Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hidden md:flex h-96 rounded-2xl bg-primary/10 border border-border items-center justify-center"
          >
            <img
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="Developer animation"
              className="w-72"
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
              key={cat.id}
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

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((p: any) => (
              <motion.div
                key={p.title}
                variants={scaleIn}
                className="p-8 rounded-xl border border-border bg-card"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {p.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((tag: any) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mt-12 text-primary font-semibold"
          >
            View All <ArrowRight />
          </Link>
        </div>
      </section>


      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-24 ">
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

            <p className="text-muted-foreground leading-relaxed">
              I’m a MERN stack developer focused on building scalable, secure, and
              high-performance web applications. I enjoy working across the entire
              stack — from crafting clean and responsive user interfaces to designing
              robust backend APIs and database architectures.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in real-world projects, I specialize in modern
              JavaScript frameworks, cloud-ready deployments, and Web3 integrations.
              My goal is to create impactful digital solutions that solve real
              business problems.
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
              >
                More About Me <ArrowRight size={18} />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold"
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




      {/* ---------------- CONTACT ---------------- */}
      <section
        id="contact"
        className="py-28 text-center bg-gradient-to-r from-primary/10 to-accent/10"
      >
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>
          <p className="text-muted-foreground mb-8">
            Open to new opportunities and collaborations.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:anwarsmailid@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        © 2026 MERN Developer. All rights reserved.
      </footer>
    </main>
  )
}
