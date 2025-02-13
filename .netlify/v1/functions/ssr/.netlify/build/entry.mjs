import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BlHgcbp6.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C4SxBD6f.mjs');
const _page1 = () => import('./chunks/about_DQ0oTYly.mjs');
const _page2 = () => import('./chunks/search_BIc-LcSq.mjs');
const _page3 = () => import('./chunks/index_BJerYott.mjs');
const _page4 = () => import('./chunks/_.._CQhziUDb.mjs');
const _page5 = () => import('./chunks/contact_CghbIbYj.mjs');
const _page6 = () => import('./chunks/projects_DBTBxVMu.mjs');
const _page7 = () => import('./chunks/services_BpeJY69W.mjs');
const _page8 = () => import('./chunks/success_C5KgS-u5.mjs');
const _page9 = () => import('./chunks/index_DAawW-v2.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/articles/search.astro", _page2],
    ["src/pages/articles/index.astro", _page3],
    ["src/pages/articles/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/services.astro", _page7],
    ["src/pages/success.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a87ac6ea-4e51-4631-9046-f8b0c9aaf6ef"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
