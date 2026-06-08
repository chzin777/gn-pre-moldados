import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Página única (landing) com âncoras das seções principais.
const sections = ["produtos", "obras", "sobre", "atuacao", "faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sections.map((s) => ({
      url: `${site.url}/#${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
