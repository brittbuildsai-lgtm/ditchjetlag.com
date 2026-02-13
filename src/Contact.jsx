export default function Contact() {
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
          Contact
        </span>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 600,
          color: "#1A1A2E", lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Get in<br />
          <span style={{ fontStyle: "italic", color: "#FF6B35" }}>touch</span>
        </h1>
        <p style={{ fontSize: 18, color: "#8B7355", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          Questions, feedback, or just want to say hi? We'd love to hear from you.
        </p>
      </section>

      {/* ─── CONTENT ─── */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "48px 32px 80px" }}>
        <div style={{
          background: "white", border: "2px solid #F0E8E0", borderRadius: 24,
          padding: "40px 36px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: "#FFF5F0",
                border: "2px solid #FFE0D0", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600,
                  color: "#1A1A2E", marginBottom: 6,
                }}>Email</h3>
                <p style={{ fontSize: 15, color: "#5A5A6E", lineHeight: 1.7, marginBottom: 8 }}>
                  For general questions, feedback, or partnership inquiries.
                </p>
                <a href="mailto:hello@ditchjetlag.com" style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: 700,
                  color: "#FF6B35", textDecoration: "none",
                }}>
                  hello@ditchjetlag.com
                </a>
              </div>
            </div>

            {/* Bug Reports */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: "#FFF5F0",
                border: "2px solid #FFE0D0", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600,
                  color: "#1A1A2E", marginBottom: 6,
                }}>Bug Reports</h3>
                <p style={{ fontSize: 15, color: "#5A5A6E", lineHeight: 1.7, marginBottom: 8 }}>
                  Found something broken? Let us know so we can fix it.
                </p>
                <a href="mailto:bugs@ditchjetlag.com" style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: 700,
                  color: "#FF6B35", textDecoration: "none",
                }}>
                  bugs@ditchjetlag.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: "#FFF5F0",
                border: "2px solid #FFE0D0", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600,
                  color: "#1A1A2E", marginBottom: 6,
                }}>Social</h3>
                <p style={{ fontSize: 15, color: "#5A5A6E", lineHeight: 1.7 }}>
                  Follow us on Instagram and Pinterest for travel tips and jet lag hacks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Response time note */}
        <div style={{
          textAlign: "center", marginTop: 32,
          padding: "20px 24px", borderRadius: 16,
          background: "#FFF5F0", border: "1px solid #FFE0D0",
        }}>
          <p style={{ fontSize: 14, color: "#8B7355", lineHeight: 1.7, fontFamily: "'Space Mono', monospace" }}>
            We typically respond within 48 hours.
          </p>
        </div>
      </section>
    </>
  );
}
