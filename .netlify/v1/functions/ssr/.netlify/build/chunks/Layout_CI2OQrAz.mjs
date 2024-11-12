import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, h as renderSlot, i as renderHead, d as addAttribute, b as createAstro } from './astro/server_zIuGBAc5.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_xTy4fIHA.mjs';
/* empty css                         */

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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Default", description = "Default" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><link rel="icon" href="../images/favicon.ico" type="image/x-icon"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"><title>', " | ", "</title>", '</head> <body class="font-primary border border-black m-1 lg:m-2 bg-customPrimary"> ', " ", " ", `      <script type="module">
      let tl = gsap.timeline()

      tl.to('.fade-in', {
        x: 800
      })
    <\/script> </body></html>`])), addAttribute(description, "content"), SITE_TITLE, title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/layouts/Layout.astro", void 0);

export { $$Layout as $, ARTICLES_PER_PAGE as A, HOMEPAGE_ARTICLE_LIMIT as H };
