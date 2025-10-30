"use client"

import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
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

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot", level: 93 },
        { name: "Node.js", level: 88 },
        { name: "Express", level: 87 },
        { name: "REST APIs", level: 94 },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "Oracle", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 82 },
      ],
    },
    {
      category: "Integration & DevOps",
      skills: [
        { name: "Apache Kafka", level: 89 },
        { name: "Docker", level: 87 },
        { name: "Kubernetes", level: 84 },
        { name: "CI/CD", level: 86 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className={`mb-16 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.category}
                className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <div className="bg-card rounded-lg border border-border p-8 hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-8 text-primary">{category.category}</h3>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>

                        {/* Progress bar with animation */}
                        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${skillIndex * 0.1}s`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div
            className={`mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-foreground">Other Skills & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Git",
                "GitHub",
                "AWS",
                "GCP",
                "Linux",
                "Agile",
                "Scrum",
                "Problem Solving",
                "System Design",
                "API Design",
                "Testing",
                "Performance Optimization",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-card rounded-lg border border-border text-center text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
