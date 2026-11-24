import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_DKXstz1h.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_B1eePQ0D.mjs';
import { c as getAdminMessages } from '../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const messages = await getAdminMessages();
  return renderTemplate(_a || (_a = __template(["", " <script>\n  async function markArchived(id) {\n    try {\n      const res = await fetch('/api/admin/messages', {\n        method: 'PATCH',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ id, status: 'archived' }),\n      });\n      const data = await res.json();\n      if (data.success) {\n        const el = document.getElementById(`msg-${id}`);\n        if (el) el.style.opacity = '0.5';\n        alert('\u062A\u0645\u062A \u0623\u0631\u0634\u0641\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629.');\n      }\n    } catch (e) {\n      alert('\u062D\u062F\u062B \u062E\u0637\u0623.');\n    }\n  }\n<\/script>"], ["", " <script>\n  async function markArchived(id) {\n    try {\n      const res = await fetch('/api/admin/messages', {\n        method: 'PATCH',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ id, status: 'archived' }),\n      });\n      const data = await res.json();\n      if (data.success) {\n        const el = document.getElementById(\\`msg-\\${id}\\`);\n        if (el) el.style.opacity = '0.5';\n        alert('\u062A\u0645\u062A \u0623\u0631\u0634\u0641\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629.');\n      }\n    } catch (e) {\n      alert('\u062D\u062F\u062B \u062E\u0637\u0623.');\n    }\n  }\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u0635\u0646\u062F\u0648\u0642 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <p class="text-xs text-[#5A6578]">رسائل واستفسارات الزوار والباحثين المرسلة عبر صفحة التواصل</p> <div class="bg-white rounded-xl border border-[#E2DCD0] shadow-sm overflow-hidden"> ${messages.length > 0 ? renderTemplate`<div class="divide-y divide-[#E2DCD0]"> ${messages.map((msg) => renderTemplate`<div class="p-6 hover:bg-[#FAF7F0]/60 transition-colors"${addAttribute(`msg-${msg.id}`, "id")}> <div class="flex items-center justify-between flex-wrap gap-2 mb-2"> <div class="flex items-center gap-2"> <span class="font-bold text-sm text-[#143D33]">${msg.name}</span> <span class="text-xs text-gray-500 font-sans">&lt;${msg.email}&gt;</span> <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#B8924A]/20 text-[#8C6C30]"> ${msg.category === "books" ? "\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0643\u062A\u0628" : msg.category === "research" ? "\u0628\u062D\u0648\u062B \u0648\u062F\u0631\u0627\u0633\u0627\u062A" : msg.category === "teaching" ? "\u062A\u062F\u0631\u064A\u0633" : msg.category === "scientific_cooperation" ? "\u062A\u0639\u0627\u0648\u0646 \u0639\u0644\u0645\u064A" : "\u0639\u0627\u0645"} </span> </div> <span class="text-xs text-[#5A6578] font-sans"> ${new Date(msg.created_at).toLocaleString("ar-EG")} </span> </div> <h3 class="font-bold text-xs text-[#151C24] mb-1">الموضوع: ${msg.subject || "\u0628\u062F\u0648\u0646 \u0645\u0648\u0636\u0648\u0639"}</h3> <p class="text-xs text-[#5A6578] leading-relaxed bg-[#FAF7F0] p-3 rounded-lg border border-[#E2DCD0]/60"> ${msg.message} </p> <div class="mt-4 flex items-center justify-between text-xs pt-2"> <span class="text-[11px] text-blue-700 font-semibold">
الحالة: ${msg.status === "new" ? "\u062C\u062F\u064A\u062F\u0629" : "\u0645\u0642\u0631\u0648\u0621\u0629"} </span> <div class="flex items-center gap-2"> <a${addAttribute(`mailto:${msg.email}?subject=\u0631\u062F \u0639\u0644\u0649: ${encodeURIComponent(msg.subject || "\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0643\u0645 \u0641\u064A \u0645\u0643\u062A\u0628\u0629 \u0645\u062D\u0645\u062F \u0631\u0645\u0636\u0627\u0646")}`, "href")} class="px-3 py-1 bg-[#143D33] text-white rounded font-bold hover:bg-[#1F5A4B] transition-colors">
رد عبر البريد
</a> <button${addAttribute(`markArchived('${msg.id}')`, "onclick")} class="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded font-semibold transition-colors">
أرشفة
</button> </div> </div> </div>`)} </div>` : renderTemplate`<div class="text-center py-16 text-xs text-[#5A6578]"> <p class="text-base font-amiri font-bold text-[#143D33] mb-1">صندوق الرسائل فارغ</p> <p>عندما يرسل زائر رسالة من صفحة التواصل ستظهر مباشرة هنا لإدارتها والرد عليها.</p> </div>`} </div> </div> ` }));
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/pages/admin/messages/index.astro", void 0);

const $$file = "D:/مكتبة/mohamed-ramadan-library/src/pages/admin/messages/index.astro";
const $$url = "/admin/messages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
