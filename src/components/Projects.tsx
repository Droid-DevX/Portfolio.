import cukImg from '../../images/cuk.png'
import sportsImg from '../../images/sport.jpg'
import financialImg from '../../images/house.png'
import aslImg from '../../images/sign.png'
import lungImg from '../../images/lung_pred.png'
import paisa from '../../images/finance.png'
import lungCImg from '../../images/lung_classs.png' 
import nameImg from '../../images/namee.png'  
import quizImg from '../../images/quizz.png' 

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
        id: 3,
        image: financialImg,
        imageAlt: 'Financial Forecasting',
        title: 'House Price Prediction',
        description: 'Regression modeling with feature engineering and cross‑validation.',
        tags: [{ label: 'Streamlit' }, { label: 'Jupyter' }, { label: 'Regression' }],
        links: [
            { href: 'https://github.com/Droid-DevX/HousePricePrediction', icon: 'fab fa-github', label: 'GitHub' },
            { href: 'https://housepriceprediction05.streamlit.app/', icon: 'fas fa-external-link-alt', label: 'Live' },
        ],
    },
    {
        id: 4,
        image: aslImg,
        imageAlt: 'Similar Name Finder',
        title: 'Real-Time Sign Language Recognition',
        description: 'Sequence modeling with LSTMs for gesture classification.',
        tags: [{ label: 'LSTM' }, { label: 'OpenCV' }, { label: 'Python' }],
        links: [
            { href: 'https://github.com/Droid-DevX/Real-Time-Sign-Language-Recognition', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 5,
        image: lungImg,
        imageAlt: 'Lung Cancer Prediction',
        title: 'Lung Cancer Prediction',
        description: 'Classical ML pipeline for early-risk prediction with tabular features.',
        tags: [{ label: 'Python' }, { label: 'Sklearn' }, { label: 'Metrics' }],
        links: [
            { href: 'https://github.com/Droid-DevX/Lung_Cancer_Prediction', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 6,
        image: paisa,
        imageAlt: 'Smart Financial Forecasting System',
        title: 'Smart Financial Forecasting System',
        description: 'Deployed Streamlit app with real business use case and predictive analytics.',
        tags: [{ label: 'Regression' }, { label: 'Streamlit' }, { label: 'Python' }],
        links: [
            { href: 'https://github.com/Droid-DevX/SmartFinancialForecastingSystem', icon: 'fab fa-github', label: 'GitHub' },
            { href: 'https://smartfinancialforecastingsystem05.streamlit.app/', icon: 'fas fa-external-link-alt', label: 'Live' },
        ],
    },
    {
        id: 7,
        image: lungCImg,
        imageAlt: 'Lung Cancer Classification',
        title: 'Lung Cancer Classification',
        description: 'Image classification with a simple Streamlit UI for exploration.',
        tags: [{ label: 'Sklearn' }, { label: 'PyTorch' }, { label: 'CNN' }],
        links: [
            { href: 'https://github.com/Droid-DevX/LungCancerClassification', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 8,
        image: nameImg,
        imageAlt: 'Similar Name Finder',
        title: 'Similar Name Finder',
        description: 'Custom embeddings and NLP pipeline for name similarity search.',
        tags: [{ label: 'Embeddings' }, { label: 'NLP' }, { label: 'PyTorch' }],
        links: [
            { href: 'https://github.com/Droid-DevX/SimilarNameFinder', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 9,
        image: quizImg,
        imageAlt: 'Quiz App',
        title: 'Quiz App (Flutter)',
        description: 'Lightweight mobile quiz app with state management and clean UI.',
        tags: [{ label: 'Flutter' }, { label: 'Dart' }, { label: 'Provider' }],
        links: [
            { href: 'https://github.com/Droid-DevX/quiz_app', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
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
