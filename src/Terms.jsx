export default function Terms() {
  const sectionStyle = { marginBottom: 32 };
  const h2Style = {
    fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600,
    color: "#1A1A2E", marginBottom: 14,
  };
  const pStyle = { fontSize: 15, color: "#5A5A6E", lineHeight: 1.8, marginBottom: 12 };

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
          Legal
        </span>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 600,
          color: "#1A1A2E", lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Terms &<br />
          <span style={{ fontStyle: "italic", color: "#FF6B35" }}>Conditions</span>
        </h1>
        <p style={{ fontSize: 18, color: "#8B7355", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          Last updated: February 2026
        </p>
      </section>

      {/* ─── CONTENT ─── */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "48px 32px 80px" }}>
        <div style={{
          background: "white", border: "2px solid #F0E8E0", borderRadius: 24,
          padding: "40px 36px",
        }}>
          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Acceptance of Terms</h2>
            <p style={pStyle}>
              By accessing and using DitchJetLag ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Service.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Service Description</h2>
            <p style={pStyle}>
              DitchJetLag provides a free jet lag calculator that generates personalized recovery plans based on time zone differences. The Service is provided for informational and educational purposes only.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Not Medical Advice</h2>
            <p style={pStyle}>
              The information and recommendations provided by DitchJetLag are not medical advice. The plans generated are based on general circadian science principles and should not replace professional medical guidance. Always consult a healthcare provider before making changes to your sleep, supplement, or medication routines.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Use at Your Own Risk</h2>
            <p style={pStyle}>
              You use DitchJetLag at your own risk. We make no warranties, expressed or implied, regarding the accuracy, completeness, or usefulness of the information provided. We are not liable for any decisions or actions taken based on the Service's output.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Intellectual Property</h2>
            <p style={pStyle}>
              All content, design, and code on DitchJetLag is owned by DitchJetLag and protected by applicable intellectual property laws. You may not copy, modify, distribute, or reproduce any part of the Service without prior written permission.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Privacy</h2>
            <p style={pStyle}>
              DitchJetLag does not require an account and does not collect personal information. City selections and calculator results are processed in your browser and are not stored on our servers.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Third-Party Links</h2>
            <p style={pStyle}>
              The Service may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of those external sites.
            </p>
          </div>

          <div style={{ marginBottom: 0 }}>
            <h2 style={h2Style}>8. Changes to Terms</h2>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              We reserve the right to update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms. We will note the date of the most recent update at the top of this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
