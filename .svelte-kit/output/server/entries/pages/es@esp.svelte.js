import { c as create_ssr_component, v as validate_component } from "../../chunks/index-0fac4578.js";
import { M as MainBanner, S as SeoBanner, I as IndustriesBanner, a as StackBanner, P as PipelineBanner, b as ServicesBanner } from "../../chunks/ServicesBanner-ada2c959.js";
import { C as CtaBanner } from "../../chunks/CtaBanner-5b0933dc.js";
import { M as MOCK_DATA } from "../../chunks/data_es-dd24b82e.js";
const Es_esp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


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
${validate_component(ServicesBanner, "ServicesBanner").$$render($$result, {
    servicesbannerData: MOCK_DATA.SERVICESBANNER_DATA_ES
  }, {}, {})} 
${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctabannerData: MOCK_DATA.CTABANNER_DATA_ES }, {}, {})}`;
});
export { Es_esp as default };
