import './style.css'
import { createHeader } from './components/header.js'
import { createHero } from './components/hero.js'
import { createFeatures } from './components/features.js'
import { createDemo } from './components/demo.js'
import { createCTA } from './components/cta.js'
import { createFooter } from './components/footer.js'

document.querySelector('#app').innerHTML = `
  ${createHeader()}
  ${createHero()}
  ${createFeatures()}
  ${createDemo()}
  ${createCTA()}
  ${createFooter()}
`

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Add scroll effect for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if (window.scrollY > 100) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

// Observe all sections for animations
document.querySelectorAll('section, .feature-card, .demo-step').forEach(el => {
  observer.observe(el)
})