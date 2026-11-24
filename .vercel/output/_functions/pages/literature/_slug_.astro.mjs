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
  const literature = await getItemBySlug(slug, "ar");
  if (!literature || literature.type !== "literature") {
    return Astro2.redirect("/literature");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": literature.title, "description": literature.excerpt || literature.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <nav class="text-xs text-[#5A6578] mb-6 flex items-center gap-2"> <a href="/" class="hover:underline">الرئيسية</a> <span>/</span> <a href="/literature" class="hover:underline">الأعمال الأدبية</a> <span>/</span> <span class="text-[#143D33] font-semibold">${literature.title}</span> </nav> <header class="mb-8 pb-4 border-b border-[#E2DCD0]"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">نص أدبي</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold text-[#143D33] dark:text-[#E5E9F0] mt-2 leading-tight"> ${literature.title} </h1> <p class="text-xs text-[#5A6578] mt-2">بقلم: ${literature.author}</p> </header> <article class="prose max-w-none text-base leading-loose font-amiri text-[#151C24] dark:text-[#E5E9F0]"> <div>${unescapeHTML(literature.content)}</div> </article> <div class="mt-12 pt-6 border-t border-[#E2DCD0] flex justify-between text-xs text-[#5A6578]"> <a href="/literature" class="font-bold text-[#143D33] hover:underline">← العودة إلى قائمة الأعمال الأدبية</a> </div> </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/literature/[slug].astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/literature/[slug].astro";
const $$url = "/literature/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
