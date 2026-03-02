export interface Certification {
    id: string;
    name: string;
    issuer: string;
    issuerLogo?: string;
    dateIssued: string;
    expiryDate?: string;
    credentialId: string;
    verifyUrl: string;
    category: 'cloud' | 'development' | 'data' | 'leadership' | 'security';
    badge?: string;
    description: string;
}

export const certifications: Certification[] = [
    {
        id: '1',
        name: 'AWS Certified Solutions Architect – Professional',
        issuer: 'Amazon Web Services',
        dateIssued: 'Dec 2024',
        expiryDate: 'Dec 2027',
        credentialId: 'AWS-PSA-2024-001',
        verifyUrl: 'https://aws.amazon.com/verification',
        category: 'cloud',
        description: 'Advanced cloud architecture design patterns, high availability, disaster recovery, and cost optimization on AWS.',
    },
    {
        id: '2',
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        dateIssued: 'Aug 2024',
        expiryDate: 'Aug 2026',
        credentialId: 'GCP-PD-2024-482',
        verifyUrl: 'https://cloud.google.com/certification',
        category: 'cloud',
        description: 'Building, testing, and deploying scalable, secure applications on Google Cloud Platform.',
    },
    {
        id: '3',
        name: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta (Facebook)',
        dateIssued: 'Mar 2024',
        credentialId: 'META-FE-2024-721',
        verifyUrl: 'https://www.coursera.org/verify',
        category: 'development',
        description: 'Advanced React patterns, performance optimization, accessibility, and modern CSS techniques.',
    },
    {
        id: '4',
        name: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        dateIssued: 'Jan 2024',
        expiryDate: 'Jan 2027',
        credentialId: 'CKA-2024-112233',
        verifyUrl: 'https://training.linuxfoundation.org/certification/verify',
        category: 'cloud',
        description: 'Container orchestration, cluster management, workload deployment, and troubleshooting in Kubernetes.',
    },
    {
        id: '5',
        name: 'MongoDB Certified Developer Associate',
        issuer: 'MongoDB University',
        dateIssued: 'Sep 2023',
        credentialId: 'MDB-DEV-2023-5544',
        verifyUrl: 'https://university.mongodb.com/verify',
        category: 'data',
        description: 'Advanced MongoDB data modeling, aggregation pipelines, indexing strategies, and performance tuning.',
    },
    {
        id: '6',
        name: 'TypeScript Fundamentals & Advanced Patterns',
        issuer: 'Microsoft',
        dateIssued: 'Jun 2023',
        credentialId: 'MS-TS-2023-8871',
        verifyUrl: 'https://learn.microsoft.com/verify',
        category: 'development',
        description: 'Advanced TypeScript generics, decorators, utility types, and enterprise-grade type patterns.',
    },
    {
        id: '7',
        name: 'Certified Scrum Master (CSM)',
        issuer: 'Scrum Alliance',
        dateIssued: 'Nov 2022',
        expiryDate: 'Nov 2026',
        credentialId: 'CSM-2022-99012',
        verifyUrl: 'https://www.scrumalliance.org/verify',
        category: 'leadership',
        description: 'Agile frameworks, sprint planning, retrospectives, and cross-functional team facilitation.',
    },
    {
        id: '8',
        name: 'CompTIA Security+ (SY0-701)',
        issuer: 'CompTIA',
        dateIssued: 'Apr 2024',
        expiryDate: 'Apr 2027',
        credentialId: 'COMP-SEC-2024-44221',
        verifyUrl: 'https://www.certmetrics.com/comptia',
        category: 'security',
        description: 'Threat assessment, incident response, cryptography, and network security best practices.',
    },
];
