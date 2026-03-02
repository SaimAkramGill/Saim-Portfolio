import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <div style={{ paddingTop: "72px" }}>
            <section style={{ padding: "80px 24px 96px" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8888AA", fontSize: "0.9375rem", textDecoration: "none", marginBottom: "40px", transition: "color 0.2s" }}>
                        <ArrowLeft size={16} /> Back to Portfolio
                    </Link>

                    <div style={{ marginBottom: "32px" }}>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
                            <span className="badge">{project.category.toUpperCase()}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#8888AA", fontSize: "0.875rem" }}>
                                <Calendar size={13} /> {project.year}
                            </span>
                            {project.featured && <span className="badge badge-accent">Featured</span>}
                        </div>
                        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#F0F0F8", lineHeight: 1.2, marginBottom: "20px" }}>
                            {project.title}
                        </h1>
                        <p style={{ fontSize: "1.125rem", color: "#8888AA", lineHeight: 1.7 }}>{project.longDescription}</p>
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                                <Github size={15} /> View Source
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                <ExternalLink size={15} /> Live Demo
                            </a>
                        )}
                    </div>

                    {/* Tech Stack */}
                    <div className="glass" style={{ padding: "28px", marginBottom: "28px" }}>
                        <h2 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "16px" }}>Tech Stack</h2>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {project.tech.map((t) => <span key={t} className="badge">{t}</span>)}
                        </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="glass" style={{ padding: "28px" }}>
                        <h2 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "20px" }}>Key Achievements</h2>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {project.highlights.map((h, i) => (
                                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                    <span style={{
                                        width: "24px", height: "24px", borderRadius: "50%",
                                        background: "rgba(108,99,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "#6C63FF", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0, marginTop: "2px",
                                    }}>
                                        {i + 1}
                                    </span>
                                    <span style={{ color: "#C0C0D8", lineHeight: 1.7, fontSize: "0.9375rem" }}>{h}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
