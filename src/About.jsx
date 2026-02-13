import { Link } from "react-router-dom";

export default function About() {
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
          About
        </span>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 600,
          color: "#1A1A2E", lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Built for<br />
          <span style={{ fontStyle: "italic", color: "#FF6B35" }}>travelers</span>
        </h1>
        <p style={{ fontSize: 18, color: "#8B7355", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          Because jet lag shouldn't ruin the first days of your trip.
        </p>
      </section>

      {/* ─── CONTENT ─── */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "48px 32px 80px" }}>
        <div style={{
          background: "white", border: "2px solid #F0E8E0", borderRadius: 24,
          padding: "40px 36px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600,
            color: "#1A1A2E", marginBottom: 20,
          }}>
            What is DitchJetLag?
          </h2>
          <p style={{ fontSize: 16, color: "#5A5A6E", lineHeight: 1.8, marginBottom: 24 }}>
            DitchJetLag is a free tool that generates personalized jet lag recovery plans based on your departure and destination time zones. We use circadian science principles to recommend when to seek light, avoid light, adjust your sleep schedule, and time caffeine and meals.
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600,
            color: "#1A1A2E", marginBottom: 20,
          }}>
            Why we built this
          </h2>
          <p style={{ fontSize: 16, color: "#5A5A6E", lineHeight: 1.8, marginBottom: 24 }}>
            After too many trips ruined by days of brain fog and 3am wake-ups, we decided to build the tool we wished existed. Most jet lag advice is generic. Our calculator builds a day-by-day plan tailored to your exact route and direction of travel.
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600,
            color: "#1A1A2E", marginBottom: 20,
          }}>
            The science
          </h2>
          <p style={{ fontSize: 16, color: "#5A5A6E", lineHeight: 1.8, marginBottom: 24 }}>
            Your body's internal clock (the suprachiasmatic nucleus) runs on a roughly 24-hour cycle controlled primarily by light exposure. When you cross time zones, that clock needs to shift. Strategic light at the right times is the single most effective intervention, followed by timed melatonin, caffeine, meals, and exercise.
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600,
            color: "#1A1A2E", marginBottom: 20,
          }}>
            Always free
          </h2>
          <p style={{ fontSize: 16, color: "#5A5A6E", lineHeight: 1.8, marginBottom: 0 }}>
            DitchJetLag is free to use, no account required. We believe everyone deserves access to science-backed travel health tools.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link to="/" className="btn-primary" style={{ textDecoration: "none" }}>
            Try the Calculator →
          </Link>
        </div>
      </section>
    </>
  );
}
