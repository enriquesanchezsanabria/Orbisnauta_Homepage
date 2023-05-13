import { c as create_ssr_component, v as validate_component } from "../../chunks/index-59524ad9.js";
import { M as MainBanner, S as SeoBanner, I as IndustriesBanner, a as StackBanner, P as PipelineBanner } from "../../chunks/PipelineBanner-87c80ecf.js";
import { C as CtaSmallBanner } from "../../chunks/CtaSmallBanner-1048154b.js";
import { M as MOCK_DATA } from "../../chunks/data_es-092ff948.js";
const Es = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `${$$result.title = `<title>Agencia de Realidad Virtual y Realidad Aumentada</title>`, ""}<link rel="${"canonical"}" href="${"https://www.orbisnauta.com/es"}" data-svelte="svelte-1v2oz6g"><html lang="${"es"}" data-svelte="svelte-1v2oz6g"></html>`, ""}

${validate_component(MainBanner, "MainBanner").$$render($$result, { mainbannerData: MOCK_DATA.MAINBANNER_DATA_ES }, {}, {})}
${validate_component(SeoBanner, "SeoBanner").$$render($$result, { seobannerData: MOCK_DATA.SEOBANNER_DATA_ES }, {}, {})}
${validate_component(IndustriesBanner, "IndustriesBanner").$$render($$result, {
    industriesbannerData: MOCK_DATA.INDUSTRIESBANNER_DATA_ES
  }, {}, {})}
${validate_component(StackBanner, "StackBanner").$$render($$result, {
    stackbannerData: MOCK_DATA.STACKBANNER_DATA_ES
  }, {}, {})}
${validate_component(PipelineBanner, "PipelineBanner").$$render($$result, {
    pipelinebannerData: MOCK_DATA.PIPELINEBANNER_DATA_ES
  }, {}, {})}
${validate_component(CtaSmallBanner, "CtaSmallBanner").$$render($$result, {
    ctasmallbannerData: MOCK_DATA.CTASMALLBANNER_DATA_ES
  }, {}, {})}`;
});
export { Es as default };
