import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_D1VRAqZQ.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"success/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CRILETh1.js"}],"styles":[{"type":"external","src":"/_astro/about.CLoBX0Et.css"},{"type":"inline","content":"@media (min-width: 1024px){.article-container[data-astro-cid-di2nlc57]:nth-child(-n+1){border-right:1px solid black;border-left:1px solid black;padding-right:1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+2){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+3){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+4){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}}\n"}],"routeData":{"route":"/articles/search","isIndex":false,"type":"page","pattern":"^\\/articles\\/search\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/search.astro","pathname":"/articles/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CRILETh1.js"}],"styles":[{"type":"external","src":"/_astro/about.CLoBX0Et.css"},{"type":"inline","content":"@media (min-width: 1024px){.article-container[data-astro-cid-di2nlc57]:nth-child(-n+1){border-right:1px solid black;border-left:1px solid black;padding-right:1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+2){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+3){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+4){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}}\n"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/search.astro",{"propagation":"in-tree","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/services.astro",{"propagation":"none","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/success.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/search@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/articles/search.astro":"chunks/pages/search_CvKE7UZI.mjs","\u0000@astrojs-manifest":"manifest_BlHgcbp6.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_C4SxBD6f.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_DQ0oTYly.mjs","\u0000@astro-page:src/pages/articles/search@_@astro":"chunks/search_BIc-LcSq.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"chunks/index_BJerYott.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"chunks/_.._CQhziUDb.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_CghbIbYj.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_DBTBxVMu.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_BpeJY69W.mjs","\u0000@astro-page:src/pages/success@_@astro":"chunks/success_C5KgS-u5.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DAawW-v2.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_001.md?astroContentCollectionEntry=true":"chunks/editorial_001_D1-XntN3.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_002.md?astroContentCollectionEntry=true":"chunks/editorial_002_CW0v7qQe.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_003.md?astroContentCollectionEntry=true":"chunks/editorial_003_BbCV3BtY.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_001.md?astroPropagatedAssets":"chunks/editorial_001_DRJq2d3A.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_002.md?astroPropagatedAssets":"chunks/editorial_002_CBh24NgF.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_003.md?astroPropagatedAssets":"chunks/editorial_003_C1plxC7p.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_001.md":"chunks/editorial_001_D_KZECWF.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_002.md":"chunks/editorial_002_BAYSd5ni.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_003.md":"chunks/editorial_003_DV1FC6ac.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.CRILETh1.js","/astro/hoisted.js?q=0":"_astro/hoisted.BuHD6GND.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo-dark.CVzy-5vt.png","/_astro/2.2.wi9ju8Mv.jpg","/_astro/focalpoint.CWXTP_g0.webp","/_astro/closer.DZx-eN-D.webp","/_astro/2.1.B2wLbnzQ.jpg","/_astro/2.6.DyyO9nnw.jpg","/_astro/2.7.ChmBKuP-.jpg","/_astro/2.4.DyXmV0pB.jpg","/_astro/2.3.C6FNxKAO.jpg","/_astro/about.CLoBX0Et.css","/images/8ccc.webp","/images/aboriginal-flag.png","/images/aftertherain.webp","/images/arrow-right-solid.svg","/images/arrow-right-to-bracket-solid.svg","/images/arrow.svg","/images/audio-labs.png","/images/chevron-down-solid.svg","/images/chevron-up-solid.svg","/images/closer.webp","/images/contours.svg","/images/editorial_001.webp","/images/editorial_002.webp","/images/editorial_003.jpg","/images/editorial_003.webp","/images/empyral.webp","/images/facebook.svg","/images/favicon.ico","/images/focalpoint.webp","/images/instagram.svg","/images/left-arrow.svg","/images/logo-dark.png","/images/logo-white copy.svg","/images/logo-white.svg","/images/logo-yellow.svg","/images/lsdeath.webp","/images/minus-solid.svg","/images/open-tab.svg","/images/p&tt.webp","/images/p&tt_1.webp","/images/PBC.webp","/images/pcmob_app.webp","/images/plus-solid.svg","/images/Recording-2.webp","/images/right-arrow.svg","/images/Studio-10.webp","/images/Studio-15.webp","/images/Studio-23.webp","/images/Studio-3.webp","/images/Studio-4.webp","/images/Studio-5.webp","/images/torres.png","/images/up-right-from-square-solid.svg","/_astro/hoisted.BuHD6GND.js","/_astro/hoisted.CRILETh1.js","/_astro/Navbar.astro_astro_type_script_index_0_lang.1tT1WBrF.js","/images/blog/2.1.jpg","/images/blog/2.2.jpg","/images/blog/2.3.jpg","/images/blog/2.4.jpg","/images/blog/2.5.jpg","/images/blog/2.6.jpg","/images/blog/2.7.jpg","/about/index.html","/contact/index.html","/projects/index.html","/services/index.html","/success/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
