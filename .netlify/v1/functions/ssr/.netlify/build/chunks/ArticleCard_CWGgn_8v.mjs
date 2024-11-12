import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro } from './astro/server_zIuGBAc5.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from './_astro_content_BNiQYgqR.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`<!-- Article Card -->${maybeRenderHead()}<div class="article-container border-b border-black mb-6 lg:mb-0 lg:border-b-0" data-astro-cid-di2nlc57> <a${addAttribute("/articles/" + article.slug, "href")} class="lg:border-b-0 pt-4" data-astro-cid-di2nlc57> <img${addAttribute("/images/" + article.data.image, "src")}${addAttribute(article.data.articleNumber + "image", "alt")} data-astro-cid-di2nlc57> <div class="py-4" data-astro-cid-di2nlc57> <p class="text-[#E56134] text-sm font-deco" data-astro-cid-di2nlc57>${formatDate(article.data.pubDate)}</p> <h5 class="text-xl font-medium my-2" data-astro-cid-di2nlc57>${article.data.title}</h5> <p class="font-deco" data-astro-cid-di2nlc57>${article.data.articleNumber}</p> </div> </a></div> `;
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
