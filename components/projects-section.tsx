"use client"

import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
      shortDesc: "Real-time e-commerce platform",
      technologies: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Stripe"],
      image: "/ecommerce-platform.jpg",
      link: "https://github.com",
      details:
        "Built a scalable e-commerce platform handling 10k+ daily transactions. Implemented real-time inventory sync using WebSockets and Apache Kafka for event streaming.",
    },
    {
      id: 2,
      title: "Data Integration Pipeline",
      description: "Enterprise data integration system connecting multiple data sources with real-time processing.",
      shortDesc: "Enterprise data integration",
      technologies: ["Apache Kafka", "Spring Batch", "Oracle", "Java", "Docker"],
      image: "/data-integration-pipeline.jpg",
      link: "https://github.com",
      details:
        "Designed and implemented a robust data integration pipeline processing 1M+ records daily. Reduced data latency by 70% using Kafka streaming.",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Interactive analytics dashboard with real-time data visualization and reporting capabilities.",
      shortDesc: "Real-time analytics dashboard",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
      image: "/analytics-dashboard.png",
      link: "https://github.com",
      details:
        "Created an interactive dashboard displaying real-time metrics and KPIs. Implemented custom visualizations using D3.js for complex data representation.",
    },
    {
      id: 4,
      title: "Microservices Architecture",
      description: "Scalable microservices-based system with service discovery and API gateway.",
      shortDesc: "Microservices platform",
      technologies: ["Spring Boot", "Docker", "Kubernetes", "API Gateway", "PostgreSQL"],
      image: "/microservices-architecture.jpg",
      link: "https://github.com",
      details:
        "Architected and deployed a microservices platform with 15+ independent services. Implemented service mesh for inter-service communication.",
    },
    {
      id: 5,
      title: "Mobile App Backend",
      description: "RESTful API backend for mobile applications with authentication and real-time features.",
      shortDesc: "Mobile app backend API",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      image: "/mobile-backend.jpg",
      link: "https://github.com",
      details:
        "Developed a robust backend API serving 100k+ mobile users. Implemented real-time notifications using Socket.io.",
    },
    {
      id: 6,
      title: "AI-Powered Recommendation Engine",
      description: "Machine learning-based recommendation system integrated with e-commerce platform.",
      shortDesc: "ML recommendation system",
      technologies: ["Python", "TensorFlow", "Node.js", "Redis", "PostgreSQL"],
      image: "/ai-recommendation-engine.jpg",
      link: "https://github.com",
      details:
        "Built ML recommendation engine improving conversion rate by 35%. Integrated with existing platform using Node.js microservice.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className={`mb-16 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="h-full bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  {/* Project image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.shortDesc}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expanded details */}
                    {selectedProject === project.id && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm font-semibold"
                        >
                          View on GitHub
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
