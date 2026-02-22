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
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        // Pick whichever section currently has the most pixels visible in viewport
        const pickMostVisible = () => {
            let maxRatio = -1
            let winner = 'home'
            
            visibilityMap.current.forEach((ratio, id) => {
                if (ratio > maxRatio) {
                    maxRatio = ratio
                    winner = id
                }
            })
            
            // Only update if we found a section with some visibility
            if (maxRatio >= 0) {
                setActiveSection(winner)
            }
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id') ?? ''
                    visibilityMap.current.set(id, entry.intersectionRatio)
                })
                
                // Debounce to avoid too many updates
                if (debounceTimer.current) {
                    clearTimeout(debounceTimer.current)
                }
                debounceTimer.current = setTimeout(pickMostVisible, 50)
            },
            {
                // rootMargin: top triggers when section top reaches 25% from top of viewport
                // This makes the nav update as sections enter the upper portion of the screen
                rootMargin: '-25% 0px -75% 0px',
                // Threshold: check at 0% and 50% to detect when sections enter and are visible
                threshold: [0, 0.5],
            }
        )

        const sections = document.querySelectorAll<HTMLElement>('section')
        sections.forEach(section => observer.observe(section))

        return () => {
            observer.disconnect()
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current)
            }
        }
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        // Optimistically set active immediately on click — no wait for scroll event
        setActiveSection(id)
        const target = document.getElementById(id)
        if (target) {
            // Offset by navbar height for smooth scrolling
            const offsetTop = target.offsetTop - 80
            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
            
            // Clear any pending debounce to avoid observer overriding our selection
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current)
            }
        }
    }

    return (
        <header>
            <div className="div-list">
                <ul className="ul-list">
                    {navItems.map(item => (
                        <li 
                            key={item.id} 
                            className={activeSection === item.id ? 'active' : ''}
                            onClick={() => handleNavClick({ preventDefault: () => {} } as any, item.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className={item.icon}></i>
                            <a
                                href={`#${item.id}`}
                                onClick={e => e.preventDefault()}
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
