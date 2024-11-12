import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_zIuGBAc5.mjs';
import 'kleur/colors';
import 'clsx';

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

export { $$SearchForm as $ };
