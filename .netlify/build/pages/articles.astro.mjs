/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_zIuGBAc5.mjs';
import 'kleur/colors';
import { A as ARTICLES_PER_PAGE, $ as $$Layout } from '../chunks/Layout_CI2OQrAz.mjs';
import { g as getCollection } from '../chunks/_astro_content_BNiQYgqR.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_CWGgn_8v.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_Dy6g-77a.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
