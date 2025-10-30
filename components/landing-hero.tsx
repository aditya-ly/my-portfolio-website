"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function LandingHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Aditya Laksita Yhuda"
  const subtitle = "Full Stack Developer | Software Data Integration Engineer"

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with typing animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-down">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {displayedText}
              {displayedText.length < fullText.length && <span className="animate-pulse">|</span>}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {subtitle}
          </p>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Crafting scalable applications and seamless data integration solutions. Passionate about building performant
            systems that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
