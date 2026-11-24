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
  if (!item || item.type !== "research") {
    return Astro2.redirect("/research");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": item.title, "description": item.excerpt || item.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Breadcrumb --> <nav class="text-xs text-[#5A6578] mb-6 flex items-center gap-2"> <a href="/" class="hover:underline">الرئيسية</a> <span>/</span> <a href="/research" class="hover:underline">البحوث والدراسات</a> <span>/</span> <span class="text-[#1B365D] font-semibold">${item.title}</span> </nav> <header class="mb-8 pb-6 border-b border-[#E2DCD0]"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">بحث أكاديمي</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] mt-2 leading-tight"> ${item.title} </h1> <div class="flex items-center gap-4 text-xs text-[#5A6578] mt-4"> <span>الباحث: <strong class="text-[#143D33]">${item.author}</strong></span> <span>•</span> <span>تاريخ النشر: ${new Date(item.published_at || item.created_at).toLocaleDateString("ar-EG")}</span> <span>•</span> <span>وقت القراءة: ~${item.reading_time_minutes} دقيقة</span> </div> </header> <!-- متن البحث وقراءته الأكاديمية --> <article class="bg-white dark:bg-[#1A2433] rounded-2xl p-6 sm:p-10 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm leading-relaxed text-[#151C24] dark:text-[#E5E9F0]"> <div class="p-4 bg-[#FAF7F0] dark:bg-[#151D28] rounded-xl border border-[#E2DCD0] mb-8 text-sm italic"> <strong>خلاصة البحث:</strong> ${item.excerpt} </div> <div class="prose max-w-none text-base space-y-4">${unescapeHTML(item.content)}</div> </article> <!-- روابط وأزرار المشاركة والطباعة --> <div class="mt-8 flex items-center justify-between text-xs text-[#5A6578]"> <button onclick="window.print()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-semibold transition-colors flex items-center gap-1.5"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path> </svg> <span>طباعة البحث</span> </button> <a href="/research" class="font-bold text-[#1B365D] hover:underline">← العودة إلى قائمة البحوث</a> </div> </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/research/[slug].astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/research/[slug].astro";
const $$url = "/research/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
