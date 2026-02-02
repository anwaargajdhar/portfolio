import Link from 'next/link'
import { ArrowLeft, Award, Briefcase, BookOpen } from 'lucide-react'

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
    
   {
      name: 'web-development ',
      issuer: 'Coding shaala indore ',
      year: 2024,
    },
    {
      name: 'MERN',
      issuer: 'Udemy',
      year: 2024,
    },
    {
      name: 'Node.js & Backend Development',
      issuer: 'Coursera',
      year: 2023,
    },
     {
      name: 'HTML CSS BOOTCAMP',
      issuer: 'EDUCBA',
      year: 2022,
    },
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { category: 'DevOps & Tools', items: ['Git', 'CI/CD', 'AWS', 'Linux'] },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              I'm a passionate full-stack developer with a proven track record of delivering high-quality web applications that solve real-world problems and drive business value.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
            My <span className="text-primary">Journey</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into web development began during my college years when I became fascinated by the intersection of design and functionality. What started as curiosity evolved into a professional career dedicated to building elegant, scalable solutions.
              </p>

           <p className="text-lg text-muted-foreground leading-relaxed">
  I am currently in my final year of the Master of Computer Applications (MCA) program at Acropolis Institute of Technology and Research. During my academic journey, I developed a strong foundation in computer science while actively building real-world projects, starting with frontend development and gradually expanding into full-stack MERN applications.
</p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I specialize in the MERN stack and Web3 technologies. I'm particularly passionate about blockchain development and its transformative potential. My approach is always collaborative, user-centric, and focused on creating applications that not only function flawlessly but also provide exceptional user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <BookOpen size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Philosophy</h3>
                    <p className="text-muted-foreground">
                      Code is not just about syntax—it's about solving problems. I believe in writing clean, maintainable code that other developers can understand and build upon.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <Briefcase size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Approach</h3>
                    <p className="text-muted-foreground">
                      I combine technical expertise with business acumen to deliver solutions that align with your goals and create measurable impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <Award size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Commitment</h3>
                    <p className="text-muted-foreground">
                      I'm committed to continuous learning, staying updated with emerging technologies, and maintaining the highest standards of code quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-muted-foreground mb-6">{exp.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
            Certifications & <span className="text-primary">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{cert.name}</h3>
                    <p className="text-primary text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-muted-foreground text-sm">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
            Interests & <span className="text-primary">Passions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Beyond Code</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">→</span>
                  <div>
                    <p className="font-semibold">Open Source Contribution</p>
                    <p className="text-muted-foreground text-sm">Active contributor to React, Node.js, and blockchain projects</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">→</span>
                  <div>
                    <p className="font-semibold">Tech Writing</p>
                    <p className="text-muted-foreground text-sm">Publishing technical articles on Web3, MERN stack, and DevOps practices</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">→</span>
                  <div>
                    <p className="font-semibold">Community Involvement</p>
                    <p className="text-muted-foreground text-sm">Speaking at tech conferences and mentoring aspiring developers</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">→</span>
                  <div>
                    <p className="font-semibold">AI & Machine Learning</p>
                    <p className="text-muted-foreground text-sm">Exploring AI integration in web applications and automation</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold mb-6">Personal Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['Web3 & Crypto', 'AI/ML', 'DevOps', 'System Design', 'Open Source', 'Cloud Architecture', 'Tech Writing', 'Blockchain'].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
              <p className="text-muted-foreground mt-8">
                When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or writing technical content to share knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            I'm always interested in hearing about new projects and opportunities. Let's connect and build something amazing together!
          </p>
          <a
            href="mailto:anwarsmailid.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 MERN Developer. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
