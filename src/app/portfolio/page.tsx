"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.07 },
    }),
};

const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "ai", label: "AI & ML" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered = activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <div style={{ paddingTop: "72px" }}>
            {/* Header */}
            <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }} className="bg-grid">
                <div className="orb" style={{ width: "500px", height: "500px", background: "rgba(0,217,255,0.08)", top: "-150px", right: "-100px" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="section-label">My Work</div>
                        <h1 className="text-display" style={{ marginBottom: "16px" }}>
                            Project <span className="gradient-text">Portfolio</span>
                        </h1>
                        <p style={{ fontSize: "1.125rem", color: "#8888AA", maxWidth: "600px" }}>
                            A selection of my best work — each project tells a story of a problem solved.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section style={{ padding: "0 24px 16px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                    >
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    id={`filter-${cat.id}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                    style={{
                                        padding: "10px 20px",
                                        borderRadius: "999px",
                                        fontSize: "0.875rem",
                                        fontWeight: isActive ? 600 : 400,
                                        border: isActive ? "1px solid rgba(108,99,255,0.5)" : "1px solid rgba(255,255,255,0.08)",
                                        background: isActive ? "rgba(108,99,255,0.15)" : "transparent",
                                        color: isActive ? "#8B84FF" : "#8888AA",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section style={{ padding: "24px 24px 96px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="portfolio-grid">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                layout
                            >
                                <div className="glass" style={{
                                    padding: "28px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "14px",
                                    position: "relative",
                                }}>
                                    {/* Featured badge */}
                                    {project.featured && (
                                        <div style={{
                                            position: "absolute",
                                            top: "-1px",
                                            right: "20px",
                                            background: "linear-gradient(135deg, #6C63FF, #00D9FF)",
                                            color: "#fff",
                                            fontSize: "0.6875rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            padding: "4px 12px",
                                            borderRadius: "0 0 8px 8px",
                                        }}>
                                            FEATURED
                                        </div>
                                    )}

                                    {/* Category + Year */}
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span className="badge" style={{ fontSize: "0.7rem" }}>{project.category.toUpperCase()}</span>
                                        <span style={{ color: "#5A5A78", fontSize: "0.8125rem" }}>{project.year}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.0625rem", lineHeight: 1.3 }}>
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p style={{ color: "#8888AA", fontSize: "0.9375rem", lineHeight: 1.65, flex: 1 }}>
                                        {project.description}
                                    </p>

                                    {/* Key Highlights */}
                                    <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                        {project.highlights.slice(0, 2).map((h, hi) => (
                                            <li key={hi} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                                                <span style={{ color: "#6C63FF", fontWeight: 700, flexShrink: 0 }}>↗</span>
                                                <span style={{ color: "#A0A0C0", fontSize: "0.875rem", lineHeight: 1.5 }}>{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                        {project.tech.slice(0, 4).map((t) => <span key={t} className="badge">{t}</span>)}
                                        {project.tech.length > 4 && <span className="badge">+{project.tech.length - 4}</span>}
                                    </div>

                                    {/* Actions */}
                                    <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingTop: "4px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            style={{ display: "flex", alignItems: "center", gap: "4px", color: "#6C63FF", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", flex: 1 }}
                                        >
                                            Case Study <ArrowRight size={14} />
                                        </Link>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#5A5A78" }}
                                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0F0F8")}
                                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A78")}
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: "#5A5A78" }}
                                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0F0F8")}
                                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A78")}
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div style={{ textAlign: "center", padding: "80px 0", color: "#5A5A78" }}>
                            No projects in this category yet.
                        </div>
                    )}
                </div>
            </section>

            <style>{`
        @media (max-width: 1024px) { .portfolio-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .portfolio-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </div>
    );
}
