import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C3Zl_j_b.mjs';
import { f as getItemBySlug, g as getItems } from '../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const book = await getItemBySlug(slug, "ar");
  if (!book || book.type !== "book") {
    return Astro2.redirect("/books");
  }
  const relatedBooks = (await getItems({ type: "book", limit: 3 })).filter((b) => b.id !== book.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": book.title, "description": book.excerpt || book.title, "image": book.cover_image_url || void 0, "type": "book" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- مسار التنقل Breadcrumb --> <nav class="text-xs text-[#5A6578] mb-8 flex items-center gap-2"> <a href="/" class="hover:underline">الرئيسية</a> <span>/</span> <a href="/books" class="hover:underline">الكتب والمؤلفات</a> <span>/</span> <span class="text-[#143D33] font-semibold">${book.title}</span> </nav> <!-- بطاقة الكتاب الرئيسية بنمط Editorial --> <div class="bg-white dark:bg-[#1A2433] rounded-2xl border border-[#E2DCD0] dark:border-[#2B384E] p-6 sm:p-10 shadow-sm"> <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"> <!-- غلاف الكتاب --> <div class="md:col-span-4 flex flex-col items-center"> <div class="w-full max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-[#E2DCD0] bg-gray-100"> <img${addAttribute(book.cover_image_url || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600", "src")}${addAttribute(book.title, "alt")} class="w-full h-full object-cover"> </div> <!-- أزرار القراءة والتحميل --> <div class="w-full max-w-[280px] mt-6 space-y-3"> <a${addAttribute(`/read/${book.slug}`, "href")} class="w-full py-3 px-4 bg-[#143D33] hover:bg-[#1F5A4B] text-[#F7F3E9] text-center font-amiri font-bold text-lg rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"> <svg class="w-5 h-5 text-[#B8924A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> <span>قراءة الكتاب داخل الموقع</span> </a> ${book.allow_download && book.file_url && renderTemplate`<a${addAttribute(book.file_url, "href")} target="_blank" download class="w-full py-2.5 px-4 bg-transparent border-2 border-[#143D33] text-[#143D33] dark:text-[#E5E9F0] dark:border-[#B8924A] text-center font-semibold text-xs rounded-xl hover:bg-black/5 transition-colors flex items-center justify-center gap-2"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg> <span>تنزيل نسخة PDF</span> </a>`} </div> </div> <!-- بيانات الكتاب والوصف وفهرس المحتويات --> <div class="md:col-span-8 space-y-6"> <div> <div class="flex items-center gap-2 text-xs font-bold text-[#B8924A] uppercase tracking-wider mb-2"> <span>قسم الكتب التخصصية</span> <span>•</span> <span>${book.page_count ? `${book.page_count} \u0635\u0641\u062D\u0629` : "\u0646\u0633\u062E\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629"}</span> </div> <h1 class="text-3xl sm:text-4xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] leading-snug"> ${book.title} </h1> <p class="text-sm font-semibold text-[#5A6578] mt-2">
المؤلف: <span class="text-[#143D33] dark:text-[#B8924A] font-bold">${book.author}</span> </p> </div> <!-- نبذة عن الكتاب --> <div class="prose dark:prose-invert max-w-none text-sm text-[#151C24] dark:text-[#E5E9F0] leading-relaxed"> <h3 class="font-amiri font-bold text-xl text-[#143D33] dark:text-[#E5E9F0] border-b border-[#E2DCD0] pb-2">
عن الكتاب والمنهج
</h3> <p class="mt-3">${book.excerpt}</p> <div class="mt-4">${unescapeHTML(book.content)}</div> </div> <!-- فهرس المحتويات --> ${book.table_of_contents && book.table_of_contents.length > 0 && renderTemplate`<div class="bg-[#FAF7F0] dark:bg-[#151D28] rounded-xl p-5 border border-[#E2DCD0] dark:border-[#2B384E]"> <h3 class="font-amiri font-bold text-lg text-[#143D33] dark:text-[#E5E9F0] mb-3">فهرس المحتويات</h3> <ul class="space-y-2 text-xs text-[#151C24] dark:text-[#E5E9F0]"> ${book.table_of_contents.map((toc) => renderTemplate`<li class="flex items-center justify-between border-b border-[#E2DCD0]/60 pb-1.5"> <span>${toc.title}</span> <span class="text-[#B8924A] font-bold font-sans">${toc.page ? `\u0635 ${toc.page}` : ""}</span> </li>`)} </ul> </div>`} <!-- معلومات الترخيص والحقوق والمشاركة --> <div class="pt-6 border-t border-[#E2DCD0] dark:border-[#2B384E] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5A6578]"> <div> <span class="font-bold text-[#143D33] dark:text-[#E5E9F0]">الحقوق والترخيص:</span> <span class="mr-1">${book.license_type === "read_and_download" ? "\u0645\u062A\u0627\u062D \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u0627\u0644\u062A\u062D\u0645\u064A\u0644" : "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u0644\u0644\u0645\u0624\u0644\u0641"}</span> </div> <!-- أزرار المشاركة السريعة --> <div class="flex items-center gap-2"> <span class="font-semibold">مشاركة:</span> <a${addAttribute(`https://api.whatsapp.com/send?text=${encodeURIComponent(book.title + " " + Astro2.url.href)}`, "href")} target="_blank" class="px-2.5 py-1 bg-green-700 text-white rounded text-[11px] hover:bg-green-800 transition-colors">
واتساب
</a> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(book.title)}&url=${encodeURIComponent(Astro2.url.href)}`, "href")} target="_blank" class="px-2.5 py-1 bg-black text-white rounded text-[11px] hover:bg-gray-800 transition-colors">
تويتر (X)
</a> </div> </div> </div> </div> </div> <!-- كتب أخرى مقترحة --> ${relatedBooks.length > 0 && renderTemplate`<div class="mt-14"> <h2 class="text-2xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] mb-6">كتب ومؤلفات أخرى</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6"> ${relatedBooks.map((rb) => renderTemplate`<a${addAttribute(`/books/${rb.slug}`, "href")} class="p-4 bg-white dark:bg-[#1A2433] rounded-xl border border-[#E2DCD0] hover:shadow-md transition-shadow"> <h3 class="font-amiri font-bold text-base text-[#143D33] line-clamp-1">${rb.title}</h3> <p class="text-xs text-[#5A6578] mt-1 line-clamp-2">${rb.excerpt}</p> </a>`)} </div> </div>`} </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/books/[slug].astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/books/[slug].astro";
const $$url = "/books/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
