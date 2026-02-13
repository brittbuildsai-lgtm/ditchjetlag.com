import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import posts from "./posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section style={{ padding: "150px 32px 80px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#1A1A2E", marginBottom: 16 }}>Post not found</h1>
        <Link to="/blog" style={{ color: "#FF6B35", fontFamily: "'Space Mono', monospace", fontSize: 14 }}>← Back to blog</Link>
      </section>
    );
  }

  return (
    <>
      {/* ─── POST HEADER ─── */}
      <section style={{
        padding: "150px 32px 48px",
        background: "linear-gradient(160deg, #FFF5EE 0%, #FFFBF7 30%, #F0F8FF 100%)",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link to="/blog" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
            color: "#FF6B35", textDecoration: "none", textTransform: "uppercase",
            letterSpacing: "0.06em", marginBottom: 28,
          }}>
            ← Back to blog
          </Link>

          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
            <span style={{
              padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700,
              fontFamily: "'Space Mono', monospace", textTransform: "uppercase",
              letterSpacing: "0.06em", background: "white", border: "2px solid #FFD4C0", color: "#FF6B35",
            }}>{post.tag}</span>
            <span style={{ fontSize: 13, color: "#C4A99A", fontFamily: "'Space Mono', monospace" }}>{post.mins} min read</span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 600,
            color: "#1A1A2E", lineHeight: 1.15, letterSpacing: "-0.02em",
          }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* ─── POST CONTENT ─── */}
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "48px 32px 80px" }}>
        <div className="prose">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600,
                  color: "#1A1A2E", marginTop: 40, marginBottom: 16, lineHeight: 1.3,
                }}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600,
                  color: "#1A1A2E", marginTop: 32, marginBottom: 12, lineHeight: 1.35,
                }}>{children}</h3>
              ),
              p: ({ children }) => (
                <p style={{
                  fontSize: 16, color: "#5A4A3A", lineHeight: 1.8, marginBottom: 20,
                  fontFamily: "'DM Sans', sans-serif",
                }}>{children}</p>
              ),
              ul: ({ children }) => (
                <ul style={{
                  marginBottom: 20, paddingLeft: 24, color: "#5A4A3A",
                  fontSize: 16, lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif",
                }}>{children}</ul>
              ),
              ol: ({ children }) => (
                <ol style={{
                  marginBottom: 20, paddingLeft: 24, color: "#5A4A3A",
                  fontSize: 16, lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif",
                }}>{children}</ol>
              ),
              li: ({ children }) => (
                <li style={{ marginBottom: 8 }}>{children}</li>
              ),
              strong: ({ children }) => (
                <strong style={{ color: "#1A1A2E", fontWeight: 700 }}>{children}</strong>
              ),
              em: ({ children }) => (
                <em style={{ fontStyle: "italic" }}>{children}</em>
              ),
              blockquote: ({ children }) => (
                <blockquote style={{
                  borderLeft: "4px solid #FF6B35", paddingLeft: 20, margin: "24px 0",
                  color: "#8B7355", fontStyle: "italic",
                }}>{children}</blockquote>
              ),
              hr: () => (
                <hr style={{ border: "none", borderTop: "2px solid #F0E8E0", margin: "32px 0" }} />
              ),
            }}
          >
            {post.content}
          </Markdown>
        </div>

        {/* ─── BACK LINK ─── */}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "2px solid #F0E8E0" }}>
          <Link to="/blog" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
            color: "#FF6B35", textDecoration: "none", textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}>
            ← Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
