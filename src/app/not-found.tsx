import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div
            style={{
                paddingTop: "72px",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{ textAlign: "center", padding: "40px 24px" }}>
                <div
                    className="gradient-text"
                    style={{
                        fontSize: "clamp(6rem, 20vw, 10rem)",
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: "8px",
                    }}
                >
                    404
                </div>

                <h1
                    style={{
                        color: "#F0F0F8",
                        fontWeight: 700,
                        fontSize: "1.75rem",
                        marginBottom: "12px",
                    }}
                >
                    Page Not Found
                </h1>
                <p
                    style={{
                        color: "#8888AA",
                        maxWidth: "400px",
                        margin: "0 auto 36px",
                    }}
                >
                    Looks like this page wandered off. It happens to the best of us.
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Link href="/" className="btn btn-primary">
                        <Home size={16} /> Back to Home
                    </Link>
                    <Link href="/portfolio" className="btn btn-secondary">
                        <ArrowLeft size={16} /> View Work
                    </Link>
                </div>
            </div>
        </div>
    );
}
