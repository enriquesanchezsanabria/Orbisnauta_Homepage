import { c as create_ssr_component, v as validate_component } from "../../chunks/index-59524ad9.js";
import { M as MainBanner, S as SeoBanner, I as IndustriesBanner, a as StackBanner, P as PipelineBanner } from "../../chunks/PipelineBanner-2fa0954a.js";
import { C as CtaSmallBanner } from "../../chunks/CtaSmallBanner-7de4ba41.js";
import { M as MOCK_DATA } from "../../chunks/data-a61deb9a.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `${$$result.title = `<title>Virtual Reality and Augmented Reality Agency</title>`, ""}<link rel="${"canonical"}" href="${"https://www.orbisnauta.com"}" data-svelte="svelte-1hx3bny"><html lang="${"en"}" data-svelte="svelte-1hx3bny"></html>`, ""}

${validate_component(MainBanner, "MainBanner").$$render($$result, { mainbannerData: MOCK_DATA.MAINBANNER_DATA }, {}, {})}
${validate_component(SeoBanner, "SeoBanner").$$render($$result, { seobannerData: MOCK_DATA.SEOBANNER_DATA }, {}, {})}
${validate_component(IndustriesBanner, "IndustriesBanner").$$render($$result, {
    industriesbannerData: MOCK_DATA.INDUSTRIESBANNER_DATA
  }, {}, {})}
${validate_component(StackBanner, "StackBanner").$$render($$result, { stackbannerData: MOCK_DATA.STACKBANNER_DATA }, {}, {})}
${validate_component(PipelineBanner, "PipelineBanner").$$render($$result, {
    pipelinebannerData: MOCK_DATA.PIPELINEBANNER_DATA
  }, {}, {})}
${validate_component(CtaSmallBanner, "CtaSmallBanner").$$render($$result, {
    ctasmallbannerData: MOCK_DATA.CTASMALLBANNER_DATA
  }, {}, {})}`;
});
export { Routes as default };
