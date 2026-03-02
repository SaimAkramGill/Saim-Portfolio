export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar?: string;
    quote: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Mitchell',
        role: 'CTO',
        company: 'TechCorp Solutions',
        quote: 'One of the most technically sharp engineers I have had the pleasure of working with. Delivered our CRM platform months ahead of schedule, and the code quality was exceptional. An absolute asset to any team.',
        rating: 5,
    },
    {
        id: '2',
        name: 'David Okonkwo',
        role: 'Product Lead',
        company: 'StartupHub',
        quote: 'Joined us as our second hire and single-handedly built our entire frontend in three months. Not only was the work technically brilliant, but the attention to UX and user empathy was remarkable. Our users love the product.',
        rating: 5,
    },
    {
        id: '3',
        name: 'Elena Vasquez',
        role: 'Founder & CEO',
        company: 'InnovateLab Agency',
        quote: 'Managed 12 client projects simultaneously with grace, professionalism, and consistently outstanding output. Clients specifically request to work with them again. Rare combination of technical depth and communication clarity.',
        rating: 5,
    },
    {
        id: '4',
        name: 'James Chen',
        role: 'Senior Engineering Manager',
        company: 'EnterpriseScale Inc.',
        quote: 'The e-commerce platform they architected now handles €2M+ in annual transactions without a hiccup. The microservices design is textbook-clean and the documentation is something every team dreams of.',
        rating: 5,
    },
];

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: number;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'agent-driven-development-explained',
        title: 'Agent-Driven Development: The Future of Software Architecture',
        excerpt: 'How autonomous AI agents are reshaping the way we design, build, and operate software systems — and why your next project should adopt ADD principles.',
        content: 'Full article content here...',
        category: 'Architecture',
        tags: ['AI', 'Architecture', 'ADD', 'Agents', 'Next.js'],
        publishedAt: '2026-02-01',
        readTime: 8,
    },
    {
        id: '2',
        slug: 'nextjs-performance-optimization-2026',
        title: '12 Next.js 16 Performance Optimizations That Moved My Score from 71 to 98',
        excerpt: 'Real, battle-tested tips from optimizing a production Next.js app — covering images, fonts, components, and Core Web Vitals.',
        content: 'Full article content here...',
        category: 'Performance',
        tags: ['Next.js', 'Performance', 'Web Vitals', 'TypeScript'],
        publishedAt: '2026-01-15',
        readTime: 12,
    },
    {
        id: '3',
        slug: 'typescript-patterns-enterprise',
        title: 'Advanced TypeScript Patterns Every Senior Engineer Should Know',
        excerpt: 'Deep-dive into discriminated unions, template literal types, conditional types, and the builder pattern for enterprise-grade TypeScript codebases.',
        content: 'Full article content here...',
        category: 'TypeScript',
        tags: ['TypeScript', 'Patterns', 'Advanced', 'Engineering'],
        publishedAt: '2025-12-20',
        readTime: 15,
    },
];
