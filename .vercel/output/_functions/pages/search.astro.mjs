import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { i as searchLibrary } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = new URL(Astro2.request.url);
  const query = url.searchParams.get("q") || "";
  const selectedType = url.searchParams.get("type") || void 0;
  const results = query ? await searchLibrary(query, { type: selectedType }) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": query ? `\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B \u0639\u0646: ${query}` : "\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0634\u0627\u0645\u0644 \u0641\u064A \u0627\u0644\u0645\u0643\u062A\u0628\u0629" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#143D33] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">محرك البحث المعرفي</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">البحث الشامل في المكتبة</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
ابحث في عناوين ونصوص الكتب، والبحوث الأكاديمية، والمقالات، وتسجيلات المحاضرات بدعم تطبيع اللغة العربية.
</p> </div> <!-- نموذج البحث في الهيدر --> <div class="mt-8 max-w-2xl"> <form action="/search" method="GET" class="flex gap-2"> <input type="search" name="q"${addAttribute(query, "value")} placeholder="اكتب كلمة البحث هنا..." class="flex-1 px-4 py-3 rounded-xl bg-white text-[#151C24] text-sm focus:outline-none focus:ring-2 focus:ring-[#B8924A]" required> <button type="submit" class="px-6 py-3 bg-[#B8924A] text-[#143D33] font-bold text-sm rounded-xl hover:bg-[#D4B06A] transition-colors">
بحث
</button> </form> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> <!-- شريط تصفية الأقسام --> <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6 text-xs no-scrollbar border-b border-[#E2DCD0]"> <span class="font-bold text-[#5A6578]">تصفية النتائج:</span> <a${addAttribute(`/search?q=${encodeURIComponent(query)}`, "href")}${addAttribute(`px-3 py-1.5 rounded-lg border font-medium ${!selectedType ? "bg-[#143D33] text-white border-[#143D33]" : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"}`, "class")}>
الكل
</a> <a${addAttribute(`/search?q=${encodeURIComponent(query)}&type=book`, "href")}${addAttribute(`px-3 py-1.5 rounded-lg border font-medium ${selectedType === "book" ? "bg-[#143D33] text-white border-[#143D33]" : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"}`, "class")}>
الكتب
</a> <a${addAttribute(`/search?q=${encodeURIComponent(query)}&type=research`, "href")}${addAttribute(`px-3 py-1.5 rounded-lg border font-medium ${selectedType === "research" ? "bg-[#143D33] text-white border-[#143D33]" : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"}`, "class")}>
البحوث
</a> <a${addAttribute(`/search?q=${encodeURIComponent(query)}&type=article`, "href")}${addAttribute(`px-3 py-1.5 rounded-lg border font-medium ${selectedType === "article" ? "bg-[#143D33] text-white border-[#143D33]" : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"}`, "class")}>
المقالات
</a> <a${addAttribute(`/search?q=${encodeURIComponent(query)}&type=lecture`, "href")}${addAttribute(`px-3 py-1.5 rounded-lg border font-medium ${selectedType === "lecture" ? "bg-[#143D33] text-white border-[#143D33]" : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"}`, "class")}>
المحاضرات
</a> </div> <!-- عدد النتائج أو رسالة فارغة --> ${query ? renderTemplate`<div> <p class="text-sm text-[#5A6578] mb-6">
عثرنا على <strong>${results.length}</strong> نتيجة بحث لكلمة: «<strong>${query}</strong>»
</p> ${results.length > 0 ? renderTemplate`<div class="space-y-4"> ${results.map((item) => renderTemplate`<article class="p-5 bg-white dark:bg-[#1A2433] rounded-xl border border-[#E2DCD0] dark:border-[#2B384E] hover:shadow-md transition-shadow"> <div class="flex items-center gap-2 text-xs text-[#B8924A] font-semibold mb-1"> <span class="px-2 py-0.5 rounded bg-[#FAF7F0] text-[#143D33] font-bold"> ${item.type === "book" ? "\u0643\u062A\u0627\u0628" : item.type === "research" ? "\u0628\u062D\u062B" : item.type === "article" ? "\u0645\u0642\u0627\u0644" : item.type === "lecture" ? "\u0645\u062D\u0627\u0636\u0631\u0629" : item.type === "literature" ? "\u0639\u0645\u0644 \u0623\u062F\u0628\u064A" : "\u0645\u0627\u062F\u0629 \u062A\u0639\u0644\u064A\u0645\u064A\u0629"} </span> <span>المؤلف: ${item.author}</span> </div> <h2 class="text-xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] hover:text-[#B8924A] transition-colors"> <a${addAttribute(`/${item.type === "book" ? "books" : item.type === "research" ? "research" : item.type === "article" ? "articles" : item.type === "lecture" ? "lectures" : item.type === "literature" ? "literature" : "educational"}/${item.slug}`, "href")}> ${item.title} </a> </h2> <p class="text-xs text-[#5A6578] dark:text-gray-300 mt-2 line-clamp-2 leading-relaxed"> ${item.excerpt} </p> </article>`)} </div>` : renderTemplate`<div class="text-center py-16 bg-white dark:bg-[#1A2433] rounded-2xl border border-[#E2DCD0]"> <p class="text-lg font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0]">لم يتم العثور على نتائج مطابقة</p> <p class="text-xs text-[#5A6578] mt-2">جرب البحث بكلمات عامة أو تأكد من خيارات التصفية.</p> </div>`} </div>` : renderTemplate`<div class="text-center py-16 bg-white dark:bg-[#1A2433] rounded-2xl border border-[#E2DCD0]"> <p class="text-lg font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0]">أدخل كلمة أو عبارة في صندوق البحث أعلاه</p> <p class="text-xs text-[#5A6578] mt-2">يدعم المحرك البحث باللغة العربية والإنجليزية، وتطبيع الهمزات والتنوين.</p> </div>`} </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/search.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
