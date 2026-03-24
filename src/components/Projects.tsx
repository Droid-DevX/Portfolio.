import cukImg from '../../images/cuk.avif'
import sportsImg from '../../images/sport.avif'
// import financialImg from '../../images/house.avif'
// import aslImg from '../../images/sign.avif'
// import lungImg from '../../images/lung_pred.avif'
// import paisa from '../../images/finance.avif'
// import lungCImg from '../../images/lung_classs.avif' 
// import nameImg from '../../images/namee.avif'  
import autonomousDrivingImg from '../../images/carr.avif' 
import quadraImg from '../../images/qudra.avif'
import faceImg from '../../images/face.avif'
import ragImg from '../../images/rag.avif'

interface ProjectTag {
    label: string
}

interface ProjectLink {
    href: string
    icon: string
    label: string
}

interface Project {
    id: number
    image: string
    imageAlt: string
    title: string
    description: string
    tags: ProjectTag[]
    links: ProjectLink[],
    color?: string
}

const projects: Project[] = [
    {
        id: 1,
        image: cukImg,
        imageAlt: 'CUK Commit',
        title: 'CUK COMMIT',
        description: 'University-exclusive verified dating platform for CUK students.',
        tags: [{ label: 'Dart' }, { label: 'TypeScript' }, { label: 'Supabase' }],
        links: [
            { href: 'https://github.com/CUK-COMMIT/cukcommit-downloads', icon: 'fab fa-github', label: 'GitHub' },
            { href: 'https://cuk-commit.vercel.app', icon: 'fas fa-external-link-alt', label: 'Live' },
        ],
    },
    {
        id: 2,
        image: autonomousDrivingImg,
        imageAlt: 'Autonomous Driving',
        title: 'Autonomous Driving',
        description: 'End-to-end self-driving pipeline with real-time object detection and lane detection.',
        tags: [{ label: 'Gymnasium' }, { label: 'PPO' }, { label: 'CarRacing-v3' }],
        links: [
            { href: 'https://github.com/Droid-DevX/AutonomousDriving', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 3,
        image: quadraImg   ,
        imageAlt: 'Quadruped Locomotion',
        title: 'Quadruped Locomotion',
        description: 'Designed quadruped locomotion using kinematics and control for stable movement.',
        tags: [{ label: 'Robotics' }, { label: 'Unitree A1 URDF' }, { label: 'SB-3' }],
        links: [
            { href: 'https://github.com/Droid-DevX/Quadruped_Walking', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 4,
        image: ragImg,
        imageAlt: 'Vectorless RAG QA System',
        title: 'Vectorless RAG QA System',
        description: 'Built a vectorless RAG QA system using text search and LLM reasoning.',
        tags: [{ label: 'Groq LLaMA' }, { label: 'LangChain' }, { label: 'Streamlit' }],
        links: [
            { href: 'https://github.com/Droid-DevX/VectorlessRAG_QA', icon: 'fab fa-github', label: 'GitHub' },
            { href: 'https://droid-devx-vectorlessrag-qa-app-8eprz4.streamlit.app/', icon: 'fas fa-external-link-alt', label: 'Live' },
        ],
    },
    {
        id: 5,
        image: sportsImg,
        imageAlt: 'Sports Image Classifier',
        title: 'Sports Image Classification',
        description: 'Large-scale dataset handling, model training pipeline, and evaluation.',
        tags: [{ label: 'PyTorch' }, { label: 'CNN' }, { label: 'Python' }],
        links: [
            { href: 'https://github.com/Droid-DevX/Sports_Image_classification', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
 
    {
    id: 6,
    image: faceImg,
    imageAlt: 'Face Recognition System',
    title: 'Face Recognition',
    description: 'Custom CNN-based face recognition with real-time detection and high accuracy.',
    tags: [{ label: 'PyTorch' }, { label: 'CNN' }, { label: 'OpenCV' }],
    links: [
        { href: 'https://github.com/Droid-DevX/FaceRecognition', icon: 'fab fa-github', label: 'GitHub' },
    ],
}
    // {
    //     id: 6,
    //     image: lungImg,
    //     imageAlt: 'Lung Cancer Prediction',
    //     title: 'Lung Cancer Prediction',
    //     description: 'Classical ML pipeline for early-risk prediction with tabular features.',
    //     tags: [{ label: 'Python' }, { label: 'Sklearn' }, { label: 'Metrics' }],
    //     links: [
    //         { href: 'https://github.com/Droid-DevX/Lung_Cancer_Prediction', icon: 'fab fa-github', label: 'GitHub' },
    //     ],
    // },
    // {
    //     id: 7,
    //     image: paisa,
    //     imageAlt: 'Smart Financial Forecasting System',
    //     title: 'Smart Financial Forecasting System',
    //     description: 'Deployed Streamlit app with real business use case and predictive analytics.',
    //     tags: [{ label: 'Regression' }, { label: 'Streamlit' }, { label: 'Python' }],
    //     links: [
    //         { href: 'https://github.com/Droid-DevX/SmartFinancialForecastingSystem', icon: 'fab fa-github', label: 'GitHub' },
    //         { href: 'https://smartfinancialforecastingsystem05.streamlit.app/', icon: 'fas fa-external-link-alt', label: 'Live' },
    //     ],
    // },
    // {
    //     id: 6,
    //     image: lungCImg,
    //     imageAlt: 'Lung Cancer Classification',
    //     title: 'Lung Cancer Classification',
    //     description: 'Image classification with a simple Streamlit UI for exploration.',
    //     tags: [{ label: 'Sklearn' }, { label: 'PyTorch' }, { label: 'CNN' }],
    //     links: [
    //         { href: 'https://github.com/Droid-DevX/LungCancerClassification', icon: 'fab fa-github', label: 'GitHub' },
    //     ],
    // },
    // {
    //     id: 9,
    //     image: nameImg,
    //     imageAlt: 'Similar Name Finder',
    //     title: 'Similar Name Finder',
    //     description: 'Custom embeddings and NLP pipeline for name similarity search.',
    //     tags: [{ label: 'Embeddings' }, { label: 'NLP' }, { label: 'PyTorch' }],
    //     links: [
    //         { href: 'https://github.com/Droid-DevX/SimilarNameFinder', icon: 'fab fa-github', label: 'GitHub' },
    //     ],
    // },
]

const Projects: React.FC = () => {
    return (
        <section className="project reveal" id="project">
            <h1>Featured Work</h1>
            <hr />
            <div className="projects-container">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.imageAlt} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="skills">
                            {project.tags.map(tag => (
                                <a key={tag.label}>{tag.label}</a>
                            ))}
                        </div>
                        <div className="btns">
                            {project.links.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i className={link.icon}></i> {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
