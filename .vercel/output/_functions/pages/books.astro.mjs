import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const books = await getItems({ type: "book" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0641\u0647\u0631\u0633 \u0627\u0644\u0643\u062A\u0628 \u0648\u0627\u0644\u0645\u0624\u0644\u0641\u0627\u062A" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#143D33] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">المصنفات المطبوعة والرقمية</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">فهرس الكتب والمؤلفات</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
تصفح الكتب والمصنفات التخصصية، مع إمكانية القراءة المباشرة داخل المتصفح أو التنزيل بروابط موثوقة.
</p> </div> </div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> <!-- شبكة الكتب --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${books.map((book) => renderTemplate`<article class="bg-white dark:bg-[#1A2433] rounded-xl overflow-hidden border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"> <div> <div class="aspect-[4/3] bg-[#E2DCD0] relative overflow-hidden"> <img${addAttribute(book.cover_image_url || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600", "src")}${addAttribute(book.title, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"> <div class="absolute bottom-3 right-3 bg-[#143D33]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur"> ${book.page_count ? `${book.page_count} \u0635\u0641\u062D\u0629` : "\u0643\u062A\u0627\u0628 \u0631\u0642\u0645\u064A"} </div> </div> <div class="p-6"> <div class="flex items-center gap-2 text-xs text-[#B8924A] font-semibold mb-2"> <span>المؤلف: ${book.author}</span> ${book.allow_download && renderTemplate`<span>• متاح للتحميل</span>`} </div> <h2 class="font-amiri font-bold text-xl text-[#151C24] dark:text-[#E5E9F0] hover:text-[#143D33] dark:hover:text-[#B8924A] transition-colors leading-snug"> <a${addAttribute(`/books/${book.slug}`, "href")}>${book.title}</a> </h2> <p class="text-xs text-[#5A6578] dark:text-gray-400 mt-3 line-clamp-3 leading-relaxed"> ${book.excerpt} </p> <!-- الوسوم --> <div class="flex flex-wrap gap-1.5 mt-4"> ${book.tags.map((tag) => renderTemplate`<span class="px-2 py-0.5 text-[10px] rounded bg-[#F7F3E9] dark:bg-[#2B384E] text-[#143D33] dark:text-[#E5E9F0]">
#${tag} </span>`)} </div> </div> </div> <div class="p-6 pt-0 border-t border-[#E2DCD0]/40 dark:border-[#2B384E]/40 mt-4 flex items-center justify-between gap-3"> <a${addAttribute(`/books/${book.slug}`, "href")} class="flex-1 text-center py-2 px-3 text-xs font-bold rounded-lg bg-[#143D33] text-white hover:bg-[#1F5A4B] transition-colors">
قراءة وتفاصيل
</a> ${book.allow_download && book.file_url && renderTemplate`<a${addAttribute(book.file_url, "href")} target="_blank" download class="py-2 px-3 text-xs font-bold rounded-lg border border-[#143D33] text-[#143D33] hover:bg-black/5 transition-colors" title="تنزيل نسخة PDF">
تنزيل PDF
</a>`} </div> </article>`)} </div> </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/books/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/books/index.astro";
const $$url = "/books";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
