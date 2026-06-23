import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Users from './components/Users'
import Tech from './components/Tech'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // ── Scroll Reveal ──
    // Step 1: Add .reveal-pending to hide elements before observing
    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => el.classList.add('reveal-pending'))

    // Step 2: Observe and reveal on intersection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    revealEls.forEach((el) => observer.observe(el))

    // ── Parallax for ambient orbs ──
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const orbs = document.querySelectorAll('.ambient-orb')
          if (orbs[0]) (orbs[0] as HTMLElement).style.transform = `translateY(${scrollY * 0.08}px)`
          if (orbs[1]) (orbs[1] as HTMLElement).style.transform = `translateY(${scrollY * -0.05}px)`
          if (orbs[2]) (orbs[2] as HTMLElement).style.transform = `translateY(${scrollY * 0.03}px)`
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Ambient glow orbs — atmospheric depth */}
      <div
        className="ambient-orb fixed rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: '#d4a853',
          top: '-200px',
          right: '-150px',
          filter: 'blur(120px)',
          opacity: '0.15',
          animation: 'orbFloat1 20s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        className="ambient-orb fixed rounded-full pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: '#2dd4bf',
          bottom: '10%',
          left: '-100px',
          filter: 'blur(120px)',
          opacity: '0.15',
          animation: 'orbFloat2 25s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        className="ambient-orb fixed rounded-full pointer-events-none"
        style={{
          width: '300px',
          height: '300px',
          background: '#8a6d2b',
          top: '50%',
          right: '20%',
          filter: 'blur(120px)',
          opacity: '0.15',
          animation: 'orbFloat3 18s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      <div className="container">
        <Nav />
        <Hero />
        <Stats />
        <Features />
        <Workflow />
        <Users />
        <Tech />
        <CTA />
        <Footer />
      </div>
    </>
  )
}
