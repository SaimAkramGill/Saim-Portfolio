"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "hello@saim.dev", href: "mailto:hello@saim.dev" },
    { icon: <MapPin size={18} />, label: "Location", value: "Available Worldwide · Remote", href: null },
    { icon: <Phone size={18} />, label: "Availability", value: "Mon–Fri, 9 AM – 6 PM CET", href: null },
];

const socials = [
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com", username: "@saim-dev" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com", username: "in/saim-dev" },
    { icon: <Twitter size={20} />, label: "Twitter / X", href: "https://twitter.com", username: "@saim_dev" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate submission (replace with EmailJS in production)
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("success");
    };

    return (
        <div style={{ paddingTop: "72px" }}>
            {/* Header */}
            <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }} className="bg-grid">
                <div className="orb" style={{ width: "500px", height: "500px", background: "rgba(108,99,255,0.1)", top: "-200px", right: "-100px" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="section-label">Get in Touch</div>
                        <h1 className="text-display" style={{ marginBottom: "16px" }}>
                            Let&apos;s <span className="gradient-text">Work Together</span>
                        </h1>
                        <p style={{ fontSize: "1.125rem", color: "#8888AA", maxWidth: "560px", lineHeight: 1.7 }}>
                            Whether you have a project in mind, a role to discuss, or just want to say hello — my inbox is always open.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: "0 24px 96px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "48px", alignItems: "start" }} className="contact-layout">

                    {/* Left: Info */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {/* Availability badge */}
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 20px", borderRadius: "12px", background: "rgba(0,229,160,0.06)", border: "1px solid rgba(0,229,160,0.15)" }}>
                            <span className="glow-dot" />
                            <div>
                                <div style={{ color: "#00E5A0", fontWeight: 600, fontSize: "0.9375rem" }}>Available for Work</div>
                                <div style={{ color: "#8888AA", fontSize: "0.8125rem" }}>Open to freelance & full-time roles</div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="glass" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                            {contactInfo.map((info) => (
                                <div key={info.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(108,99,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6C63FF", flexShrink: 0 }}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div style={{ color: "#5A5A78", fontSize: "0.8125rem", marginBottom: "2px" }}>{info.label}</div>
                                        {info.href ? (
                                            <a href={info.href} style={{ color: "#F0F0F8", fontWeight: 500, fontSize: "0.9375rem", textDecoration: "none" }}>{info.value}</a>
                                        ) : (
                                            <div style={{ color: "#F0F0F8", fontWeight: 500, fontSize: "0.9375rem" }}>{info.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="glass" style={{ padding: "24px" }}>
                            <h3 style={{ color: "#F0F0F8", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "16px" }}>Connect on Social</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                                        <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8888AA", flexShrink: 0, transition: "all 0.2s" }}
                                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#6C63FF"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.3)"; }}
                                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8888AA"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                                        >
                                            {s.icon}
                                        </div>
                                        <div>
                                            <div style={{ color: "#F0F0F8", fontSize: "0.875rem", fontWeight: 500 }}>{s.label}</div>
                                            <div style={{ color: "#5A5A78", fontSize: "0.8125rem" }}>{s.username}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div className="glass" style={{ padding: "36px" }}>
                            <h2 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.25rem", marginBottom: "24px" }}>Send a Message</h2>

                            {status === "success" ? (
                                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                                    <CheckCircle size={56} style={{ color: "#00E5A0", margin: "0 auto 16px" }} />
                                    <h3 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.25rem", marginBottom: "8px" }}>Message Sent!</h3>
                                    <p style={{ color: "#8888AA" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                                    <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }} className="btn btn-secondary" style={{ marginTop: "20px" }}>
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form id="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                                        <div>
                                            <label style={{ color: "#8888AA", fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "6px" }}>Full Name *</label>
                                            <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className="form-input" />
                                        </div>
                                        <div>
                                            <label style={{ color: "#8888AA", fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "6px" }}>Email *</label>
                                            <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className="form-input" />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ color: "#8888AA", fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "6px" }}>Subject *</label>
                                        <select id="contact-subject" name="subject" required value={form.subject} onChange={handleChange} className="form-input">
                                            <option value="">Select a topic…</option>
                                            <option value="project">Project Inquiry</option>
                                            <option value="job">Job Opportunity</option>
                                            <option value="freelance">Freelance Work</option>
                                            <option value="collaboration">Collaboration</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ color: "#8888AA", fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "6px" }}>Message *</label>
                                        <textarea id="contact-message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell me about your project, role, or idea…" rows={6} className="form-input" style={{ resize: "vertical" }} />
                                    </div>

                                    {status === "error" && (
                                        <div style={{ display: "flex", gap: "8px", alignItems: "center", padding: "12px 16px", borderRadius: "10px", background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.2)" }}>
                                            <AlertCircle size={16} style={{ color: "#FF6B6B" }} />
                                            <span style={{ color: "#FF6B6B", fontSize: "0.875rem" }}>Something went wrong. Please try again.</span>
                                        </div>
                                    )}

                                    <button id="contact-submit" type="submit" disabled={status === "loading"} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }}>
                                        {status === "loading" ? "Sending…" : (
                                            <><Send size={16} /> Send Message</>
                                        )}
                                    </button>

                                    <p style={{ color: "#5A5A78", fontSize: "0.8125rem", textAlign: "center" }}>
                                        I respond within 24 hours. No spam, ever.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
