import { useState, useEffect, useCallback } from 'react'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: React.FC = () => {
    const [showSite, setShowSite] = useState(false)

    // Scroll reveal - runs once when main site is visible
    const initScrollAnimations = useCallback(() => {
        const elements = document.querySelectorAll<HTMLElement>(
            '.slide-in-left, .slide-in-right, .slide-in-up'
        )

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement
                        el.style.opacity = '1'
                        el.style.transform = 'translate(0)'
                        observer.unobserve(el)
                    }
                })
            },
            { threshold: 0.2 }
        )

        elements.forEach(el => observer.observe(el))
    }, [])

    // Also handle reveal class sections (About, Projects, Skills)
    useEffect(() => {
        if (!showSite) return

        initScrollAnimations()

        const revealElements = document.querySelectorAll<HTMLElement>('.reveal')
        const revealObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        revealObserver.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        revealElements.forEach(el => revealObserver.observe(el))

        return () => revealObserver.disconnect()
    }, [showSite, initScrollAnimations])

    const handleIntroFinish = useCallback(() => {
        setShowSite(true)
    }, [])

    return (
        <>
            {/* Intro loading screen - always mounted until finished */}
            {!showSite && <Intro onFinish={handleIntroFinish} />}

            {/* Main site */}
            {showSite && (
                <div id="real-site">
                    <Navbar />
                    <Hero />
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
                </div>
            )}
        </>
    )
}

export default Home
