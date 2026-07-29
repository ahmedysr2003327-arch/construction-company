import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kanouz-alzooq.com/sitemap.xml",
    host: "https://kanouz-alzooq.com",
  };
}