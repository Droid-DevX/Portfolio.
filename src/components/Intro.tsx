import { useEffect, useState } from 'react'

interface IntroProps {
    onFinish: () => void
}

const Intro: React.FC<IntroProps> = ({ onFinish }) => {
    const [smoothOut, setSmoothOut] = useState(false)

    useEffect(() => {
        // Apply entry animations
        const animations: { selector: string; cls: string; delay: number }[] = [
            { selector: '.top-tags', cls: 'from-top', delay: 0 },
            { selector: '.left h1', cls: 'from-left', delay: 0.3 },
            { selector: '.desc', cls: 'from-left', delay: 0.6 },
            { selector: '.live-line', cls: 'from-bottom', delay: 0.9 },
            { selector: '.buttons', cls: 'zoom-in', delay: 1.2 },
            { selector: '.site-link', cls: 'from-bottom', delay: 1.5 },
            { selector: '.right', cls: 'from-right', delay: 0.6 },
            { selector: '.stats', cls: 'from-bottom', delay: 1.8 },
        ]

        animations.forEach(item => {
            const el = document.querySelector(item.selector)
            if (el) {
                (el as HTMLElement).style.animationDelay = `${item.delay}s`
                el.classList.add(item.cls)
            }
        })

        // Hide intro after 3.8s
        const timer = setTimeout(() => {
            setSmoothOut(true)
            setTimeout(() => {
                onFinish()
            }, 1200)
        }, 3800)

        return () => clearTimeout(timer)
    }, [onFinish])

    return (
        <div id="intro" className={smoothOut ? 'smooth-out' : ''}>
            <div className="main">
                <div className="card">

                    {/* TOP TAGS */}
                    <div className="top-tags">
                        <span className="dot">● SYSTEM READY</span>
                        <span>● AI/ML ENGINEER </span>
                        <span>● PORTFOLIO</span>
                    </div>

                    <div className="content">

                        {/* LEFT */}
                        <div className="left">
                            <h1>
                                Welcome to <br />
                                my Portfolio <br />
                                Website
                            </h1>

                            <p className="desc">
                                Focused on developing AI/ML, Deep Learning, and Reinforcement Learning solutions,
                                while independently engineering fast and scalable Flutter applications with clean UI.
                            </p>

                            <div className="live-line">
                                <span>LIVE STATUS</span>
                            </div>

                            <div className="buttons">
                                <div className="btn"><i className="fa-solid fa-code"></i> CODE</div>
                                <div className="btn"><i className="fa-solid fa-user"></i> PROFILE</div>
                                <div className="btn"><i className="fa-brands fa-github"></i> SOURCE</div>
                            </div>

                            <div className="site-link">
                                <i className="fa-solid fa-globe"></i>
                                https://github.com/Droid-DevX
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="right">
                            <div className="right-head">
                                <span>CORE UI</span>
                                <span className="online">ONLINE</span>
                            </div>

                            <div className="orbit-box">
                                <div className="orbit">
                                    <i className="fa-solid fa-layer-group i1"></i>
                                    <i className="fa-solid fa-bolt i2"></i>
                                    <i className="fa-solid fa-code i3"></i>
                                    <i className="fa-solid fa-wifi i4"></i>
                                </div>
                                <div className="core">
                                    <span>WELCOME</span>
                                </div>
                            </div>

                            <div className="stats">
                                <div>
                                    <h4>06</h4>
                                    <p>Loaded</p>
                                </div>
                                <div>
                                    <h4>12ms</h4>
                                    <p>Stable</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
