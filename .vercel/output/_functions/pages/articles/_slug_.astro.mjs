import { e as createComponent, k as renderComponent, o as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C3Zl_j_b.mjs';
import { f as getItemBySlug } from '../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const article = await getItemBySlug(slug, "ar");
  if (!article || article.type !== "article") {
    return Astro2.redirect("/articles");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article.title, "description": article.excerpt || article.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Breadcrumb --> <nav class="text-xs text-[#5A6578] mb-6 flex items-center gap-2"> <a href="/" class="hover:underline">الرئيسية</a> <span>/</span> <a href="/articles" class="hover:underline">المقالات</a> <span>/</span> <span class="text-[#143D33] font-semibold">${article.title}</span> </nav> <!-- رأس المقال --> <header class="mb-8"> <h1 class="text-3xl sm:text-4xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] leading-snug"> ${article.title} </h1> <div class="flex items-center justify-between flex-wrap gap-4 mt-4 pt-4 border-t border-b border-[#E2DCD0] py-3 text-xs text-[#5A6578]"> <div class="flex items-center gap-3"> <span>الكاتب: <strong class="text-[#143D33] dark:text-[#E5E9F0]">${article.author}</strong></span> <span>•</span> <span>تاريخ النشر: ${new Date(article.published_at || article.created_at).toLocaleDateString("ar-EG")}</span> <span>•</span> <span>مدة القراءة: ~${article.reading_time_minutes} دقيقة</span> </div> <!-- أدوات التحكم في حجم الخط والتباعد لتجربة قراءة مريحة --> <div class="flex items-center gap-1.5 bg-[#FAF7F0] dark:bg-[#1A2433] p-1 rounded-md border border-[#E2DCD0]"> <button id="font-decrease" class="px-2 py-0.5 font-bold hover:bg-black/5 rounded" title="تصغير الخط">A-</button> <span class="text-[10px] text-gray-400">|</span> <button id="font-increase" class="px-2 py-0.5 font-bold hover:bg-black/5 rounded" title="تكبير الخط">A+</button> </div> </div> </header> <!-- صورة الغلاف إن وجدت --> ${article.cover_image_url && renderTemplate`<div class="rounded-xl overflow-hidden mb-8 max-h-[380px] bg-gray-100"> <img${addAttribute(article.cover_image_url, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover"> </div>`} <!-- متن المقال --> <article id="article-content" class="text-base sm:text-lg leading-relaxed text-[#151C24] dark:text-[#E5E9F0] space-y-5 font-naskh"> <div>${unescapeHTML(article.content)}</div> </article> <!-- مشاركة المقال والتنقل --> <div class="mt-12 pt-6 border-t border-[#E2DCD0] flex items-center justify-between text-xs text-[#5A6578]"> <a href="/articles" class="font-bold text-[#143D33] hover:underline">← العودة إلى قائمة المقالات</a> <div class="flex items-center gap-2"> <span>مشاركة:</span> <a${addAttribute(`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + " " + Astro2.url.href)}`, "href")} target="_blank" class="px-2.5 py-1 bg-green-700 text-white rounded hover:bg-green-800">
واتساب
</a> </div> </div> </div> ` })} ${renderScript($$result, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/articles/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/articles/[slug].astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/articles/[slug].astro";
const $$url = "/articles/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
