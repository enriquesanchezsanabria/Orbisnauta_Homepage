import { c as create_ssr_component, e as escape } from "./index-59524ad9.js";
var CtaSmallBanner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".heading-12.svelte-48dmjo.svelte-48dmjo{color:#deed0a}.btn-primary.svelte-48dmjo.svelte-48dmjo{border-style:solid;border-color:rgb(0, 0, 0);background-color:#deed0a;color:black;color:rgb(0, 0, 0);border-radius:150px;overflow:hidden;white-space:nowrap;border-width:2px}.btn-primary.svelte-48dmjo.svelte-48dmjo:hover{background-color:rgb(0, 0, 0) !important;color:#deed0a !important;text-decoration:none !important;border-color:#deed0a}.btn-primary.svelte-48dmjo:hover .bi.svelte-48dmjo{display:inline-block;transform:translate(5px,0px)}.btn-primary.svelte-48dmjo.svelte-48dmjo:focus,.btn-primary.svelte-48dmjo.svelte-48dmjo:active{outline:none !important;box-shadow:none}.main-text-sub.svelte-48dmjo.svelte-48dmjo{color:#deed0a}@media(min-width: 1921px){.contact-button-row.svelte-48dmjo.svelte-48dmjo{max-width:15rem }}@media(max-width: 1920px) and (min-width: 1400px){#content-wrapper.svelte-48dmjo.svelte-48dmjo{min-width:60rem}.contact-button-row.svelte-48dmjo.svelte-48dmjo{max-width:15rem }}@media(max-width: 1399px) and (min-width: 992px){#content-wrapper.svelte-48dmjo.svelte-48dmjo{min-width:50rem}.contact-button-row.svelte-48dmjo.svelte-48dmjo{max-width:15rem }}@media(max-width: 991px) and (min-width: 768px){#content-wrapper.svelte-48dmjo.svelte-48dmjo{min-width:45rem}.contact-button-row.svelte-48dmjo.svelte-48dmjo{max-width:15rem }}@media(max-width: 767px){#content-wrapper.svelte-48dmjo.svelte-48dmjo{max-width:50rem}.contact-button-row.svelte-48dmjo.svelte-48dmjo{max-width:13rem }.main-text-main.svelte-48dmjo.svelte-48dmjo{font-size:2.3rem}}",
  map: null
};
const CtaSmallBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ctasmallbannerData = {} } = $$props;
  const { SUB_HEADING, HEADING_1, HEADING_12, HEADING_13, HEADING_14, CTASMALLCONTACTBUTTON, CTASMALLBANNER_LANG } = ctasmallbannerData;
  if ($$props.ctasmallbannerData === void 0 && $$bindings.ctasmallbannerData && ctasmallbannerData !== void 0)
    $$bindings.ctasmallbannerData(ctasmallbannerData);
  $$result.css.add(css);
  return `


<section id="${"ctasmallbanner"}" class="${"bg-black d-flex align-items-center"}"><div class="${"container-fluid "}"><div class="${"row justify-content-center my-4 py-5 mx-sm-3"}"><div id="${"content-wrapper"}" class="${"col-12 col-md-11 col-lg-12 col-xl-10 col-xxl-7 svelte-48dmjo"}" align="${"center"}"><div class="${"col-12 my-2"}"><p class="${"main-text-sub my-0 fw-bold h3 text-center svelte-48dmjo"}" align="${"center"}">${escape(SUB_HEADING)}</p></div>

                <div class="${"col-12"}"><h2 class="${"main-text-main text-white my-0 my-xxl-3 pb-xxl-2 display-3 lh-base svelte-48dmjo"}">${escape(HEADING_1)}
                        <br>
                        <span class="${"fw-bold heading-12 svelte-48dmjo"}">${escape(HEADING_12)}</span>
                        <br>
                        ${escape(HEADING_13)}<span class="${"fw-bold"}">${escape(HEADING_14)}</span>.
                    </h2></div>

                <div class="${"row contact-button-row justify-content-center my-4 my-md-3 my-lg-4 mt-xxl-4 svelte-48dmjo"}"><div class="${"col-12"}">${`<a class="${"btn-primary nav-link py-4 px-2 py-md-4 px-md-2 svelte-48dmjo"}" href="${"/contact_es"}"><p class="${"text-inside-button my-0 h4 fw-bold"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}">${escape(CTASMALLCONTACTBUTTON)} <i class="${"bi bi-arrow-right-short svelte-48dmjo"}"></i></p></a>`}</div></div></div></div></div>
</section>`;
});
export { CtaSmallBanner as C };
