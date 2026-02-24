import heroImg from '../../images/iimg.avif'

const Hero: React.FC = () => {
    return (
        <section className="home" id="home">
            <p className="home-p"><span className="home-s">•</span> Central University of Karnataka</p>
            <div className="home-container">
                <div className="home-section">
                    <div className="info-home">
                        <h1>Ayush Tandon</h1>
                        <h3>
                            • AI/ML Engineer <br />
                            • Deep Learning Enthusiast<br />
                            • Product Builder
                        </h3>
                        <div className="info-p">
                            <p>I build intelligent systems and cross‑platform apps with clean, scalable UX.</p>
                            <p>Production experience across ML models, Flutter apps, and Supabase backends.</p>
                        </div>
                        <div className="info-p2">
                            <p><i className="fa-solid fa-location-dot"></i> Jaunpur, India</p>
                            <p><i className="fa-solid fa-briefcase"></i> Open to internships</p>
                        </div>

                        <div className="hhr">
                            <hr />
                        </div>
                        <div className="follow">
                            <p className="followw">Follow me:</p>
                            <ul>
                                <li>
                                    <a href="https://github.com/Droid-DevX" target="_blank" rel="noreferrer noopener">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ayushtando/" target="_blank" rel="noreferrer noopener">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/_ayush.xx" target="_blank" rel="noreferrer noopener">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <a
                            href="https://drive.google.com/file/d/1a1dBBKQFNKN8WYX5ic49ZVkmR6j8hdcL/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="resume-btn"
                        >
                            <i className="fa-solid fa-eye"></i> Resume
                        </a>
                    </div>
                </div>
                <img src={heroImg} alt="Ayush Tandon" />
            </div>
        </section>
    )
}

export default Hero
