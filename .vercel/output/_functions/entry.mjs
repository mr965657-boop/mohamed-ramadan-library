import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CJQifSES.mjs';
import { manifest } from './manifest_DeVGpm3X.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/items/new.astro.mjs');
const _page3 = () => import('./pages/admin/items.astro.mjs');
const _page4 = () => import('./pages/admin/messages.astro.mjs');
const _page5 = () => import('./pages/admin/settings.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/api/admin/items.astro.mjs');
const _page8 = () => import('./pages/api/admin/messages.astro.mjs');
const _page9 = () => import('./pages/api/contact.astro.mjs');
const _page10 = () => import('./pages/articles/_slug_.astro.mjs');
const _page11 = () => import('./pages/articles.astro.mjs');
const _page12 = () => import('./pages/books/_slug_.astro.mjs');
const _page13 = () => import('./pages/books.astro.mjs');
const _page14 = () => import('./pages/contact.astro.mjs');
const _page15 = () => import('./pages/educational/_slug_.astro.mjs');
const _page16 = () => import('./pages/educational.astro.mjs');
const _page17 = () => import('./pages/lectures/_slug_.astro.mjs');
const _page18 = () => import('./pages/lectures.astro.mjs');
const _page19 = () => import('./pages/literature/_slug_.astro.mjs');
const _page20 = () => import('./pages/literature.astro.mjs');
const _page21 = () => import('./pages/read/_slug_.astro.mjs');
const _page22 = () => import('./pages/research/_slug_.astro.mjs');
const _page23 = () => import('./pages/research.astro.mjs');
const _page24 = () => import('./pages/search.astro.mjs');
const _page25 = () => import('./pages/sitemap.xml.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/items/new.astro", _page2],
    ["src/pages/admin/items/index.astro", _page3],
    ["src/pages/admin/messages/index.astro", _page4],
    ["src/pages/admin/settings/index.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/api/admin/items.ts", _page7],
    ["src/pages/api/admin/messages.ts", _page8],
    ["src/pages/api/contact.ts", _page9],
    ["src/pages/articles/[slug].astro", _page10],
    ["src/pages/articles/index.astro", _page11],
    ["src/pages/books/[slug].astro", _page12],
    ["src/pages/books/index.astro", _page13],
    ["src/pages/contact.astro", _page14],
    ["src/pages/educational/[slug].astro", _page15],
    ["src/pages/educational/index.astro", _page16],
    ["src/pages/lectures/[slug].astro", _page17],
    ["src/pages/lectures/index.astro", _page18],
    ["src/pages/literature/[slug].astro", _page19],
    ["src/pages/literature/index.astro", _page20],
    ["src/pages/read/[slug].astro", _page21],
    ["src/pages/research/[slug].astro", _page22],
    ["src/pages/research/index.astro", _page23],
    ["src/pages/search.astro", _page24],
    ["src/pages/sitemap.xml.ts", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5fa00da2-7f83-467d-a418-4c2aa05ad031",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
