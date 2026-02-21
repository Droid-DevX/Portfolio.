import { useEffect, useRef, useState } from 'react'

interface NavItem {
    id: string
    label: string
    icon: string
}

const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'fa-solid fa-circle-user' },
    { id: 'about', label: 'About', icon: 'fa-regular fa-address-card' },
    { id: 'project', label: 'Projects', icon: 'fa-regular fa-folder-open' },
    { id: 'service', label: 'Skills', icon: 'fa-solid fa-code' },
    { id: 'contact', label: 'Contact', icon: 'fa-regular fa-envelope' },
]

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home')
    // Track how much of each section is currently visible
    const visibilityMap = useRef<Map<string, number>>(new Map())

    useEffect(() => {
        // Pick whichever section currently has the most pixels visible in viewport
        const pickMostVisible = () => {
            let maxRatio = 0
            let winner = activeSection
            visibilityMap.current.forEach((ratio, id) => {
                if (ratio > maxRatio) {
                    maxRatio = ratio
                    winner = id
                }
            })
            setActiveSection(winner)
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id') ?? ''
                    visibilityMap.current.set(id, entry.intersectionRatio)
                })
                pickMostVisible()
            },
            {
                // rootMargin: negative top so a section is only "active" once its
                // top edge has scrolled past the navbar height (~90px)
                rootMargin: '-90px 0px -40% 0px',
                // fire at each 1% increment so we always know the most-visible section
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        )

        const sections = document.querySelectorAll<HTMLElement>('section')
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        // Optimistically set active immediately on click — no wait for scroll event
        setActiveSection(id)
        const target = document.getElementById(id)
        if (target) {
            window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' })
        }
    }

    return (
        <header>
            <div className="div-list">
                <ul className="ul-list">
                    {navItems.map(item => (
                        <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                            <i className={item.icon}></i>
                            <a
                                href={`#${item.id}`}
                                onClick={e => handleNavClick(e, item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Navbar
