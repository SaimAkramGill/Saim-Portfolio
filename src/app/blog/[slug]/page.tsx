import { blogPosts } from "@/data/testimonials";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";

export function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <div style={{ paddingTop: "72px" }}>
            <article style={{ padding: "80px 24px 96px" }}>
                <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8888AA", fontSize: "0.9375rem", textDecoration: "none", marginBottom: "40px", transition: "color 0.2s" }}>
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>

                    <div style={{ marginBottom: "32px" }}>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginBottom: "16px" }}>
                            <span className="badge badge-accent">{post.category}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#5A5A78", fontSize: "0.8125rem" }}>
                                <Clock size={12} /> {post.readTime} min read
                            </span>
                            <span style={{ color: "#5A5A78", fontSize: "0.8125rem" }}>
                                {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </span>
                        </div>

                        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#F0F0F8", lineHeight: 1.2, marginBottom: "20px" }}>
                            {post.title}
                        </h1>

                        <p style={{ fontSize: "1.125rem", color: "#8888AA", lineHeight: 1.7 }}>{post.excerpt}</p>
                    </div>

                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "40px" }}>
                        <p style={{ color: "#C0C0D8", lineHeight: 1.8, fontSize: "1.0625rem" }}>
                            {post.content === "Full article content here..." ? (
                                <span>
                                    This article is coming soon. Check back later or{" "}
                                    <Link href="/contact" style={{ color: "#6C63FF" }}>reach out</Link>{" "}
                                    to be notified when it&apos;s published.
                                </span>
                            ) : post.content}
                        </p>
                    </div>

                    <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {post.tags.map((tag) => (
                            <span key={tag} style={{ display: "flex", alignItems: "center", gap: "4px", color: "#5A5A78", fontSize: "0.875rem" }}>
                                <Tag size={12} /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
