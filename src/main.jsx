import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DitchJetLag from "./DitchJetLag";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import About from "./About";
import Terms from "./Terms";
import Contact from "./Contact";
import HowItWorks from "./HowItWorks";
import CityList from "./CityList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DitchJetLag />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/cities" element={<CityList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
