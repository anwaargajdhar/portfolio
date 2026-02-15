'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'

/* ---------------- Types ---------------- */

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  liveUrl: string
  highlights: string[]
}

/* ---------------- Animations ---------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

/* ---------------- Component ---------------- */

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80])


  const projectReveal: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // cinematic smooth easing
      },
    },
  }

  const projectsData: Project[] = [
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
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
      />

      <main className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/30 blur-[120px] rounded-full" />
        </div>

        {/* Header */}
        <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-32 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
              My Projects
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Production-ready, real-world applications crafted with precision and performance in mind.
            </p>
          </motion.div>
        </section>

        {/* Projects */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-4 space-y-40">
            {projectsData.map((project: Project, idx: number) => (
              <motion.div
                key={project.id}
                variants={projectReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3   // triggers when 30% visible
                }}

                className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
              >
                <motion.div
                  style={{ y: yParallax }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                  className="relative h-[420px] rounded-3xl overflow-hidden group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-6 py-3 bg-indigo-500 rounded-full flex items-center gap-2 font-semibold"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </motion.span>
                  </a>
                </motion.div>

                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-gray-400">
                    {project.description}
                  </p>

                  <p className="text-gray-500">
                    {project.longDescription}
                  </p>

                  <ul className="grid grid-cols-2 gap-3 text-sm">
                    {project.highlights.map((h: string) => (
                      <li key={h} className="flex gap-2 text-gray-300">
                        <span className="text-indigo-400">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-wrap gap-3 pt-2"
                  >
                    {project.technologies.map((tech: string) => (
                      <motion.span
                        key={tech}
                        variants={scaleIn}
                        className="px-4 py-1.5 text-xs rounded-full bg-white/10 border border-white/10 backdrop-blur text-indigo-300"
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

        <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-500">
          © 2026 Anwaar Gajdhar. MERN Stack Developer.
        </footer>
      </main>
    </>
  )
}
