import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const GET = async ({ site }) => {
  const baseUrl = site || "https://mohamed-ramadan-library.example.com";
  const items = await getItems({ limit: 1e3 });
  const staticPages = [
    "",
    "books",
    "research",
    "articles",
    "lectures",
    "literature",
    "educational",
    "about",
    "contact",
    "search"
  ];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(
    (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <changefreq>daily</changefreq>
      <priority>${path === "" ? "1.0" : "0.8"}</priority>
    </url>
  `
  ).join("")}
  ${items.map(
    (item) => `
    <url>
      <loc>${baseUrl}/${item.type === "book" ? "books" : item.type === "research" ? "research" : item.type === "article" ? "articles" : item.type === "lecture" ? "lectures" : item.type === "literature" ? "literature" : "educational"}/${item.slug}</loc>
      <lastmod>${new Date(item.updated_at || item.created_at).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `
  ).join("")}
</urlset>`;
  return new Response(sitemapXml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
