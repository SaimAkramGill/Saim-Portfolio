export interface SkillCategory {
    id: string;
    label: string;
    icon: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        label: 'Frontend',
        icon: '🎨',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js', 'HTML5', 'CSS3', 'Storybook', 'Figma'],
    },
    {
        id: 'backend',
        label: 'Backend',
        icon: '⚙️',
        skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'GraphQL', 'REST APIs', 'WebSockets', 'gRPC', 'Prisma', 'Drizzle ORM'],
    },
    {
        id: 'database',
        label: 'Databases',
        icon: '🗄️',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'Supabase', 'PlanetScale', 'SQLite'],
    },
    {
        id: 'devops',
        label: 'DevOps & Cloud',
        icon: '☁️',
        skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Vercel', 'Railway', 'Nginx', 'Linux'],
    },
    {
        id: 'ai',
        label: 'AI & ML',
        icon: '🤖',
        skills: ['OpenAI API', 'LangChain', 'Hugging Face', 'Pinecone', 'RAG Pipelines', 'Prompt Engineering', 'Python ML Stack'],
    },
    {
        id: 'tools',
        label: 'Tools & Practices',
        icon: '🛠️',
        skills: ['Git', 'Jira', 'Agile/Scrum', 'TDD', 'Jest', 'Playwright', 'Postman', 'DataDog', 'Sentry', 'Linear'],
    },
];
