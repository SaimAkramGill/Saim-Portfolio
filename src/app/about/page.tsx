"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Users, Lightbulb, Target, Code2, BookOpen, Music, Globe, Coffee } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

const values = [
    { icon: <Target size={20} />, title: "Excellence", desc: "Every line of code I write is crafted with care. Good enough is never enough." },
    { icon: <Users size={20} />, title: "Collaboration", desc: "The best products are built by teams who communicate openly and lift each other up." },
    { icon: <Lightbulb size={20} />, title: "Curiosity", desc: "I treat every project as an opportunity to learn something new and push my limits." },
    { icon: <Zap size={20} />, title: "Speed With Quality", desc: "Fast iterations and clean code aren't opposites — they're the same discipline." },
    { icon: <Heart size={20} />, title: "User Empathy", desc: "Technology is only as good as the experience it creates for real human beings." },
    { icon: <BookOpen size={20} />, title: "Continuous Growth", desc: "I invest 10+ hours per week in learning — reading, building, and exploring new domains." },
];

const traits = [
    "Detail-Oriented", "Systems Thinker", "Creative Problem Solver",
    "Clear Communicator", "Self-Starter", "Team Player",
    "Fast Learner", "Ownership Mindset",
];

const interests = [
    { icon: <Code2 size={20} />, label: "Open Source", desc: "Contributing to and learning from the open-source ecosystem" },
    { icon: <Music size={20} />, label: "Music", desc: "Guitar and electronic music production as creative outlets" },
    { icon: <Globe size={20} />, label: "Travel", desc: "Exploring new cultures and drawing inspiration from the world" },
    { icon: <Coffee size={20} />, label: "Coffee & Conversations", desc: "Long talks about technology, philosophy, and what's next" },
];

export default function AboutPage() {
    return (
        <div style={{ paddingTop: "72px" }}>
            {/* Header */}
            <section
                style={{
                    padding: "80px 24px 64px",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="bg-grid"
            >
                <div className="orb" style={{ width: "500px", height: "500px", background: "rgba(108,99,255,0.1)", top: "-200px", right: "-100px" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <div className="section-label">Get to Know Me</div>
                        <h1 className="text-display" style={{ marginBottom: "16px" }}>
                            About <span className="gradient-text">Me</span>
                        </h1>
                        <p style={{ fontSize: "1.125rem", color: "#8888AA", maxWidth: "600px", lineHeight: 1.7 }}>
                            Engineer. Builder. Problem-Solver. Here&apos;s the story behind the code.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section style={{ padding: "0 24px 80px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }} className="about-layout">
                    {/* Avatar Placeholder */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <div
                            className="gradient-border"
                            style={{
                                background: "linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,217,255,0.05))",
                                borderRadius: "20px",
                                padding: "8px",
                                aspectRatio: "3/4",
                                maxWidth: "320px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "16px",
                                background: "linear-gradient(135deg, #141428, #0A0A0F)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "12px",
                            }}>
                                <div style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #6C63FF, #00D9FF)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "2.5rem",
                                    fontWeight: 800,
                                    color: "#fff",
                                }}>
                                    S
                                </div>
                                <span style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.25rem" }}>Saim</span>
                                <span style={{ color: "#8888AA", fontSize: "0.875rem" }}>Full-Stack Engineer</span>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                                    <span className="glow-dot" />
                                    <span style={{ color: "#00E5A0", fontSize: "0.8125rem" }}>Available for Work</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <h2 className="text-heading" style={{ color: "#F0F0F8" }}>
                            My Story
                        </h2>
                        {[
                            "I didn't start by writing code — I started by breaking things and desperately trying to fix them. My journey into software engineering began with a curiosity about how the websites I used every day actually worked. One HTML file turned into a CSS file, which turned into JavaScript, which turned into a career I'm incredibly passionate about.",
                            "Over the past 7+ years, I've grown from a junior developer Googling how to center a div, to a Senior Full-Stack Engineer architecting systems that serve hundreds of thousands of users. I've built enterprise CRMs, e-commerce platforms processing millions in transactions, AI-powered tools, and real-time collaboration apps.",
                            "What drives me isn't just writing code — it's solving the puzzles that code represents. Every problem is an opportunity to learn something new, and every project is a chance to create something that genuinely improves someone's life or work.",
                            "When I'm not at my desk, I'm strumming a guitar, exploring a new city, or deep in a rabbit hole about whatever the latest breakthrough in AI or distributed systems looks like.",
                        ].map((para, i) => (
                            <p key={i} style={{ color: "#8888AA", lineHeight: 1.8, fontSize: "1rem" }}>{para}</p>
                        ))}

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                            {traits.map((trait) => (
                                <span key={trait} className="badge badge-accent">{trait}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: "0 24px 80px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: "40px" }}>
                        <div className="section-label">What I Stand For</div>
                        <h2 className="text-display">Core <span className="gradient-text">Values</span></h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="values-grid">
                        {values.map((v, i) => (
                            <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="glass" style={{ padding: "28px", height: "100%" }}>
                                    <div style={{ color: "#6C63FF", marginBottom: "14px" }}>{v.icon}</div>
                                    <h3 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "8px" }}>{v.title}</h3>
                                    <p style={{ color: "#8888AA", fontSize: "0.9375rem", lineHeight: 1.6 }}>{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interests */}
            <section style={{ padding: "0 24px 80px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: "40px" }}>
                        <div className="section-label">Outside the Code</div>
                        <h2 className="text-display">What I <span className="gradient-text">Love</span></h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="interests-grid">
                        {interests.map((item, i) => (
                            <motion.div key={item.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="glass" style={{ padding: "28px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "12px",
                                        background: "rgba(108,99,255,0.12)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#6C63FF",
                                        flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ color: "#F0F0F8", fontWeight: 600, marginBottom: "6px" }}>{item.label}</h3>
                                        <p style={{ color: "#8888AA", fontSize: "0.9375rem", lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 900px) {
          .about-layout { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .interests-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
