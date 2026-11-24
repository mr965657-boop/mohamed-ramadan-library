import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C3Zl_j_b.mjs';
import { f as getItemBySlug } from '../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const lecture = await getItemBySlug(slug, "ar");
  if (!lecture || lecture.type !== "lecture") {
    return Astro2.redirect("/lectures");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": lecture.title, "description": lecture.excerpt || lecture.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Breadcrumb --> <nav class="text-xs text-[#5A6578] mb-6 flex items-center gap-2"> <a href="/" class="hover:underline">الرئيسية</a> <span>/</span> <a href="/lectures" class="hover:underline">المحاضرات والدروس</a> <span>/</span> <span class="text-[#1B365D] font-semibold">${lecture.title}</span> </nav> <div class="bg-white dark:bg-[#1A2433] rounded-2xl p-6 sm:p-10 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm"> <header class="mb-6"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">محاضرة صوتية</span> <h1 class="text-3xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] mt-2"> ${lecture.title} </h1> <p class="text-xs text-[#5A6578] mt-2">
المحاضر: <strong class="text-[#143D33]">${lecture.author}</strong> | المدة: 6:12 دقيقة
</p> </header> <!-- مشغل الصوتيات الرئيسي المتقدم --> <div class="bg-[#1B365D] text-white p-6 rounded-xl shadow-inner mb-8"> <p class="text-xs text-[#B8924A] font-bold mb-3">مشغل المحاضرة</p> <audio controls class="w-full" id="main-audio"> <source${addAttribute(lecture.file_url || "", "src")} type="audio/mpeg">
متصفحك لا يدعم مشغل الصوتيات.
</audio> ${lecture.allow_download && lecture.file_url && renderTemplate`<div class="mt-4 flex justify-end"> <a${addAttribute(lecture.file_url, "href")} download class="px-3 py-1.5 bg-[#B8924A] text-[#143D33] text-xs font-bold rounded hover:bg-[#D4B06A] transition-colors">
تحميل الملف الصوتي MP3
</a> </div>`} </div> <!-- نبذة وتفريغ نصي --> <div class="space-y-6"> <div> <h2 class="font-amiri font-bold text-xl text-[#143D33] dark:text-[#E5E9F0] mb-2 border-b border-[#E2DCD0] pb-2">
موجز المحاضرة
</h2> <p class="text-sm text-[#151C24] dark:text-[#E5E9F0] leading-relaxed">${lecture.excerpt}</p> </div> ${lecture.audio_transcript && renderTemplate`<div> <h2 class="font-amiri font-bold text-xl text-[#143D33] dark:text-[#E5E9F0] mb-2 border-b border-[#E2DCD0] pb-2">
التفريغ النصي للمحاضرة
</h2> <div class="p-5 bg-[#FAF7F0] dark:bg-[#151D28] rounded-xl border border-[#E2DCD0] text-sm leading-relaxed font-naskh"> ${lecture.audio_transcript} </div> </div>`} </div> </div> </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/lectures/[slug].astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/lectures/[slug].astro";
const $$url = "/lectures/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
