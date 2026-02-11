


'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-react' 

import { ArrowLeft, Award, Briefcase, BookOpen } from 'lucide-react'

/* ---------------- Animations ---------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
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
    y: -6,
    boxShadow: '0 20px 60px rgba(99,102,241,0.25)',
    transition: { duration: 0.3 },
  },
}

export default function About() {
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'WebBooster, Indore',
      period: 'Jan 2025 – Present',
      description:
        'Worked as a MERN Stack Developer Intern, contributing to real-world web applications and gaining hands-on experience in full-stack development, API integration, and deployment workflows.',
      highlights: [
        'Developed responsive frontend interfaces using React, Next.js, and Tailwind CSS',
        'Built RESTful APIs with Node.js and Express and integrated MongoDB databases',
        'Implemented authentication, role-based access control, and secure API handling',
        'Collaborated with senior developers on real-world client projects and feature enhancements',
        'Improved application performance and code quality through debugging and optimization',
      ],
    },
  ]

  const certifications = [
    { name: 'web-development ', issuer: 'Coding shaala indore ', year: 2024 },
    { name: 'MERN', issuer: 'Udemy', year: 2024 },
    { name: 'Node.js & Backend Development', issuer: 'Coursera', year: 2023 },
    { name: 'HTML CSS BOOTCAMP', issuer: 'EDUCBA', year: 2022 },
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { category: 'DevOps & Tools', items: ['Git', 'CI/CD', 'AWS', 'Linux'] },
  ]

  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-200">

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-7xl mx-auto px-4">
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-indigo-400">Me</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-3xl">
            I'm a passionate full-stack developer with a proven track record of delivering high-quality web applications that solve real-world problems and drive business value.
          </motion.p>
        </motion.div>
      </section>

      {/* Journey */}
      <section className="py-24 bg-black/30">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-12">
            My <span className="text-indigo-400">Journey</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} className="space-y-6 text-slate-400 text-lg">
              <p>My journey into web development began during my college years when I became fascinated by the intersection of design and functionality. What started as curiosity evolved into a professional career dedicated to building elegant, scalable solutions.</p>
              <p>I am currently in my final year of the Master of Computer Applications (MCA) program at Acropolis Institute of Technology and Research. During my academic journey, I developed a strong foundation in computer science while actively building real-world projects, starting with frontend development and gradually expanding into full-stack MERN applications.</p>
              <p>Today, I specialize in the MERN stack and Web3 technologies. I'm particularly passionate about blockchain development and its transformative potential. My approach is always collaborative, user-centric, and focused on creating applications that not only function flawlessly but also provide exceptional user experiences.</p>
            </motion.div>

            <motion.div variants={container} className="space-y-6">
              {[{ icon: BookOpen, title: 'Philosophy', text: "Code is not just about syntax—it's about solving problems. I believe in writing clean, maintainable code that other developers can understand and build upon." },
                { icon: Briefcase, title: 'Approach', text: 'I combine technical expertise with business acumen to deliver solutions that align with your goals and create measurable impact.' },
                { icon: Award, title: 'Commitment', text: "I'm committed to continuous learning, staying updated with emerging technologies, and maintaining the highest standards of code quality." }
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} {...glowHover} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <div className="flex gap-4">
                    <item.icon className="text-indigo-400" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="py-24">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-12">
            Work <span className="text-indigo-400">Experience</span>
          </motion.h2>

          {experiences.map((exp, i) => (
            <motion.div key={i} variants={fadeUp} {...glowHover} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur mb-8">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-indigo-400 font-semibold">{exp.company}</p>
              <p className="text-sm text-slate-500 mb-4">{exp.period}</p>
              <p className="text-slate-400 mb-6">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-400">
                    <span className="text-indigo-400 font-bold">✓</span>{h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

        {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/anwaargajdhar" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/anwaar-gajdhar-anwaar-gajdhar-234bb5233/" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:anwarsmailid@gmail.com" aria-label="Email"><Mail size={18} /></a>
        </div>
        © 2026 Anwaar Gajdhar. All rights reserved.
      </footer>

    </main>
  )
}


