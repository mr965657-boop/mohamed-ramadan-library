import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const literature = await getItems({ type: "literature" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0623\u062F\u0628\u064A\u0629 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#143D33] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">سرد ونصوص إبداعية</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">الأعمال الأدبية</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
نصوص سردية وروايات ومشروعات إبداعية، تحتفي بجماليات اللغة والأفق الحضاري.
</p> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6"> ${literature.map((lit) => renderTemplate`<article class="p-6 bg-white dark:bg-[#1A2433] rounded-xl border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm hover:border-[#B8924A] transition-colors"> <h2 class="text-2xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] hover:text-[#B8924A] transition-colors"> <a${addAttribute(`/literature/${lit.slug}`, "href")}>${lit.title}</a> </h2> <p class="text-sm text-[#5A6578] dark:text-gray-300 mt-2 leading-relaxed"> ${lit.excerpt} </p> <div class="mt-4 pt-3 border-t border-[#E2DCD0]/60 flex items-center justify-between"> <span class="text-xs text-[#5A6578]">المؤلف: ${lit.author}</span> <a${addAttribute(`/literature/${lit.slug}`, "href")} class="text-xs font-bold text-[#143D33] hover:underline">
قراءة العمل الأدبي ←
</a> </div> </article>`)} </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/literature/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/literature/index.astro";
const $$url = "/literature";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
