import { c as create_ssr_component, e as escape, a as add_attribute } from "./index-59524ad9.js";
var MainBanner_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".main-text-sub.svelte-4j0a9f{font-weight:bold;color:#deed0a !important;background-color:black;border-radius:25px;text-align:center;margin-left:auto;margin-right:auto;max-width:27rem}.main-text-main.svelte-4j0a9f{font-weight:bold;text-align:center;margin-left:auto;margin-right:auto}.main-text-post.svelte-4j0a9f{text-align:center}@media(min-width: 1921px){.main-text-post.svelte-4j0a9f{text-align:justify}.main-text-main.svelte-4j0a9f{max-width:50rem}#content-wrapper.svelte-4j0a9f{max-width:60rem}.main-text-post.svelte-4j0a9f{margin-left:auto;margin-right:auto;max-width:50rem}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-post.svelte-4j0a9f{text-align:justify}.main-text-main.svelte-4j0a9f{max-width:46rem}.main-text-post.svelte-4j0a9f{margin-left:auto;margin-right:auto;max-width:46rem}}@media(max-width: 1399px) and (min-width: 992px){.main-text-sub.svelte-4j0a9f{max-width:25rem;font-size:1.4rem}.main-text-main.svelte-4j0a9f{max-width:45rem;font-size:3.5rem}.main-text-post.svelte-4j0a9f{text-align:justify;font-size:1.4rem;margin-left:auto;margin-right:auto;max-width:31rem}}@media(max-width: 991px) and (min-width: 768px){.main-text-sub.svelte-4j0a9f{max-width:27rem;font-size:1.4rem}.main-text-main.svelte-4j0a9f{max-width:55rem;font-size:3rem}.main-text-post.svelte-4j0a9f{font-size:1.4rem;margin-left:auto;margin-right:auto;max-width:31rem}}@media(max-width: 767px) and (min-width: 576px){.main-text-sub.svelte-4j0a9f{margin-left:auto;margin-right:auto;max-width:23rem;font-size:1.3rem}.main-text-main.svelte-4j0a9f{min-width:27rem;font-size:2.5rem}.main-text-post.svelte-4j0a9f{font-size:1.4rem;margin-left:auto;margin-right:auto;max-width:27rem}}@media(max-width: 575px) and (min-width: 377px){.main-text-sub.svelte-4j0a9f{max-width:17rem;margin-left:auto;margin-right:auto;font-size:1rem}.main-text-main.svelte-4j0a9f{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}.main-text-post.svelte-4j0a9f{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem}#mainbanner.svelte-4j0a9f{height:calc(100vh - 96px)}}@media(max-width: 376px){.main-text-sub.svelte-4j0a9f{max-width:17rem;margin-left:auto;margin-right:auto;font-size:1rem}.main-text-main.svelte-4j0a9f{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}.main-text-post.svelte-4j0a9f{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem}#mainbanner.svelte-4j0a9f{height:calc(100vh - 96px)}}",
  map: null
};
const MainBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mainbannerData = {} } = $$props;
  const { PREHEADING, HEADING_1, HEADING_2, DESCRIPTION_1, DESCRIPTION_2_STRONG, DESCRIPTION_3, DESCRIPTION_4_STRONG, DESCRIPTION_5, DESCRIPTION_6_STRONG, DESCRIPTION_7 } = mainbannerData;
  if ($$props.mainbannerData === void 0 && $$bindings.mainbannerData && mainbannerData !== void 0)
    $$bindings.mainbannerData(mainbannerData);
  $$result.css.add(css$4);
  return `


<section id="${"mainbanner"}" class="${"bg-white d-flex align-items-center svelte-4j0a9f"}"><div class="${"container-fluid my-sm-5"}"><div class="${"row justify-content-center"}"><div id="${"content-wrapper"}" class="${"col-12 px-0 col-sm-9 col-md-8 col-lg-8 mx-md-5 svelte-4j0a9f"}"><div class="${"col-12 main-text-background px-2"}"><p class="${"main-text-sub my-0 px-md-4 py-2 h4 svelte-4j0a9f"}">${escape(PREHEADING)}</p></div>

                <div class="${"col-12 my-2 mb-3 mb-md-3"}"><h1 class="${"main-text-main text-black display-1 my-4 svelte-4j0a9f"}">${escape(HEADING_1)}
                        <br>
                        ${escape(HEADING_2)}</h1></div>

                <div class="${"col-12"}"><h2 class="${"main-text-post text-black px-2 lh-base svelte-4j0a9f"}">${escape(DESCRIPTION_1)}
                        <strong>${escape(DESCRIPTION_2_STRONG)}</strong>
                        ${escape(DESCRIPTION_3)}
                        <strong>${escape(DESCRIPTION_4_STRONG)}</strong>
                        ${escape(DESCRIPTION_5)}
                        <strong>${escape(DESCRIPTION_6_STRONG)}</strong>
                        ${escape(DESCRIPTION_7)}</h2></div></div></div></div>
</section>`;
});
var SeoBanner_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-d3t5s6.svelte-d3t5s6{scroll-margin-top:96px}.btn-primary.svelte-d3t5s6.svelte-d3t5s6{border-style:solid;border-color:rgb(0, 0, 0);background-color:#deed0a;color:black;color:rgb(0, 0, 0);border-radius:150px;overflow:hidden;white-space:nowrap;border-width:2px}.btn-primary.svelte-d3t5s6.svelte-d3t5s6:hover{background-color:rgb(0, 0, 0) !important;color:#deed0a !important;text-decoration:none !important;border-color:#deed0a}.btn-primary.svelte-d3t5s6:hover .bi.svelte-d3t5s6{display:inline-block;transform:translate(5px,0px)}.btn-primary.svelte-d3t5s6.svelte-d3t5s6:focus,.btn-primary.svelte-d3t5s6.svelte-d3t5s6:active{outline:none !important;box-shadow:none}.main-text-sub.svelte-d3t5s6.svelte-d3t5s6{color:#deed0a !important}.main-text-post.svelte-d3t5s6.svelte-d3t5s6{text-align:center}@media(min-width: 1921px){img.svelte-d3t5s6.svelte-d3t5s6{min-width:40em}#image-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{text-align:center !important}#text-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{max-width:50rem}#image-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{max-width:50rem}.main-text-post.svelte-d3t5s6.svelte-d3t5s6{text-align:justify}}@media(max-width: 1920px) and (min-width: 1400px){img.svelte-d3t5s6.svelte-d3t5s6{min-width:30em}#image-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{max-width:60rem;text-align:center !important}.main-text-post.svelte-d3t5s6.svelte-d3t5s6{text-align:justify}.btn-primary.svelte-d3t5s6.svelte-d3t5s6{max-width:18rem}}@media(max-width: 1399px) and (min-width: 992px){.main-text-post.svelte-d3t5s6.svelte-d3t5s6{text-align:justify}.btn-primary.svelte-d3t5s6.svelte-d3t5s6{min-width:13rem}.text-inside-button.svelte-d3t5s6.svelte-d3t5s6{font-size:1.4rem}}@media(max-width: 991px) and (min-width: 768px){#image-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{display:none}.main-text-post.svelte-d3t5s6.svelte-d3t5s6{text-align:left}.btn-primary.svelte-d3t5s6.svelte-d3t5s6{max-width:18rem}}@media(max-width: 767px) and (min-width: 576px){#image-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{display:none}.main-text-post.svelte-d3t5s6.svelte-d3t5s6{text-align:left}.btn-primary.svelte-d3t5s6.svelte-d3t5s6{max-width:18rem}}@media(max-width: 575px) and (min-width: 377px){#image-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{display:none}.btn-primary.svelte-d3t5s6.svelte-d3t5s6{max-width:18rem}.text-inside-button.svelte-d3t5s6.svelte-d3t5s6{font-size:1rem}.main-text-sub.svelte-d3t5s6.svelte-d3t5s6{max-width:19rem;margin-left:auto;margin-right:auto;font-size:1rem}.main-text-main.svelte-d3t5s6.svelte-d3t5s6{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}.main-text-post.svelte-d3t5s6.svelte-d3t5s6{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem}}@media(max-width: 376px){#image-content-wrapper.svelte-d3t5s6.svelte-d3t5s6{display:none}.text-inside-button.svelte-d3t5s6.svelte-d3t5s6{font-size:1.2rem}.main-text-sub.svelte-d3t5s6.svelte-d3t5s6{max-width:16rem;margin-left:auto;margin-right:auto;font-size:1rem}.main-text-main.svelte-d3t5s6.svelte-d3t5s6{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}.main-text-post.svelte-d3t5s6.svelte-d3t5s6{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem}}",
  map: null
};
const SeoBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seobannerData = {} } = $$props;
  const { PREHEADING, HEADING, DESCRIPTION_ONE, DESCRIPTION_TWO, PORTFOLIO_BUTTON, SERVICES_BUTTON, SEOBANNER_LANG } = seobannerData;
  if ($$props.seobannerData === void 0 && $$bindings.seobannerData && seobannerData !== void 0)
    $$bindings.seobannerData(seobannerData);
  $$result.css.add(css$3);
  return `

    


<section id="${"seobanner"}" class="${"bg-black d-flex align-items-center svelte-d3t5s6"}"><div class="${"container-fluid"}"><div class="${"row justify-content-center my-4 py-5 mx-sm-3"}"><div id="${"image-content-wrapper"}" class="${"col-6 col-lg-5 col-xxl-5 text-end align-middle px-4 my-auto svelte-d3t5s6"}"><img src="${"images/home/empresa de realidad virtual desarrollo virtual reality company development.png"}" alt="${""}" class="${"img-fluid svelte-d3t5s6"}"></div>

            <div id="${"text-content-wrapper"}" class="${"col-11 col-lg-7 col-xxl-6 text-start align-middle my-auto svelte-d3t5s6"}"><div class="${"col-12"}"><p class="${"main-text-sub h3 fw-bold text-center lh-base svelte-d3t5s6"}">${escape(PREHEADING)}</p></div>

                <div class="${"col-12 mb-3 mb-xxl-4"}"><h2 class="${"main-text-main text-white display-2 fw-bold text-center my-4 svelte-d3t5s6"}">${escape(HEADING)}</h2></div>
                
                <div class="${"col-12 my-3 my-sm-4 "}"><h3 class="${"main-text-post text-white fw-normal lh-base svelte-d3t5s6"}">${escape(DESCRIPTION_ONE)}
                        <br>
                        <br>
                        ${escape(DESCRIPTION_TWO)}</h3></div>

                <div class="${"row justify-content-center btn-section"}"><div class="${"col-9 col-sm-9 col-md-5 col-lg-5 my-2 my-sm-2"}" align="${"center"}">${`<a class="${"portfolio-button btn-primary nav-link fw-bold py-4 px-2 svelte-d3t5s6"}" href="${"/reel_es"}"><p class="${"text-inside-button my-0 h4 fw-bold svelte-d3t5s6"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}">${escape(PORTFOLIO_BUTTON)} <i class="${"bi bi-arrow-right-short svelte-d3t5s6"}"></i></p></a>`}</div>

                    <div class="${"col-9 col-sm-9 col-md-5 col-lg-5 my-2 my-sm-2"}" align="${"center"}">${`<a class="${"portfolio-button btn-primary nav-link fw-bold py-4 px-2 svelte-d3t5s6"}" href="${"/services_es"}"><p class="${"text-inside-button my-0 h4 fw-bold svelte-d3t5s6"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}">${escape(SERVICES_BUTTON)} <i class="${"bi bi-arrow-right-short svelte-d3t5s6"}"></i></p></a>`}</div></div></div></div></div>
  </section>`;
});
var IndustriesBanner_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-195aw2v.svelte-195aw2v{scroll-margin-top:96px}.card.svelte-195aw2v.svelte-195aw2v{border-radius:25px;border-style:solid;border-width:3px;border-color:black;background-color:#deed0a}.card.svelte-195aw2v.svelte-195aw2v:hover{background-color:black;border-style:solid;border-color:#deed0a}.card.svelte-195aw2v:hover li.svelte-195aw2v{color:white}.card.svelte-195aw2v:hover i.svelte-195aw2v{color:#deed0a}.card.svelte-195aw2v:hover h4.svelte-195aw2v{color:#deed0a}ul.svelte-195aw2v.svelte-195aw2v{padding:0px 0px 0px 20px}.card-title.svelte-195aw2v.svelte-195aw2v{text-align:center}.card-container.svelte-195aw2v.svelte-195aw2v{margin:10px 0;max-width:400px}li.svelte-195aw2v.svelte-195aw2v{text-align:left;line-height:1.8rem }@media(min-width: 1921px){.card-row.svelte-195aw2v.svelte-195aw2v{max-width:99rem}.main-text-main.svelte-195aw2v.svelte-195aw2v{max-width:90rem;margin-left:auto;margin-right:auto}.main-text-post.svelte-195aw2v.svelte-195aw2v{max-width:90rem;margin-left:auto;margin-right:auto}}@media(max-width: 1920px) and (min-width: 1400px){}@media(max-width: 1399px) and (min-width: 992px){}@media(max-width: 991px) and (min-width: 768px){}@media(max-width: 767px) and (min-width: 576px){}@media(max-width: 575px) and (min-width: 377px){.main-text-main.svelte-195aw2v.svelte-195aw2v{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}.main-text-post.svelte-195aw2v.svelte-195aw2v{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem}}@media(max-width: 376px){.main-text-main.svelte-195aw2v.svelte-195aw2v{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}.main-text-post.svelte-195aw2v.svelte-195aw2v{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem}.card-title.svelte-195aw2v.svelte-195aw2v{font-size:1.2rem}li.svelte-195aw2v.svelte-195aw2v{font-size:0.9rem}}",
  map: null
};
const IndustriesBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { industriesbannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, INDUSTRY_1_TITLE, INDUSTRY_1_1, INDUSTRY_1_2, INDUSTRY_1_3, INDUSTRY_1_4, INDUSTRY_1_5, INDUSTRY_2_TITLE, INDUSTRY_2_1, INDUSTRY_2_2, INDUSTRY_2_3, INDUSTRY_2_4, INDUSTRY_2_5, INDUSTRY_3_TITLE, INDUSTRY_3_1, INDUSTRY_3_2, INDUSTRY_3_3, INDUSTRY_3_4, INDUSTRY_3_5, INDUSTRY_4_TITLE, INDUSTRY_4_1, INDUSTRY_4_2, INDUSTRY_4_3, INDUSTRY_4_4, INDUSTRY_4_5, INDUSTRY_5_TITLE, INDUSTRY_5_1, INDUSTRY_5_2, INDUSTRY_5_3, INDUSTRY_5_4, INDUSTRY_5_5, INDUSTRY_6_TITLE, INDUSTRY_6_1, INDUSTRY_6_2, INDUSTRY_6_3, INDUSTRY_6_4, INDUSTRY_6_5 } = industriesbannerData;
  if ($$props.industriesbannerData === void 0 && $$bindings.industriesbannerData && industriesbannerData !== void 0)
    $$bindings.industriesbannerData(industriesbannerData);
  $$result.css.add(css$2);
  return `<section id="${"industriesbanner"}" class="${"bg-white d-flex align-items-center svelte-195aw2v"}"><div class="${"container-fluid my-4"}"><div class="${"row section-body justify-content-center"}"><div id="${"title-content-wrapper"}" class="${"col-11 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7"}"><div class="${"col-12 mb-3 mb-xxl-4 my-4 "}"><h2 class="${"main-text-main text-black display-2 fw-bold text-center svelte-195aw2v"}">${escape(HEADING)}</h2></div>
      
        <div class="${"col-12 my-3 my-sm-4 my-4"}"><h3 class="${"main-text-post text-black text-center lh-base svelte-195aw2v"}">${escape(DESCRIPTION)}</h3></div></div></div>

    <div class="${"row justify-content-center"}"><div class="${"col-12 col-md-12 col-xxl-9"}" align="${"center"}"><div class="${"row card-row justify-content-center svelte-195aw2v"}"><div class="${"card-container col-sm-12 col-md-6 col-xl-4  svelte-195aw2v"}"><div class="${"card h-100 svelte-195aw2v"}"><div class="${"card-body"}"><h4 class="${"card-title fw-bold svelte-195aw2v"}"><i class="${"bi bi-headset-vr svelte-195aw2v"}"></i>
                  ${escape(INDUSTRY_1_TITLE)}</h4>
                
                  <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list  svelte-195aw2v"}"><li class="${"svelte-195aw2v"}">${escape(INDUSTRY_1_1)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_1_2)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_1_3)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_1_4)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_1_5)}</li></ul></div></div></div></div>

          <div class="${"card-container col-sm-12 col-md-6 col-xl-4 svelte-195aw2v"}"><div class="${"card h-100 svelte-195aw2v"}"><div class="${"card-body"}"><h4 class="${"card-title fw-bold svelte-195aw2v"}"><i class="${"bi bi-cone-striped svelte-195aw2v"}"></i>
                  ${escape(INDUSTRY_2_TITLE)}</h4>
                
                  <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list svelte-195aw2v"}"><li class="${"svelte-195aw2v"}">${escape(INDUSTRY_2_1)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_2_2)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_2_3)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_2_4)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_2_5)}</li></ul></div></div></div></div>

          <div class="${"card-container col-sm-12 col-md-6 col-xl-4 svelte-195aw2v"}"><div class="${"card h-100 svelte-195aw2v"}"><div class="${"card-body"}"><h4 class="${"card-title fw-bold svelte-195aw2v"}"><i class="${"bi bi-palette-fill svelte-195aw2v"}"></i>
                  ${escape(INDUSTRY_3_TITLE)}</h4>
                
                  <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list svelte-195aw2v"}"><li class="${"svelte-195aw2v"}">${escape(INDUSTRY_3_1)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_3_2)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_3_3)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_3_4)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_3_5)}</li></ul></div></div></div></div>



          <div class="${"card-container col-sm-12 col-md-6 col-xl-4  svelte-195aw2v"}"><div class="${"card h-100 svelte-195aw2v"}"><div class="${"card-body"}"><h4 class="${"card-title fw-bold svelte-195aw2v"}"><i class="${"bi bi-lightbulb svelte-195aw2v"}"></i>
                  ${escape(INDUSTRY_4_TITLE)}</h4>
                
                  <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list svelte-195aw2v"}"><li class="${"svelte-195aw2v"}">${escape(INDUSTRY_4_1)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_4_2)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_4_3)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_4_4)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_4_5)}</li></ul></div></div></div></div>

          <div class="${"card-container col-sm-12 col-md-6 col-xl-4 svelte-195aw2v"}"><div class="${"card h-100 svelte-195aw2v"}"><div class="${"card-body"}"><h4 class="${"card-title fw-bold svelte-195aw2v"}"><i class="${"bi bi-heart-pulse-fill svelte-195aw2v"}"></i>
                  ${escape(INDUSTRY_5_TITLE)}</h4>
                  
                  <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list svelte-195aw2v"}"><li class="${"svelte-195aw2v"}">${escape(INDUSTRY_5_1)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_5_2)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_5_3)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_5_4)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_5_5)}</li></ul></div></div></div></div>

          <div class="${"card-container col-sm-12 col-md-6 col-xl-4  svelte-195aw2v"}"><div class="${"card h-100 svelte-195aw2v"}"><div class="${"card-body"}"><h4 class="${"card-title fw-bold svelte-195aw2v"}"><i class="${"bi bi-building svelte-195aw2v"}"></i>
                  ${escape(INDUSTRY_6_TITLE)}</h4>
                
                  <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list svelte-195aw2v"}"><li class="${"svelte-195aw2v"}">${escape(INDUSTRY_6_1)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_6_2)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_6_3)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_6_4)}</li>
                      <li class="${"svelte-195aw2v"}">${escape(INDUSTRY_6_5)}</li></ul></div></div></div></div></div></div></div></div>
</section>`;
});
var StackBanner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-y2mpnf.svelte-y2mpnf{scroll-margin-top:96px}.btn-primary.svelte-y2mpnf.svelte-y2mpnf{border-style:solid;border-color:rgb(0, 0, 0);background-color:#deed0a;color:black;color:rgb(0, 0, 0);border-radius:150px;overflow:hidden;white-space:nowrap;border-width:2px}.btn-primary.svelte-y2mpnf.svelte-y2mpnf:hover{background-color:rgb(0, 0, 0) !important;color:#deed0a !important;text-decoration:none !important;border-color:#deed0a}.btn-primary.svelte-y2mpnf.svelte-y2mpnf:disabled{opacity:100% !important}.btn-primary.svelte-y2mpnf:hover .bi.svelte-y2mpnf{display:inline-block;transform:translate(0px,5px) scale(1.5,1.5)}.btn-primary.svelte-y2mpnf.svelte-y2mpnf{cursor:pointer}.button-selected{background-color:rgb(0, 0, 0) !important;color:#deed0a !important;border-color:#deed0a !important}.card.svelte-y2mpnf.svelte-y2mpnf{border-radius:25px;border-style:solid;border-width:5px;border-color:#deed0a}.card-container.svelte-y2mpnf.svelte-y2mpnf{margin:10px 0px;max-width:400px}.icon-image.svelte-y2mpnf.svelte-y2mpnf{width:150px}.bi.svelte-y2mpnf.svelte-y2mpnf{font-size:30px;line-height:5px}@media(min-width: 1921px){#title-content-wrapper.svelte-y2mpnf.svelte-y2mpnf{max-width:50rem}.btn-primary.svelte-y2mpnf.svelte-y2mpnf{max-width:18rem}.cards-row.svelte-y2mpnf.svelte-y2mpnf{max-width:90rem}}@media(max-width: 1920px) and (min-width: 1400px){}@media(max-width: 1399px) and (min-width: 992px){}@media(max-width: 991px) and (min-width: 768px){}@media(max-width: 767px) and (min-width: 576px){}@media(max-width: 575px)  and (min-width: 377px){.btn-primary.svelte-y2mpnf.svelte-y2mpnf{font-size:1rem;align-content:center}.bi.svelte-y2mpnf.svelte-y2mpnf{font-size:1rem}.small-card-title.svelte-y2mpnf.svelte-y2mpnf{font-size:0.9rem}.main-text-main.svelte-y2mpnf.svelte-y2mpnf{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}}@media(max-width: 376px){.main-text-main.svelte-y2mpnf.svelte-y2mpnf{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem}.card-title.svelte-y2mpnf.svelte-y2mpnf{font-size:1.2rem}p.svelte-y2mpnf.svelte-y2mpnf{font-size:0.9rem}.btn-primary.svelte-y2mpnf.svelte-y2mpnf{font-size:0.9rem;align-content:center}.small-card-title.svelte-y2mpnf.svelte-y2mpnf{font-size:0.7rem}.bi.svelte-y2mpnf.svelte-y2mpnf{font-size:1rem}}",
  map: null
};
const StackBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stackbannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, PLATFORMS_TITLE, PLATFORMS_HEADING_1, PLATFORMS_TEXT_1, PLATFORMS_HEADING_2, PLATFORMS_TEXT_2, PLATFORMS_HEADING_3, PLATFORMS_TEXT_3, PLATFORMS_HEADING_4, PLATFORMS_TEXT_4, IMG_STACK_PLATFORM_1, IMG_STACK_PLATFORM_2, IMG_STACK_PLATFORM_3, IMG_STACK_PLATFORM_4, SOFTWARE_TITLE, SOFTWARE_HEADING_1, SOFTWARE_HEADING_2, SOFTWARE_HEADING_3, SOFTWARE_HEADING_4, SOFTWARE_HEADING_5, SOFTWARE_HEADING_6, SOFTWARE_HEADING_7, SOFTWARE_HEADING_8, SOFTWARE_HEADING_9, SOFTWARE_HEADING_10, IMG_STACK_SOFTWARE_1, IMG_STACK_SOFTWARE_2, IMG_STACK_SOFTWARE_3, IMG_STACK_SOFTWARE_4, IMG_STACK_SOFTWARE_5, IMG_STACK_SOFTWARE_6, IMG_STACK_SOFTWARE_7, IMG_STACK_SOFTWARE_8, IMG_STACK_SOFTWARE_9, IMG_STACK_SOFTWARE_10, HARDWARE_TITLE, HARDWARE_HEADING_1, HARDWARE_HEADING_2, HARDWARE_HEADING_3, HARDWARE_HEADING_4, HARDWARE_HEADING_5, HARDWARE_HEADING_6, HARDWARE_HEADING_7, HARDWARE_HEADING_8, HARDWARE_HEADING_9, HARDWARE_HEADING_10, IMG_STACK_HARDWARE_1, IMG_STACK_HARDWARE_2, IMG_STACK_HARDWARE_3, IMG_STACK_HARDWARE_4, IMG_STACK_HARDWARE_5, IMG_STACK_HARDWARE_6, IMG_STACK_HARDWARE_7, IMG_STACK_HARDWARE_8, IMG_STACK_HARDWARE_9, IMG_STACK_HARDWARE_10 } = stackbannerData;
  if ($$props.stackbannerData === void 0 && $$bindings.stackbannerData && stackbannerData !== void 0)
    $$bindings.stackbannerData(stackbannerData);
  $$result.css.add(css$1);
  return `<section id="${"stackbanner"}" class="${"bg-black d-flex align-items-center svelte-y2mpnf"}"><div class="${"container-fluid my-4"}"><div class="${"row justify-content-center title-container"}"><div id="${"title-content-wrapper"}" class="${"col-12 col-md-7 col-xl-6 col-xxl-5 svelte-y2mpnf"}"><h2 class="${"main-text-main text-light display-2 fw-bold text-center mb-0 my-4 svelte-y2mpnf"}">${escape(HEADING)}</h2></div></div>


    <div class="${"row justify-content-center card-wrapper my-2 my-md-4 mx-1 "}">
        
      <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-y2mpnf"}"><div class="${"card svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_PLATFORM_1, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
            <h3 class="${"card-title fw-bold svelte-y2mpnf"}">${escape(PLATFORMS_HEADING_1)}</h3>
            <p class="${"card-text h5 lh-base svelte-y2mpnf"}">${escape(PLATFORMS_TEXT_1)}</p></div></div></div>
        
      <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-y2mpnf"}"><div class="${"card svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_PLATFORM_2, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
            <h3 class="${"card-title fw-bold svelte-y2mpnf"}">${escape(PLATFORMS_HEADING_2)}</h3>
            <p class="${"card-text h5 lh-base svelte-y2mpnf"}">${escape(PLATFORMS_TEXT_2)}</p></div></div></div>
        
      <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-y2mpnf"}"><div class="${"card svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_PLATFORM_3, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
            <h3 class="${"card-title fw-bold svelte-y2mpnf"}">${escape(PLATFORMS_HEADING_3)}</h3>
            <p class="${"card-text h5 lh-base svelte-y2mpnf"}">${escape(PLATFORMS_TEXT_3)}</p></div></div></div>
        
      <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-y2mpnf"}"><div class="${"card svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_PLATFORM_4, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
            <h3 class="${"card-title fw-bold svelte-y2mpnf"}">${escape(PLATFORMS_HEADING_4)}</h3>
            <p class="${"card-text h5 lh-base svelte-y2mpnf"}">${escape(PLATFORMS_TEXT_4)}</p></div></div></div></div>

    <div class="${"row justify-content-center px-3 px-sm-1"}"><div class="${"col-6 col-sm-5 col-md-5 col-lg-3 col-xxl-2 px-1 my-2 my-sm-2"}" align="${"center"}"><p class="${"stack-button-software btn-primary fw-bold py-4 mx-0 px-0 text-inside-button h4 svelte-y2mpnf"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}"><i class="${"bi bi-arrow-down-short svelte-y2mpnf"}"></i>${escape(SOFTWARE_TITLE)}<i class="${"bi bi-arrow-down-short svelte-y2mpnf"}"></i></p></div>
      <div class="${"col-6 col-sm-5 col-md-5 col-lg-3 col-xxl-2 px-1 my-2 my-sm-2"}" align="${"center"}"><p class="${"stack-button-hardware btn-primary fw-bold py-4 mx-0 px-0 text-inside-button h4 svelte-y2mpnf"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}"><i class="${"bi bi-arrow-down-short svelte-y2mpnf"}"></i>${escape(HARDWARE_TITLE)}<i class="${"bi bi-arrow-down-short svelte-y2mpnf"}"></i></p></div></div>

    <div class="${"row"}"><div class="${"collapse multi-collapse mb-4"}" id="${"multiCollapseExample1"}"> 
        
        <div class="${"row justify-content-center"}"><div class="${"col-12 col-md-12 col-xxl-9"}" align="${"center"}"><div class="${"row cards-row justify-content-center mx-1 svelte-y2mpnf"}">
              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_1, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_1)}</h5></div></div></div>
              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_2, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_2)}</h5></div></div></div>
              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_3, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_3)}</h5></div></div></div>
              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_4, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_4)}</h5></div></div></div>
              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center "}"><img${add_attribute("src", IMG_STACK_SOFTWARE_5, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_5)}</h5></div></div></div>

              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_6, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_6)}</h5></div></div></div>

              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_7, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_7)}</h5></div></div></div>

              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_8, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_8)}</h5></div></div></div>

              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_9, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_9)}</h5></div></div></div>

              
              <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_SOFTWARE_10, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                    <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(SOFTWARE_HEADING_10)}</h5></div></div></div></div></div></div></div>

    

      <div class="${"collapse multi-collapse mb-4"}" id="${"multiCollapseExample2"}">
          <div class="${"row justify-content-center"}"><div class="${"col-12 col-md-12 col-xxl-9"}" align="${"center"}"><div class="${"row cards-row justify-content-center mx-1 svelte-y2mpnf"}">
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_1, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_1)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_2, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_2)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_3, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_3)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_4, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_4)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_5, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_5)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_6, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_6)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_7, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_7)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_8, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_8)}</h5></div></div></div>
                
                <div class="${"card-container px-2 col-6 col-sm-4 svelte-y2mpnf"}"><div class="${"card h-100 svelte-y2mpnf"}"><div class="${"card-body text-center"}"><img${add_attribute("src", IMG_STACK_HARDWARE_9, 0)} alt="${""}" class="${"img-fluid icon-image svelte-y2mpnf"}">
                      <h5 class="${"small-card-title fw-bold svelte-y2mpnf"}">${escape(HARDWARE_HEADING_9)}</h5></div></div></div></div></div></div></div></div></div>
</section>`;
});
var PipelineBanner_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-126rm69{scroll-margin-top:96px}.image1.svelte-126rm69{display:block}.image1mobile.svelte-126rm69{display:none}@media(min-width: 1921px){#title-content-wrapper.svelte-126rm69{max-width:60rem}}@media(max-width: 1920px) and (min-width: 1400px){}@media(max-width: 1399px) and (min-width: 992px){}@media(max-width: 991px) and (min-width: 768px){}@media(max-width: 767px) and (min-width: 576px){.image1.svelte-126rm69{display:none}.image1mobile.svelte-126rm69{display:block}.main-text-main.svelte-126rm69{text-align:center}.main-text-post.svelte-126rm69{text-align:center}}@media(max-width: 575px) and (min-width: 377px){.image1.svelte-126rm69{display:none}.image1mobile.svelte-126rm69{display:block}.main-text-main.svelte-126rm69{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem;text-align:center}.main-text-post.svelte-126rm69{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem;text-align:center}}@media(max-width: 376px){.image1.svelte-126rm69{display:none}.image1mobile.svelte-126rm69{display:block}.main-text-main.svelte-126rm69{font-size:2rem;margin-left:auto;margin-right:auto;max-width:21rem;text-align:center}.main-text-post.svelte-126rm69{font-size:1rem;margin-left:auto;margin-right:auto;max-width:21rem;text-align:center}}",
  map: null
};
const PipelineBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pipelinebannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, IMG_SRC_H, IMG_SRC_V } = pipelinebannerData;
  if ($$props.pipelinebannerData === void 0 && $$bindings.pipelinebannerData && pipelinebannerData !== void 0)
    $$bindings.pipelinebannerData(pipelinebannerData);
  $$result.css.add(css);
  return `

    
<section id="${"pipelinebanner"}" class="${"bg-white d-flex align-items-center svelte-126rm69"}"><div class="${"container-fluid my-4"}"><div class="${"row section-body justify-content-center"}"><div id="${"title-content-wrapper"}" class="${"col-11 col-md-10 col-lg-9 col-xl-9 col-xxl-6 svelte-126rm69"}"><div class="${"col-12 mb-3 mb-xxl-4 my-4"}"><h2 class="${"main-text-main text-black display-2 fw-bold text-center svelte-126rm69"}">${escape(HEADING)}</h2></div>

                <div class="${"col-12 my-3 my-sm-4 my-4"}"><h3 class="${"main-text-post text-black text-justify lh-base svelte-126rm69"}">${escape(DESCRIPTION)}</h3></div></div></div>

        <div id="${"image-content-wrapper"}" class="${"d-flex justify-content-center mb-4"}">

            <img${add_attribute("src", IMG_SRC_H, 0)} alt="${""}" class="${"image1 img-fluid svelte-126rm69"}">

            <img${add_attribute("src", IMG_SRC_V, 0)} alt="${""}" class="${"image1mobile img-fluid svelte-126rm69"}"></div></div>
</section>`;
});
export { IndustriesBanner as I, MainBanner as M, PipelineBanner as P, SeoBanner as S, StackBanner as a };
