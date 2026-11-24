import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C3Zl_j_b.mjs';
import { f as getItemBySlug } from '../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const item = await getItemBySlug(slug, "ar");
  if (!item || item.type !== "educational") {
    return Astro2.redirect("/educational");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": item.title, "description": item.excerpt || item.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <nav class="text-xs text-[#5A6578] mb-6 flex items-center gap-2"> <a href="/" class="hover:underline">الرئيسية</a> <span>/</span> <a href="/educational" class="hover:underline">المواد التعليمية</a> <span>/</span> <span class="text-[#143D33] font-semibold">${item.title}</span> </nav> <header class="mb-8 pb-4 border-b border-[#E2DCD0]"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">حقيبة ومادة تعليمية</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] mt-2 leading-tight"> ${item.title} </h1> <p class="text-xs text-[#5A6578] mt-2">إعداد: ${item.author}</p> </header> <div class="bg-white dark:bg-[#1A2433] rounded-2xl p-6 sm:p-10 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm"> <div class="prose max-w-none text-base leading-relaxed text-[#151C24] dark:text-[#E5E9F0]"> <div>${unescapeHTML(item.content)}</div> </div> </div> <div class="mt-8 flex justify-between text-xs text-[#5A6578]"> <a href="/educational" class="font-bold text-[#143D33] hover:underline">← العودة إلى المواد التعليمية</a> </div> </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/educational/[slug].astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/educational/[slug].astro";
const $$url = "/educational/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
