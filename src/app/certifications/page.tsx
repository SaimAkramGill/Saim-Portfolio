"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { ExternalLink, Download, Shield, Code2, Database, Users, Cloud, Lock } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.07 },
    }),
};

const categoryConfig: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
    cloud: { label: "Cloud & Infrastructure", icon: <Cloud size={16} />, color: "#6C63FF" },
    development: { label: "Development", icon: <Code2 size={16} />, color: "#00D9FF" },
    data: { label: "Data & Analytics", icon: <Database size={16} />, color: "#00E5A0" },
    leadership: { label: "Leadership", icon: <Users size={16} />, color: "#FF6B6B" },
    security: { label: "Security", icon: <Lock size={16} />, color: "#FFA500" },
};

const categories = Array.from(new Set(certifications.map((c) => c.category)));
const grouped = categories.reduce<Record<string, typeof certifications>>((acc, cat) => {
    acc[cat] = certifications.filter((c) => c.category === cat);
    return acc;
}, {});

export default function CertificationsPage() {
    return (
        <div style={{ paddingTop: "72px" }}>
            {/* Header */}
            <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }} className="bg-grid">
                <div className="orb" style={{ width: "500px", height: "500px", background: "rgba(0,229,160,0.06)", top: "-200px", right: "-100px" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="section-label">Credentials</div>
                        <h1 className="text-display" style={{ marginBottom: "16px" }}>
                            Certifications & <span className="gradient-text">Credentials</span>
                        </h1>
                        <p style={{ fontSize: "1.125rem", color: "#8888AA", maxWidth: "580px", lineHeight: 1.7 }}>
                            Validated expertise across cloud, development, security, and leadership. Every certification represents real, applied knowledge.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Row */}
            <section style={{ padding: "0 24px 64px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
                    >
                        {[
                            { label: "Total Certifications", value: certifications.length },
                            { label: "Active / Current", value: certifications.filter(c => !c.expiryDate || new Date(c.expiryDate) > new Date()).length },
                            { label: "Disciplines Covered", value: categories.length },
                        ].map((s) => (
                            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <Shield size={18} style={{ color: "#6C63FF" }} />
                                <div>
                                    <div className="gradient-text" style={{ fontWeight: 800, fontSize: "1.25rem" }}>{s.value}</div>
                                    <div style={{ color: "#8888AA", fontSize: "0.8125rem" }}>{s.label}</div>
                                </div>
                            </div>
                        ))}
                        <a
                            href="/cv.pdf"
                            download
                            className="btn btn-primary btn-sm"
                            style={{ alignSelf: "center", marginLeft: "auto" }}
                        >
                            <Download size={15} /> Download Full CV
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Certs by Category */}
            <section style={{ padding: "0 24px 96px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "56px" }}>
                    {Object.entries(grouped).map(([cat, certs], catIdx) => {
                        const cfg = categoryConfig[cat];
                        return (
                            <div key={cat}>
                                <motion.div
                                    custom={catIdx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}
                                >
                                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${cfg.color}1A`, display: "flex", alignItems: "center", justifyContent: "center", color: cfg.color }}>
                                        {cfg.icon}
                                    </div>
                                    <h2 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.25rem" }}>{cfg.label}</h2>
                                    <span className="badge" style={{ fontSize: "0.7rem" }}>{certs.length} Certs</span>
                                </motion.div>

                                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="cert-grid">
                                    {certs.map((cert, i) => (
                                        <motion.div
                                            key={cert.id}
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                        >
                                            <div className="glass" style={{ padding: "24px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                                {/* Cert Icon */}
                                                <div style={{
                                                    width: "52px", height: "52px", borderRadius: "12px",
                                                    background: `${cfg.color}1A`, display: "flex", alignItems: "center", justifyContent: "center",
                                                    color: cfg.color, flexShrink: 0, fontSize: "1.5rem",
                                                }}>
                                                    <Shield size={22} />
                                                </div>

                                                {/* Info */}
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <h3 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "0.9375rem", lineHeight: 1.3, marginBottom: "6px" }}>
                                                        {cert.name}
                                                    </h3>
                                                    <p style={{ color: cfg.color, fontWeight: 500, fontSize: "0.875rem", marginBottom: "4px" }}>
                                                        {cert.issuer}
                                                    </p>
                                                    <p style={{ color: "#8888AA", fontSize: "0.8125rem", marginBottom: "8px" }}>
                                                        Issued: {cert.dateIssued}
                                                        {cert.expiryDate && <> · Expires: {cert.expiryDate}</>}
                                                        {!cert.expiryDate && <> · No Expiry</>}
                                                    </p>
                                                    <p style={{ color: "#5A5A78", fontSize: "0.8125rem", fontFamily: "var(--font-mono)", marginBottom: "12px" }}>
                                                        ID: {cert.credentialId}
                                                    </p>
                                                    <a
                                                        href={cert.verifyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: cfg.color, fontSize: "0.8125rem", fontWeight: 500, textDecoration: "none" }}
                                                    >
                                                        Verify Credential <ExternalLink size={12} />
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </div>
    );
}
