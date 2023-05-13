import { c as create_ssr_component, e as escape, b as each, a as add_attribute } from "./index-59524ad9.js";
var Types;
(function(Types2) {
  Types2["string"] = "string";
  Types2["array"] = "array";
  Types2["object"] = "object";
})(Types || (Types = {}));
var MQLEventMethods;
(function(MQLEventMethods2) {
  MQLEventMethods2["add"] = "addEventListener";
  MQLEventMethods2["remove"] = "removeEventListener";
})(MQLEventMethods || (MQLEventMethods = {}));
var ReelMainBanner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(min-width: 1921px){.description-container.svelte-142n2in{max-width:30rem}.heading-container.svelte-142n2in{max-width:30rem}}@media(max-width: 1920px) and (min-width: 1400px){.description-container.svelte-142n2in{max-width:30rem}.heading-container.svelte-142n2in{max-width:30rem}}@media(max-width: 1399px) and (min-width: 992px){.description-container.svelte-142n2in{max-width:23rem}.heading-container.svelte-142n2in{max-width:23rem}}@media(max-width: 991px) and (min-width: 768px){.description-container.svelte-142n2in{max-width:20rem}.heading-container.svelte-142n2in{max-width:20rem}}@media(max-width: 767px)and (min-width: 433px){.description-container.svelte-142n2in{max-width:35rem}.main-text-post.svelte-142n2in{font-size:1.4rem;text-align:center !important}.main-text-main.svelte-142n2in{text-align:center !important}}@media(max-width: 432px){.main-text-post.svelte-142n2in{font-size:1.3rem;text-align:center !important}.main-text-main.svelte-142n2in{font-weight:bold;font-size:2rem;text-align:center !important}}",
  map: null
};
const ReelMainBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mainreelbannerData = {} } = $$props;
  const { HEADING_1, DESCRIPTION_1, MAINREELBANNER_MAINTEXT_FONTSIZE, MAINREELBANNER_MAINTEXT_LINEHEIGHT } = mainreelbannerData;
  if ($$props.mainreelbannerData === void 0 && $$bindings.mainreelbannerData && mainreelbannerData !== void 0)
    $$bindings.mainreelbannerData(mainreelbannerData);
  $$result.css.add(css$1);
  return `


<section id="${"mainreelbanner"}" class="${"bg-white d-flex align-items-center"}"><div class="${"container-fluid px-0"}"><div class="${"row justify-content-center my-5 py-5 mx-3"}"><div class="${"heading-container col-12 col-md-6 col-xxl-3 align-middle my-auto mx-md-2 svelte-142n2in"}"><p class="${"main-text-main fw-bold text-end text-black display-1 svelte-142n2in"}">${escape(HEADING_1)}</p></div>

            <div class="${"description-container col-12 col-md-6 col-xxl-3 align-middle my-auto mx-md-2 svelte-142n2in"}"><h1 class="${"main-text-post text-start text-black h3 svelte-142n2in"}" display="${"justify"}">${escape(DESCRIPTION_1)}</h1></div></div></div>
</section>`;
});
var ReelTabBanner_svelte_svelte_type_style_lang = "";
const css = {
  code: "#image-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{border-radius:25px;background:rgb(0, 0, 0);border-style:solid;border-width:3px;border-color:#deed0a}.carousel-item.svelte-gcl6dt img.svelte-gcl6dt{height:78vh;max-height:40rem;border-radius:25px;object-fit:contain;object-position:center;overflow:hidden}.bg-image.svelte-gcl6dt.svelte-gcl6dt{background-image:var(--background-url);background-repeat:no-repeat;background-size:cover;background-position:center center;z-index:-1;top:0;left:0;width:100%;height:100%;background-size:cover;text-align:center}#text-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{border-radius:25px;background:rgb(0, 0, 0);border-style:solid;border-width:3px;border-color:#deed0a}.main-text-tag.svelte-gcl6dt.svelte-gcl6dt{color:#deed0a !important;font-family:Verdana, Geneva, Tahoma, sans-serif;text-transform:uppercase}.card-title.svelte-gcl6dt.svelte-gcl6dt{font-family:Verdana, Geneva, Tahoma, sans-serif}.card.svelte-gcl6dt.svelte-gcl6dt{border-radius:25px;border-style:solid;border-width:2px;border-color:#deed0a}@media(min-width: 1921px){#image-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:50rem}#text-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:50rem}.main-text-tag.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-title.svelte-gcl6dt.svelte-gcl6dt{font-size:1rem}.card-container.svelte-gcl6dt.svelte-gcl6dt{max-width:13rem}}@media(max-width: 1920px) and (min-width: 1400px){#image-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:50rem;margin-top:1rem !important}#text-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:50rem}.card-row.svelte-gcl6dt.svelte-gcl6dt{max-width:30rem;margin-left:auto;margin-right:auto}.main-text-tag.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-title.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-container.svelte-gcl6dt.svelte-gcl6dt{max-width:13rem}}@media(max-width: 1399px) and (min-width: 992px){#image-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{margin-top:1rem !important;max-width:50rem}#text-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:50rem}.card-row.svelte-gcl6dt.svelte-gcl6dt{max-width:30rem;margin-left:auto;margin-right:auto}.main-text-tag.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-title.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-container.svelte-gcl6dt.svelte-gcl6dt{max-width:10rem}}@media(max-width: 991px) and (min-width: 768px){#image-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{margin-top:1rem !important;max-width:40rem}#text-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:40rem}.card-row.svelte-gcl6dt.svelte-gcl6dt{max-width:30rem;margin-left:auto;margin-right:auto}.main-text-tag.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-title.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-container.svelte-gcl6dt.svelte-gcl6dt{max-width:10rem}.carousel-item.svelte-gcl6dt img.svelte-gcl6dt{height:58vh;max-height:20rem}}@media(max-width: 767px)and (min-width: 433px){#image-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{margin-top:1rem !important;max-width:40rem}#text-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:40rem}.card-row.svelte-gcl6dt.svelte-gcl6dt{max-width:30rem;margin-left:auto;margin-right:auto}.main-text-tag.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-title.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.card-container.svelte-gcl6dt.svelte-gcl6dt{max-width:10rem}.carousel-item.svelte-gcl6dt img.svelte-gcl6dt{height:58vh;max-height:20rem}}@media(max-width: 432px){#image-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{margin-top:1rem !important;max-width:40rem}#text-content-wrapper.svelte-gcl6dt.svelte-gcl6dt{max-width:40rem}.card-row.svelte-gcl6dt.svelte-gcl6dt{max-width:25rem;margin-left:auto;margin-right:auto}.main-text-tag.svelte-gcl6dt.svelte-gcl6dt{font-size:0.9rem}.main-text-main.svelte-gcl6dt.svelte-gcl6dt{font-size:2.1rem}.card-title.svelte-gcl6dt.svelte-gcl6dt{font-size:0.8rem}.card-container.svelte-gcl6dt.svelte-gcl6dt{max-width:10rem}.carousel-item.svelte-gcl6dt img.svelte-gcl6dt{height:58vh;max-height:20rem}}",
  map: null
};
const ReelTabBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reeltabbannerData = {} } = $$props;
  const { REEL_ID, IMG_SRC_REEL_BACKGROUND, REEL_IMAGE_QUANTITY, IMG_SRC_REEL_1, IMG_SRC_REEL_2, IMG_SRC_REEL_3, IMG_SRC_REEL_4, IMG_SRC_REEL_5, TAG1, TAG2, TAG3, TAG4, HEADING, DESCRIPTION_ONE, DESCRIPTION_TWO, STACK_TEXT, STACK_SIZE, STACK_1, IMG_SRC_STACK_1, STACK_2, IMG_SRC_STACK_2, STACK_3, IMG_SRC_STACK_3, STACK_4, IMG_SRC_STACK_4, STACK_5, IMG_SRC_STACK_5, STACK_6, IMG_SRC_STACK_6, STACK_7, IMG_SRC_STACK_7, STACK_8, IMG_SRC_STACK_8 } = reeltabbannerData;
  const IMG_SRC_REEL = [IMG_SRC_REEL_1, IMG_SRC_REEL_2, IMG_SRC_REEL_3, IMG_SRC_REEL_4, IMG_SRC_REEL_5];
  const SRC_STACK = [STACK_1, STACK_2, STACK_3, STACK_4, STACK_5, STACK_6, STACK_7, STACK_8];
  const IMG_SRC_STACK = [
    IMG_SRC_STACK_1,
    IMG_SRC_STACK_2,
    IMG_SRC_STACK_3,
    IMG_SRC_STACK_4,
    IMG_SRC_STACK_5,
    IMG_SRC_STACK_6,
    IMG_SRC_STACK_7,
    IMG_SRC_STACK_8
  ];
  let imgUrl = IMG_SRC_REEL_BACKGROUND;
  if ($$props.reeltabbannerData === void 0 && $$bindings.reeltabbannerData && reeltabbannerData !== void 0)
    $$bindings.reeltabbannerData(reeltabbannerData);
  $$result.css.add(css);
  return `



<div class="${"bg-image svelte-gcl6dt"}" style="${"--background-url: url(" + escape(imgUrl, true) + ")"}"><section id="${"reeltabbanner"}" class="${"d-flex align-items-center"}"><div class="${"container-fluid"}"><div class="${"row justify-content-center my-4 py-4 mx-2"}">
                <div id="${"text-content-wrapper"}" class="${"col-11 col-lg-6 col-xxl-5 text-start align-middle my-auto mx-2 svelte-gcl6dt"}"><div class="${"row"}"><div class="${"row-fluid d-flex justify-content-between text-center my-2 mt-lg-3"}"><div class="${"col-12"}"><ul class="${"list-inline mb-0"}"><li class="${"list-inline-item main-text-tag fw-bold h6 mb-0 svelte-gcl6dt"}">- ${escape(TAG1)}</li>
                                    
                                    <li class="${"list-inline-item main-text-tag fw-bold h6 mb-0 svelte-gcl6dt"}">- ${escape(TAG2)}</li>
                                    
                                    <li class="${"list-inline-item main-text-tag fw-bold h6 mb-0 svelte-gcl6dt"}">- ${escape(TAG3)}</li>
                                    
                                    <li class="${"list-inline-item main-text-tag fw-bold h6 mb-0 svelte-gcl6dt"}">- ${escape(TAG4)}</li></ul></div></div>
            
                        <h3 class="${"main-text-main text-white display-2 text-center my-2 svelte-gcl6dt"}">${escape(HEADING)}</h3>
            
                        <h2 class="${"main-text-post text-white h4 text-center my-2"}">${escape(DESCRIPTION_ONE)}</h2>
                        
                        
                        <div class="${"card-row row section-body justify-content-center card-wrapper my-2 my-lg-3 mx-auto svelte-gcl6dt"}">${each(Array(STACK_SIZE), (_, counterthree) => {
    return `<div class="${"card-container col-6 col-sm-4 col-md-4 col-lg-4 my-2 px-1 px-xl-2 svelte-gcl6dt"}"><div class="${"card h-100 svelte-gcl6dt"}"><div class="${"card-body text-center px-2 py-2"}"><img${add_attribute("src", IMG_SRC_STACK[counterthree], 0)} alt="${""}" class="${"img-fluid icon-image"}">
                                        <h6 class="${"card-title fw-bold svelte-gcl6dt"}">${escape(SRC_STACK[counterthree])}</h6>
                                    </div></div>
                                </div>`;
  })}</div></div></div>

                
                <div id="${"image-content-wrapper"}" class="${"col-11 col-lg-6 col-xxl-7 text-end align-middle my-auto mx-2 svelte-gcl6dt"}"><div id="${"carouselExampleIndicators" + escape(REEL_ID, true)}" class="${"carousel slide carousel-pc svelte-gcl6dt"}" data-bs-ride="${"carousel"}"><div class="${"carousel-indicators"}">${each(Array(REEL_IMAGE_QUANTITY), (_, counter) => {
    return `${counter == 0 ? `<button type="${"button"}" data-bs-target="${"#carouselExampleIndicators" + escape(REEL_ID, true)}"${add_attribute("data-bs-slide-to", counter, 0)} class="${"active"}" aria-label="${"Slide " + escape(counter, true)}"></button>` : `<button type="${"button"}" data-bs-target="${"#carouselExampleIndicators" + escape(REEL_ID, true)}"${add_attribute("data-bs-slide-to", counter, 0)} aria-label="${"Slide " + escape(counter, true)}"></button>`}`;
  })}</div>

                        <div class="${"carousel-inner"}">${each(Array(REEL_IMAGE_QUANTITY), (_, countertwo) => {
    return `${countertwo == 0 ? `<div class="${"carousel-item active svelte-gcl6dt"}"><img${add_attribute("src", IMG_SRC_REEL[countertwo], 0)} class="${"d-block w-100 svelte-gcl6dt"}" alt="${"..."}">
                                    </div>` : `<div class="${"carousel-item svelte-gcl6dt"}"><img${add_attribute("src", IMG_SRC_REEL[countertwo], 0)} class="${"d-block w-100 svelte-gcl6dt"}" alt="${"..."}">
                                    </div>`}`;
  })}</div>

                        <button class="${"carousel-control-prev"}" type="${"button"}" data-bs-target="${"#carouselExampleIndicators" + escape(REEL_ID, true)}" data-bs-slide="${"prev"}"><span class="${"carousel-control-prev-icon"}" aria-hidden="${"true"}"></span>
                            <span class="${"visually-hidden"}">Previous</span></button>
                        <button class="${"carousel-control-next"}" type="${"button"}" data-bs-target="${"#carouselExampleIndicators" + escape(REEL_ID, true)}" data-bs-slide="${"next"}"><span class="${"carousel-control-next-icon"}" aria-hidden="${"true"}"></span>
                            <span class="${"visually-hidden"}">Next</span></button></div></div></div></div></section>

</div>`;
});
export { ReelMainBanner as R, ReelTabBanner as a };
