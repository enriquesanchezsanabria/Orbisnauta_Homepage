import { c as create_ssr_component, v as validate_component } from "../../chunks/index-59524ad9.js";
import { C as CtaBanner } from "../../chunks/CtaBanner-b740f126.js";
import { M as MOCK_DATA } from "../../chunks/data-a61deb9a.js";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `${$$result.title = `<title>Contact Us</title>`, ""}<link rel="${"canonical"}" href="${"https://www.orbisnauta.com/contact"}" data-svelte="svelte-1uvboq0"><html lang="${"en"}" data-svelte="svelte-1uvboq0"></html>`, ""}

${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctabannerData: MOCK_DATA.CTABANNER_DATA }, {}, {})}`;
});
export { Contact as default };
