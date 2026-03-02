export interface Experience {
    id: string;
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
    startDate: string;
    endDate: string | 'Present';
    summary: string;
    achievements: string[];
    tech: string[];
    projects?: string[];
}

export interface Education {
    id: string;
    degree: string;
    major: string;
    institution: string;
    year: string;
    gpa?: string;
    achievements: string[];
}

export const experiences: Experience[] = [
    {
        id: '1',
        title: 'Senior Full-Stack Engineer',
        company: 'TechCorp Solutions',
        companyUrl: 'https://example.com',
        location: 'Remote',
        type: 'Full-time',
        startDate: 'Jan 2024',
        endDate: 'Present',
        summary: 'Leading development of enterprise-grade web applications serving 100,000+ users. Architecting scalable microservices and mentoring a team of 5 junior engineers.',
        achievements: [
            'Reduced API latency by 62% by redesigning the data fetching layer with Redis caching',
            'Led migration from monolith to microservices, improving deployment frequency by 400%',
            'Mentored 5 junior developers through structured code review and pair programming sessions',
            'Delivered 3 major product features ahead of schedule, contributing to 34% revenue growth',
        ],
        tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Kubernetes'],
        projects: ['Enterprise CRM System', 'DevOps Monitoring Dashboard'],
    },
    {
        id: '2',
        title: 'Full-Stack Developer',
        company: 'InnovateLab Agency',
        companyUrl: 'https://example.com',
        location: 'Berlin, Germany · Hybrid',
        type: 'Full-time',
        startDate: 'Mar 2022',
        endDate: 'Dec 2023',
        summary: 'Delivered 12 client projects from inception to production across e-commerce, SaaS, and fintech verticals. Owned the full development lifecycle as the lead engineer on a team of 3.',
        achievements: [
            'Delivered 12 client projects on time and within budget, with a 100% client satisfaction score',
            'Built an e-commerce platform processing €2M+ in annual transactions',
            'Introduced automated testing, increasing code coverage from 18% to 87%',
            'Created an internal UI component library used across all 12 projects, saving 40% of development time',
        ],
        tech: ['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Stripe', 'Docker'],
        projects: ['E-Commerce Microservices Platform', 'Real-Time Collaboration Tool'],
    },
    {
        id: '3',
        title: 'Frontend Developer',
        company: 'StartupHub',
        companyUrl: 'https://example.com',
        location: 'Amsterdam, Netherlands',
        type: 'Full-time',
        startDate: 'Jun 2020',
        endDate: 'Feb 2022',
        summary: 'Joined as the second engineering hire at a Series A startup. Built the customer-facing product from the ground up, growing from 0 to 25,000 users in 18 months.',
        achievements: [
            'Built the entire frontend from 0 to launch in 3 months as the sole frontend engineer',
            'Achieved 96/100 Lighthouse accessibility score through semantic HTML and ARIA implementation',
            'Grew product from 0 to 25,000 registered users within 18 months',
            'Implemented real-time features using WebSockets, reducing user-reported latency complaints by 90%',
        ],
        tech: ['React', 'TypeScript', 'CSS-in-JS', 'GraphQL', 'Apollo Client', 'Socket.io', 'Jest'],
    },
    {
        id: '4',
        title: 'Junior Web Developer',
        company: 'Freelance',
        location: 'Remote',
        type: 'Freelance',
        startDate: 'Jan 2019',
        endDate: 'May 2020',
        summary: 'Built websites and web apps for 15+ small businesses and entrepreneurs across diverse industries. Established strong client communication and project management skills.',
        achievements: [
            'Completed 15+ projects with a 5-star average rating across all platforms',
            'Reduced average website load time by 45% through performance optimization techniques',
            'Built first e-commerce store integration increasing client revenue by 28%',
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'PHP', 'MySQL'],
    },
];

export const education: Education[] = [
    {
        id: '1',
        degree: 'BSc Computer Science',
        major: 'Software Engineering',
        institution: 'University of Technology',
        year: '2019',
        gpa: '3.8/4.0',
        achievements: [
            'Dean\'s List — 3 consecutive semesters',
            'Best Final Year Project Award — "Distributed Task Scheduling System"',
            'President, Computer Science Society (2017–2019)',
            'Full Merit Scholarship recipient',
        ],
    },
];
