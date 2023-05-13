import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from "./index-59524ad9.js";
var ServicesMainBanner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(min-width: 1921px){#title-content-wrapper.svelte-103dxbv{max-width:50rem}.bi.svelte-103dxbv{font-size:80px}}@media(max-width: 1920px) and (min-width: 1400px){#title-content-wrapper.svelte-103dxbv{max-width:50rem}.bi.svelte-103dxbv{font-size:76px}}@media(max-width: 1399px) and (min-width: 992px){#title-content-wrapper.svelte-103dxbv{max-width:50rem}.bi.svelte-103dxbv{font-size:60px}}@media(max-width: 991px) and (min-width: 768px){.bi.svelte-103dxbv{font-size:55px}}@media(max-width: 767px){.main-text-post.svelte-103dxbv{font-size:1.2rem}.bi.svelte-103dxbv{font-size:45px}}",
  map: null
};
const ServicesMainBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { servicesmainbannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, POST_HEADING } = servicesmainbannerData;
  if ($$props.servicesmainbannerData === void 0 && $$bindings.servicesmainbannerData && servicesmainbannerData !== void 0)
    $$bindings.servicesmainbannerData(servicesmainbannerData);
  $$result.css.add(css$1);
  return `



<section id="${"servicesmainebanner"}" class="${"bg-white d-flex align-items-center"}"><div class="${"container-fluid my-4"}"><div class="${"row section-body justify-content-center"}"><div id="${"title-content-wrapper"}" class="${"col-12 col-sm-11 col-md-10 col-xl-9 col-xxl-6 px-4 svelte-103dxbv"}"><p class="${"main-text-main fw-bold text-black my-4 display-1 text-center"}">${escape(HEADING)}</p>

                <h1 class="${"main-text-post text-black my-4 text-center h3 svelte-103dxbv"}">${escape(DESCRIPTION)}</h1>

                <p class="${"main-text-main text-black my-3 display-4 text-center"}">${escape(POST_HEADING)}</p>

                <div class="${"text-center"}"><i class="${"bi bi-arrow-down-short svelte-103dxbv"}"></i></div></div></div></div>
</section>`;
});
var ServicesIndividualBanner_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-q2qd1x.svelte-q2qd1x{scroll-margin-top:96px}.container-fluid.svelte-q2qd1x.svelte-q2qd1x{border-style:solid;border-width:2px;border-color:#deed0a}.main-text-sub.svelte-q2qd1x.svelte-q2qd1x{color:#deed0a !important;font-weight:bold}.text-titles.svelte-q2qd1x.svelte-q2qd1x{color:#deed0a !important}img.svelte-q2qd1x.svelte-q2qd1x{border-radius:150px;border-style:solid;border-width:6px;border-color:#deed0a}.main-text-post.svelte-q2qd1x.svelte-q2qd1x{text-align:justify}.btn-primary.svelte-q2qd1x.svelte-q2qd1x{border-style:solid;border-color:rgb(0, 0, 0);background-color:#deed0a;color:black;color:rgb(0, 0, 0);border-radius:150px;overflow:hidden;white-space:nowrap;border-width:2px}.btn-primary.svelte-q2qd1x.svelte-q2qd1x:hover{background-color:rgb(0, 0, 0) !important;color:#deed0a !important;text-decoration:none !important;border-color:#deed0a}.btn-primary.svelte-q2qd1x:hover .bi.svelte-q2qd1x{display:inline-block;transform:translate(5px,0px)}li.svelte-q2qd1x.svelte-q2qd1x{list-style-type:none}@media(min-width: 1921px){#text-content-wrapper.svelte-q2qd1x.svelte-q2qd1x{max-width:60rem}#image-content-wrapper.svelte-q2qd1x.svelte-q2qd1x{max-width:60rem}.btn-primary.svelte-q2qd1x.svelte-q2qd1x{max-width:19rem;min-width:15rem}}@media(max-width: 1920px) and (min-width: 1400px){.btn-primary.svelte-q2qd1x.svelte-q2qd1x{max-width:18rem}img.svelte-q2qd1x.svelte-q2qd1x{border-radius:100px;width:200em}}@media(max-width: 1399px) and (min-width: 992px){#image-content-wrapper-left.svelte-q2qd1x.svelte-q2qd1x{display:none}#image-content-wrapper-right.svelte-q2qd1x.svelte-q2qd1x{display:none}.btn-primary.svelte-q2qd1x.svelte-q2qd1x{min-width:13rem}}@media(max-width: 991px) and (min-width: 768px){#image-content-wrapper-left.svelte-q2qd1x.svelte-q2qd1x{display:none}#image-content-wrapper-right.svelte-q2qd1x.svelte-q2qd1x{display:none}.main-text-post.svelte-q2qd1x.svelte-q2qd1x{text-align:center}.btn-primary.svelte-q2qd1x.svelte-q2qd1x{max-width:18rem}}@media(max-width: 767px) and (min-width: 576px){#image-content-wrapper-left.svelte-q2qd1x.svelte-q2qd1x{display:none}#image-content-wrapper-right.svelte-q2qd1x.svelte-q2qd1x{display:none}.main-text-post.svelte-q2qd1x.svelte-q2qd1x{text-align:center}.btn-primary.svelte-q2qd1x.svelte-q2qd1x{max-width:18rem}}@media(max-width: 575px) and (min-width: 377px){#image-content-wrapper-left.svelte-q2qd1x.svelte-q2qd1x{display:none}#image-content-wrapper-right.svelte-q2qd1x.svelte-q2qd1x{display:none}.main-text-post.svelte-q2qd1x.svelte-q2qd1x{text-align:center}.btn-primary.svelte-q2qd1x.svelte-q2qd1x{max-width:18rem}.text-inside-button.svelte-q2qd1x.svelte-q2qd1x{font-size:1rem}}@media(max-width: 376px){#image-content-wrapper-left.svelte-q2qd1x.svelte-q2qd1x{display:none}#image-content-wrapper-right.svelte-q2qd1x.svelte-q2qd1x{display:none}.main-text-post.svelte-q2qd1x.svelte-q2qd1x{text-align:center}.main-text-main.svelte-q2qd1x.svelte-q2qd1x{font-size:1.5rem}}",
  map: null
};
const ServicesIndividualBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { servicesindividualbannerData = {} } = $$props;
  const { SHOW_CTA, TEXT_SIDE, SERVICE_QUANTITY, SERVICE_ID, IMG_SRC_SERVICES, SERVICE_HEADING, SERVICE_SUBHEADING, SERVICE_TITLE_1, SERVICE_DESCRIPTION_1, SERVICE_TITLE_2, SERVICE_DESCRIPTION_2, SERVICE_TITLE_3, SERVICE_DESCRIPTION_3, SERVICE_TITLE_4, SERVICE_DESCRIPTION_4, PORTFOLIO_BUTTON, SERVICES_INDIVIDUAL_LANG } = servicesindividualbannerData;
  const IMG_SERVICE_TITLES = [SERVICE_TITLE_1, SERVICE_TITLE_2, SERVICE_TITLE_3, SERVICE_TITLE_4];
  const IMG_SERVICE_DESCRIPTIONS = [
    SERVICE_DESCRIPTION_1,
    SERVICE_DESCRIPTION_2,
    SERVICE_DESCRIPTION_3,
    SERVICE_DESCRIPTION_4
  ];
  if ($$props.servicesindividualbannerData === void 0 && $$bindings.servicesindividualbannerData && servicesindividualbannerData !== void 0)
    $$bindings.servicesindividualbannerData(servicesindividualbannerData);
  $$result.css.add(css);
  return `

    
<section${add_attribute("id", SERVICE_ID, 0)} class="${"bg-black svelte-q2qd1x"}"><div class="${"container-fluid svelte-q2qd1x"}"><div class="${"row justify-content-center my-4 my-md-5"}"><div class="${"d-flex justify-content-center"}">${TEXT_SIDE == 1 ? `
                

                
                <div id="${"image-content-wrapper-left"}" class="${"px-4 my-auto svelte-q2qd1x"}"><img${add_attribute("src", IMG_SRC_SERVICES, 0)} alt="${""}" class="${"img-fluid svelte-q2qd1x"}"></div>` : ``}

                
                <div id="${"text-content-wrapper"}" class="${"px-4 my-auto svelte-q2qd1x"}"><h2 class="${"main-text-sub text-center my-2 my-lg-3 my-xxl-3 display-3 svelte-q2qd1x"}">${escape(SERVICE_HEADING)}</h2>
                    
                    <h4 class="${"main-text-main text-center text-light my-3 my-lg-3 my-xxl-3 display-5 svelte-q2qd1x"}">${escape(SERVICE_SUBHEADING)}</h4>
                
                    <h3 class="${"main-text-post text-light my-3 my-lg-3 my-xxl-4 svelte-q2qd1x"}">${SERVICE_QUANTITY > 1 ? `${each(Array(SERVICE_QUANTITY), (_, servicescounter) => {
    return `<li class="${"my-3 h3 svelte-q2qd1x"}"><strong class="${"text-titles svelte-q2qd1x"}">${escape(IMG_SERVICE_TITLES[servicescounter])}</strong>
                                <span class="${"h4"}">${escape(IMG_SERVICE_DESCRIPTIONS[servicescounter])}</span>
                            </li>`;
  })}` : `${escape(SERVICE_DESCRIPTION_1)}`}</h3>
                    
                    ${SHOW_CTA == 1 ? `<div class="${"row justify-content-center btn-section"}"><div class="${"col-9 col-sm-9 col-md-5 col-lg-5 my-2 my-sm-2"}" align="${"center"}">${`<a class="${"portfolio-button btn-primary nav-link fw-bold py-4 px-2 svelte-q2qd1x"}" href="${"/reel_es"}"><p class="${"text-inside-button my-0 h4 fw-bold svelte-q2qd1x"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}">${escape(PORTFOLIO_BUTTON)} <i class="${"bi bi-arrow-right-short svelte-q2qd1x"}"></i></p></a>`}</div></div>` : ``}</div>
           

                ${TEXT_SIDE == 0 ? `
                
                
                
                    <div id="${"image-content-wrapper-right"}" class="${"px-4 my-auto svelte-q2qd1x"}"><img${add_attribute("src", IMG_SRC_SERVICES, 0)} alt="${""}" class="${"img-fluid svelte-q2qd1x"}"></div>` : ``}</div></div></div>
  </section>`;
});
export { ServicesMainBanner as S, ServicesIndividualBanner as a };
