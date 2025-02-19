import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DR1XUFCn.mjs';

const _page0  = () => import('./chunks/generic_7yaqv3zr.mjs');
const _page1  = () => import('./chunks/index_Ya66JIMH.mjs');
const _page2  = () => import('./chunks/dashboard_7O1V3BFT.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.0.7_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/dashboard.astro", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"2263db30-2e47-4ceb-9896-8018d85f588c"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
