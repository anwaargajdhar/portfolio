'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
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
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -40])

  const projectsData = [
    {
      id: 1,
      title: 'Shodhavali – Academic Research Platform',
      description:
        'A research-focused platform for publishing, discovering, and managing academic journals.',
      longDescription:
        'Shodhavali is a comprehensive academic research platform designed for researchers and institutions.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      image: '/project/shodhavali.png',
      liveUrl: 'https://www.shodhavali.com/',
      highlights: [
        'Academic journal management',
        'Research paper submissions',
        'Advanced search',
        'Responsive UI',
      ],
    },
    {
      id: 2,
      title: 'Aroha Solutions – Corporate Website',
      description:
        'A professional corporate website showcasing IT services and solutions.',
      longDescription:
        'Modern, fast, and SEO-optimized corporate website with clean UI.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      image: '/project/aroha.png',
      liveUrl: 'https://arohasolution.com/',
      highlights: [
        'Corporate branding',
        'Service-focused layout',
        'SEO optimized',
        'Fast performance',
      ],
    },
    {
      id: 3,
      title: 'HomeNTor – Home Services Platform',
      description:
        'A platform for discovering and booking trusted home services.',
      longDescription:
        'Users can browse services, view provider profiles, and request assistance easily.',
      technologies: ['React', 'Next.js', 'CSS'],
      image: '/project/homentor.png',
      liveUrl: 'https://homentor.in/',
      highlights: [
        'Service listings',
        'Booking flow',
        'Mobile-first UI',
        'Clean UX',
      ],
    },
  ]

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-50"
      />

      <motion.main className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <nav className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Production-ready real-world projects.
            </p>
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
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-14 items-center ${
                  idx % 2 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image with Hover Overlay */}
                <motion.div
                  style={{ y: yParallax }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                  className="relative h-80 rounded-2xl overflow-hidden border border-border shadow-lg group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  {/* Hover Overlay */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                  >
                    <span className="text-white font-semibold text-lg flex items-center gap-2">
                      <ExternalLink size={18} />
                      View Project
                    </span>
                  </a>
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground">
                    {project.longDescription}
                  </p>

                  <ul className="grid grid-cols-2 gap-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-primary">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={scaleIn}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
          © 2026 Anwaar Gajdhar. MERN Stack Developer. All rights reserved.

        </footer>
      </motion.main>
    </>
  )
}
