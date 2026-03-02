export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    category: 'development' | 'design' | 'fullstack' | 'ai';
    featured: boolean;
    image: string;
    tech: string[];
    github?: string;
    live?: string;
    year: number;
    highlights: string[];
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'ai-portfolio-platform',
        title: 'AI-Powered Portfolio Platform',
        description: 'Agent-driven portfolio website built with Next.js 16, featuring 9 specialized AI agents for autonomous content management, deployment, and optimization.',
        longDescription: 'A full-scale personal portfolio platform using Agent-Driven Development (ADD). 9 specialized AI agents collaborate to design, build, test, deploy, and maintain the site automatically. Built with Next.js 16, PostgreSQL, Redis, and BullMQ.',
        category: 'fullstack',
        featured: true,
        image: '/projects/portfolio.jpg',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'Prisma', 'Framer Motion'],
        github: 'https://github.com',
        live: 'https://example.com',
        year: 2026,
        highlights: [
            'Designed and deployed 9 autonomous AI agents using Agent-Driven Development paradigm',
            'Achieved 98/100 Google PageSpeed score on both mobile and desktop',
            'Implemented Human-in-the-Loop approval gates for all production deployments',
            'Built real-time agent health dashboard with BullMQ + Redis',
        ],
    },
    {
        id: '2',
        slug: 'enterprise-crm-system',
        title: 'Enterprise CRM System',
        description: 'Full-stack CRM platform serving 500+ business users with real-time analytics, lead management, and automated reporting dashboards.',
        longDescription: 'A comprehensive CRM solution built for enterprise scale. Features real-time dashboards, automated lead scoring, email campaign integration, and a mobile-first responsive design.',
        category: 'fullstack',
        featured: true,
        image: '/projects/crm.jpg',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'Recharts', 'Docker'],
        github: 'https://github.com',
        live: 'https://example.com',
        year: 2025,
        highlights: [
            'Reduced lead response time by 67% through automated scoring and routing',
            'Served 500+ concurrent users with sub-200ms API response times',
            'Built 14 real-time analytics dashboards using WebSockets',
            'Decreased manual data entry by 80% via smart form autofill',
        ],
    },
    {
        id: '3',
        slug: 'e-commerce-microservices',
        title: 'E-Commerce Microservices Platform',
        description: 'Scalable multi-vendor e-commerce platform built with microservices architecture, processing 10,000+ daily transactions with 99.9% uptime.',
        longDescription: 'A production-grade e-commerce ecosystem split into 8 decoupled microservices: product catalog, inventory, orders, payments, notifications, search, reviews, and analytics.',
        category: 'fullstack',
        featured: true,
        image: '/projects/ecommerce.jpg',
        tech: ['Next.js', 'TypeScript', 'Stripe', 'Elasticsearch', 'RabbitMQ', 'Docker', 'Kubernetes'],
        github: 'https://github.com',
        live: 'https://example.com',
        year: 2025,
        highlights: [
            'Achieved 99.9% uptime across 8 independent microservices',
            'Processed 10,000+ daily transactions via Stripe integration',
            'Reduced page load time from 4.2s to 1.1s through aggressive optimization',
            'Scaled to 50,000 SKUs with Elasticsearch-powered instant search',
        ],
    },
    {
        id: '4',
        slug: 'ai-content-generator',
        title: 'AI Content Generation Suite',
        description: 'LLM-powered content creation platform generating SEO-optimized blog posts, social media content, and marketing copy at scale.',
        longDescription: 'Integrates GPT-4 and Claude APIs with a custom prompt engineering layer, content quality scoring, and multi-platform publishing workflows.',
        category: 'ai',
        featured: false,
        image: '/projects/ai-content.jpg',
        tech: ['Python', 'FastAPI', 'OpenAI API', 'Langchain', 'PostgreSQL', 'Celery', 'React'],
        github: 'https://github.com',
        year: 2025,
        highlights: [
            'Generated 5,000+ pieces of content with 94% user satisfaction rate',
            'Reduced content production time by 85% compared to manual writing',
            'Built custom RAG pipeline for brand-voice consistency',
        ],
    },
    {
        id: '5',
        slug: 'real-time-collaboration-tool',
        title: 'Real-Time Collaboration Tool',
        description: 'Figma-inspired collaborative design tool with live cursor sharing, commenting, and version history for distributed teams.',
        longDescription: 'WebSocket-powered collaborative workspace supporting simultaneous multi-user editing, live presence indicators, conflict resolution, and comprehensive version control.',
        category: 'development',
        featured: false,
        image: '/projects/collab.jpg',
        tech: ['React', 'TypeScript', 'Socket.io', 'Canvas API', 'Node.js', 'Redis', 'PostgreSQL'],
        github: 'https://github.com',
        live: 'https://example.com',
        year: 2024,
        highlights: [
            'Supports up to 50 simultaneous collaborators with <50ms latency',
            'Built custom CRDT algorithm for conflict-free concurrent editing',
            'Designed infinite canvas with 60fps performance using Canvas API',
        ],
    },
    {
        id: '6',
        slug: 'devops-monitoring-dashboard',
        title: 'DevOps Monitoring Dashboard',
        description: 'Unified observability platform aggregating metrics from 20+ services, with anomaly detection, alerting, and custom runbooks.',
        longDescription: 'A comprehensive monitoring solution integrating with Prometheus, Grafana, and custom agent-based collectors. Features ML-powered anomaly detection and automated incident response.',
        category: 'development',
        featured: false,
        image: '/projects/monitoring.jpg',
        tech: ['TypeScript', 'React', 'Prometheus', 'Grafana', 'Python', 'PostgreSQL', 'Docker'],
        github: 'https://github.com',
        year: 2024,
        highlights: [
            'Reduced mean time to detection (MTTD) from 18 minutes to under 2 minutes',
            'Aggregated metrics from 20+ services into single pane of glass',
            'ML anomaly detection with 91% precision, 88% recall',
        ],
    },
];
