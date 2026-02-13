import { Link } from "react-router-dom";
import usePageMeta from "./usePageMeta";

const CITIES = [
  { city: "New York", code: "JFK", tz: -5, country: "US", region: "North America" },
  { city: "Los Angeles", code: "LAX", tz: -8, country: "US", region: "North America" },
  { city: "Chicago", code: "ORD", tz: -6, country: "US", region: "North America" },
  { city: "Miami", code: "MIA", tz: -5, country: "US", region: "North America" },
  { city: "Seattle", code: "SEA", tz: -8, country: "US", region: "North America" },
  { city: "Denver", code: "DEN", tz: -7, country: "US", region: "North America" },
  { city: "Honolulu", code: "HNL", tz: -10, country: "US", region: "North America" },
  { city: "Mexico City", code: "MEX", tz: -6, country: "MX", region: "North America" },
  { city: "London", code: "LHR", tz: 0, country: "UK", region: "Europe" },
  { city: "Paris", code: "CDG", tz: 1, country: "FR", region: "Europe" },
  { city: "Berlin", code: "BER", tz: 1, country: "DE", region: "Europe" },
  { city: "Rome", code: "FCO", tz: 1, country: "IT", region: "Europe" },
  { city: "Madrid", code: "MAD", tz: 1, country: "ES", region: "Europe" },
  { city: "Amsterdam", code: "AMS", tz: 1, country: "NL", region: "Europe" },
  { city: "Lisbon", code: "LIS", tz: 0, country: "PT", region: "Europe" },
  { city: "Reykjavik", code: "KEF", tz: 0, country: "IS", region: "Europe" },
  { city: "Moscow", code: "SVO", tz: 3, country: "RU", region: "Europe" },
  { city: "Istanbul", code: "IST", tz: 3, country: "TR", region: "Middle East & Africa" },
  { city: "Dubai", code: "DXB", tz: 4, country: "AE", region: "Middle East & Africa" },
  { city: "Cairo", code: "CAI", tz: 2, country: "EG", region: "Middle East & Africa" },
  { city: "Johannesburg", code: "JNB", tz: 2, country: "ZA", region: "Middle East & Africa" },
  { city: "Mumbai", code: "BOM", tz: 5.5, country: "IN", region: "Asia & Pacific" },
  { city: "Bangkok", code: "BKK", tz: 7, country: "TH", region: "Asia & Pacific" },
  { city: "Singapore", code: "SIN", tz: 8, country: "SG", region: "Asia & Pacific" },
  { city: "Hong Kong", code: "HKG", tz: 8, country: "HK", region: "Asia & Pacific" },
  { city: "Tokyo", code: "NRT", tz: 9, country: "JP", region: "Asia & Pacific" },
  { city: "Seoul", code: "ICN", tz: 9, country: "KR", region: "Asia & Pacific" },
  { city: "Sydney", code: "SYD", tz: 11, country: "AU", region: "Asia & Pacific" },
  { city: "Auckland", code: "AKL", tz: 13, country: "NZ", region: "Asia & Pacific" },
  { city: "São Paulo", code: "GRU", tz: -3, country: "BR", region: "South America" },
];

const REGIONS = ["North America", "Europe", "Middle East & Africa", "Asia & Pacific", "South America"];

function formatTz(tz) {
  const sign = tz >= 0 ? "+" : "";
  return `UTC${sign}${tz % 1 === 0 ? tz : tz.toFixed(1)}`;
}

export default function CityList() {
  usePageMeta("City List", "All 30+ supported cities and their time zones available in the DitchJetLag calculator.");
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
          Cities
        </span>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 600,
          color: "#1A1A2E", lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Supported<br />
          <span style={{ fontStyle: "italic", color: "#FF6B35" }}>destinations</span>
        </h1>
        <p style={{ fontSize: 18, color: "#8B7355", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          {CITIES.length} cities across {REGIONS.length} regions. Pick any two to generate your plan.
        </p>
      </section>

      {/* ─── CITY GRID BY REGION ─── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "48px 32px 60px" }}>
        {REGIONS.map((region) => {
          const regionCities = CITIES.filter(c => c.region === region);
          return (
            <div key={region} style={{ marginBottom: 40 }}>
              <h2 style={{
                fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
                color: "#FF6B35", textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: 16, paddingBottom: 10, borderBottom: "2px solid #FFE8DA",
              }}>
                {region}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
                {regionCities.map((c) => (
                  <div key={c.code} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "14px 18px", borderRadius: 14, background: "white",
                    border: "2px solid #F0E8E0", transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#FFD4C0"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#F0E8E0"; }}
                  >
                    <div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: "#1A1A2E" }}>{c.city}</span>
                      <span style={{
                        marginLeft: 8, fontFamily: "'Space Mono', monospace",
                        fontSize: 12, fontWeight: 700, color: "#C4A99A",
                      }}>{c.code}</span>
                    </div>
                    <span style={{
                      fontFamily: "'Space Mono', monospace", fontSize: 12,
                      fontWeight: 700, color: "#8B7355", background: "#FFF5F0",
                      padding: "4px 10px", borderRadius: 8,
                    }}>
                      {formatTz(c.tz)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── CTA ─── */}
      <section style={{
        textAlign: "center", padding: "20px 32px 80px",
      }}>
        <p style={{ fontSize: 15, color: "#8B7355", marginBottom: 20 }}>
          Ready to plan your next trip?
        </p>
        <Link to="/" className="btn-primary" style={{ textDecoration: "none" }}>
          Open the Calculator →
        </Link>
      </section>
    </>
  );
}
