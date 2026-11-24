import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await getItems({ type: "article" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0627\u0644\u0641\u0643\u0631\u064A\u0629 \u0648\u0627\u0644\u062B\u0642\u0627\u0641\u064A\u0629" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#143D33] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">كتابات ورؤى</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">المقالات الفكرية والثقافية</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
مقالات دورية، تأملات نقدية، وقراءات في الفكر واللغة والمجتمع.
</p> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${articles.map((art) => renderTemplate`<article class="p-6 bg-white dark:bg-[#1A2433] rounded-xl border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm hover:border-[#B8924A] transition-all flex flex-col justify-between"> <div> <div class="flex items-center justify-between text-xs text-[#5A6578] mb-2"> <span class="text-[#B8924A] font-bold">مقال فكري</span> <span>~${art.reading_time_minutes} دقائق قراءة</span> </div> <h2 class="text-2xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] hover:text-[#B8924A] transition-colors leading-snug"> <a${addAttribute(`/articles/${art.slug}`, "href")}>${art.title}</a> </h2> <p class="text-xs text-[#5A6578] dark:text-gray-300 mt-3 line-clamp-3 leading-relaxed"> ${art.excerpt} </p> </div> <div class="mt-6 pt-4 border-t border-[#E2DCD0]/60 flex items-center justify-between text-xs"> <span class="text-[#5A6578]">${art.author}</span> <a${addAttribute(`/articles/${art.slug}`, "href")} class="font-bold text-[#143D33] dark:text-[#B8924A] hover:underline">
متابعة القراءة ←
</a> </div> </article>`)} </div> </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/articles/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
