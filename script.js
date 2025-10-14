// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  nav.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    nav.classList.remove("active")
  })
})

// Header scroll effect
const header = document.querySelector(".header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all animated elements
const animatedElements = document.querySelectorAll(
  ".feature-card, .experience-content, .experience-visual, .phone-visual, .professionalism-content, .method-card",
)

animatedElements.forEach((el) => observer.observe(el))

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")

  if (hero) {
    const heroElements = hero.querySelectorAll(".hero-title, .hero-video, .cta-button")
    heroElements.forEach((element, index) => {
      const speed = (index + 1) * 0.1
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  }
})

// Video placeholder click effect
const videoPlaceholder = document.querySelector(".video-placeholder")
if (videoPlaceholder) {
  videoPlaceholder.addEventListener("click", () => {
    // Add ripple effect
    const ripple = document.createElement("div")
    ripple.style.position = "absolute"
    ripple.style.width = "20px"
    ripple.style.height = "20px"
    ripple.style.background = "rgba(255, 255, 255, 0.5)"
    ripple.style.borderRadius = "50%"
    ripple.style.transform = "translate(-50%, -50%)"
    ripple.style.animation = "ripple 0.6s ease-out"
    ripple.style.pointerEvents = "none"

    const rect = videoPlaceholder.getBoundingClientRect()
    ripple.style.left = "50%"
    ripple.style.top = "50%"

    videoPlaceholder.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)

    console.log("[v0] Video placeholder clicked - ready for video integration")
  })
}

// Add ripple animation to CSS dynamically
const style = document.createElement("style")
style.textContent = `
    @keyframes ripple {
        from {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Stagger animation for feature cards
const featureCards = document.querySelectorAll(".feature-card")
featureCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.2}s`
})

// Stagger animation for method cards
const methodCards = document.querySelectorAll(".method-card")
methodCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`
})

// CTA button hover effect with particles
const ctaButton = document.querySelector(".cta-button")
if (ctaButton) {
  ctaButton.addEventListener("mouseenter", (e) => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const particle = document.createElement("div")
        particle.style.position = "absolute"
        particle.style.width = "4px"
        particle.style.height = "4px"
        particle.style.background = "rgba(255, 255, 255, 0.8)"
        particle.style.borderRadius = "50%"
        particle.style.pointerEvents = "none"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animation = "particleFade 1s ease-out forwards"

        ctaButton.appendChild(particle)

        setTimeout(() => particle.remove(), 1000)
      }, i * 50)
    }
  })
}

// Add particle animation
const particleStyle = document.createElement("style")
particleStyle.textContent = `
    @keyframes particleFade {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`
document.head.appendChild(particleStyle)

// Mouse move parallax effect for floating elements
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth
  const mouseY = e.clientY / window.innerHeight

  const floatingElements = document.querySelectorAll(".floating-element, .shape")
  floatingElements.forEach((element, index) => {
    const speed = (index + 1) * 10
    const x = (mouseX - 0.5) * speed
    const y = (mouseY - 0.5) * speed

    element.style.transform = `translate(${x}px, ${y}px)`
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)
})

console.log("[v0] FANIS NETWORK website loaded successfully with animations")
