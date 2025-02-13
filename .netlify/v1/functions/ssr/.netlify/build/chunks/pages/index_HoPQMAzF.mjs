/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, j as renderSlot, k as renderHead, g as addAttribute, h as createAstro, A as AstroError, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, u as unescapeHTML } from '../astro_D1VRAqZQ.mjs';
import 'kleur/colors';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$Image } from './generic_BAdGQ7XI.mjs';
import pLimit from 'p-limit';
import 'clsx';
/* empty css                          */

const logo = new Proxy({"src":"/_astro/logo-dark.CVzy-5vt.png","width":3072,"height":3072,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/images/logo-dark.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="navbar z-50 bg-customPrimary" data-astro-cid-5blmo7yk> <div class="mt-0 xl:flex xl:items-center xl:justify-between container-m m-auto px-2 xl:border-b xl:border-black" data-astro-cid-5blmo7yk> <div class="flex items-center justify-between py-3 xl:w-auto z-50 xl:mr-0 xl:ml-0 relative border-b border-black xl:border-none" data-astro-cid-5blmo7yk> <a href="/" class="logo w-9 xl:w-12 hover:scale-105 transition-all duration-500" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "", "data-astro-cid-5blmo7yk": true })} </a> <button class="menu-button xl:hidden border border-[#151E1E] text-[#151e1e] py-[.3rem] px-[1rem] rounded-full text-sm" data-astro-cid-5blmo7yk>Menu</button> </div> <div class="absolute xl:relative bg-[#B4B2B2] xl:bg-inherit w-full top-0 right-0 xl:w-full xl:px:0 xl:pl-20 xl:pr-0 xl:flex xl:top-auto xl:right-auto z-40" data-astro-cid-5blmo7yk> <nav class="hidden border-2 border-black px-4 xl:p-0 xl:border-none text-black w-full pt-[4.5rem] xl:flex xl:h-min h-screen xl:pt-0 xl:mt-0 xl:items-center xl:justify-end" data-astro-cid-5blmo7yk> <ul class="border-b xl:border-none border-black border-opacity-20 flex flex-col xl:flex-row xl:items-center xl:w-[50%]" data-astro-cid-5blmo7yk> <div class="nav-links border-b xl:border-none border-black border-opacity-20 text-black xl:text-[#151E1E] xl:flex xl:w-full xl:justify-between" data-astro-cid-5blmo7yk> <li class="menu-item" data-astro-cid-5blmo7yk> <a href="/services" class="py-4 border-b xl:border-none border-black border-opacity-20 font-normal w-full flex justify-between xl:justify-normal text-base items-center xl:font-medium" data-astro-cid-5blmo7yk> <h3 data-astro-cid-5blmo7yk>SERVICES</h3> <img class="w-3 xl:hidden xl:ml-2 xl:pt-1" src="/images/arrow-right-solid.svg" alt="Toggle" data-astro-cid-5blmo7yk> </a> </li> <li class="menu-item" data-astro-cid-5blmo7yk> <a href="/projects" class="border-b border-t xl:border-none border-black border-opacity-20 py-4 font-normal w-full flex justify-between xl:justify-normal text-base items-center xl:font-medium" data-astro-cid-5blmo7yk> <h3 data-astro-cid-5blmo7yk>PROJECTS</h3> <img class="w-3 xl:hidden xl:ml-2 xl:pt-1" src="/images/arrow-right-solid.svg" alt="Toggle" data-astro-cid-5blmo7yk> </a> </li> <li class="menu-item" data-astro-cid-5blmo7yk> <a href="/articles" class="py-4 border-b border-t xl:border-none border-black border-opacity-20 font-normal w-full flex justify-between xl:justify-normal text-base items-center xl:font-medium" data-astro-cid-5blmo7yk> <h3 data-astro-cid-5blmo7yk>EDITORIAL</h3> <img class="w-3 xl:hidden xl:ml-2 xl:pt-1" src="/images/arrow-right-solid.svg" alt="Toggle" data-astro-cid-5blmo7yk> </a> </li> <li class="menu-item" data-astro-cid-5blmo7yk> <a href="/about" class="py-4 border-b border-t xl:border-none border-black border-opacity-20 font-normal w-full flex justify-between xl:justify-normal text-base items-center xl:font-medium" data-astro-cid-5blmo7yk> <h3 data-astro-cid-5blmo7yk>ABOUT</h3> <img class="w-3 xl:hidden xl:ml-2 xl:pt-1" src="/images/arrow-right-solid.svg" alt="Toggle" data-astro-cid-5blmo7yk> </a> </li> <li class="menu-item" data-astro-cid-5blmo7yk> <a href="/contact" class="py-4 border-b border-t xl:border-none border-black border-opacity-20 font-normal w-full flex justify-between xl:justify-normal text-base items-center xl:font-medium" data-astro-cid-5blmo7yk> <h3 data-astro-cid-5blmo7yk>CONTACT</h3> <img class="w-3 xl:hidden xl:ml-2 xl:pt-1" src="/images/arrow-right-solid.svg" alt="Toggle" data-astro-cid-5blmo7yk> </a> </li> <li class="menu-item xl:hidden" data-astro-cid-5blmo7yk> <a href="https://www.instagram.com/audiolabs.au/" target="_blank" class="py-4 border-t xl:border-none border-black border-opacity-20 font-normal w-full flex justify-between xl:justify-normal text-base items-center xl:font-medium" data-astro-cid-5blmo7yk> <h3 data-astro-cid-5blmo7yk>INSTAGRAM</h3> <img class="w-3 xl:hidden xl:ml-2 xl:pt-1" src="/images/up-right-from-square-solid.svg" alt="Toggle" data-astro-cid-5blmo7yk> </a> </li> </div> </ul> </nav> </div> </div> </header> `;
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="container-m mx-auto"> <div> <div class="mx-2 border-b border-black pb-6 lg:flex lg:gap-[25%] xl:py-12"> <div class="mb-6 lg:mb-0"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "", "class": "w-[40px]" })} <p class="font-bold text-lg mb-2">AudioLabs</p> <p class="mb-2 w-[150px]">Alphington, Melbourne VIC 3078</p> <div class="flex gap-2"> <a href="https://www.instagram.com/audiolabs.au/" target="_blank"><img src="../images/instagram.svg" alt=""></a> <a href="https://www.facebook.com/ben.collinsgraham" target="_blank"><img src="../images/facebook.svg" alt=""></a> </div> </div> <div class="flex gap-16 lg:gap-32 lg:border-l lg:border-black lg:pl-12"> <div> <h4 class="text-lg font-medium">Pages</h4> <a class="block" href="/">Home</a> <a class="block" href="/services">Services</a> <a class="block" href="/projects">Projects</a> <a class="block" href="/contact">Contact</a> <a class="block" href="/articles">Editorial</a> </div> <div> <h4 class="text-lg font-medium">Services</h4> <p>Recording</p> <p>Audio Editing</p> <p>Audio Mixing</p> <p>Project Solution</p> </div> </div> </div> </div> <div class="mx-2 py-6 border-b border-black lg:flex lg:justify-between"> <div class="lg:w-[35%]"> <p class="text-lg font-medium mb-2">Acknowledgment of Country</p> <p class="mb-3 text-sm">AudioLabs acknowledges the Wurundjeri Woi Wurrung people as the Traditional Custodians of the land on which we operate in Alphington, Melbourne. We pay our respects to their Elders past, present, and emerging.</p> <div class="flex gap-2"> <img class="w-[40px] h-auto" src="../images/aboriginal-flag.png" alt=""> <img class="w-[40px] h-auto" src="../images/torres.png" alt=""> </div> </div> <div class="mt-6 lg:mb-0 lg:content-end"> <p class="text-sm">© COPYRIGHT AUDIOLABS 2024. ALL RIGHTS RESERVED.</p> </div> </div> <div class="mx-2"> <p class="text-sm text-center py-2">Website by <a href="http://www.kurtiskunicreative.com" class="underline" target="_blank">Kurtis</a></p> </div> </footer>`;
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/components/Footer.astro", void 0);

