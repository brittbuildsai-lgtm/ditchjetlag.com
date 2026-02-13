import whyFlyingEast from "./why-flying-east-is-harder.md?raw";
import prepProtocol from "./3-day-prep-protocol.md?raw";
import recoverIn24 from "./recover-from-jet-lag-in-24-hours.md?raw";

const posts = [
  {
    slug: "why-flying-east-is-harder",
    title: "Why Flying East Is Harder Than Flying West",
    tag: "Science",
    mins: 5,
    content: whyFlyingEast,
  },
  {
    slug: "3-day-prep-protocol",
    title: "The 3-Day Prep Protocol Used by Airline Pilots",
    tag: "Guide",
    mins: 8,
    content: prepProtocol,
  },
  {
    slug: "recover-from-jet-lag-in-24-hours",
    title: "How to Recover From Jet Lag in 24 Hours",
    tag: "Tips",
    mins: 4,
    content: recoverIn24,
  },
];

export default posts;
