import { c as create_ssr_component, v as validate_component } from "../../chunks/index-0fac4578.js";
import { C as CtaBanner } from "../../chunks/CtaBanner-5b0933dc.js";
import { M as MOCK_DATA } from "../../chunks/data-56dc5d00.js";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctabannerData: MOCK_DATA.CTABANNER_DATA }, {}, {})}`;
});
export { Contact as default };