const SITE_TITLE = "AudioLabs";
const HOMEPAGE_ARTICLE_LIMIT = 4;
const ARTICLES_PER_PAGE = 4;

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Default", description = "Default" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="UTF-8"><link rel="icon" href="../images/favicon.ico" type="image/x-icon"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"><title>', " | ", "</title>", '</head> <body class="font-primary border border-black m-1 lg:m-2 bg-customPrimary"> ', " ", " ", `  <!-- <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script>

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"><\/script> -->   <!-- <script  type="module">
      let tl = gsap.timeline()

      tl.to('.fade-in', {
        x: 800
      })
    <\/script> --> </body></html>`])), addAttribute(description, "content"), SITE_TITLE, title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/layouts/Layout.astro", void 0);

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(void 0, options);
}

const $$Astro$2 = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`<!-- Article Card -->${maybeRenderHead()}<div class="article-container border-b border-black mb-6 lg:mb-0 lg:border-b-0" data-astro-cid-di2nlc57> <a${addAttribute("/articles/" + article.slug, "href")} class="lg:border-b-0 pt-4" data-astro-cid-di2nlc57> <img${addAttribute("/images/" + article.data.image, "src")}${addAttribute(article.data.articleNumber + "image", "alt")} data-astro-cid-di2nlc57> <div class="py-4" data-astro-cid-di2nlc57> <p class="text-[#E56134] text-sm font-deco" data-astro-cid-di2nlc57>${formatDate(article.data.pubDate)}</p> <h5 class="text-xl font-medium my-2" data-astro-cid-di2nlc57>${article.data.title}</h5> <p class="font-deco" data-astro-cid-di2nlc57>${article.data.articleNumber}</p> </div> </a></div> `;
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/components/ArticleCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SearchForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<form id="search-form" class="flex items-center mb-4" action="/articles/search"> <label for="search-input" class="sr-only">Search</label> <div class="relative w-full"> <input type="search" id="query" name="query" class=" border border-black text-gray-900 text-sm rounded-sm font-deco focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Search articles..." required> </div> <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-customDark rounded-lg border hover:bg-customPrimary focus:ring-4 focus:outline-none focus:ring-indigo-300"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> </form> <!-- <script>
    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const searchTerm = formData.get("search")?.toString();
      if (!searchTerm || searchTerm.length === 0)
      return;
      const url = new URL("articles/search", window.location.origin);
      url.searchParams.set('q', searchTerm)
      window.location.assign(url.toString());
    })
  <\/script> -->`])), maybeRenderHead());
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/components/SearchForm.astro", void 0);

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/editorial_001.md": () => import('../editorial_001_D1-XntN3.mjs'),"/src/content/blog/editorial_002.md": () => import('../editorial_002_CW0v7qQe.mjs'),"/src/content/blog/editorial_003.md": () => import('../editorial_003_BbCV3BtY.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"studio-iterations-over-10-years":"/src/content/blog/editorial_002.md","evolution-of-my-freelance-journey":"/src/content/blog/editorial_001.md","focal-point-artistic-alias":"/src/content/blog/editorial_003.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/editorial_001.md": () => import('../editorial_001_DRJq2d3A.mjs'),"/src/content/blog/editorial_002.md": () => import('../editorial_002_CBh24NgF.mjs'),"/src/content/blog/editorial_003.md": () => import('../editorial_003_C1plxC7p.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute(
    disablePrevious ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-sm pointer-events-none" : "inline-block border border-black px-3 py-2 hover:bg-customDark hover:text-white rounded-sm",
    "class"
  )}>
Previous
</a> <a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute(
    disableNext ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-sm pointer-events-none" : "inline-block border border-black px-3 py-2 hover:bg-customDark hover:text-white rounded-sm",
    "class"
  )}>
Next
</a> </div>`;
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/components/Pagination.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);
  const articlesForPage = allBlogArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Editorial", "description": "Melbourne\u2019s Premier Audio Production:  Tailored Sound Design, Recording, and Mixing at AudioLabs." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container-m mx-auto"> <div class="mx-2 border-b border-black"> <h1 class="text-3xl font-medium my-3 lg:text-5xl lg:my-6">↳EDITORIAL</h1> </div> </section> <section class="container-m mx-auto py-4 px-2"> <div class="border-b border-black  mb-6"> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <div class="lg:grid lg:grid-cols-4 lg:border-b lg:border-black"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> <div class="mb-6"> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} </div> </div> </section> ` })}`;
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/index.astro", void 0);

const $$file = "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/index.astro";
const $$url = "/articles";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SearchForm as $, HOMEPAGE_ARTICLE_LIMIT as H, $$ArticleCard as a, $$Layout as b, formatDate as f, getCollection as g, index as i };
