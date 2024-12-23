import { c as create_ssr_component, v as validate_component } from "../../chunks/index-59524ad9.js";
import { S as ServicesMainBanner, a as ServicesIndividualBanner } from "../../chunks/ServicesIndividualBanner-423e7353.js";
import { C as CtaSmallBanner } from "../../chunks/CtaSmallBanner-7de4ba41.js";
import { M as MOCK_DATA } from "../../chunks/data-a61deb9a.js";
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `${$$result.title = `<title>Virtual Reality Services</title>`, ""}<link rel="${"canonical"}" href="${"https://www.orbisnauta.com/services"}" data-svelte="svelte-sxjc0b"><html lang="${"en"}" data-svelte="svelte-sxjc0b"></html>`, ""}

${validate_component(ServicesMainBanner, "ServicesMainBanner").$$render($$result, {
    servicesmainbannerData: MOCK_DATA.SERVICESMAIN_BANNER_DATA
  }, {}, {})}
${validate_component(ServicesIndividualBanner, "ServicesIndividualBanner").$$render($$result, {
    servicesindividualbannerData: MOCK_DATA.SERVICESINDIVIDUAL_1_BANNER_DATA
  }, {}, {})}
${validate_component(ServicesIndividualBanner, "ServicesIndividualBanner").$$render($$result, {
    servicesindividualbannerData: MOCK_DATA.SERVICESINDIVIDUAL_2_BANNER_DATA
  }, {}, {})}
${validate_component(ServicesIndividualBanner, "ServicesIndividualBanner").$$render($$result, {
    servicesindividualbannerData: MOCK_DATA.SERVICESINDIVIDUAL_3_BANNER_DATA
  }, {}, {})}
${validate_component(ServicesIndividualBanner, "ServicesIndividualBanner").$$render($$result, {
    servicesindividualbannerData: MOCK_DATA.SERVICESINDIVIDUAL_4_BANNER_DATA
  }, {}, {})}
${validate_component(ServicesIndividualBanner, "ServicesIndividualBanner").$$render($$result, {
    servicesindividualbannerData: MOCK_DATA.SERVICESINDIVIDUAL_5_BANNER_DATA
  }, {}, {})}

${validate_component(CtaSmallBanner, "CtaSmallBanner").$$render($$result, {
    ctasmallbannerData: MOCK_DATA.CTASMALLBANNER_DATA
  }, {}, {})}`;
});
export { Services as default };
