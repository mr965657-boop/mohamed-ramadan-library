import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro, o as renderScript, k as renderComponent, n as renderSlot, l as renderHead } from './astro/server_DKXstz1h.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPath = "/", lang = "ar" } = Astro2.props;
  const navLinks = [
    { href: "/", label: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", labelEn: "Home" },
    { href: "/books", label: "\u0627\u0644\u0643\u062A\u0628 \u0648\u0627\u0644\u0645\u0624\u0644\u0641\u0627\u062A", labelEn: "Books" },
    { href: "/research", label: "\u0627\u0644\u0628\u062D\u0648\u062B \u0648\u0627\u0644\u062F\u0631\u0627\u0633\u0627\u062A", labelEn: "Research" },
    { href: "/articles", label: "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A", labelEn: "Articles" },
    { href: "/lectures", label: "\u0627\u0644\u0645\u062D\u0627\u0636\u0631\u0627\u062A", labelEn: "Lectures" },
    { href: "/literature", label: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0623\u062F\u0628\u064A\u0629", labelEn: "Literature" },
    { href: "/educational", label: "\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629", labelEn: "Educational" },
    { href: "/about", label: "\u0639\u0646 \u0627\u0644\u0645\u0624\u0644\u0641", labelEn: "About" },
    { href: "/contact", label: "\u062A\u0648\u0627\u0635\u0644", labelEn: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-40 bg-[#F7F3E9]/95 dark:bg-[#0F141C]/95 backdrop-blur border-b border-[#E2DCD0] dark:border-[#2B384E] transition-colors"> <!-- شريط علوي ذهبي رفيع --> <div class="h-1 bg-gradient-to-r from-[#143D33] via-[#B8924A] to-[#1B365D]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-20"> <!-- شعار وهوية المكتبة --> <a href="/" class="flex items-center gap-3.5 group"> <div class="w-11 h-11 rounded-lg bg-[#143D33] text-[#B8924A] flex items-center justify-center font-amiri font-bold text-2xl shadow-md border border-[#B8924A]/40 group-hover:scale-105 transition-transform">
م
</div> <div> <span class="block font-amiri font-bold text-xl sm:text-2xl text-[#143D33] dark:text-[#E5E9F0] leading-none tracking-tight">
مكتبة محمد رمضان
</span> <span class="block text-[11px] font-sans text-[#B8924A] font-medium tracking-wider uppercase mt-1">
Mohamed Ramadan Digital Library
</span> </div> </a> <!-- محرك البحث السريع --> <div class="hidden md:flex items-center flex-1 max-w-xs mx-8"> <form action="/search" method="GET" class="w-full relative"> <input type="search" name="q" placeholder="ابحث في الكتب والمقالات والمحاضرات..." class="w-full pl-4 pr-10 py-2 text-sm bg-white dark:bg-[#1A2433] border border-[#E2DCD0] dark:border-[#2B384E] rounded-full focus:outline-none focus:ring-2 focus:ring-[#B8924A] focus:border-transparent text-[#151C24] dark:text-[#E5E9F0] placeholder-[#5A6578]"> <button type="submit" aria-label="بحث" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6578] hover:text-[#143D33] transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </form> </div> <!-- الإجراءات السريعة ولوحة الإدارة --> <div class="flex items-center gap-3"> <!-- زر البحث للهواتف --> <a href="/search" class="md:hidden p-2 text-[#151C24] dark:text-[#E5E9F0] hover:text-[#B8924A]" aria-label="البحث"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </a> <!-- رابط لوحة الإدارة --> <a href="/admin" class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md border border-[#143D33] text-[#143D33] dark:border-[#B8924A] dark:text-[#B8924A] hover:bg-[#143D33] hover:text-white dark:hover:bg-[#B8924A] dark:hover:text-[#0F141C] transition-colors"> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path> </svg> <span>لوحة التحكم</span> </a> <!-- تبديل اللغة --> <button type="button" onclick="alert('الموقع معد لدعم الترجمة الكاملة (عربي / إنجليزي)')" class="px-2.5 py-1 text-xs font-bold rounded text-[#1B365D] dark:text-[#E5E9F0] hover:bg-black/5 dark:hover:bg-white/10 transition-colors border border-transparent hover:border-[#E2DCD0]" title="تبديل اللغة / Switch Language">
EN
</button> </div> </div> <!-- شريط التنقل بين الأقسام الستة --> <nav class="flex items-center gap-1 overflow-x-auto py-2.5 border-t border-[#E2DCD0]/60 dark:border-[#2B384E]/60 text-sm no-scrollbar"> ${navLinks.map((link) => {
    const isActive = currentPath === link.href || link.href !== "/" && currentPath.startsWith(link.href);
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`whitespace-nowrap px-3 py-1 rounded-md transition-all font-medium ${isActive ? "bg-[#143D33] text-white dark:bg-[#B8924A] dark:text-[#0F141C] font-semibold shadow-sm" : "text-[#151C24] dark:text-[#E5E9F0] hover:text-[#143D33] dark:hover:text-[#B8924A] hover:bg-black/5 dark:hover:bg-white/5"}`, "class")}> ${lang === "ar" ? link.label : link.labelEn} </a>`;
  })} </nav> </div> </header>`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-20 bg-[#143D33] text-[#F7F3E9] border-t-4 border-[#B8924A] relative overflow-hidden"> <!-- زخرفة هندسية هادئة في الخلفية --> <div class="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#B8924A_1px,transparent_1px)] [background-size:16px_16px]"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"> <div class="grid grid-cols-1 md:grid-cols-4 gap-10"> <!-- تعريف المكتبة --> <div class="md:col-span-2 space-y-4"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded bg-[#B8924A] text-[#143D33] font-amiri font-bold text-2xl flex items-center justify-center">
م
</div> <span class="font-amiri font-bold text-2xl text-[#F7F3E9]">مكتبة محمد رمضان المعرفية</span> </div> <p class="text-sm text-[#F7F3E9]/80 leading-relaxed max-w-md">
منصة معرفية وثقافية تجمع بين التراث الإسلامي الرصين والرؤية الرقمية المعاصرة؛ لتيسير القراءة والبحث العلمي، وتقديم فضاء معرفي متكامل يخدم الباحثين والقراء.
</p> <div class="pt-2 text-xs text-[#B8924A] flex items-center gap-4"> <span>✓ محتوى موثوق ومحقق</span> <span>✓ قارئ كتب تفاعلي متقدم</span> <span>✓ قراءة دون اتصال PWA</span> </div> </div> <!-- روابط الأقسام --> <div> <h3 class="font-amiri font-bold text-lg text-[#B8924A] mb-4">أقسام المكتبة</h3> <ul class="space-y-2 text-sm text-[#F7F3E9]/85"> <li><a href="/books" class="hover:text-[#B8924A] transition-colors">الكتب والمؤلفات</a></li> <li><a href="/research" class="hover:text-[#B8924A] transition-colors">البحوث والدراسات</a></li> <li><a href="/articles" class="hover:text-[#B8924A] transition-colors">المقالات الفكرية</a></li> <li><a href="/lectures" class="hover:text-[#B8924A] transition-colors">المحاضرات والدروس</a></li> <li><a href="/literature" class="hover:text-[#B8924A] transition-colors">الأعمال الأدبية</a></li> <li><a href="/educational" class="hover:text-[#B8924A] transition-colors">المواد التعليمية</a></li> </ul> </div> <!-- الاشتراك في النشرة البريدية --> <div> <h3 class="font-amiri font-bold text-lg text-[#B8924A] mb-4">النشرة المعرفية</h3> <p class="text-xs text-[#F7F3E9]/75 mb-3 leading-relaxed">
اشترك ليصلك جديد الكتب المنشورة، والبحوث الأكاديمية، والتسجيلات المسموعة أولاً بأول.
</p> <form id="newsletter-form" class="space-y-2"> <input type="email" id="newsletter-email" required placeholder="بريدك الإلكتروني..." class="w-full px-3.5 py-2 text-sm bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#B8924A]"> <button type="submit" class="w-full py-2 px-4 bg-[#B8924A] hover:bg-[#D4B06A] text-[#143D33] font-semibold text-xs rounded transition-colors uppercase tracking-wider">
اشتراك في النشرة
</button> <div id="newsletter-msg" class="hidden text-xs text-[#B8924A] mt-1 text-center font-medium"></div> </form> </div> </div> <!-- الشريط السفلي --> <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F3E9]/60 gap-4"> <div>
جميع الحقوق محفوظة © ${year} مكتبة محمد رمضان الرقمية.
</div> <div class="flex items-center gap-6"> <a href="/about" class="hover:text-[#B8924A]">عن المؤلف</a> <a href="/contact" class="hover:text-[#B8924A]">تواصل معنا</a> <a href="/admin" class="hover:text-[#B8924A]">دخول الإدارة</a> </div> </div> </div> </footer> ${renderScript($$result, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "\u0645\u0643\u062A\u0628\u0629 \u0645\u062D\u0645\u062F \u0631\u0645\u0636\u0627\u0646 \u0627\u0644\u0645\u0639\u0631\u0641\u064A\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 - \u0645\u0646\u0635\u0629 \u0639\u0644\u0645\u064A\u0629 \u0648\u0628\u062D\u062B\u064A\u0629 \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u062A\u0631\u0627\u062B \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A \u0648\u0627\u0644\u0623\u0635\u0627\u0644\u0629 \u0627\u0644\u0645\u0639\u0627\u0635\u0631\u0629 \u0641\u064A \u0628\u064A\u0626\u0629 \u0642\u0631\u0627\u0621\u0629 \u0648\u0628\u062D\u062B \u0645\u062A\u0637\u0648\u0631\u0629.",
    keywords = ["\u0645\u0643\u062A\u0628\u0629 \u0645\u062D\u0645\u062F \u0631\u0645\u0636\u0627\u0646", "\u0643\u062A\u0628 \u0625\u0633\u0644\u0627\u0645\u064A\u0629", "\u0628\u062D\u0648\u062B \u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629", "\u0645\u0642\u0627\u0644\u0627\u062A \u0641\u0643\u0631\u064A\u0629", "\u0645\u062D\u0627\u0636\u0631\u0627\u062A \u0635\u0648\u062A\u064A\u0629"],
    image = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200",
    type = "website",
    lang = "ar",
    canonical = Astro2.url.href
  } = Astro2.props;
  const isRTL = lang === "ar";
  return renderTemplate(_a || (_a = __template(["<html", "", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', ' | \u0645\u0643\u062A\u0628\u0629 \u0645\u062D\u0645\u062F \u0631\u0645\u0636\u0627\u0646</title><meta name="description"', '><meta name="keywords"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- \u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0627\u062A \u0648\u0627\u0644\u0633\u0645\u0629 \u0627\u0644\u0644\u0648\u0646\u064A\u0629 \u0648\u062A\u0637\u0628\u064A\u0642 PWA --><meta name="theme-color" content="#143D33"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="manifest" href="/manifest.json">', '</head> <body class="min-h-screen flex flex-col bg-[#F7F3E9] text-[#151C24] dark:bg-[#0F141C] dark:text-[#E5E9F0] antialiased selection:bg-[#B8924A]/30 selection:text-[#143D33]"> ', ' <main class="flex-1 w-full"> ', " </main> ", " <script>\n      if ('serviceWorker' in navigator) {\n        window.addEventListener('load', () => {\n          navigator.serviceWorker.register('/sw.js').catch(() => {});\n        });\n      }\n    <\/script> </body> </html>"])), addAttribute(lang, "lang"), addAttribute(isRTL ? "rtl" : "ltr", "dir"), title, addAttribute(description, "content"), addAttribute(keywords.join(", "), "content"), addAttribute(canonical, "href"), addAttribute(type, "content"), addAttribute(canonical, "content"), addAttribute(`${title} | \u0645\u0643\u062A\u0628\u0629 \u0645\u062D\u0645\u062F \u0631\u0645\u0636\u0627\u0646`, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(isRTL ? "ar_AR" : "en_US", "content"), addAttribute(`${title} | \u0645\u0643\u062A\u0628\u0629 \u0645\u062D\u0645\u062F \u0631\u0645\u0636\u0627\u0646`, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderComponent($$result, "Header", $$Header, { "currentPath": Astro2.url.pathname, "lang": lang }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/\u0645\u0643\u062A\u0628\u0629/mohamed-ramadan-library/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
