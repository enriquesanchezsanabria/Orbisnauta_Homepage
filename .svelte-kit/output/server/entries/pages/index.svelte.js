import { c as create_ssr_component, v as validate_component } from "../../chunks/index-0fac4578.js";
import { M as MainBanner, S as SeoBanner, I as IndustriesBanner, a as StackBanner, P as PipelineBanner, b as ServicesBanner } from "../../chunks/ServicesBanner-80648796.js";
import { C as CtaBanner } from "../../chunks/CtaBanner-761566cd.js";
import { M as MOCK_DATA } from "../../chunks/data-56dc5d00.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(MainBanner, "MainBanner").$$render($$result, { mainbannerData: MOCK_DATA.MAINBANNER_DATA }, {}, {})}
${validate_component(SeoBanner, "SeoBanner").$$render($$result, { seobannerData: MOCK_DATA.SEOBANNER_DATA }, {}, {})}
${validate_component(IndustriesBanner, "IndustriesBanner").$$render($$result, {
    industriesbannerData: MOCK_DATA.INDUSTRIESBANNER_DATA
  }, {}, {})}
${validate_component(StackBanner, "StackBanner").$$render($$result, { stackbannerData: MOCK_DATA.STACKBANNER_DATA }, {}, {})}
${validate_component(PipelineBanner, "PipelineBanner").$$render($$result, {
    pipelinebannerData: MOCK_DATA.PIPELINEBANNER_DATA
  }, {}, {})}
${validate_component(ServicesBanner, "ServicesBanner").$$render($$result, {
    servicesbannerData: MOCK_DATA.SERVICESBANNER_DATA
  }, {}, {})} 
${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctabannerData: MOCK_DATA.CTABANNER_DATA }, {}, {})}`;
});
export { Routes as default };
