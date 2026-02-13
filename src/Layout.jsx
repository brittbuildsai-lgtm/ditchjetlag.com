import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFBF7", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #FF6B35; color: white; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #FF6B35; color: white; border: none;
          padding: 18px 36px; border-radius: 100px;
          font-family: 'Space Mono', monospace;
          font-size: 14px; font-weight: 700; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 12px 28px rgba(255, 107, 53, 0.35); }
        .btn-primary:disabled { opacity: 0.35; cursor: not-allowed; transform: none; box-shadow: none; }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #FF6B35;
          border: 2px solid #FFD4C0; padding: 16px 32px; border-radius: 100px;
          font-family: 'Space Mono', monospace;
          font-size: 13px; font-weight: 700; cursor: pointer;
          transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.06em;
        }
        .btn-outline:hover { border-color: #FF6B35; background: #FFF5F0; transform: translateY(-2px); }

        .nav-link { color: #8B7355; text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.2s; cursor: pointer; font-family: 'Space Mono', monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; }
        .nav-link:hover { color: #FF6B35; }

        footer a { color: #C4A99A; text-decoration: none; font-size: 13px; transition: color 0.2s; }
        footer a:hover { color: #FF6B35; }

        @media (max-width: 768px) {
          .hero-title { font-size: 46px !important; }
          .calc-row { flex-direction: column !important; }
          .tips-grid { grid-template-columns: 1fr !important; }
          .articles-grid { grid-template-columns: 1fr !important; }
          .nav-mid { display: none !important; }
          .footer-cols { flex-direction: column !important; }
        }
      `}</style>

      {/* ─── NAV ─── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrollY > 40 ? "10px 0" : "18px 0",
        background: scrollY > 40 ? "rgba(255,251,247,0.92)" : "transparent",
        backdropFilter: scrollY > 40 ? "blur(16px)" : "none",
        borderBottom: scrollY > 40 ? "2px solid #FFE8DA" : "none",
        transition: "all 0.35s ease",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "#FF6B35", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(255,107,53,0.3)",
            }}>
              <span style={{ color: "white", fontSize: 18 }}>✈</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#1A1A2E" }}>
              ditch<span style={{ color: "#FF6B35" }}>jetlag</span>
            </span>
          </Link>

          <div className="nav-mid" style={{ display: "flex", gap: 28 }}>
            <Link to="/#calculator" className="nav-link">Calculator</Link>
            <Link to="/#tips" className="nav-link">Tips</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
          </div>

          <Link to="/#calculator" className="btn-primary" style={{ padding: "10px 22px", fontSize: 11, textDecoration: "none" }}>Ditch It →</Link>
        </div>
      </nav>

      {/* ─── PAGE CONTENT ─── */}
      <Outlet />

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: "2px solid #F0E8E0", padding: "48px 32px 32px", background: "#FFFBF7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-cols" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginBottom: 40 }}>
            <div style={{ maxWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#FF6B35", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14 }}>✈</div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#1A1A2E" }}>ditch<span style={{ color: "#FF6B35" }}>jetlag</span></span>
              </div>
              <p style={{ fontSize: 13, color: "#C4A99A", lineHeight: 1.7 }}>Free jet lag calculator and recovery plans. Science-backed, always free. ditchjetlag.com</p>
            </div>
            {[
              { title: "Tool", links: [{ label: "Calculator", to: "/#calculator" }, { label: "How It Works", to: "/#tips" }, { label: "City List", to: "/#calculator" }] },
              { title: "Learn", links: [{ label: "Jet Lag Science", to: "/blog" }, { label: "Travel Tips", to: "/blog" }, { label: "All Articles", to: "/blog" }] },
              { title: "Company", links: [{ label: "About", to: "#" }, { label: "Contact", to: "#" }, { label: "Privacy", to: "#" }, { label: "Terms", to: "#" }] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF6B35", fontWeight: 700, marginBottom: 14 }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{col.links.map(l => <Link key={l.label} to={l.to} style={{ color: "#C4A99A", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}>{l.label}</Link>)}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "2px solid #F0E8E0", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "#D4C4B4" }}>© 2026 DitchJetLag. Not medical advice.</span>
            <div style={{ display: "flex", gap: 18 }}>{["Twitter", "Instagram", "Pinterest"].map(s => <a key={s} href="#" style={{ color: "#C4A99A", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}>{s}</a>)}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
