import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lectures = await getItems({ type: "lecture" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u0644\u0645\u062D\u0627\u0636\u0631\u0627\u062A \u0648\u0627\u0644\u062F\u0631\u0648\u0633 \u0627\u0644\u0635\u0648\u062A\u064A\u0629" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#1B365D] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">التسجيلات والدروس المسموعة</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">المحاضرات والدروس الصوتية</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
سلاسل ودروس علمية مسموعة، تتيح الاستماع المباشر مع توفر التفريغ النصي المصاحب.
</p> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6"> ${lectures.map((lec) => renderTemplate`<article class="p-6 bg-white dark:bg-[#1A2433] rounded-xl border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm hover:shadow-md transition-shadow"> <div class="flex items-center justify-between text-xs text-[#5A6578] mb-2"> <span class="text-[#1B365D] font-bold">تسجيل صوتي MP3</span> <span>المدة: 6:12 دقيقة</span> </div> <h2 class="text-2xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] hover:text-[#1B365D] transition-colors"> <a${addAttribute(`/lectures/${lec.slug}`, "href")}>${lec.title}</a> </h2> <p class="text-sm text-[#5A6578] dark:text-gray-300 mt-2 leading-relaxed"> ${lec.excerpt} </p> <div class="mt-4 pt-3 border-t border-[#E2DCD0]/60 flex items-center justify-between"> <audio controls class="w-full max-w-md h-9"> <source${addAttribute(lec.file_url || "", "src")} type="audio/mpeg">
متصفحك لا يدعم مشغل الصوتيات.
</audio> <a${addAttribute(`/lectures/${lec.slug}`, "href")} class="text-xs font-bold text-[#1B365D] hover:underline whitespace-nowrap mr-4">
التفريغ والتفاصيل ←
</a> </div> </article>`)} </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/lectures/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/lectures/index.astro";
const $$url = "/lectures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
