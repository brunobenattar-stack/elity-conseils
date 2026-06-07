import type { MetadataRoute } from "next";

const BASE = "https://elityconseil.re";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/approche", priority: 0.9 },
    { url: "/offres", priority: 0.9 },
    { url: "/methode-essor", priority: 0.8 },
    { url: "/cas-clients", priority: 0.8 },
    { url: "/faq", priority: 0.7 },
    { url: "/a-propos", priority: 0.7 },
    { url: "/nos-partenaires", priority: 0.6 },
    { url: "/contact", priority: 0.9 },
    { url: "/mentions-legales", priority: 0.2 },
    { url: "/confidentialite", priority: 0.2 },
  ];
  return pages.map((p) => ({
    url: `${BASE}${p.url}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));
}
