"use client"

import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Labs",
      description:
        "Leading development of enterprise-scale applications with focus on data integration and microservices architecture.",
      technologies: ["React", "Next.js", "Spring Boot", "Apache Kafka", "PostgreSQL"],
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      description:
        "Developed and maintained multiple client-facing applications and backend services. Implemented data integration pipelines.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      year: "2019 - 2021",
      title: "Junior Developer",
      company: "StartUp Ventures",
      description:
        "Built responsive web applications and contributed to backend development. Learned best practices in software development.",
      technologies: ["JavaScript", "React", "Express", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className={`mb-16 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"} ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 -translate-x-1.5"></div>

                  {/* Content card */}
                  <div className="ml-8 md:ml-0 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <span className="text-sm text-primary font-semibold mt-2 md:mt-0">{exp.year}</span>
                    </div>
                    <p className="text-accent font-semibold mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
