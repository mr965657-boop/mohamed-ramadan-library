import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
import { g as getItems } from '../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const books = await getItems({ type: "book" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0639\u0646 \u0627\u0644\u0645\u0624\u0644\u0641 \u0648\u0627\u0644\u0628\u0627\u062D\u062B | \u0645\u062D\u0645\u062F \u0631\u0645\u0636\u0627\u0646" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-[#143D33] text-[#F7F3E9] py-14 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">سيرة ومسيرة</span> <h1 class="text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">عن المؤلف: محمد رمضان</h1> <p class="text-base text-[#F7F3E9]/80 mt-2 leading-relaxed font-ruqaa text-xl">
باحث، مؤلف، ومعلم يعنى بالدراسات التراثية والفكرية والإنسانية
</p> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-12 gap-10"> <!-- العمود الجانبي: الصورة ومعلومات الاتصال --> <div class="md:col-span-4 space-y-6"> <div class="bg-white dark:bg-[#1A2433] rounded-2xl p-4 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm"> <div class="aspect-[4/5] rounded-xl overflow-hidden bg-gray-200"> <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800" alt="محمد رمضان" class="w-full h-full object-cover"> </div> <div class="mt-4 text-center"> <h2 class="font-amiri font-bold text-xl text-[#143D33] dark:text-[#E5E9F0]">أ. محمد رمضان</h2> <p class="text-xs text-[#B8924A] font-semibold mt-0.5">باحث ومؤلف</p> </div> </div> <div class="bg-white dark:bg-[#1A2433] rounded-2xl p-6 border border-[#E2DCD0] dark:border-[#2B384E] text-xs space-y-3"> <h3 class="font-amiri font-bold text-base text-[#143D33] dark:text-[#E5E9F0] border-b border-[#E2DCD0] pb-2">
وسائل التواصل الأكاديمي
</h3> <p><strong class="text-[#5A6578]">البريد:</strong> info@mohamed-ramadan.com</p> <p><strong class="text-[#5A6578]">المجال:</strong> الفكر الإسلامي والدراسات التراثية</p> <a href="/contact" class="block text-center w-full py-2 bg-[#143D33] text-white font-bold rounded-lg hover:bg-[#1F5A4B] transition-colors mt-2">
إرسال رسالة مباشرة
</a> </div> </div> <!-- العمود الرئيسي: السيرة والمؤهلات والاهتمامات --> <div class="md:col-span-8 space-y-8"> <!-- نبذة عامة --> <section class="bg-white dark:bg-[#1A2433] rounded-2xl p-8 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm"> <h3 class="font-amiri font-bold text-2xl text-[#143D33] dark:text-[#E5E9F0] mb-4 flex items-center gap-2"> <span class="w-2.5 h-2.5 rounded-full bg-[#B8924A]"></span>
الرؤية والمسيرة المعرفية
</h3> <p class="text-sm leading-relaxed text-[#151C24] dark:text-[#E5E9F0]">
يسعى الأستاذ والباحث محمد رمضان من خلال كتاباته وأبحاثه إلى بناء جسر منهجي متين بين علوم التراث العربي والإسلامي وأسئلة الفكر الحديث، مع التركيز على التحقيق الرصين، وإتاحة المعرفة الموثوقة لعموم طلاب العلم والباحثين عبر المنصات الرقمية المعاصرة.
</p> </section> <!-- الاهتمامات العلمية والبحثية --> <section class="bg-white dark:bg-[#1A2433] rounded-2xl p-8 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm"> <h3 class="font-amiri font-bold text-2xl text-[#143D33] dark:text-[#E5E9F0] mb-4 flex items-center gap-2"> <span class="w-2.5 h-2.5 rounded-full bg-[#1B365D]"></span>
حقول الاهتمام العلمي
</h3> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#151C24] dark:text-[#E5E9F0]"> <li class="p-3 bg-[#FAF7F0] dark:bg-[#151D28] rounded-lg border border-[#E2DCD0]">
✦ مناهج البحث وتحقيق المخطوطات
</li> <li class="p-3 bg-[#FAF7F0] dark:bg-[#151D28] rounded-lg border border-[#E2DCD0]">
✦ قضايا الفكر والنهضة المعاصرة
</li> <li class="p-3 bg-[#FAF7F0] dark:bg-[#151D28] rounded-lg border border-[#E2DCD0]">
✦ الأدب العربي والجماليات الحضارية
</li> <li class="p-3 bg-[#FAF7F0] dark:bg-[#151D28] rounded-lg border border-[#E2DCD0]">
✦ تطوير المناهج والوسائط التعليمية
</li> </ul> </section> <!-- المؤلفات المنشورة في المنصة --> <section class="bg-white dark:bg-[#1A2433] rounded-2xl p-8 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm"> <h3 class="font-amiri font-bold text-2xl text-[#143D33] dark:text-[#E5E9F0] mb-4 flex items-center gap-2"> <span class="w-2.5 h-2.5 rounded-full bg-[#143D33]"></span>
المصنفات المتاحة بالمكتبة
</h3> <div class="space-y-3"> ${books.map((b) => renderTemplate`<a${addAttribute(`/books/${b.slug}`, "href")} class="block p-4 bg-[#FAF7F0] dark:bg-[#151D28] rounded-xl border border-[#E2DCD0] hover:border-[#143D33] transition-colors"> <h4 class="font-amiri font-bold text-base text-[#143D33] dark:text-[#B8924A]">${b.title}</h4> <p class="text-xs text-[#5A6578] mt-1 line-clamp-1">${b.excerpt}</p> </a>`)} </div> </section> </div> </div> </div> ` })}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/about.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
