"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/certifications", label: "Certifications" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    transition: "all 0.3s ease",
                    padding: "0 24px",
                    background: scrolled
                        ? "rgba(10, 10, 15, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "1px solid transparent",
                }}
            >
                <nav
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "72px",
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            textDecoration: "none",
                        }}
                    >
                        <div
                            style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "10px",
                                background: "linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)",
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
                                background: "linear-gradient(135deg, #F0F0F8 0%, #8888AA 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Saim
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                        }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        padding: "8px 14px",
                                        borderRadius: "8px",
                                        fontSize: "0.875rem",
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive ? "#F0F0F8" : "#8888AA",
                                        textDecoration: "none",
                                        transition: "all 0.2s ease",
                                        background: isActive
                                            ? "rgba(108, 99, 255, 0.15)"
                                            : "transparent",
                                        border: isActive
                                            ? "1px solid rgba(108, 99, 255, 0.3)"
                                            : "1px solid transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            (e.target as HTMLElement).style.color = "#F0F0F8";
                                            (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            (e.target as HTMLElement).style.color = "#8888AA";
                                            (e.target as HTMLElement).style.background = "transparent";
                                        }
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className="btn btn-primary btn-sm"
                            style={{ marginLeft: "8px" }}
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="mobile-menu-btn"
                        aria-label="Toggle menu"
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "10px",
                            padding: "8px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#F0F0F8",
                        }}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: "fixed",
                                inset: 0,
                                background: "rgba(0,0,0,0.7)",
                                zIndex: 98,
                                backdropFilter: "blur(4px)",
                            }}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: "min(320px, 85vw)",
                                background: "#0F0F1A",
                                borderLeft: "1px solid rgba(255,255,255,0.08)",
                                zIndex: 99,
                                padding: "80px 24px 40px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            style={{
                                                display: "block",
                                                padding: "14px 18px",
                                                borderRadius: "12px",
                                                fontSize: "1rem",
                                                fontWeight: isActive ? 600 : 400,
                                                color: isActive ? "#F0F0F8" : "#8888AA",
                                                textDecoration: "none",
                                                background: isActive
                                                    ? "rgba(108, 99, 255, 0.15)"
                                                    : "transparent",
                                                border: isActive
                                                    ? "1px solid rgba(108,99,255,0.3)"
                                                    : "1px solid transparent",
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                style={{ marginTop: "16px" }}
                            >
                                <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                    Hire Me
                                </Link>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
        </>
    );
}
