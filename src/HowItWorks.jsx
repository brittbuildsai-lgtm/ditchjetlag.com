import { Link } from "react-router-dom";
import usePageMeta from "./usePageMeta";

const STEPS = [
  {
    num: "01",
    title: "Pick your route",
    desc: "Select your departure and destination cities. Our calculator figures out the time zone difference and direction of travel — both matter for your recovery plan.",
    color: "#FF6B35",
  },
  {
    num: "02",
    title: "We calculate your shift",
    desc: "Flying east requires advancing your clock (harder). Flying west means delaying it (easier). We determine the optimal adjustment direction and how many hours your body needs to shift.",
    color: "#4ECDC4",
  },
  {
    num: "03",
    title: "Get a day-by-day plan",
    desc: "You'll receive a personalized timeline covering prep days before departure and recovery days after arrival. Each day includes specific guidance on light, sleep, caffeine, and meals.",
    color: "#6C63FF",
  },
  {
    num: "04",
    title: "Follow the light rules",
    desc: "Light exposure is the #1 circadian reset tool. Your plan tells you exactly when to seek bright light and when to wear sunglasses or stay in dim environments.",
    color: "#E85D75",
  },
  {
    num: "05",
    title: "Time everything else",
    desc: "Caffeine, meals, exercise, and melatonin all influence your internal clock. Your plan times each one to accelerate adaptation rather than fight it.",
    color: "#2B6CB0",
  },
  {
    num: "06",
    title: "Arrive adjusted",
    desc: "By following the plan, most travelers can cut their jet lag recovery time in half. Start your trip feeling present instead of spending the first days in a fog.",
    color: "#38B2AC",
  },
];

const SCIENCE = [
  {
    title: "Circadian rhythm",
    desc: "Your body runs on a roughly 24.2-hour internal clock controlled by the suprachiasmatic nucleus in your brain. Crossing time zones forces this clock to re-sync.",
  },
  {
    title: "Light as the primary signal",
    desc: "Special cells in your eyes (ipRGCs) detect light and signal your brain to shift the clock. Morning light advances it, evening light delays it.",
  },
  {
    title: "Direction matters",
    desc: "Flying east requires you to fall asleep earlier — fighting your natural tendency to delay. That's why eastward travel is typically harder than westward.",
  },
  {
    title: "Multiple body clocks",
    desc: "Your gut, liver, and muscles all have their own clocks. Timing meals and exercise helps these peripheral clocks sync with your brain's master clock.",
  },
];

export default function HowItWorks() {
  usePageMeta("How It Works", "Learn how the DitchJetLag calculator uses circadian science to build personalized jet lag recovery plans.");
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
          How It Works
        </span>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 600,
          color: "#1A1A2E", lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Science meets<br />
          <span style={{ fontStyle: "italic", color: "#FF6B35" }}>simplicity</span>
        </h1>
        <p style={{ fontSize: 18, color: "#8B7355", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
          Our calculator uses circadian science to build you a personalized jet lag recovery plan in seconds.
        </p>
      </section>

      {/* ─── STEPS ─── */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px 60px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{
              display: "flex", gap: 24, alignItems: "flex-start",
              padding: "28px 28px", borderRadius: 22, background: "white",
              border: "2px solid #F0E8E0", transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = step.color; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#F0E8E0"; }}
            >
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: 28, fontWeight: 700,
                color: step.color, flexShrink: 0, lineHeight: 1, marginTop: 2,
              }}>
                {step.num}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600,
                  color: "#1A1A2E", marginBottom: 8,
                }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: "#8B7355", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SCIENCE ─── */}
      <section style={{
        padding: "48px 32px 60px",
        background: "linear-gradient(180deg, #FFFBF7, #FFF5EE 50%, #FFFBF7)",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 600,
            color: "#1A1A2E", marginBottom: 12, textAlign: "center",
          }}>
            The science <span style={{ fontStyle: "italic", color: "#FF6B35" }}>behind it</span>
          </h2>
          <p style={{ fontSize: 16, color: "#8B7355", textAlign: "center", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            Every recommendation in your plan is grounded in circadian rhythm research.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {SCIENCE.map((item, i) => (
              <div key={i} style={{
                padding: "28px 24px", borderRadius: 20, background: "white",
                border: "2px solid #F0E8E0",
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600,
                  color: "#1A1A2E", marginBottom: 10,
                }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#8B7355", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ textAlign: "center", padding: "48px 32px 80px" }}>
        <Link to="/" className="btn-primary" style={{ textDecoration: "none" }}>
          Try the Calculator →
        </Link>
      </section>
    </>
  );
}
