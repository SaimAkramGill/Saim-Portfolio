"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, ChevronDown, GraduationCap, Award } from "lucide-react";
import { experiences, education } from "@/data/experience";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.08 },
    }),
};

export default function ExperiencePage() {
    const [expanded, setExpanded] = useState<string | null>("1");

    return (
        <div style={{ paddingTop: "72px" }}>
            {/* Header */}
            <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }} className="bg-grid">
                <div className="orb" style={{ width: "500px", height: "500px", background: "rgba(108,99,255,0.1)", top: "-200px", left: "-100px" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="section-label">Work History</div>
                        <h1 className="text-display" style={{ marginBottom: "16px" }}>
                            My <span className="gradient-text">Experience</span>
                        </h1>
                        <p style={{ fontSize: "1.125rem", color: "#8888AA", maxWidth: "600px" }}>
                            7+ years of building products, leading teams, and solving hard problems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section style={{ padding: "0 24px 80px" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div style={{ position: "relative" }}>
                        {/* Vertical Line */}
                        <div style={{
                            position: "absolute",
                            left: "20px",
                            top: "0",
                            bottom: "0",
                            width: "2px",
                            background: "linear-gradient(to bottom, #6C63FF, rgba(108,99,255,0.1))",
                            borderRadius: "2px",
                        }} />

                        <div style={{ display: "flex", flexDirection: "column", gap: "32px", paddingLeft: "60px" }}>
                            {experiences.map((exp, i) => {
                                const isOpen = expanded === exp.id;
                                return (
                                    <motion.div
                                        key={exp.id}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                    >
                                        {/* Timeline dot */}
                                        <div style={{
                                            position: "absolute",
                                            left: "10px",
                                            width: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #6C63FF, #00D9FF)",
                                            boxShadow: "0 0 12px rgba(108,99,255,0.4)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}>
                                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                                        </div>

                                        {/* Card */}
                                        <div className="glass" style={{ padding: "28px", cursor: "pointer" }} onClick={() => setExpanded(isOpen ? null : exp.id)}>
                                            {/* Card Header */}
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                                                        <h3 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.125rem" }}>{exp.title}</h3>
                                                        <span className="badge" style={{ fontSize: "0.7rem" }}>{exp.type}</span>
                                                    </div>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6C63FF", fontWeight: 600, fontSize: "0.9375rem" }}>
                                                            <Briefcase size={14} />
                                                            {exp.company}
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#8888AA", fontSize: "0.875rem" }}>
                                                            <MapPin size={13} /> {exp.location}
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#8888AA", fontSize: "0.875rem" }}>
                                                            <Calendar size={13} /> {exp.startDate} — {exp.endDate}
                                                        </div>
                                                    </div>
                                                </div>
                                                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ color: "#8888AA", flexShrink: 0 }}>
                                                    <ChevronDown size={20} />
                                                </motion.div>
                                            </div>

                                            {/* Expandable Content */}
                                            <motion.div
                                                initial={false}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                transition={{ duration: 0.35, ease: "easeOut" }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "20px" }}>
                                                    <p style={{ color: "#8888AA", lineHeight: 1.7, marginBottom: "16px", fontSize: "0.9375rem" }}>
                                                        {exp.summary}
                                                    </p>
                                                    <h4 style={{ color: "#F0F0F8", fontWeight: 600, fontSize: "0.875rem", marginBottom: "12px" }}>Key Achievements</h4>
                                                    <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                                                        {exp.achievements.map((ach, ai) => (
                                                            <li key={ai} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                                                <span style={{ color: "#6C63FF", fontWeight: 800, fontSize: "1rem", lineHeight: 1.4, flexShrink: 0 }}>→</span>
                                                                <span style={{ color: "#C0C0D8", fontSize: "0.9375rem", lineHeight: 1.6 }}>{ach}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                                        {exp.tech.map((t) => <span key={t} className="badge">{t}</span>)}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section style={{ padding: "0 24px 96px" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: "32px" }}>
                        <div className="section-label">Academic Background</div>
                        <h2 className="text-heading" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <GraduationCap size={28} style={{ color: "#6C63FF" }} />
                            Education
                        </h2>
                    </motion.div>

                    {education.map((edu, i) => (
                        <motion.div key={edu.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="glass" style={{ padding: "32px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                                    <div>
                                        <h3 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.125rem" }}>{edu.degree}</h3>
                                        <p style={{ color: "#6C63FF", fontWeight: 500, fontSize: "0.9375rem" }}>{edu.major}</p>
                                        <p style={{ color: "#8888AA", fontSize: "0.875rem" }}>{edu.institution} · Graduated {edu.year}</p>
                                    </div>
                                    {edu.gpa && (
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(108,99,255,0.1)", padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(108,99,255,0.2)" }}>
                                            <Award size={14} style={{ color: "#6C63FF" }} />
                                            <span style={{ color: "#6C63FF", fontWeight: 600, fontSize: "0.875rem" }}>GPA {edu.gpa}</span>
                                        </div>
                                    )}
                                </div>
                                <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {edu.achievements.map((ach, ai) => (
                                        <li key={ai} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                            <span style={{ color: "#00D9FF", fontWeight: 800, flexShrink: 0 }}>✦</span>
                                            <span style={{ color: "#C0C0D8", fontSize: "0.9375rem" }}>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
