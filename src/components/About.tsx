import aboutImg from '../../images/img1.jpeg'

const About: React.FC = () => {
    return (
        <section className="about reveal" id="about">
            <div className="about-info">
                <div className="img-about">
                    <img src={aboutImg} alt="Ayush Tandon" />
                </div>
                <div className="info-text">
                    <h5>@aayush</h5>
                    <p>AI/ML Engineer • DL/RL Enthusiast • Flutter Developer</p>
                </div>
            </div>
            <h3>ABOUT ME</h3>
            <div className="about-info2">
                <div className="about-text">
                    <p>
                        I am a B.Tech student in <span className="magnify-text" data-text="Mathematics & Computing">Mathematics and Computing</span> at the <span className="magnify-text" data-text="Central Univ. of Karnataka">Central University of Karnataka</span>,
                        specializing in <span className="magnify-text" data-text="Machine Learning">Machine Learning</span>, <span className="magnify-text" data-text="Deep Learning">Deep Learning</span>, and applied AI. My work centers on building
                        intelligent, data-driven systems supported by robust backend architecture and scalable
                        cross-platform applications.<br />
                        <br />
                        I have developed multi-class <span className="magnify-text" data-text="Deep Learning Models">deep learning models</span>, <span className="magnify-text" data-text="NLP Similarity Systems">NLP-based similarity systems</span>, financial
                        analytics platforms, and healthcare prediction solutions. I am a core contributor to <span className="magnify-text" data-text="CUK Commit">CUK
                            Commit</span>, where I lead the <span className="magnify-text" data-text="Flutter UI/UX">Flutter-based UI/UX</span>, onboarding experience, and premium feature
                        architecture using <span className="magnify-text" data-text="Flutter">Flutter</span>, <span className="magnify-text" data-text="React">React</span>, and <span className="magnify-text" data-text="Supabase">Supabase</span>. I also collaborate in open-source Android
                        ROM development.<br />
                        <br />
                        I am passionate about transforming complex ideas into real-world <span className="magnify-text" data-text="AI Products">AI products</span> and continuously
                        exploring system-level and intelligent solutions that create meaningful impact.
                    </p>
                </div>
                <div className="photo-container">
                    <img src={aboutImg} alt="Ayush Tandon" />
                    <span className="tape tape1"></span>
                    <span className="tape tape2"></span>
                </div>
            </div>
        </section>
    )
}

export default About
