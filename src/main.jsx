import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DitchJetLag from "./DitchJetLag";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DitchJetLag />
  </StrictMode>
);
