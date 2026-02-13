import { useState, useEffect, useRef } from "react";

/* ── City database ── */
const CITIES = [
  { city: "New York", code: "JFK", tz: -5, country: "US" },
  { city: "Los Angeles", code: "LAX", tz: -8, country: "US" },
  { city: "Chicago", code: "ORD", tz: -6, country: "US" },
  { city: "Miami", code: "MIA", tz: -5, country: "US" },
  { city: "Seattle", code: "SEA", tz: -8, country: "US" },
  { city: "Denver", code: "DEN", tz: -7, country: "US" },
  { city: "Honolulu", code: "HNL", tz: -10, country: "US" },
  { city: "London", code: "LHR", tz: 0, country: "UK" },
  { city: "Paris", code: "CDG", tz: 1, country: "FR" },
  { city: "Berlin", code: "BER", tz: 1, country: "DE" },
  { city: "Rome", code: "FCO", tz: 1, country: "IT" },
  { city: "Madrid", code: "MAD", tz: 1, country: "ES" },
  { city: "Amsterdam", code: "AMS", tz: 1, country: "NL" },
  { city: "Istanbul", code: "IST", tz: 3, country: "TR" },
  { city: "Dubai", code: "DXB", tz: 4, country: "AE" },
  { city: "Mumbai", code: "BOM", tz: 5.5, country: "IN" },
  { city: "Bangkok", code: "BKK", tz: 7, country: "TH" },
  { city: "Singapore", code: "SIN", tz: 8, country: "SG" },
  { city: "Hong Kong", code: "HKG", tz: 8, country: "HK" },
  { city: "Tokyo", code: "NRT", tz: 9, country: "JP" },
  { city: "Seoul", code: "ICN", tz: 9, country: "KR" },
  { city: "Sydney", code: "SYD", tz: 11, country: "AU" },
  { city: "Auckland", code: "AKL", tz: 13, country: "NZ" },
  { city: "São Paulo", code: "GRU", tz: -3, country: "BR" },
  { city: "Mexico City", code: "MEX", tz: -6, country: "MX" },
  { city: "Cairo", code: "CAI", tz: 2, country: "EG" },
  { city: "Johannesburg", code: "JNB", tz: 2, country: "ZA" },
  { city: "Moscow", code: "SVO", tz: 3, country: "RU" },
  { city: "Reykjavik", code: "KEF", tz: 0, country: "IS" },
  { city: "Lisbon", code: "LIS", tz: 0, country: "PT" },
];

const TIPS = [
  { icon: "☀️", title: "Light is everything", desc: "Strategic light exposure at the right time is the #1 tool for resetting your internal clock. More effective than any supplement.", color: "#FF6B35" },
  { icon: "😴", title: "Pre-shift your sleep", desc: "Start moving your bedtime 30 minutes per day toward your destination schedule before departure.", color: "#4ECDC4" },
  { icon: "🥤", title: "Hydrate aggressively", desc: "Cabin air dehydrates you fast and makes jet lag worse. 8oz of water per hour of flight is the target.", color: "#2B6CB0" },
  { icon: "☕", title: "Time your caffeine", desc: "Coffee is a tool, not a habit. Use it to stay alert in destination daytime, stop 8 hours before target bedtime.", color: "#E85D75" },
  { icon: "🍜", title: "Eat on local time", desc: "Your gut has its own circadian clock. Eating meals on destination time helps your whole system recalibrate.", color: "#6C63FF" },
  { icon: "🚶", title: "Move your body", desc: "Walk the cabin every 2 hours in-flight. On arrival, morning exercise in sunlight is the ultimate reset combo.", color: "#38B2AC" },
];

const ARTICLES = [
  { title: "Why Flying East Wrecks You Harder Than Flying West", tag: "Science", mins: 5 },
  { title: "The 3-Day Prep Protocol Used by Airline Pilots", tag: "Guide", mins: 8 },
  { title: "Melatonin: Helper or Hype?", tag: "Health", mins: 6 },
  { title: "Jet Lag With Kids: A Survival Guide", tag: "Family", mins: 7 },
  { title: "How to Recover From Jet Lag in 24 Hours", tag: "Tips", mins: 4 },
  { title: "50 Earthy Names That Feel Grounded and Beautiful", tag: "Names", mins: 6 },
];

