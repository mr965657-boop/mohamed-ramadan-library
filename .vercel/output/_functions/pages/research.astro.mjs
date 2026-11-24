import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const research = await getItems({ type: "research" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u0644\u0628\u062D\u0648\u062B \u0648\u0627\u0644\u062F\u0631\u0627\u0633\u0627\u062A \u0627\u0644\u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#1B365D] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">الدراسات التخصصية المحكمة</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">البحوث والدراسات الأكاديمية</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
أوراق بحثية ومشاريع استقصائية ترتكز على مناهج التحقيق العلمي، مع هوامش وتوثيق متكامل.
</p> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6"> ${research.map((res) => renderTemplate`<article class="p-6 bg-white dark:bg-[#1A2433] rounded-xl border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm hover:shadow-md transition-shadow"> <div class="flex items-center gap-2 text-xs text-[#B8924A] font-semibold mb-2"> <span>المؤلف: ${res.author}</span> <span>•</span> <span>دراسة محكمة</span> </div> <h2 class="text-2xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] hover:text-[#1B365D] transition-colors"> <a${addAttribute(`/research/${res.slug}`, "href")}>${res.title}</a> </h2> <p class="text-sm text-[#5A6578] dark:text-gray-300 mt-3 leading-relaxed"> ${res.excerpt} </p> <div class="mt-5 pt-3 border-t border-[#E2DCD0]/60 flex items-center justify-between"> <div class="flex gap-2"> ${res.tags.map((t) => renderTemplate`<span class="px-2 py-0.5 text-xs bg-[#FAF7F0] text-[#1B365D] rounded">#${t}</span>`)} </div> <a${addAttribute(`/research/${res.slug}`, "href")} class="text-xs font-bold text-[#1B365D] hover:underline">
قراءة البحث كاملاً ←
</a> </div> </article>`)} </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/research/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/research/index.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
