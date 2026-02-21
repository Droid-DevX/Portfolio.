interface SkillTag {
    label: string
}

interface ServiceCard {
    id: number
    icon: string
    title: string
    description: string
    tags: SkillTag[]
}

const serviceCards: ServiceCard[] = [
    {
        id: 1,
        icon: 'fas fa-brain',
        title: 'Machine Learning',
        description: 'From data preprocessing to optimized machine learning models for real-world predictions.',
        tags: [
            { label: 'Scikit-Learn' },
            { label: 'Regression' },
            { label: 'Classification' },
            { label: 'Feature Engineering' },

        ],
    },
    {
        id: 2,
        icon: 'fas fa-network-wired',
        title: 'Deep Learning',
        description: 'Building and optimizing neural networks for high-accuracy image and structured data tasks.',
        tags: [
            { label: 'CNN' },
            { label: 'Neural Networks' },
            { label: 'Training Pipelines' },
            { label: 'Evaluation' },
        ],
    },
    {
        id: 3,
        icon: 'fas fa-code',
        title: 'Programming',
        description: 'Strong programming foundation in Python, C++, Java, Matlab, Dart, R, TypeScript, HTML, CSS for scalable applications.',
        tags: [
            { label: 'Python' },
            { label: 'C++' },
            { label: 'Java' },
            { label: 'Matlab' },
            { label: 'Dart' },
            { label: 'R' },
            { label: 'TypeScript' },
            { label: 'HTML' },
            { label: 'CSS' },
            { label: 'Git' },
            { label: 'SQLite' },
        ],
    },
    {
        id: 4,
        icon: 'fas fa-square-root-alt',
        title: 'Mathematics',
        description: 'Strong foundation across pure and applied mathematics for analytical problem-solving and computational modeling.',
        tags: [
            { label: 'Linear Algebra' },
            { label: 'Calculus' },
            { label: 'Probability & Statistics' },
            { label: 'Advanced Graph Theory' },
            { label: 'Differential Equations' },
            { label: 'Numerical Methods' },
        ],
    },
    {
        id: 5,
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Generative AI',
        description: 'Building applications using large language models for intelligent content generation and automation.',
        tags: [
            { label: 'LLMs' },
            { label: 'Prompt Engineering' },
            { label: 'Transformers' },
            { label: 'AI Integration' },
        ],
    },
    {
        id: 6,
        icon: 'fas fa-people-group',
        title: 'Team Coordination',
        description: 'Collaborating in structured workflows to plan, build, and deliver projects efficiently.',
        tags: [
            { label: 'Version Control' },
            { label: 'Git & GitHub' },
            { label: 'Task Planning' },

        ],
    },
]

const Skills: React.FC = () => {
    return (
        <section id="service" className="section services reveal">
            <h1 className="section-title">Skills</h1>
            <div className="services-container">
                {serviceCards.map(card => (
                    <div className="service-card" key={card.id}>
                        <div className="card-top">
                            <i className={card.icon}></i>
                            <h3>{card.title}</h3>
                        </div>
                        <p>{card.description}</p>
                        <div className="tags">
                            {card.tags.map(tag => (
                                <span
                                    className="magnify-text"
                                    data-text={tag.label}
                                    key={tag.label}
                                >
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