/* ── Plan generator ── */
function generatePlan(from, to) {
  const tzDiff = to.tz - from.tz;
  let adjustedDiff = tzDiff;
  if (adjustedDiff > 12) adjustedDiff -= 24;
  if (adjustedDiff < -12) adjustedDiff += 24;

  const absDiff = Math.abs(adjustedDiff);
  const direction = adjustedDiff > 0 ? "east" : "west";
  const prepDays = Math.min(Math.ceil(absDiff / 2), 4);
  const recoveryDays = Math.max(Math.ceil(absDiff * 0.5), 2);

  const plan = [];

  for (let i = prepDays; i >= 1; i--) {
    const shift = Math.round((prepDays - i + 1) * (absDiff / (prepDays + recoveryDays)) * 60);
    const dir = direction === "east" ? "earlier" : "later";
    plan.push({
      day: `${i} day${i > 1 ? "s" : ""} before`,
      phase: "prep",
      emoji: "📋",
      tasks: [
        { icon: "☀️", label: "Light", text: direction === "east" ? "Get bright sunlight as early as possible" : "Avoid morning light, get afternoon sun" },
        { icon: "🌙", label: "Sleep", text: `Shift bedtime ${shift} min ${dir} than usual` },
        { icon: "☕", label: "Caffeine", text: direction === "east" ? "Last coffee by 1pm" : "OK until 3pm, then stop" },
      ],
    });
  }

  plan.push({
    day: "Flight day",
    phase: "travel",
    emoji: "✈️",
    tasks: [
      { icon: "⌚", label: "Watch", text: `Set to ${to.city} time at boarding` },
      { icon: "💺", label: "In-flight", text: adjustedDiff > 0 ? `Sleep if nighttime in ${to.city}. Stay awake if daytime.` : `Stay awake during ${to.city} daytime hours` },
      { icon: "💧", label: "Water", text: "8oz every hour. Skip alcohol entirely." },
      { icon: "🚶", label: "Move", text: "Walk the cabin every 2 hours" },
    ],
  });

  for (let i = 1; i <= recoveryDays; i++) {
    plan.push({
      day: `Day ${i} in ${to.city}`,
      phase: "recovery",
      emoji: i === recoveryDays ? "✅" : "📍",
      tasks: [
        { icon: "☀️", label: "Morning", text: direction === "east" ? "Bright sunlight for 30+ min right after waking" : "Avoid early light. Get outside after 10am." },
        { icon: "☕", label: "Caffeine", text: i <= 2 ? `Only between 8am-1pm ${to.city} time` : "Resume normal habits" },
        { icon: "🍽️", label: "Meals", text: `Eat on ${to.city} schedule${i === 1 ? ". Don't skip even if not hungry." : "."}` },
        { icon: "🌙", label: "Evening", text: i <= 2 ? "If drowsy before 9pm, take a walk instead of napping" : `You should be ~${Math.min(i * 30, 100)}% adjusted` },
      ],
    });
  }

  return { plan, absDiff, direction, prepDays, recoveryDays };
}

