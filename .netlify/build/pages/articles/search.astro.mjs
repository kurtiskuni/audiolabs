/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_zIuGBAc5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CI2OQrAz.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_CWGgn_8v.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_Dy6g-77a.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BNiQYgqR.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate(_a || (_a = __template(["", " <!-- <script>\n    const search = document.querySelector('#search')\n<\/script> -->"])), renderComponent($$result, "Layout", $$Layout, { "title": "Search Results", "description": "Melbourne\u2019s Premier Audio Production:  Tailored Sound Design, Recording, and Mixing at AudioLabs." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container-m mx-auto"> <div class="mx-2 border-b border-black"> <h1 class="text-3xl font-medium my-3 lg:text-5xl lg:my-6">↳All Articles</h1> </div> </section> <section class="container-m mx-auto mt-2 px-2"> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </section> <div class="container mx-auto"> <div class="mx-2 border-b border-black"> <h1 class="text-2xl pb-3 mt-6">Results For <strong>${query}</strong></h1> </div> </div> <section class="container-m mx-auto py-4  mb-6 lg:mb-0 lg:pb-0"> <div class="mx-2 border-b border-black lg:border-b-0"> <div class="lg:grid lg:grid-cols-4 lg:border-b lg:border-black"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </section> ` }));
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/search.astro", void 0);

const $$file = "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/pages/articles/search.astro";
const $$url = "/articles/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
