import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const educational = await getItems({ type: "educational" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0646\u0627\u0647\u062C" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#143D33] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">حقائب تدريبية ومناهج</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">المواد التعليمية والمناهج</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
مواد تعليمية، ملخصات ومناهج أكاديمية مصممة للطلاب والباحثين في حقول التراث والعلوم الإنسانية.
</p> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6"> ${educational.map((item) => renderTemplate`<article class="p-6 bg-white dark:bg-[#1A2433] rounded-xl border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm hover:border-[#B8924A] transition-colors"> <span class="text-xs text-[#B8924A] font-bold">مادة تعليمية</span> <h2 class="text-2xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] hover:text-[#B8924A] transition-colors mt-1"> <a${addAttribute(`/educational/${item.slug}`, "href")}>${item.title}</a> </h2> <p class="text-sm text-[#5A6578] dark:text-gray-300 mt-2 leading-relaxed"> ${item.excerpt} </p> <div class="mt-4 pt-3 border-t border-[#E2DCD0]/60 flex items-center justify-between"> <span class="text-xs text-[#5A6578]">المؤلف: ${item.author}</span> <a${addAttribute(`/educational/${item.slug}`, "href")} class="text-xs font-bold text-[#143D33] hover:underline">
عرض المادة التعليمية ←
</a> </div> </article>`)} </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/educational/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/educational/index.astro";
const $$url = "/educational";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
