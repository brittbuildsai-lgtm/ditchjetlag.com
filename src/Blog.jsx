import { Link } from "react-router-dom";
import posts from "./posts";

export default function Blog() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section style={{
        padding: "150px 32px 60px",
        background: "linear-gradient(160deg, #FFF5EE 0%, #FFFBF7 30%, #F0F8FF 100%)",
        textAlign: "center",
      }}>
        <span style={{
          display: "inline-block", padding: "8px 20px", borderRadius: 100,
          background: "white", border: "2px solid #FFD4C0",
          fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
          color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase",
          marginBottom: 28,
        }}>
          Blog
        </span>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 600,
          color: "#1A1A2E", lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Guides, science &<br />
          <span style={{ fontStyle: "italic", color: "#FF6B35" }}>travel tips</span>
        </h1>
        <p style={{ fontSize: 18, color: "#8B7355", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          Everything you need to understand jet lag and beat it on your next trip.
        </p>
      </section>

      {/* ─── POST GRID ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 80px" }}>
        <div className="articles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                padding: "30px 24px", borderRadius: 22, background: "white",
                border: "2px solid #F0E8E0", cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                height: "100%",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "#FFD4C0"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#F0E8E0"; }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
                  <span style={{
                    padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                    fontFamily: "'Space Mono', monospace", textTransform: "uppercase",
                    letterSpacing: "0.06em", background: "#FFF5F0", color: "#FF6B35",
                  }}>{post.tag}</span>
                  <span style={{ fontSize: 12, color: "#C4A99A" }}>{post.mins} min</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#1A1A2E", lineHeight: 1.35 }}>{post.title}</h3>
                <div style={{ marginTop: 18, fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700, color: "#FF6B35", textTransform: "uppercase", letterSpacing: "0.06em" }}>Read →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
