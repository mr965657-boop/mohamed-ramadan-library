import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_B1eePQ0D.mjs';
import { b as getAdminItems } from '../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const items = await getAdminItems();
  return renderTemplate(_a || (_a = __template(["", " <script>\n  async function deleteItem(id, title) {\n    if (!confirm(`\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u0644: \"${title}\"\u061F`)) {\n      return;\n    }\n    try {\n      const res = await fetch('/api/admin/items', {\n        method: 'DELETE',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ id }),\n      });\n      const data = await res.json();\n      if (data.success) {\n        const row = document.getElementById(`row-${id}`);\n        if (row) row.remove();\n        alert('\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u0644 \u0628\u0646\u062C\u0627\u062D.');\n      } else {\n        alert('\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641.');\n      }\n    } catch (e) {\n      alert('\u062A\u0639\u0630\u0631 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062E\u0627\u062F\u0645.');\n    }\n  }\n<\/script>"], ["", " <script>\n  async function deleteItem(id, title) {\n    if (!confirm(\\`\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u0644: \"\\${title}\"\u061F\\`)) {\n      return;\n    }\n    try {\n      const res = await fetch('/api/admin/items', {\n        method: 'DELETE',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ id }),\n      });\n      const data = await res.json();\n      if (data.success) {\n        const row = document.getElementById(\\`row-\\${id}\\`);\n        if (row) row.remove();\n        alert('\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u0644 \u0628\u0646\u062C\u0627\u062D.');\n      } else {\n        alert('\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641.');\n      }\n    } catch (e) {\n      alert('\u062A\u0639\u0630\u0631 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062E\u0627\u062F\u0645.');\n    }\n  }\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u0625\u062F\u0627\u0631\u0629 \u0645\u062D\u062A\u0648\u064A\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0628\u0629 (CRUD)" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <div class="flex items-center justify-between"> <div> <p class="text-xs text-[#5A6578]">عرض وتعديل وحذف كافة المصنفات والمواد المنشورة أو المسودات</p> </div> <a href="/admin/items/new" class="py-2.5 px-4 bg-[#143D33] hover:bg-[#1F5A4B] text-white text-xs font-bold rounded-lg shadow transition-colors flex items-center gap-2"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg> <span>إضافة عمل جديد</span> </a> </div> <!-- جدول إدارة المحتوى --> <div class="bg-white rounded-xl border border-[#E2DCD0] shadow-sm overflow-hidden"> <div class="overflow-x-auto"> <table class="w-full text-right text-xs"> <thead class="bg-[#FAF7F0] border-b border-[#E2DCD0] text-[#143D33] font-bold"> <tr> <th class="p-4">النوع</th> <th class="p-4">العنوان</th> <th class="p-4">المؤلف</th> <th class="p-4">الحالة</th> <th class="p-4">المشاهدات</th> <th class="p-4">التحميلات</th> <th class="p-4 text-center">الإجراءات</th> </tr> </thead> <tbody class="divide-y divide-[#E2DCD0]/60"> ${items.map((item) => renderTemplate`<tr class="hover:bg-gray-50/80 transition-colors"${addAttribute(`row-${item.id}`, "id")}> <td class="p-4"> <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#143D33]/10 text-[#143D33]"> ${item.type} </span> </td> <td class="p-4 font-bold text-[#151C24] max-w-xs truncate"> ${item.title} </td> <td class="p-4 text-[#5A6578]">${item.author}</td> <td class="p-4"> <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800"> ${item.status === "published" ? "\u0645\u0646\u0634\u0648\u0631" : "\u0645\u0633\u0648\u062F\u0629"} </span> </td> <td class="p-4 font-sans font-semibold text-gray-600">${item.view_count}</td> <td class="p-4 font-sans font-semibold text-gray-600">${item.download_count}</td> <td class="p-4 text-center"> <div class="flex items-center justify-center gap-2"> <a${addAttribute(`/${item.type === "book" ? "books" : item.type === "research" ? "research" : item.type === "article" ? "articles" : item.type === "lecture" ? "lectures" : item.type === "literature" ? "literature" : "educational"}/${item.slug}`, "href")} target="_blank" class="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded font-semibold">
معاينة
</a> <button${addAttribute(`deleteItem('${item.id}', '${item.title}')`, "onclick")} class="px-2.5 py-1 bg-red-50 text-red-700 hover:bg-red-100 rounded font-semibold">
حذف
</button> </div> </td> </tr>`)} </tbody> </table> </div> </div> </div> ` }));
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/admin/items/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/admin/items/index.astro";
const $$url = "/admin/items";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
