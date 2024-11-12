import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_zIuGBAc5.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/My%20Websites/Astro%20Websites/Clients/AudioLabs%20V2/","adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.TcU37gu1.js"}],"styles":[{"type":"external","src":"/_astro/about.CfDk965s.css"},{"type":"inline","content":"@media (min-width: 1024px){.article-container[data-astro-cid-di2nlc57]:nth-child(-n+1){border-right:1px solid black;border-left:1px solid black;padding-right:1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+2){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+3){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+4){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}}\n"}],"routeData":{"route":"/articles/search","isIndex":false,"type":"page","pattern":"^\\/articles\\/search\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/search.astro","pathname":"/articles/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.TcU37gu1.js"}],"styles":[{"type":"external","src":"/_astro/about.CfDk965s.css"},{"type":"inline","content":"@media (min-width: 1024px){.article-container[data-astro-cid-di2nlc57]:nth-child(-n+1){border-right:1px solid black;border-left:1px solid black;padding-right:1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+2){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+3){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}.article-container[data-astro-cid-di2nlc57]:nth-child(-n+4){border-right:1px solid black;padding:0 1rem;margin-bottom:1rem}}\n"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/search@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/search@_@astro":"pages/articles/search.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CGaQvCFK.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_001.md?astroContentCollectionEntry=true":"chunks/editorial_001_BP8kxce9.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_002.md?astroContentCollectionEntry=true":"chunks/editorial_002_B-U0BLcJ.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_001.md?astroPropagatedAssets":"chunks/editorial_001_CMwGqNmJ.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_002.md?astroPropagatedAssets":"chunks/editorial_002_DByob9DT.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_001.md":"chunks/editorial_001_DQ9MR95h.mjs","D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_002.md":"chunks/editorial_002_CshErAoj.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.TcU37gu1.js","/astro/hoisted.js?q=0":"_astro/hoisted.D8MVOzyU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo-dark.CVzy-5vt.png","/_astro/about.CfDk965s.css","/_astro/hoisted.D8MVOzyU.js","/_astro/hoisted.TcU37gu1.js","/_astro/Navbar.astro_astro_type_script_index_0_lang.1tT1WBrF.js","/images/8ccc.jpg","/images/aboriginal-flag.png","/images/aftertherain.jpg","/images/arrow-right-solid.svg","/images/arrow-right-to-bracket-solid.svg","/images/arrow.svg","/images/audio-labs.png","/images/chevron-down-solid.svg","/images/chevron-up-solid.svg","/images/contours.svg","/images/dolomites.jpg","/images/editorial_001.png","/images/editorial_002.png","/images/empyral.jpg","/images/facebook.svg","/images/favicon.ico","/images/focalpoint.jpg","/images/goryu-backcountry.jpg","/images/grampians.jpg","/images/happo.jpg","/images/image1.png","/images/image2.png","/images/image3.png","/images/image4.png","/images/image5.png","/images/image6.png","/images/image7.png","/images/instagram.svg","/images/left-arrow.svg","/images/logo-dark.png","/images/logo-white copy.svg","/images/logo-white.svg","/images/logo-yellow.svg","/images/logo.png","/images/lsdeath.jpg","/images/lsdeath_1.jpg","/images/minus-solid.svg","/images/open-tab.svg","/images/p&tt.jpg","/images/p&tt_1.jpg","/images/p&tt_2.jpg","/images/PBC.jpg","/images/pcmob_app.webp","/images/plus-solid.svg","/images/Recording-2.jpg","/images/right-arrow.svg","/images/Studio-10.jpg","/images/Studio-15.jpg","/images/Studio-23.jpg","/images/Studio-3.jpg","/images/Studio-4.jpg","/images/Studio-5.jpg","/images/tongue-point.jpg","/images/torres.png","/images/triglav.jpg","/images/up-right-from-square-solid.svg","/about/index.html","/contact/index.html","/projects/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"2a7MweocQGlBm8PanGPeevVURRF7ZUEh8XrWaJenoSI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