/* ── City dropdown ── */
function CityPicker({ value, onChange, label }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const filtered = CITIES.filter(c => c.city.toLowerCase().includes(q.toLowerCase()) || c.code.toLowerCase().includes(q.toLowerCase()));

  return (
    <div ref={ref} style={{ position: "relative", flex: 1 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF6B35", marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>{label}</label>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", padding: "18px 20px", borderRadius: 14,
        background: "white", border: "2px solid #FFE0D0",
        fontFamily: "'Space Mono', monospace", fontSize: 15, fontWeight: 700,
        color: value ? "#1A1A2E" : "#C4A99A", textAlign: "left", cursor: "pointer",
        transition: "all 0.25s ease",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span>{value ? `${value.city} (${value.code})` : "Pick a city"}</span>
        <span style={{ color: "#FF6B35", fontSize: 14 }}>▾</span>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
          background: "white", border: "2px solid #FFE0D0", borderRadius: 14,
          boxShadow: "0 20px 40px rgba(255,107,53,0.12)", maxHeight: 280, overflow: "hidden",
        }}>
          <div style={{ padding: 10 }}>
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..."
              style={{
                width: "100%", padding: "12px 14px", borderRadius: 10,
                border: "2px solid #FFE0D0", fontFamily: "'Space Mono', monospace",
                fontSize: 14, outline: "none", color: "#1A1A2E",
              }} />
          </div>
          <div style={{ maxHeight: 210, overflowY: "auto", padding: "0 6px 6px" }}>
            {filtered.map(c => (
              <button key={c.code} onClick={() => { onChange(c); setOpen(false); setQ(""); }}
                style={{
                  width: "100%", padding: "12px 14px", borderRadius: 10, border: "none",
                  background: value?.code === c.code ? "#FFF5F0" : "transparent",
                  fontFamily: "'Space Mono', monospace", fontSize: 14, color: "#1A1A2E",
                  textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#FFF5F0"}
                onMouseLeave={e => { if (value?.code !== c.code) e.currentTarget.style.background = "transparent"; }}
              >
                <span>{c.city}</span>
                <span style={{ color: "#FF6B35", fontWeight: 700, fontSize: 12 }}>{c.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════ */
/*        MAIN COMPONENT       */
/* ════════════════════════════ */
export default function DitchJetLag() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [result, setResult] = useState(null);
  const [openDay, setOpenDay] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const resultRef = useRef(null);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleCalc = () => {
    if (!from || !to) return;
    const r = generatePlan(from, to);
    setResult(r);
    setOpenDay(0);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const phaseBg = { prep: "#FFF5F0", travel: "#E8F8F5", recovery: "#F0F4FF" };
  const phaseBorder = { prep: "#FF6B35", travel: "#4ECDC4", recovery: "#6C63FF" };
  const phaseLabel = { prep: "Prep", travel: "Travel", recovery: "Recovery" };

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
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
          </div>

          <div className="nav-mid" style={{ display: "flex", gap: 28 }}>
            <span className="nav-link">Calculator</span>
            <span className="nav-link">Tips</span>
            <span className="nav-link">Articles</span>
          </div>

          <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 11 }}>Ditch It →</button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{
        position: "relative", overflow: "hidden",
        padding: "150px 32px 80px",
        background: "linear-gradient(160deg, #FFF5EE 0%, #FFFBF7 30%, #F0F8FF 100%)",
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: 80, right: "8%", width: 160, height: 160, borderRadius: "50%", border: "3px dashed #FFD4C0", animation: "spin 40s linear infinite", opacity: 0.5 }} />
        <div style={{ position: "absolute", bottom: 40, left: "6%", width: 100, height: 100, borderRadius: "50%", background: "rgba(78,205,196,0.08)", animation: "float 5s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "35%", left: "12%", width: 8, height: 8, borderRadius: "50%", background: "#FF6B35", opacity: 0.3, animation: "float 4s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "20%", right: "20%", width: 12, height: 12, borderRadius: "50%", background: "#4ECDC4", opacity: 0.25, animation: "float 6s ease-in-out infinite reverse" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div className="fade-up" style={{ animationDelay: "0.1s" }}>
            <span style={{
              display: "inline-block", padding: "8px 20px", borderRadius: 100,
              background: "white", border: "2px solid #FFD4C0",
              fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
              color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: 28,
            }}>
              Free Jet Lag Calculator & Plan
            </span>
          </div>

          <h1 className="fade-up hero-title" style={{
            fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 600,
            color: "#1A1A2E", lineHeight: 1.05, letterSpacing: "-0.02em",
            marginBottom: 20, animationDelay: "0.2s",
          }}>
            Arrive like you<br />
            <span style={{ fontStyle: "italic", color: "#FF6B35" }}>never left home</span>
          </h1>

          <p className="fade-up" style={{
            fontSize: 18, color: "#8B7355", lineHeight: 1.7, maxWidth: 480,
            margin: "0 auto", animationDelay: "0.35s", fontWeight: 400,
          }}>
            Tell us where you're going. Get a free, personalized day-by-day plan to ditch jet lag for good — based on circadian rhythm science.
          </p>
        </div>
      </section>

      {/* ─── CALCULATOR ─── */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px 80px", marginTop: -10 }}>
        <div style={{
          background: "white", border: "2px solid #FFE8DA", borderRadius: 28,
          padding: "40px 36px", boxShadow: "0 8px 32px rgba(255,107,53,0.06)",
        }}>
          <div className="calc-row" style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-end" }}>
            <CityPicker label="From" value={from} onChange={setFrom} />
            <button onClick={() => { const t = from; setFrom(to); setTo(t); }} style={{
              width: 48, height: 48, borderRadius: 14, border: "2px solid #FFD4C0",
              background: "white", color: "#FF6B35", fontSize: 20, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              transition: "all 0.25s", marginBottom: 1,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#FFF5F0"; e.currentTarget.style.borderColor = "#FF6B35"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "#FFD4C0"; }}
            >⇄</button>
            <CityPicker label="To" value={to} onChange={setTo} />
          </div>

          {from && to && (
            <div style={{
              padding: "16px 20px", borderRadius: 14, marginBottom: 24,
              background: "#FFF5F0", border: "1px solid #FFE0D0",
              display: "flex", justifyContent: "center", gap: 24, alignItems: "center",
              fontFamily: "'Space Mono', monospace",
            }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#1A1A2E" }}>{from.code}</span>
              <span style={{ color: "#FF6B35", fontSize: 20 }}>→</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#1A1A2E" }}>{to.code}</span>
              <span style={{ fontSize: 13, color: "#8B7355" }}>
                {(() => {
                  let d = to.tz - from.tz;
                  if (d > 12) d -= 24;
                  if (d < -12) d += 24;
                  return `${Math.abs(d)}h ${d >= 0 ? "east" : "west"}`;
                })()}
              </span>
            </div>
          )}

          <button className="btn-primary" onClick={handleCalc} disabled={!from || !to}
            style={{ width: "100%", justifyContent: "center", padding: "20px", fontSize: 14 }}>
            Ditch My Jet Lag ✈
          </button>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      {result && (
        <section ref={resultRef} style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px 80px" }}>
          {/* Summary */}
          <div className="fade-up" style={{
            textAlign: "center", marginBottom: 40, padding: "36px 24px",
            background: "white", border: "2px solid #FFE8DA", borderRadius: 24,
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#1A1A2E", marginBottom: 16 }}>
              {from.city} → {to.city}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
              {[
                { val: `${result.absDiff}h`, label: "Time diff", color: "#FF6B35" },
                { val: `${result.prepDays}`, label: "Prep days", color: "#4ECDC4" },
                { val: `${result.recoveryDays}`, label: "Recovery", color: "#6C63FF" },
                { val: result.direction === "east" ? "East →" : "← West", label: "Direction", color: "#E85D75" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 28, fontWeight: 700, color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#C4A99A", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {result.plan.map((day, i) => (
              <div key={i} style={{
                background: openDay === i ? phaseBg[day.phase] : "white",
                border: `2px solid ${openDay === i ? phaseBorder[day.phase] : "#F0E8E0"}`,
                borderRadius: 20, overflow: "hidden", cursor: "pointer",
                transition: "all 0.35s ease",
              }}
              onClick={() => setOpenDay(openDay === i ? null : i)}
              >
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 24 }}>{day.emoji}</span>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: "#1A1A2E" }}>{day.day}</div>
                      <span style={{
                        fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700,
                        color: phaseBorder[day.phase], textTransform: "uppercase", letterSpacing: "0.1em",
                      }}>{phaseLabel[day.phase]}</span>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 16, color: phaseBorder[day.phase],
                    transform: openDay === i ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                  }}>▾</span>
                </div>

                {openDay === i && (
                  <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {day.tasks.map((t, j) => (
                      <div key={j} style={{
                        padding: "16px 18px", borderRadius: 14,
                        background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.04)",
                        display: "flex", gap: 14, alignItems: "flex-start",
                      }}>
                        <span style={{ fontSize: 20, flexShrink: 0 }}>{t.icon}</span>
                        <div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, color: "#FF6B35", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{t.label}</div>
                          <div style={{ fontSize: 14, color: "#5A4A3A", lineHeight: 1.6 }}>{t.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── AD SLOT ─── */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px 48px" }}>
        <div style={{
          padding: 20, borderRadius: 14, textAlign: "center",
          border: "2px dashed #F0E8E0", color: "#D4C4B4",
          fontFamily: "'Space Mono', monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em",
        }}>Advertisement</div>
      </section>

      {/* ─── TIPS ─── */}
      <section style={{ maxWidth: 1140, margin: "0 auto", padding: "48px 32px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 600, color: "#1A1A2E", marginBottom: 10 }}>
            The science of <span style={{ fontStyle: "italic", color: "#FF6B35" }}>ditching the lag</span>
          </h2>
          <p style={{ fontSize: 16, color: "#8B7355" }}>Six proven strategies backed by circadian rhythm research.</p>
        </div>

        <div className="tips-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {TIPS.map((tip, i) => (
            <div key={i} style={{
              padding: "32px 26px", borderRadius: 22, background: "white",
              border: "2px solid #F0E8E0", transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              cursor: "default",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = tip.color; e.currentTarget.style.boxShadow = `0 16px 32px ${tip.color}15`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#F0E8E0"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{tip.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "#1A1A2E", marginBottom: 10 }}>{tip.title}</h3>
              <p style={{ fontSize: 14, color: "#8B7355", lineHeight: 1.65 }}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AD SLOT ─── */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px 48px" }}>
        <div style={{ padding: 20, borderRadius: 14, textAlign: "center", border: "2px dashed #F0E8E0", color: "#D4C4B4", fontFamily: "'Space Mono', monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Advertisement
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      <section style={{ padding: "48px 32px 80px", background: "linear-gradient(180deg, #FFFBF7, #FFF5EE 50%, #FFFBF7)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 600, color: "#1A1A2E", marginBottom: 6 }}>
                Learn more
              </h2>
              <p style={{ fontSize: 15, color: "#8B7355" }}>Guides, science, and travel tips.</p>
            </div>
            <button className="btn-outline" style={{ padding: "12px 24px", fontSize: 11 }}>All Articles →</button>
          </div>

          <div className="articles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {ARTICLES.map((a, i) => (
              <div key={i} style={{
                padding: "30px 24px", borderRadius: 22, background: "white",
                border: "2px solid #F0E8E0", cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "#FFD4C0"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#F0E8E0"; }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
                  <span style={{
                    padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                    fontFamily: "'Space Mono', monospace", textTransform: "uppercase",
                    letterSpacing: "0.06em", background: "#FFF5F0", color: "#FF6B35",
                  }}>{a.tag}</span>
                  <span style={{ fontSize: 12, color: "#C4A99A" }}>{a.mins} min</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#1A1A2E", lineHeight: 1.35 }}>{a.title}</h3>
                <div style={{ marginTop: 18, fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700, color: "#FF6B35", textTransform: "uppercase", letterSpacing: "0.06em" }}>Read →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ maxWidth: 680, margin: "0 auto", padding: "60px 32px 80px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 600, color: "#1A1A2E", textAlign: "center", marginBottom: 40 }}>FAQ</h2>
        {[
          { q: "How does this calculator work?", a: "We use the timezone difference and travel direction between your cities to generate a science-backed plan. It includes specific recommendations for light exposure, sleep timing, caffeine, and meals — customized to your exact route." },
          { q: "Is flying east or west worse?", a: "East is generally harder. Flying east shortens your day, forcing you to sleep earlier than your body wants. Most people find it easier to stay up late (west) than to force early sleep (east). Your plan adjusts for this." },
          { q: "How long does jet lag recovery take?", a: "Roughly one day per timezone crossed without preparation. With a proper plan, you can cut that by 40-60%. A 6-hour difference might take 2-3 days instead of 5-6." },
          { q: "Should I take melatonin?", a: "Low-dose melatonin (0.5-3mg) taken 30 minutes before your target bedtime can help. But timing matters — wrong timing can make jet lag worse. It works best as part of a full strategy. Consult your doctor first." },
          { q: "Is this free?", a: "Completely free, forever. No account needed, no upsell. Just enter your cities and get your plan." },
        ].map((f, i) => (
          <div key={i} style={{ padding: "22px 0", borderBottom: i < 4 ? "2px solid #F0E8E0" : "none" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#1A1A2E", marginBottom: 10 }}>{f.q}</h3>
            <p style={{ fontSize: 14, color: "#8B7355", lineHeight: 1.7 }}>{f.a}</p>
          </div>
        ))}
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: "2px solid #F0E8E0", padding: "48px 32px 32px", background: "#FFFBF7" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div className="footer-cols" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginBottom: 40 }}>
            <div style={{ maxWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#FF6B35", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14 }}>✈</div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#1A1A2E" }}>ditch<span style={{ color: "#FF6B35" }}>jetlag</span></span>
              </div>
              <p style={{ fontSize: 13, color: "#C4A99A", lineHeight: 1.7 }}>Free jet lag calculator and recovery plans. Science-backed, always free. ditchjetlag.com</p>
            </div>
            {[
              { title: "Tool", links: ["Calculator", "How It Works", "City List"] },
              { title: "Learn", links: ["Jet Lag Science", "Travel Tips", "All Articles"] },
              { title: "Company", links: ["About", "Contact", "Privacy", "Terms"] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF6B35", fontWeight: 700, marginBottom: 14 }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{col.links.map(l => <a key={l} href="#">{l}</a>)}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "2px solid #F0E8E0", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "#D4C4B4" }}>© 2026 DitchJetLag. Not medical advice.</span>
            <div style={{ display: "flex", gap: 18 }}>{["Twitter", "Instagram", "Pinterest"].map(s => <a key={s} href="#">{s}</a>)}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
