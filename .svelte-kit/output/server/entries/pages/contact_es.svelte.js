import { c as create_ssr_component, v as validate_component } from "../../chunks/index-59524ad9.js";
import { C as CtaBanner } from "../../chunks/CtaBanner-7f9a27cb.js";
import { M as MOCK_DATA } from "../../chunks/data_es-092ff948.js";
const Contact_es = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `${$$result.title = `<title>Contacta con Nosotros</title>`, ""}<link rel="${"canonical"}" href="${"https://www.orbisnauta.com/contact_es"}" data-svelte="svelte-1sbsdpw"><html lang="${"es"}" data-svelte="svelte-1sbsdpw"></html>`, ""}

${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctabannerData: MOCK_DATA.CTABANNER_DATA_ES }, {}, {})}`;
});
export { Contact_es as default };
