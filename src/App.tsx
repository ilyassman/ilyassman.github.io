import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { PortfolioProjects } from './components/PortfolioProjects'
import { SkillsMap } from './components/SkillsMap'
import { Journey } from './components/Journey'
import { Proof } from './components/Proof'
import { Contact } from './components/Contact'
import { useReducedMotion } from './hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const root = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (!root.current) return
    let removePointerEffects = () => {}
    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.set('[data-hero-ui], .hero-name span, .portrait-depth, [data-hero-copy] > *, [data-hero-meta], [data-specialties], .reveal, .reveal-line, .project-card, .timeline-item', { clearProps: 'all', opacity: 1 })
        return
      }

      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })
      intro
        .from('[data-hero-ui]', { opacity: 0, y: -14, duration: .65 })
        .from('.hero-name span', { yPercent: 110, opacity: 0, duration: 1.05, stagger: .09 }, '-=.25')
        .from('.portrait-halo', { scale: .7, opacity: 0, duration: 1 }, '-=.8')
        .from('.portrait-depth', { yPercent: 12, scale: .92, rotateX: -5, opacity: 0, duration: 1.25 }, '-=.95')
        .from('[data-hero-copy] > *', { x: -28, opacity: 0, duration: .65, stagger: .07 }, '-=.75')
        .from('[data-specialties]', { x: 34, y: 18, rotateY: -8, opacity: 0, duration: .85 }, '-=.65')
        .from('[data-hero-meta]', { x: 24, opacity: 0, duration: .7 }, '-=.55')

      gsap.to('.orbit-a', { rotate: 80, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.orbit-b', { rotate: -65, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.portrait-depth', { yPercent: 4, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .7 } })

      if (window.matchMedia('(pointer: fine)').matches) {
        const surface = document.querySelector<HTMLElement>('[data-hero-surface]')
        if (surface) {
          const rotateX = gsap.quickTo('.portrait-depth', 'rotateX', { duration: .65, ease: 'power3.out' })
          const rotateY = gsap.quickTo('.portrait-depth', 'rotateY', { duration: .65, ease: 'power3.out' })
          const nameX = gsap.quickTo('.hero-name', 'x', { duration: .8, ease: 'power3.out' })
          const panelX = gsap.quickTo('[data-specialties]', 'x', { duration: .8, ease: 'power3.out' })
          const panelY = gsap.quickTo('[data-specialties]', 'y', { duration: .8, ease: 'power3.out' })
          const panelRotateY = gsap.quickTo('[data-specialties]', 'rotateY', { duration: .8, ease: 'power3.out' })
          const onHeroMove = (event: PointerEvent) => {
            const nx = event.clientX / window.innerWidth - .5
            const ny = event.clientY / window.innerHeight - .5
            rotateY(nx * 4)
            rotateX(ny * -3)
            nameX(nx * -10)
            panelX(nx * 9)
            panelY(ny * 7)
            panelRotateY(nx * 3)
          }
          const onHeroLeave = () => { rotateX(0); rotateY(0); nameX(0); panelX(0); panelY(0); panelRotateY(0) }
          surface.addEventListener('pointermove', onHeroMove, { passive: true })
          surface.addEventListener('pointerleave', onHeroLeave)
          removePointerEffects = () => {
            surface.removeEventListener('pointermove', onHeroMove)
            surface.removeEventListener('pointerleave', onHeroLeave)
          }
        }
      }

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, { y: 55, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('.reveal-line').forEach((element, i) => {
        gsap.from(element, { xPercent: i % 2 ? 12 : -12, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.about-statement', start: 'top 78%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.from(card, { y: 80, rotate: i % 2 ? 1.4 : -1.4, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 86%', once: true } })
        const scan = card.querySelector('.project-scan')
        if (scan) gsap.to(scan, { yPercent: 600, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
      gsap.fromTo('.signal-path:not(.ghost)', { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.skills-console', start: 'top 75%', end: 'bottom 55%', scrub: 1 } })
      gsap.fromTo('.timeline-line path', { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 72%', end: 'bottom 70%', scrub: 1 } })
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach(item => gsap.from(item, { opacity: 0, x: 28, duration: .7, scrollTrigger: { trigger: item, start: 'top 82%', once: true } }))

      const xTo = gsap.quickTo('.cursor-dot', 'x', { duration: .25, ease: 'power3' })
      const yTo = gsap.quickTo('.cursor-dot', 'y', { duration: .25, ease: 'power3' })
      const move = (event: PointerEvent) => { xTo(event.clientX); yTo(event.clientY) }
      window.addEventListener('pointermove', move, { passive: true })
      const previousCleanup = removePointerEffects
      removePointerEffects = () => { window.removeEventListener('pointermove', move); previousCleanup() }
    }, root)
    return () => { removePointerEffects(); context.revert() }
  }, [reducedMotion])

  return (
    <div ref={root}>
      <div className="cursor-dot" aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero /><About /><Projects /><PortfolioProjects /><SkillsMap /><Journey /><Proof />
      </main>
      <Contact />
    </div>
  )
}

export default App
