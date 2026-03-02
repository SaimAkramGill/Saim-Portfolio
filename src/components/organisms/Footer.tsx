"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Code2, ArrowUpRight } from "lucide-react";

const footerLinks = {
    Navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Experience", href: "/experience" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Certifications", href: "/certifications" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
    Social: [
        { label: "GitHub", href: "https://github.com", icon: <Github size={14} />, external: true },
        { label: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={14} />, external: true },
        { label: "Twitter / X", href: "https://twitter.com", icon: <Twitter size={14} />, external: true },
        { label: "Email", href: "mailto:hello@saim.dev", icon: <Mail size={14} />, external: false },
    ],
};

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            style={{
                background: "#0A0A0F",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "64px 24px 32px",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr",
                        gap: "48px",
                        marginBottom: "48px",
                    }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                marginBottom: "16px",
                            }}
                        >
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "10px",
                                    background: "linear-gradient(135deg, #6C63FF, #00D9FF)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Code2 size={18} color="#fff" />
                            </div>
                            <span
                                style={{
                                    fontWeight: 700,
                                    fontSize: "1.125rem",
                                    background: "linear-gradient(135deg, #F0F0F8, #8888AA)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Saim
                            </span>
                        </Link>
                        <p
                            style={{
                                color: "#8888AA",
                                fontSize: "0.9375rem",
                                lineHeight: 1.7,
                                maxWidth: "320px",
                                marginBottom: "24px",
                            }}
                        >
                            Full-Stack Engineer building scalable, beautiful digital products.
                            Available for exciting opportunities.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span className="glow-dot" />
                            <span style={{ color: "#00E5A0", fontSize: "0.875rem", fontWeight: 500 }}>
                                Available for work
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4
                            style={{
                                color: "#F0F0F8",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "20px",
                            }}
                        >
                            Navigation
                        </h4>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                            {footerLinks.Navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{
                                            color: "#8888AA",
                                            fontSize: "0.9375rem",
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F0F0F8")}
                                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8888AA")}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4
                            style={{
                                color: "#F0F0F8",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "20px",
                            }}
                        >
                            Connect
                        </h4>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                            {footerLinks.Social.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            color: "#8888AA",
                                            fontSize: "0.9375rem",
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.color = "#6C63FF";
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.color = "#8888AA";
                                        }}
                                    >
                                        {link.icon}
                                        {link.label}
                                        {link.external && <ArrowUpRight size={12} />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "16px",
                    }}
                >
                    <p style={{ color: "#5A5A78", fontSize: "0.875rem" }}>
                        © {year} Saim. All Rights Reserved.
                    </p>
                    <p style={{ color: "#5A5A78", fontSize: "0.875rem" }}>
                        Designed & Built with{" "}
                        <span style={{ color: "#FF6B6B" }}>♥</span> using Next.js & TypeScript
                    </p>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
        </footer>
    );
}
