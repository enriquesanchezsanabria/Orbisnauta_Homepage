import { c as create_ssr_component, e as escape, a as add_attribute } from "./index-0fac4578.js";
var MainBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".main-text-sub.svelte-1kyg14p{font-weight:bold;text-align:left}h1.svelte-1kyg14p{font-weight:bold;flex-wrap:wrap}p.svelte-1kyg14p{flex-wrap:wrap}.main-text-post.svelte-1kyg14p{text-align:justify}@media(min-width: 1921px){#mainbanner.svelte-1kyg14p{height:980px}.container-fluid.svelte-1kyg14p{width:90%;max-width:1800px}.main-text-main.svelte-1kyg14p{font-size:110px;line-height:120px;margin-bottom:40px}.main-text-sub.svelte-1kyg14p{font-size:35px}.main-text-post.svelte-1kyg14p{font-size:36px;line-height:40px;max-width:1000px}}@media(max-width: 1920px) and (min-width: 1400px){#mainbanner.svelte-1kyg14p{height:850px}.container-fluid.svelte-1kyg14p{width:90%;max-width:1500px}.main-text-main.svelte-1kyg14p{font-size:86px;line-height:90px;margin-top:0px;margin-bottom:27px}.main-text-sub.svelte-1kyg14p{font-size:23px}.main-text-post.svelte-1kyg14p{font-size:26px;line-height:27px;max-width:700px}}@media(max-width: 1399px) and (min-width: 992px){#mainbanner.svelte-1kyg14p{height:570px}.container-fluid.svelte-1kyg14p{width:90%;max-width:1000px}.main-text-main.svelte-1kyg14p{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-sub.svelte-1kyg14p{font-size:17px}.main-text-post.svelte-1kyg14p{font-size:18px;line-height:21px;max-width:500px}}@media(max-width: 991px) and (min-width: 768px){#mainbanner.svelte-1kyg14p{height:570px}.container-fluid.svelte-1kyg14p{width:90%;max-width:600px}.main-text-main.svelte-1kyg14p{font-size:48px;line-height:48px;max-width:550px;margin-bottom:15px}.main-text-sub.svelte-1kyg14p{font-size:17px}.main-text-post.svelte-1kyg14p{font-size:18px;line-height:23px;max-width:510px}}@media(max-width: 767px){#mainbanner.svelte-1kyg14p{height:570px}.container-fluid.svelte-1kyg14p{width:90%;max-width:500px}.main-text-main.svelte-1kyg14p{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}.main-text-sub.svelte-1kyg14p{font-size:17px}.main-text-post.svelte-1kyg14p{font-size:18px;line-height:23px;max-width:510px ;text-align:left}}")();
const css$5 = {
  code: ".main-text-sub.svelte-1kyg14p{font-weight:bold;text-align:left}h1.svelte-1kyg14p{font-weight:bold;flex-wrap:wrap}p.svelte-1kyg14p{flex-wrap:wrap}.main-text-post.svelte-1kyg14p{text-align:justify}@media(min-width: 1921px){#mainbanner.svelte-1kyg14p{height:980px}.container-fluid.svelte-1kyg14p{width:90%;max-width:1800px}.main-text-main.svelte-1kyg14p{font-size:110px;line-height:120px;margin-bottom:40px}.main-text-sub.svelte-1kyg14p{font-size:35px}.main-text-post.svelte-1kyg14p{font-size:36px;line-height:40px;max-width:1000px}}@media(max-width: 1920px) and (min-width: 1400px){#mainbanner.svelte-1kyg14p{height:850px}.container-fluid.svelte-1kyg14p{width:90%;max-width:1500px}.main-text-main.svelte-1kyg14p{font-size:86px;line-height:90px;margin-top:0px;margin-bottom:27px}.main-text-sub.svelte-1kyg14p{font-size:23px}.main-text-post.svelte-1kyg14p{font-size:26px;line-height:27px;max-width:700px}}@media(max-width: 1399px) and (min-width: 992px){#mainbanner.svelte-1kyg14p{height:570px}.container-fluid.svelte-1kyg14p{width:90%;max-width:1000px}.main-text-main.svelte-1kyg14p{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-sub.svelte-1kyg14p{font-size:17px}.main-text-post.svelte-1kyg14p{font-size:18px;line-height:21px;max-width:500px}}@media(max-width: 991px) and (min-width: 768px){#mainbanner.svelte-1kyg14p{height:570px}.container-fluid.svelte-1kyg14p{width:90%;max-width:600px}.main-text-main.svelte-1kyg14p{font-size:48px;line-height:48px;max-width:550px;margin-bottom:15px}.main-text-sub.svelte-1kyg14p{font-size:17px}.main-text-post.svelte-1kyg14p{font-size:18px;line-height:23px;max-width:510px}}@media(max-width: 767px){#mainbanner.svelte-1kyg14p{height:570px}.container-fluid.svelte-1kyg14p{width:90%;max-width:500px}.main-text-main.svelte-1kyg14p{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}.main-text-sub.svelte-1kyg14p{font-size:17px}.main-text-post.svelte-1kyg14p{font-size:18px;line-height:23px;max-width:510px ;text-align:left}}",
  map: null
};
const MainBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mainbannerData = {} } = $$props;
  const { PREHEADING, HEADING_1, HEADING_2, DESCRIPTION_1, DESCRIPTION_2_STRONG, DESCRIPTION_3, DESCRIPTION_4_STRONG, DESCRIPTION_5, DESCRIPTION_6_STRONG, DESCRIPTION_7 } = mainbannerData;
  if ($$props.mainbannerData === void 0 && $$bindings.mainbannerData && mainbannerData !== void 0)
    $$bindings.mainbannerData(mainbannerData);
  $$result.css.add(css$5);
  return `


  <section id="${"mainbanner"}" class="${"bg-white d-flex align-items-center svelte-1kyg14p"}"><div class="${"container-fluid svelte-1kyg14p"}"><div class="${"row justify-content-center"}"><div id="${"content-wrapper"}" class="${"col-12 text-left"}"><p class="${"main-text-sub text-primary mb-0 svelte-1kyg14p"}">${escape(PREHEADING)}</p>

                <h1 class="${"main-text-main text-dark svelte-1kyg14p"}">${escape(HEADING_1)}
                    <br>
                    ${escape(HEADING_2)}</h1>
    
                <p class="${"main-text-post text-dark svelte-1kyg14p"}">${escape(DESCRIPTION_1)}
                    <strong><u>${escape(DESCRIPTION_2_STRONG)}</u></strong>
                    ${escape(DESCRIPTION_3)}
                    <strong><u>${escape(DESCRIPTION_4_STRONG)}</u></strong>
                    ${escape(DESCRIPTION_5)}
                    <strong><u>${escape(DESCRIPTION_6_STRONG)}</u></strong>
                    ${escape(DESCRIPTION_7)}</p></div></div></div>
  </section>`;
});
var SeoBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-yxdlqm{font-weight:bold;flex-wrap:wrap}p.svelte-yxdlqm{flex-wrap:wrap}#image-content-wrapper.svelte-yxdlqm{margin:auto;padding-right:60px}.main-text-post.svelte-yxdlqm{text-align:justify}@media(min-width: 1921px){#seobanner.svelte-yxdlqm{height:1400px}.container-fluid.svelte-yxdlqm{width:90%;max-width:1800px}.main-text-main.svelte-yxdlqm{font-size:110px;line-height:120px;margin-bottom:30px;padding-top:0px;max-width:1000px}.main-text-sub.svelte-yxdlqm{font-size:35px}.main-text-post.svelte-yxdlqm{font-size:36px;line-height:40px;max-width:845px}}@media(max-width: 1920px) and (min-width: 1400px){#seobanner.svelte-yxdlqm{height:1100px}.container-fluid.svelte-yxdlqm{width:90%;max-width:1500px}.main-text-main.svelte-yxdlqm{font-size:86px;line-height:90px;margin-top:0px;margin-bottom:30px;max-width:500px}.main-text-sub.svelte-yxdlqm{font-size:23px}.main-text-post.svelte-yxdlqm{font-size:26px;line-height:27px;max-width:700px}}@media(max-width: 1399px) and (min-width: 992px){#seobanner.svelte-yxdlqm{height:850px}.container-fluid.svelte-yxdlqm{width:90%;max-width:1000px}.main-text-main.svelte-yxdlqm{font-size:60px;line-height:60px;margin-bottom:20px;max-width:450px}.main-text-sub.svelte-yxdlqm{font-size:20px}.main-text-post.svelte-yxdlqm{font-size:22px;line-height:25px;max-width:456px}}@media(max-width: 991px) and (min-width: 768px){#seobanner.svelte-yxdlqm{height:770px}.container-fluid.svelte-yxdlqm{width:90%;max-width:800px}.main-text-main.svelte-yxdlqm{font-size:48px;line-height:48px;margin-bottom:15px;max-width:360px}.main-text-sub.svelte-yxdlqm{font-size:17px}.main-text-post.svelte-yxdlqm{font-size:18px;line-height:23px;max-width:456px}}@media(max-width: 767px){#image-content-wrapper.svelte-yxdlqm{display:none}#seobanner.svelte-yxdlqm{height:860px}.container-fluid.svelte-yxdlqm{width:90%;max-width:500px}.main-text-main.svelte-yxdlqm{font-size:35px;line-height:42px;margin-bottom:10px;max-width:480px}.main-text-sub.svelte-yxdlqm{font-size:17px}.main-text-post.svelte-yxdlqm{font-size:18px;line-height:23px;max-width:510px ;text-align:left}}")();
const css$4 = {
  code: "h1.svelte-yxdlqm{font-weight:bold;flex-wrap:wrap}p.svelte-yxdlqm{flex-wrap:wrap}#image-content-wrapper.svelte-yxdlqm{margin:auto;padding-right:60px}.main-text-post.svelte-yxdlqm{text-align:justify}@media(min-width: 1921px){#seobanner.svelte-yxdlqm{height:1400px}.container-fluid.svelte-yxdlqm{width:90%;max-width:1800px}.main-text-main.svelte-yxdlqm{font-size:110px;line-height:120px;margin-bottom:30px;padding-top:0px;max-width:1000px}.main-text-sub.svelte-yxdlqm{font-size:35px}.main-text-post.svelte-yxdlqm{font-size:36px;line-height:40px;max-width:845px}}@media(max-width: 1920px) and (min-width: 1400px){#seobanner.svelte-yxdlqm{height:1100px}.container-fluid.svelte-yxdlqm{width:90%;max-width:1500px}.main-text-main.svelte-yxdlqm{font-size:86px;line-height:90px;margin-top:0px;margin-bottom:30px;max-width:500px}.main-text-sub.svelte-yxdlqm{font-size:23px}.main-text-post.svelte-yxdlqm{font-size:26px;line-height:27px;max-width:700px}}@media(max-width: 1399px) and (min-width: 992px){#seobanner.svelte-yxdlqm{height:850px}.container-fluid.svelte-yxdlqm{width:90%;max-width:1000px}.main-text-main.svelte-yxdlqm{font-size:60px;line-height:60px;margin-bottom:20px;max-width:450px}.main-text-sub.svelte-yxdlqm{font-size:20px}.main-text-post.svelte-yxdlqm{font-size:22px;line-height:25px;max-width:456px}}@media(max-width: 991px) and (min-width: 768px){#seobanner.svelte-yxdlqm{height:770px}.container-fluid.svelte-yxdlqm{width:90%;max-width:800px}.main-text-main.svelte-yxdlqm{font-size:48px;line-height:48px;margin-bottom:15px;max-width:360px}.main-text-sub.svelte-yxdlqm{font-size:17px}.main-text-post.svelte-yxdlqm{font-size:18px;line-height:23px;max-width:456px}}@media(max-width: 767px){#image-content-wrapper.svelte-yxdlqm{display:none}#seobanner.svelte-yxdlqm{height:860px}.container-fluid.svelte-yxdlqm{width:90%;max-width:500px}.main-text-main.svelte-yxdlqm{font-size:35px;line-height:42px;margin-bottom:10px;max-width:480px}.main-text-sub.svelte-yxdlqm{font-size:17px}.main-text-post.svelte-yxdlqm{font-size:18px;line-height:23px;max-width:510px ;text-align:left}}",
  map: null
};
const SeoBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seobannerData = {} } = $$props;
  const { PREHEADING, HEADING, DESCRIPTION_ONE, DESCRIPTION_TWO } = seobannerData;
  if ($$props.seobannerData === void 0 && $$bindings.seobannerData && seobannerData !== void 0)
    $$bindings.seobannerData(seobannerData);
  $$result.css.add(css$4);
  return `

    
<section id="${"seobanner"}" class="${"bg-dark d-flex align-items-center svelte-yxdlqm"}"><div class="${"container-fluid svelte-yxdlqm"}"><div class="${"row justify-content-center"}"><div id="${"image-content-wrapper"}" class="${"col-md-6 svelte-yxdlqm"}"><div id="${"background-color-wrapper"}"><img src="${"images/intro-image1.png"}" alt="${""}" class="${"img-fluid"}"></div></div>

            <div id="${"text-content-wrapper"}" class="${"col-md-6 col-12 text-left"}"><p class="${"main-text-sub text-info mb-0 svelte-yxdlqm"}">${escape(PREHEADING)}</p>

                <h1 class="${"main-text-main text-light svelte-yxdlqm"}">${escape(HEADING)}</h1>
    
                <p class="${"main-text-post text-light svelte-yxdlqm"}">${escape(DESCRIPTION_ONE)}
                    <br>
                    ${escape(DESCRIPTION_TWO)}</p></div></div></div>
  </section>`;
});
var IndustriesBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-16s5oq2{font-weight:bold;text-align:center}p.svelte-16s5oq2{text-align:center}.card-title.svelte-16s5oq2{text-align:center}.card-container.svelte-16s5oq2{margin:10px 0;max-width:400px}.container-fluid.svelte-16s5oq2{margin-top:40px;margin-bottom:60px}.main-text-post.svelte-16s5oq2{text-align:justify}@media(min-width: 1921px){.main-text-main.svelte-16s5oq2{font-size:80px;line-height:80px;margin-top:40px;margin-bottom:20px}.main-text-post.svelte-16s5oq2{font-size:30px;line-height:35px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-16s5oq2{font-size:76px;line-height:60px;margin-bottom:30px}.main-text-post.svelte-16s5oq2{font-size:26px;line-height:27px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-16s5oq2{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-post.svelte-16s5oq2{font-size:22px;line-height:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-16s5oq2{width:90%;max-width:1000px}.main-text-main.svelte-16s5oq2{font-size:48px;line-height:48px;margin-bottom:15px}.main-text-post.svelte-16s5oq2{font-size:18px;line-height:23px}}@media(max-width: 767px){.container-fluid.svelte-16s5oq2{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-16s5oq2{text-align:center;max-width:500px}.main-text-main.svelte-16s5oq2{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}.main-text-post.svelte-16s5oq2{font-size:18px;line-height:23px;max-width:510px ;text-align:center}}")();
const css$3 = {
  code: "h1.svelte-16s5oq2{font-weight:bold;text-align:center}p.svelte-16s5oq2{text-align:center}.card-title.svelte-16s5oq2{text-align:center}.card-container.svelte-16s5oq2{margin:10px 0;max-width:400px}.container-fluid.svelte-16s5oq2{margin-top:40px;margin-bottom:60px}.main-text-post.svelte-16s5oq2{text-align:justify}@media(min-width: 1921px){.main-text-main.svelte-16s5oq2{font-size:80px;line-height:80px;margin-top:40px;margin-bottom:20px}.main-text-post.svelte-16s5oq2{font-size:30px;line-height:35px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-16s5oq2{font-size:76px;line-height:60px;margin-bottom:30px}.main-text-post.svelte-16s5oq2{font-size:26px;line-height:27px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-16s5oq2{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-post.svelte-16s5oq2{font-size:22px;line-height:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-16s5oq2{width:90%;max-width:1000px}.main-text-main.svelte-16s5oq2{font-size:48px;line-height:48px;margin-bottom:15px}.main-text-post.svelte-16s5oq2{font-size:18px;line-height:23px}}@media(max-width: 767px){.container-fluid.svelte-16s5oq2{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-16s5oq2{text-align:center;max-width:500px}.main-text-main.svelte-16s5oq2{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}.main-text-post.svelte-16s5oq2{font-size:18px;line-height:23px;max-width:510px ;text-align:center}}",
  map: null
};
const IndustriesBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { industriesbannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, INDUSTRY_1_TITLE, INDUSTRY_1_1, INDUSTRY_1_2, INDUSTRY_1_3, INDUSTRY_1_4, INDUSTRY_1_5, INDUSTRY_2_TITLE, INDUSTRY_2_1, INDUSTRY_2_2, INDUSTRY_2_3, INDUSTRY_2_4, INDUSTRY_2_5, INDUSTRY_3_TITLE, INDUSTRY_3_1, INDUSTRY_3_2, INDUSTRY_3_3, INDUSTRY_3_4, INDUSTRY_3_5, INDUSTRY_4_TITLE, INDUSTRY_4_1, INDUSTRY_4_2, INDUSTRY_4_3, INDUSTRY_4_4, INDUSTRY_4_5, INDUSTRY_5_TITLE, INDUSTRY_5_1, INDUSTRY_5_2, INDUSTRY_5_3, INDUSTRY_5_4, INDUSTRY_5_5, INDUSTRY_6_TITLE, INDUSTRY_6_1, INDUSTRY_6_2, INDUSTRY_6_3, INDUSTRY_6_4, INDUSTRY_6_5 } = industriesbannerData;
  if ($$props.industriesbannerData === void 0 && $$bindings.industriesbannerData && industriesbannerData !== void 0)
    $$bindings.industriesbannerData(industriesbannerData);
  $$result.css.add(css$3);
  return `<section id="${"industriesbanner"}" class="${"bg-primary d-flex align-items-center"}"><div class="${"container-fluid svelte-16s5oq2"}"><div class="${"row justify-content-center my-3"}"><div id="${"title-content-wrapper"}" class="${"col-md-6 svelte-16s5oq2"}"><h1 class="${"main-text-main text-light svelte-16s5oq2"}">${escape(HEADING)}</h1>
      
        <p class="${"main-text-post text-light svelte-16s5oq2"}">${escape(DESCRIPTION)}</p></div></div>

    <div class="${"row justify-content-center"}"><div class="${"card-container col-sm-6 col-xl-4 col-xxl-3 svelte-16s5oq2"}"><div class="${"card h-100"}"><div class="${"card-body"}"><h5 class="${"card-title svelte-16s5oq2"}"><i class="${"bi bi-headset-vr"}"></i>
              ${escape(INDUSTRY_1_TITLE)}</h5>
            
              <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list"}"><li>${escape(INDUSTRY_1_1)}</li>
                  <li>${escape(INDUSTRY_1_2)}</li>
                  <li>${escape(INDUSTRY_1_3)}</li>
                  <li>${escape(INDUSTRY_1_4)}</li>
                  <li>${escape(INDUSTRY_1_5)}</li></ul></div></div></div></div>

      <div class="${"card-container col-sm-6 col-xl-4 col-xxl-3 svelte-16s5oq2"}"><div class="${"card h-100"}"><div class="${"card-body"}"><h5 class="${"card-title svelte-16s5oq2"}"><i class="${"bi bi-cone-striped"}"></i>
              ${escape(INDUSTRY_2_TITLE)}</h5>
             
              <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list"}"><li>${escape(INDUSTRY_2_1)}</li>
                  <li>${escape(INDUSTRY_2_2)}</li>
                  <li>${escape(INDUSTRY_2_3)}</li>
                  <li>${escape(INDUSTRY_2_4)}</li>
                  <li>${escape(INDUSTRY_2_5)}</li></ul></div></div></div></div>

      <div class="${"card-container col-sm-6 col-xl-4 col-xxl-3 svelte-16s5oq2"}"><div class="${"card h-100"}"><div class="${"card-body"}"><h5 class="${"card-title svelte-16s5oq2"}"><i class="${"bi bi-palette-fill"}"></i>
              ${escape(INDUSTRY_3_TITLE)}</h5>
            
              <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list"}"><li>${escape(INDUSTRY_3_1)}</li>
                  <li>${escape(INDUSTRY_3_2)}</li>
                  <li>${escape(INDUSTRY_3_3)}</li>
                  <li>${escape(INDUSTRY_3_4)}</li>
                  <li>${escape(INDUSTRY_3_5)}</li></ul></div></div></div></div>

      
      <div class="${"card-container col-sm-6 col-xl-4 col-xxl-3 svelte-16s5oq2"}"><div class="${"card h-100"}"><div class="${"card-body"}"><h5 class="${"card-title svelte-16s5oq2"}"><i class="${"bi bi-lightbulb"}"></i>
              ${escape(INDUSTRY_4_TITLE)}</h5>
             
              <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list"}"><li>${escape(INDUSTRY_4_1)}</li>
                  <li>${escape(INDUSTRY_4_2)}</li>
                  <li>${escape(INDUSTRY_4_3)}</li>
                  <li>${escape(INDUSTRY_4_4)}</li>
                  <li>${escape(INDUSTRY_4_5)}</li></ul></div></div></div></div>

      <div class="${"card-container col-sm-6 col-xl-4 col-xxl-3 svelte-16s5oq2"}"><div class="${"card h-100"}"><div class="${"card-body"}"><h5 class="${"card-title svelte-16s5oq2"}"><i class="${"bi bi-heart-pulse-fill"}"></i>
              ${escape(INDUSTRY_5_TITLE)}</h5>
              
              <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list"}"><li>${escape(INDUSTRY_5_1)}</li>
                  <li>${escape(INDUSTRY_5_2)}</li>
                  <li>${escape(INDUSTRY_5_3)}</li>
                  <li>${escape(INDUSTRY_5_4)}</li>
                  <li>${escape(INDUSTRY_5_5)}</li></ul></div></div></div></div>

      <div class="${"card-container col-sm-6 col-xl-4 col-xxl-3 svelte-16s5oq2"}"><div class="${"card h-100"}"><div class="${"card-body"}"><h5 class="${"card-title svelte-16s5oq2"}"><i class="${"bi bi-building"}"></i>
              ${escape(INDUSTRY_6_TITLE)}</h5>
            
              <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list"}"><li>${escape(INDUSTRY_6_1)}</li>
                  <li>${escape(INDUSTRY_6_2)}</li>
                  <li>${escape(INDUSTRY_6_3)}</li>
                  <li>${escape(INDUSTRY_6_4)}</li>
                  <li>${escape(INDUSTRY_6_5)}</li></ul></div></div></div></div></div></div>
</section>`;
});
var StackBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-eu7g4k{font-weight:bold;text-align:center}p.svelte-eu7g4k{text-align:center}h2.svelte-eu7g4k{text-align:center;text-decoration:underline;padding-bottom:5px;text-underline-offset:3px}.card-wrapper.svelte-eu7g4k{padding-top:10px}.card-container.svelte-eu7g4k{margin:10px 0px;max-width:400px}.container-fluid.svelte-eu7g4k{margin-top:30px;margin-bottom:60px;max-width:1300px}.icon-image.svelte-eu7g4k{width:150px}@media(min-width: 1921px){.main-text-main.svelte-eu7g4k{font-size:80px;line-height:85px;margin-top:40px;margin-bottom:20px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-eu7g4k{font-size:76px;line-height:80px;margin-bottom:30px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-eu7g4k{font-size:60px;line-height:60px;margin-bottom:20px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-eu7g4k{width:90%;max-width:1000px}.main-text-main.svelte-eu7g4k{font-size:48px;line-height:48px;margin-bottom:15px}}@media(max-width: 767px){.container-fluid.svelte-eu7g4k{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-eu7g4k{text-align:center;max-width:500px}.main-text-main.svelte-eu7g4k{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}}@media(max-width: 576px){.main-text-main.svelte-eu7g4k{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}#title-content-wrapper.svelte-eu7g4k{text-align:center;max-width:500px}.card-title.svelte-eu7g4k{font-size:15px}.card-text.svelte-eu7g4k{font-size:13px}}")();
const css$2 = {
  code: "h1.svelte-eu7g4k{font-weight:bold;text-align:center}p.svelte-eu7g4k{text-align:center}h2.svelte-eu7g4k{text-align:center;text-decoration:underline;padding-bottom:5px;text-underline-offset:3px}.card-wrapper.svelte-eu7g4k{padding-top:10px}.card-container.svelte-eu7g4k{margin:10px 0px;max-width:400px}.container-fluid.svelte-eu7g4k{margin-top:30px;margin-bottom:60px;max-width:1300px}.icon-image.svelte-eu7g4k{width:150px}@media(min-width: 1921px){.main-text-main.svelte-eu7g4k{font-size:80px;line-height:85px;margin-top:40px;margin-bottom:20px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-eu7g4k{font-size:76px;line-height:80px;margin-bottom:30px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-eu7g4k{font-size:60px;line-height:60px;margin-bottom:20px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-eu7g4k{width:90%;max-width:1000px}.main-text-main.svelte-eu7g4k{font-size:48px;line-height:48px;margin-bottom:15px}}@media(max-width: 767px){.container-fluid.svelte-eu7g4k{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-eu7g4k{text-align:center;max-width:500px}.main-text-main.svelte-eu7g4k{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}}@media(max-width: 576px){.main-text-main.svelte-eu7g4k{font-size:35px;line-height:42px;max-width:480px;margin-bottom:10px}#title-content-wrapper.svelte-eu7g4k{text-align:center;max-width:500px}.card-title.svelte-eu7g4k{font-size:15px}.card-text.svelte-eu7g4k{font-size:13px}}",
  map: null
};
const StackBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stackbannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, PLATFORMS_TITLE, PLATFORMS_HEADING_1, PLATFORMS_TEXT_1, PLATFORMS_HEADING_2, PLATFORMS_TEXT_2, PLATFORMS_HEADING_3, PLATFORMS_TEXT_3, PLATFORMS_HEADING_4, PLATFORMS_TEXT_4, SOFTWARE_TITLE, SOFTWARE_HEADING_1, SOFTWARE_HEADING_2, SOFTWARE_HEADING_3, SOFTWARE_HEADING_4, SOFTWARE_HEADING_5, SOFTWARE_HEADING_6, SOFTWARE_HEADING_7, SOFTWARE_HEADING_8, HARDWARE_TITLE, HARDWARE_HEADING_1, HARDWARE_HEADING_2, HARDWARE_HEADING_3, HARDWARE_HEADING_4, HARDWARE_HEADING_5, HARDWARE_HEADING_6, HARDWARE_HEADING_7, HARDWARE_HEADING_8 } = stackbannerData;
  if ($$props.stackbannerData === void 0 && $$bindings.stackbannerData && stackbannerData !== void 0)
    $$bindings.stackbannerData(stackbannerData);
  $$result.css.add(css$2);
  return `<section id="${"stackbanner"}" class="${"bg-dark d-flex align-items-center"}"><div class="${"container-fluid svelte-eu7g4k"}"><div class="${"row justify-content-center my-3 title-container"}">


      <div id="${"title-content-wrapper"}" class="${"col-md-6 col-xl-9 svelte-eu7g4k"}"><h1 class="${"main-text-main text-light svelte-eu7g4k"}">${escape(HEADING)}</h1>

        </div></div>

      <div class="${"row justify-content-center card-wrapper svelte-eu7g4k"}"><h2 class="${"text-light svelte-eu7g4k"}">${escape(PLATFORMS_TITLE)}</h2>
        
         

        <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-eu7g4k"}"><div class="${"card"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon11.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(PLATFORMS_HEADING_1)}</h5>
              <p class="${"card-text svelte-eu7g4k"}">${escape(PLATFORMS_TEXT_1)}</p></div></div></div>

         

        <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-eu7g4k"}"><div class="${"card"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon12.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(PLATFORMS_HEADING_2)}</h5>
              <p class="${"card-text svelte-eu7g4k"}">${escape(PLATFORMS_TEXT_2)}</p></div></div></div>

         

        <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-eu7g4k"}"><div class="${"card"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon13.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(PLATFORMS_HEADING_3)}</h5>
              <p class="${"card-text svelte-eu7g4k"}">${escape(PLATFORMS_TEXT_3)}</p></div></div></div>

         

        <div class="${"card-container col-sm-6 col-xl-3 d-flex align-items-stretch svelte-eu7g4k"}"><div class="${"card"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon14.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(PLATFORMS_HEADING_4)}</h5>
              <p class="${"card-text svelte-eu7g4k"}">${escape(PLATFORMS_TEXT_4)}</p></div></div></div></div>
    



      

      <div class="${"row section-body justify-content-center card-wrapper svelte-eu7g4k"}"><h2 class="${"mt-2 text-light svelte-eu7g4k"}">${escape(SOFTWARE_TITLE)}</h2>

        
        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon21.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_1)}</h5></div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon22.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_2)}</h5></div></div></div>

         

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon23.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_3)}</h5></div></div></div>

         

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon24.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_4)}</h5></div></div></div>

         

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center "}"><img src="${"images/stack-image-icon25.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title my-auto svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_5)}</h5></div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon26.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_6)}</h5></div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon27.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_7)}</h5></div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon28.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(SOFTWARE_HEADING_8)}</h5></div></div></div></div>

      

      <div class="${"row section-body justify-content-center card-wrapper svelte-eu7g4k"}"><h2 class="${"mt-2 text-light svelte-eu7g4k"}">${escape(HARDWARE_TITLE)}</h2>
        
        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon31.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_1)}</h5>
              </div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon32.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_2)}</h5>
               </div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon33.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_3)}</h5>
                </div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon34.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_4)}</h5>
               </div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon35.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_5)}</h5>
              </div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon36.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_6)}</h5>
               </div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon37.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_7)}</h5>
              </div></div></div>

        

        <div class="${"card-container col-6 col-sm-6 col-xl-3 svelte-eu7g4k"}"><div class="${"card h-100"}"><div class="${"card-body text-center"}"><img src="${"images/stack-image-icon38.png"}" alt="${""}" class="${"img-fluid icon-image svelte-eu7g4k"}">
              <h5 class="${"card-title svelte-eu7g4k"}">${escape(HARDWARE_HEADING_8)}</h5>
              </div></div></div></div></div>
</section>`;
});
var PipelineBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-1ct8euo{font-weight:bold;text-align:center}p.svelte-1ct8euo{text-align:center;padding-bottom:20px}.container-fluid.svelte-1ct8euo{margin-top:30px;margin-bottom:60px;max-width:1300px}.image1.svelte-1ct8euo{display:block}.image1mobile.svelte-1ct8euo{display:none}.main-text-post.svelte-1ct8euo{text-align:justify}@media(min-width: 1921px){.main-text-main.svelte-1ct8euo{font-size:80px;line-height:90px;margin-top:40px;margin-bottom:20px}.main-text-post.svelte-1ct8euo{font-size:30px;line-height:35px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-1ct8euo{font-size:76px;line-height:85px;margin-bottom:20px}.main-text-post.svelte-1ct8euo{font-size:26px;line-height:24px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-1ct8euo{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-post.svelte-1ct8euo{font-size:22px;line-height:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-1ct8euo{width:90%;max-width:1000px}.main-text-main.svelte-1ct8euo{font-size:48px;line-height:48px;margin-bottom:15px}.main-text-post.svelte-1ct8euo{font-size:18px;line-height:23px}}@media(max-width: 767px){.image1.svelte-1ct8euo{display:none}.image1mobile.svelte-1ct8euo{display:block}.container-fluid.svelte-1ct8euo{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-1ct8euo{text-align:center;max-width:500px}.main-text-main.svelte-1ct8euo{font-size:35px;line-height:42px;margin-bottom:10px;max-width:480px}.main-text-post.svelte-1ct8euo{font-size:18px;line-height:23px;max-width:510px ;text-align:center}}")();
const css$1 = {
  code: "h1.svelte-1ct8euo{font-weight:bold;text-align:center}p.svelte-1ct8euo{text-align:center;padding-bottom:20px}.container-fluid.svelte-1ct8euo{margin-top:30px;margin-bottom:60px;max-width:1300px}.image1.svelte-1ct8euo{display:block}.image1mobile.svelte-1ct8euo{display:none}.main-text-post.svelte-1ct8euo{text-align:justify}@media(min-width: 1921px){.main-text-main.svelte-1ct8euo{font-size:80px;line-height:90px;margin-top:40px;margin-bottom:20px}.main-text-post.svelte-1ct8euo{font-size:30px;line-height:35px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-1ct8euo{font-size:76px;line-height:85px;margin-bottom:20px}.main-text-post.svelte-1ct8euo{font-size:26px;line-height:24px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-1ct8euo{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-post.svelte-1ct8euo{font-size:22px;line-height:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-1ct8euo{width:90%;max-width:1000px}.main-text-main.svelte-1ct8euo{font-size:48px;line-height:48px;margin-bottom:15px}.main-text-post.svelte-1ct8euo{font-size:18px;line-height:23px}}@media(max-width: 767px){.image1.svelte-1ct8euo{display:none}.image1mobile.svelte-1ct8euo{display:block}.container-fluid.svelte-1ct8euo{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-1ct8euo{text-align:center;max-width:500px}.main-text-main.svelte-1ct8euo{font-size:35px;line-height:42px;margin-bottom:10px;max-width:480px}.main-text-post.svelte-1ct8euo{font-size:18px;line-height:23px;max-width:510px ;text-align:center}}",
  map: null
};
const PipelineBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pipelinebannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, IMG_SRC_H, IMG_SRC_V } = pipelinebannerData;
  if ($$props.pipelinebannerData === void 0 && $$bindings.pipelinebannerData && pipelinebannerData !== void 0)
    $$bindings.pipelinebannerData(pipelinebannerData);
  $$result.css.add(css$1);
  return `

    

<section id="${"pipelinebanner"}" class="${"bg-white d-flex align-items-center"}"><div class="${"container-fluid svelte-1ct8euo"}"><div class="${"row section-body justify-content-center my-3"}"><div id="${"title-content-wrapper"}" class="${"col-md-7 col-xl-9 svelte-1ct8euo"}"><h1 class="${"main-text-main text-dark svelte-1ct8euo"}">${escape(HEADING)}</h1>
    
                <p class="${"main-text-post lead my-0 text-dark  svelte-1ct8euo"}">${escape(DESCRIPTION)}</p></div></div>

        <div id="${"image-content-wrapper"}" class="${"d-flex justify-content-center"}">

            <img${add_attribute("src", IMG_SRC_H, 0)} alt="${""}" class="${"image1 img-fluid svelte-1ct8euo"}">

            <img${add_attribute("src", IMG_SRC_V, 0)} alt="${""}" class="${"image1mobile img-fluid svelte-1ct8euo"}"></div></div>
  </section>`;
});
var ServicesBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-1rzl79s{font-weight:bold;text-align:center}h2.svelte-1rzl79s{text-align:center;text-decoration:underline;padding-bottom:5px;text-underline-offset:3px}.container-fluid.svelte-1rzl79s{margin-top:30px;margin-bottom:60px;max-width:1300px}li.svelte-1rzl79s{text-align:center;list-style:inside;padding:0;margin:0}ul.svelte-1rzl79s{padding:0;list-style-type:none}@media(min-width: 1921px){.main-text-main.svelte-1rzl79s{font-size:80px;line-height:80px;margin-top:40px;margin-bottom:20px}li.svelte-1rzl79s{font-size:28px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-1rzl79s{font-size:76px;line-height:60px;margin-bottom:30px}li.svelte-1rzl79s{font-size:25px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-1rzl79s{font-size:60px;line-height:60px;margin-bottom:20px}li.svelte-1rzl79s{font-size:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-1rzl79s{width:90%;max-width:1000px}.main-text-main.svelte-1rzl79s{font-size:48px;line-height:48px;margin-bottom:15px}li.svelte-1rzl79s{font-size:22px}}@media(max-width: 767px){.container-fluid.svelte-1rzl79s{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-1rzl79s{text-align:center;max-width:500px}.main-text-main.svelte-1rzl79s{font-size:42px;line-height:51px;margin-bottom:5px;max-width:480px}li.svelte-1rzl79s{font-size:19px}}")();
const css = {
  code: "h1.svelte-1rzl79s{font-weight:bold;text-align:center}h2.svelte-1rzl79s{text-align:center;text-decoration:underline;padding-bottom:5px;text-underline-offset:3px}.container-fluid.svelte-1rzl79s{margin-top:30px;margin-bottom:60px;max-width:1300px}li.svelte-1rzl79s{text-align:center;list-style:inside;padding:0;margin:0}ul.svelte-1rzl79s{padding:0;list-style-type:none}@media(min-width: 1921px){.main-text-main.svelte-1rzl79s{font-size:80px;line-height:80px;margin-top:40px;margin-bottom:20px}li.svelte-1rzl79s{font-size:28px}}@media(max-width: 1920px) and (min-width: 1400px){.main-text-main.svelte-1rzl79s{font-size:76px;line-height:60px;margin-bottom:30px}li.svelte-1rzl79s{font-size:25px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-1rzl79s{font-size:60px;line-height:60px;margin-bottom:20px}li.svelte-1rzl79s{font-size:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-1rzl79s{width:90%;max-width:1000px}.main-text-main.svelte-1rzl79s{font-size:48px;line-height:48px;margin-bottom:15px}li.svelte-1rzl79s{font-size:22px}}@media(max-width: 767px){.container-fluid.svelte-1rzl79s{width:90%;max-width:1000px;margin-bottom:30px}#title-content-wrapper.svelte-1rzl79s{text-align:center;max-width:500px}.main-text-main.svelte-1rzl79s{font-size:42px;line-height:51px;margin-bottom:5px;max-width:480px}li.svelte-1rzl79s{font-size:19px}}",
  map: null
};
const ServicesBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { servicesbannerData = {} } = $$props;
  const {
    HEADING,
    SERVICES_HEADING_1,
    SERVICES_TITLE_1_1,
    SERVICES_TITLE_1_2,
    SERVICES_TITLE_1_3,
    SERVICES_TITLE_1_4,
    SERVICES_TITLE_1_5,
    SERVICES_HEADING_2,
    SERVICES_TITLE_2_1,
    SERVICES_TITLE_2_2,
    SERVICES_TITLE_2_3,
    SERVICES_HEADING_3,
    SERVICES_TITLE_3_1,
    SERVICES_TITLE_3_2,
    SERVICES_TITLE_3_3
  } = servicesbannerData;
  if ($$props.servicesbannerData === void 0 && $$bindings.servicesbannerData && servicesbannerData !== void 0)
    $$bindings.servicesbannerData(servicesbannerData);
  $$result.css.add(css);
  return `

  



<section id="${"servicesbanner"}" class="${"bg-dark d-flex align-items-center"}"><div class="${"container-fluid svelte-1rzl79s"}"><div class="${"row section-body justify-content-center my-3"}"><div id="${"title-content-wrapper"}" class="${"col-md-7 col-lg-9 svelte-1rzl79s"}"><h1 class="${"main-text-main text-light svelte-1rzl79s"}">${escape(HEADING)}</h1></div></div>

        <div class="${"row section-body justify-content-center"}"><div class="${"my-3 col-lg-6 col-xxl-4"}"><h2 class="${"text-light svelte-1rzl79s"}">${escape(SERVICES_HEADING_1)}</h2>

            <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list text-light svelte-1rzl79s"}"><li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_1_1)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_1_2)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_1_3)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_1_4)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_1_5)}</li></ul></div></div>

          <div class="${"container my-3 col-lg-6 col-xxl-4"}"><h2 class="${"text-light svelte-1rzl79s"}">${escape(SERVICES_HEADING_2)}</h2>

            
            <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list text-light svelte-1rzl79s"}"><li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_2_1)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_2_2)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_2_3)}</li></ul></div></div>

          <div class="${"container my-3 col-lg-6 col-xxl-4"}"><h2 class="${"text-light svelte-1rzl79s"}">${escape(SERVICES_HEADING_3)}</h2>

            <div class="${"industry-prev-card__desc"}"><ul class="${"industry-prev-card__list text-light svelte-1rzl79s"}"><li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_3_1)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_3_2)}</li>
                <li class="${"svelte-1rzl79s"}">${escape(SERVICES_TITLE_3_3)}</li></ul></div></div></div></div>
  </section>`;
});
export { IndustriesBanner as I, MainBanner as M, PipelineBanner as P, SeoBanner as S, StackBanner as a, ServicesBanner as b };
