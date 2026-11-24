import { e as createComponent, k as renderComponent, o as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3Zl_j_b.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0624\u0644\u0641 \u0648\u0627\u0644\u0645\u0643\u062A\u0628\u0629" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#143D33] text-[#F7F3E9] py-12 border-b-2 border-[#B8924A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <span class="text-xs font-bold text-[#B8924A] uppercase tracking-wider">قنوات الاتصال المباشرة</span> <h1 class="text-3xl sm:text-4xl font-amiri font-bold mt-1 text-[#F7F3E9]">تواصل مع المؤلف وإدارة المكتبة</h1> <p class="text-sm text-[#F7F3E9]/80 mt-2 leading-relaxed">
يسعدنا استقبال استفساراتكم الأكاديمية، والتعاون العلمي، وملاحظاتكم حول الكتب والمحتوى.
</p> </div> </div> </div> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="bg-white dark:bg-[#1A2433] rounded-2xl p-6 sm:p-10 border border-[#E2DCD0] dark:border-[#2B384E] shadow-sm"> <form id="contact-form" class="space-y-6"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> <div> <label for="name" class="block text-xs font-bold text-[#143D33] dark:text-[#E5E9F0] mb-2">
الاسم الكريم <span class="text-red-500">*</span> </label> <input type="text" id="name" name="name" required placeholder="مثال: د. أحمد المحمود" class="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E2DCD0] dark:border-[#2B384E] dark:bg-[#151D28] text-[#151C24] dark:text-[#E5E9F0] focus:outline-none focus:ring-2 focus:ring-[#143D33]"> </div> <div> <label for="email" class="block text-xs font-bold text-[#143D33] dark:text-[#E5E9F0] mb-2">
البريد الإلكتروني <span class="text-red-500">*</span> </label> <input type="email" id="email" name="email" required placeholder="name@example.com" class="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E2DCD0] dark:border-[#2B384E] dark:bg-[#151D28] text-[#151C24] dark:text-[#E5E9F0] focus:outline-none focus:ring-2 focus:ring-[#143D33]"> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> <div> <label for="category" class="block text-xs font-bold text-[#143D33] dark:text-[#E5E9F0] mb-2">
تصنيف الرسالة <span class="text-red-500">*</span> </label> <select id="category" name="category" required class="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E2DCD0] dark:border-[#2B384E] dark:bg-[#151D28] text-[#151C24] dark:text-[#E5E9F0] focus:outline-none focus:ring-2 focus:ring-[#143D33]"> <option value="books">استفسارات حول الكتب والمؤلفات</option> <option value="research">البحوث والدراسات العلمية</option> <option value="teaching">التدريس والمحاضرات والتعليم</option> <option value="scientific_cooperation">التعاون والمشاريع الأكاديمية</option> <option value="general">استفسار عام أو اقتراح</option> </select> </div> <div> <label for="subject" class="block text-xs font-bold text-[#143D33] dark:text-[#E5E9F0] mb-2">
موضوع الرسالة
</label> <input type="text" id="subject" name="subject" placeholder="عنوان موجز لرسالتك" class="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E2DCD0] dark:border-[#2B384E] dark:bg-[#151D28] text-[#151C24] dark:text-[#E5E9F0] focus:outline-none focus:ring-2 focus:ring-[#143D33]"> </div> </div> <div> <label for="message" class="block text-xs font-bold text-[#143D33] dark:text-[#E5E9F0] mb-2">
نص الرسالة <span class="text-red-500">*</span> </label> <textarea id="message" name="message" rows="5" required placeholder="اكتب رسالتك وتفاصيل استفسارك هنا..." class="w-full px-4 py-3 text-sm rounded-lg border border-[#E2DCD0] dark:border-[#2B384E] dark:bg-[#151D28] text-[#151C24] dark:text-[#E5E9F0] focus:outline-none focus:ring-2 focus:ring-[#143D33]"></textarea> </div> <div id="form-alert" class="hidden p-4 rounded-lg text-xs font-bold"></div> <div> <button type="submit" id="submit-btn" class="w-full py-3.5 px-6 bg-[#143D33] hover:bg-[#1F5A4B] text-[#F7F3E9] font-amiri font-bold text-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-2"> <span>إرسال الرسالة إلى إدارة المكتبة</span> <svg class="w-5 h-5 text-[#B8924A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </button> </div> </form> </div> </div> ` })} ${renderScript($$result, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/contact.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
