'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

/* ---------------- Animations ---------------- */
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/* ---------------- Page ---------------- */
export default function ProjectsPage() {
  /* Scroll progress */
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -40])

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform built with the MERN stack, featuring real-time inventory management and Stripe payments.',
      longDescription:
        'Includes authentication, role-based access, product filtering, cart, orders, admin dashboard, and scalable backend services.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'Real-time inventory',
        'Stripe payments',
        'Admin dashboard',
        'Email notifications',
      ],
    },
    {
      id: 2,
      title: 'Web3 DeFi Dashboard',
      description:
        'A DeFi dashboard interacting with Ethereum smart contracts and tracking crypto portfolios.',
      longDescription:
        'Supports wallet connection, token prices, swaps, and portfolio analytics using Web3 technologies.',
      technologies: ['React', 'Web3.js', 'Solidity', 'Ethereum'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'MetaMask integration',
        'Live token prices',
        'Smart contract calls',
        'Gas optimization',
      ],
    },
    {
      id: 3,
      title: 'Real-Time Collaboration Tool',
      description:
        'Google Docs–like collaboration tool with real-time syncing and presence tracking.',
      longDescription:
        'Uses WebSockets for live editing, version history, comments, and conflict resolution.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: ['Live editing', 'Cursor tracking', 'Version history', 'Comments'],
    },
  ]

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-50"
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground"
      >
        {/* Header */}
        <nav className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              My <span className="text-primary">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-xl text-muted-foreground max-w-3xl"
            >
              Production-ready projects showcasing full-stack, Web3,
              and real-time systems.
            </motion.p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 space-y-28">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`grid md:grid-cols-2 gap-14 items-center ${
                  idx % 2 === 1
                    ? 'md:[&>*:first-child]:order-2'
                    : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  style={{ y: yParallax }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                  className="h-80 rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                >
                  <span className="text-7xl">🚀</span>
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">{project.title}</h2>

                  <p className="text-muted-foreground">{project.description}</p>
                  <p className="text-muted-foreground">
                    {project.longDescription}
                  </p>

                  <ul className="grid grid-cols-2 gap-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={scaleIn}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex gap-4 pt-4">
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>

                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-semibold"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
          © 2024 MERN Developer. All rights reserved.
        </footer>
      </motion.main>
    </>
  )
}