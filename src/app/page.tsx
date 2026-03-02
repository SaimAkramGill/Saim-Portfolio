"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter, ExternalLink, Star, ChevronRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { testimonials } from "@/data/testimonials";

/* ── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

/* ── Stats data ─────────────────────────────────────── */
const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "8", label: "Certifications" },
];

/* ── Featured Projects ──────────────────────────────── */
const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function HomePage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "80px 24px",
        }}
        className="bg-grid"
      >
        {/* Background Orbs */}
        <div
          className="orb"
          style={{
            width: "600px",
            height: "600px",
            background: "rgba(108, 99, 255, 0.12)",
            top: "-100px",
            left: "-200px",
          }}
        />
        <div
          className="orb"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(0, 217, 255, 0.08)",
            top: "20%",
            right: "-100px",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(0, 229, 160, 0.08)",
                border: "1px solid rgba(0, 229, 160, 0.2)",
                marginBottom: "32px",
              }}
            >
              <span className="glow-dot" />
              <span style={{ color: "#00E5A0", fontSize: "0.875rem", fontWeight: 500 }}>
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-hero"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: "16px", fontWeight: 800 }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Saim</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.875rem)",
                fontWeight: 600,
                color: "#8888AA",
                marginBottom: "24px",
                minHeight: "48px",
              }}
            >
              I build{" "}
              <span style={{ color: "#6C63FF" }}>
                <TypeAnimation
                  sequence={[
                    "scalable web applications.",
                    2000,
                    "beautiful user experiences.",
                    2000,
                    "AI-powered products.",
                    2000,
                    "high-performance APIs.",
                    2000,
                    "things that matter.",
                    2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  speed={50}
                />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: "1.125rem",
                color: "#8888AA",
                lineHeight: 1.7,
                maxWidth: "600px",
                marginBottom: "40px",
              }}
            >
              Full-Stack Engineer with 7+ years of experience turning complex problems into
              elegant, production-ready solutions. I specialize in{" "}
              <span style={{ color: "#F0F0F8" }}>Next.js</span>,{" "}
              <span style={{ color: "#F0F0F8" }}>TypeScript</span>, and{" "}
              <span style={{ color: "#F0F0F8" }}>Node.js</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}
            >
              <Link href="/portfolio" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Let&apos;s Talk
              </Link>
              <a
                href="/cv.pdf"
                download
                className="btn btn-secondary"
                style={{ gap: "8px" }}
              >
                <Download size={16} /> Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              {[
                { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8888AA",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "#6C63FF";
                    el.style.borderColor = "rgba(108,99,255,0.4)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "#8888AA";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ═══════════════════════════════════ */}
      <section style={{ padding: "0 24px", margin: "0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                style={{
                  padding: "32px 24px",
                  background: "#0A0A0F",
                  textAlign: "center",
                }}
              >
                <div
                  className="gradient-text"
                  style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "4px" }}
                >
                  {stat.value}
                </div>
                <div style={{ color: "#8888AA", fontSize: "0.9375rem" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECTS ═════════════════════════════ */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "48px" }}
          >
            <div className="section-label">Featured Work</div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <h2 className="text-display" style={{ maxWidth: "520px" }}>
                Things I&apos;ve{" "}
                <span className="gradient-text">Built</span>
              </h2>
              <Link
                href="/portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#6C63FF",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                View all projects <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="projects-grid"
          >
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="glass" style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span className="badge" style={{ fontSize: "0.7rem" }}>
                      {project.category.toUpperCase()}
                    </span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#5A5A78", transition: "color 0.2s" }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0F0F8")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A78")}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#5A5A78", transition: "color 0.2s" }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0F0F8")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A78")}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#F0F0F8" }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: "0.9375rem", color: "#8888AA", lineHeight: 1.6, flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="badge" style={{ background: "rgba(255,255,255,0.04)" }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  <Link
                    href={`/portfolio/${project.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#6C63FF",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      marginTop: "4px",
                    }}
                  >
                    Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SKILLS ════════════════════════════════════════ */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "48px" }}
          >
            <div className="section-label">Tech Stack</div>
            <h2 className="text-display">
              My <span className="gradient-text">Skills</span>
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="skills-grid"
          >
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="glass" style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                    <h3 style={{ color: "#F0F0F8", fontWeight: 600, fontSize: "1rem" }}>{cat.label}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cat.skills.map((skill) => (
                      <span key={skill} className="badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════ */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "48px", textAlign: "center" }}
          >
            <div className="section-label" style={{ justifyContent: "center" }}>Testimonials</div>
            <h2 className="text-display">
              What People <span className="gradient-text">Say</span>
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
            className="testimonials-grid"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="glass" style={{ padding: "28px", height: "100%" }}>
                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="#6C63FF" color="#6C63FF" />
                    ))}
                  </div>
                  <p style={{ color: "#D0D0E0", fontSize: "1rem", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div style={{ color: "#F0F0F8", fontWeight: 600, fontSize: "0.9375rem" }}>{t.name}</div>
                    <div style={{ color: "#8888AA", fontSize: "0.875rem" }}>
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════ */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="gradient-border"
            style={{
              padding: "64px 48px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,217,255,0.04))",
              borderRadius: "24px",
              backdropFilter: "blur(12px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="orb" style={{ width: "300px", height: "300px", background: "rgba(108,99,255,0.12)", top: "-150px", left: "50%", transform: "translateX(-50%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 className="text-display" style={{ marginBottom: "16px" }}>
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Amazing Together</span>
              </h2>
              <p style={{ color: "#8888AA", fontSize: "1.125rem", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
                I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s talk.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Start a Conversation <ArrowRight size={18} />
                </Link>
                <a href="mailto:hello@saim.dev" className="btn btn-secondary">
                  hello@saim.dev
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
