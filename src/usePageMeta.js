import { useEffect } from "react";

export default function usePageMeta(title, description) {
  useEffect(() => {
    const base = "DitchJetLag";
    document.title = title ? `${title} — ${base}` : `${base} — Free Jet Lag Calculator & Recovery Plan`;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      const original = meta?.getAttribute("content");
      if (meta) meta.setAttribute("content", description);
      return () => {
        if (meta && original) meta.setAttribute("content", original);
      };
    }
  }, [title, description]);
}
