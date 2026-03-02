"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/data/testimonials";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.08 },
    }),
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
    return (
        <div style={{ paddingTop: "72px" }}>
            {/* Header */}
            <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }} className="bg-grid">
                <div className="orb" style={{ width: "500px", height: "500px", background: "rgba(108,99,255,0.08)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="section-label" style={{ justifyContent: "center" }}>Writing & Thinking</div>
                        <h1 className="text-display" style={{ marginBottom: "16px" }}>
                            The <span className="gradient-text">Blog</span>
                        </h1>
                        <p style={{ fontSize: "1.125rem", color: "#8888AA", maxWidth: "520px", margin: "0 auto" }}>
                            Long-form thoughts on engineering, architecture, career growth, and the craft of building software.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Articles */}
            <section style={{ padding: "0 24px 96px" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                                <div className="glass" style={{ padding: "32px", cursor: "pointer" }}>
                                    <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px", flexWrap: "wrap" }}>
                                        <span className="badge badge-accent">{post.category}</span>
                                        <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#5A5A78", fontSize: "0.8125rem" }}>
                                            <Clock size={12} /> {post.readTime} min read
                                        </div>
                                        <div style={{ color: "#5A5A78", fontSize: "0.8125rem" }}>{formatDate(post.publishedAt)}</div>
                                    </div>

                                    <h2 style={{ color: "#F0F0F8", fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.3, marginBottom: "10px" }}>
                                        {post.title}
                                    </h2>

                                    <p style={{ color: "#8888AA", lineHeight: 1.7, fontSize: "0.9375rem", marginBottom: "20px" }}>
                                        {post.excerpt}
                                    </p>

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                            {post.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} style={{ display: "flex", alignItems: "center", gap: "4px", color: "#5A5A78", fontSize: "0.8125rem" }}>
                                                    <Tag size={11} /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#6C63FF", fontSize: "0.875rem", fontWeight: 500 }}>
                                            Read Article <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Coming Soon notice */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div style={{
                            padding: "32px",
                            borderRadius: "16px",
                            border: "1px dashed rgba(108,99,255,0.3)",
                            textAlign: "center",
                            background: "rgba(108,99,255,0.03)",
                        }}>
                            <p style={{ color: "#8888AA", fontSize: "0.9375rem" }}>
                                ✍️ More articles in progress — subscribe to get notified when they drop.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
