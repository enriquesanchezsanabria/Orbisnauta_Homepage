import { c as create_ssr_component, e as escape, a as add_attribute } from "./index-0fac4578.js";
var CtaBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".logo-img.svelte-12cnnjf{width:auto;height:5rem;padding-right:16px}h1.svelte-12cnnjf{font-weight:bold;text-align:center}p.svelte-12cnnjf{text-align:center}.container-fluid.svelte-12cnnjf{margin-top:25px;margin-bottom:10px}.main-text-post.svelte-12cnnjf{text-align:justify}@media(min-width: 1921px){.container-fluid.svelte-12cnnjf{margin-top:5px}.main-text-main.svelte-12cnnjf{font-size:80px;line-height:80px;margin-top:40px;margin-bottom:35px}.main-text-post.svelte-12cnnjf{font-size:30px;line-height:35px;text-align:center}}@media(max-width: 1920px) and (min-width: 1400px){.container-fluid.svelte-12cnnjf{margin-top:25px}.main-text-main.svelte-12cnnjf{font-size:76px;line-height:70px;margin-bottom:40px}.main-text-post.svelte-12cnnjf{font-size:26px;line-height:27px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-12cnnjf{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-post.svelte-12cnnjf{font-size:22px;line-height:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-12cnnjf{width:90%;max-width:1000px}.main-text-main.svelte-12cnnjf{font-size:48px;line-height:48px;margin-bottom:15px}.main-text-post.svelte-12cnnjf{font-size:18px;line-height:23px}}@media(max-width: 767px){.logo-img.svelte-12cnnjf{width:auto;height:3rem;padding-right:16px}.container-fluid.svelte-12cnnjf{width:90%;max-width:1000px;margin-bottom:10px;margin-top:19px}#title-content-wrapper.svelte-12cnnjf{text-align:center;max-width:500px}.main-text-main.svelte-12cnnjf{font-size:35px;line-height:42px;margin-bottom:10px;max-width:480px}.main-text-post.svelte-12cnnjf{font-size:18px;line-height:23px;max-width:510px }}")();
const css = {
  code: ".logo-img.svelte-12cnnjf{width:auto;height:5rem;padding-right:16px}h1.svelte-12cnnjf{font-weight:bold;text-align:center}p.svelte-12cnnjf{text-align:center}.container-fluid.svelte-12cnnjf{margin-top:25px;margin-bottom:10px}.main-text-post.svelte-12cnnjf{text-align:justify}@media(min-width: 1921px){.container-fluid.svelte-12cnnjf{margin-top:5px}.main-text-main.svelte-12cnnjf{font-size:80px;line-height:80px;margin-top:40px;margin-bottom:35px}.main-text-post.svelte-12cnnjf{font-size:30px;line-height:35px;text-align:center}}@media(max-width: 1920px) and (min-width: 1400px){.container-fluid.svelte-12cnnjf{margin-top:25px}.main-text-main.svelte-12cnnjf{font-size:76px;line-height:70px;margin-bottom:40px}.main-text-post.svelte-12cnnjf{font-size:26px;line-height:27px}}@media(max-width: 1399px) and (min-width: 992px){.main-text-main.svelte-12cnnjf{font-size:60px;line-height:60px;margin-bottom:20px}.main-text-post.svelte-12cnnjf{font-size:22px;line-height:25px}}@media(max-width: 991px) and (min-width: 768px){.container-fluid.svelte-12cnnjf{width:90%;max-width:1000px}.main-text-main.svelte-12cnnjf{font-size:48px;line-height:48px;margin-bottom:15px}.main-text-post.svelte-12cnnjf{font-size:18px;line-height:23px}}@media(max-width: 767px){.logo-img.svelte-12cnnjf{width:auto;height:3rem;padding-right:16px}.container-fluid.svelte-12cnnjf{width:90%;max-width:1000px;margin-bottom:10px;margin-top:19px}#title-content-wrapper.svelte-12cnnjf{text-align:center;max-width:500px}.main-text-main.svelte-12cnnjf{font-size:35px;line-height:42px;margin-bottom:10px;max-width:480px}.main-text-post.svelte-12cnnjf{font-size:18px;line-height:23px;max-width:510px }}",
  map: null
};
const CtaBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ctabannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, FORM_EMAIL, FORM_EMAIL_PLACEHOLDER, FORM_NAME, FORM_NAME_PLACEHOLDER, FORM_COMPANY, FORM_COMPANY_PLACEHOLDER, FORM_BUDGET, FORM_SPEC, FORM_SUBMIT } = ctabannerData;
  if ($$props.ctabannerData === void 0 && $$bindings.ctabannerData && ctabannerData !== void 0)
    $$bindings.ctabannerData(ctabannerData);
  $$result.css.add(css);
  return `<section id="${"ctabanner"}" class="${"bg-primary d-flex align-items-center"}"><div class="${"container-fluid svelte-12cnnjf"}"><div class="${"row justify-content-center my-3"}"><div id="${"title-content-wrapper"}" class="${"col-md-7 col-xl-9 svelte-12cnnjf"}"><h1 class="${"main-text-main text-light svelte-12cnnjf"}">
            ${escape(HEADING)}</h1>
      
        <p class="${"main-text-post text-light svelte-12cnnjf"}">${escape(DESCRIPTION)}</p></div></div>
    



    <div class="${"row justify-content-center my-2"}"><section id="${"contact"}"><div class="${"container-lg"}"><div class="${"row justify-content-center"}"><div class="${"col-lg-6"}"><form action="${"https://formsubmit.co/info@orbisnauta.com"}" method="${"POST"}"><label for="${"email"}" class="${"form-label text-light"}">${escape(FORM_EMAIL)}</label>
                <div class="${"input-group mb-4"}"><span class="${"input-group-text"}"><i class="${"bi bi-envelope-fill text-secondary"}"></i></span>
                  <input type="${"text"}" id="${"email"}" name="${"email"}" class="${"form-control"}"${add_attribute("placeholder", FORM_EMAIL_PLACEHOLDER, 0)}></div>

                <label for="${"name"}" class="${"form-label text-light"}">${escape(FORM_NAME)}</label>
                <div class="${"mb-4 input-group"}"><span class="${"input-group-text"}"><i class="${"bi bi-person-fill text-secondary"}"></i></span>
                  <input type="${"text"}" id="${"name"}" name="${"fullname"}" class="${"form-control"}"${add_attribute("placeholder", FORM_NAME_PLACEHOLDER, 0)}></div>

                <label for="${"company"}" class="${"form-label text-light"}">${escape(FORM_COMPANY)}</label>
                <div class="${"mb-4 input-group"}"><span class="${"input-group-text"}"><i class="${"bi bi-person-fill text-secondary"}"></i></span>
                  <input type="${"text"}" id="${"company"}" name="${"company"}" class="${"form-control"}"${add_attribute("placeholder", FORM_COMPANY_PLACEHOLDER, 0)}></div>


                <label for="${"budget"}" class="${"form-label text-light"}">${escape(FORM_BUDGET)}</label>
                <div class="${"mb-4 input-group"}"><span class="${"input-group-text"}"><i class="${"bi bi-chat-right-dots-fill text-secondary"}"></i></span>
                  <select class="${"form-select text-secondary"}" id="${"budget"}" name="${"budget"}"><option svalue="${"tentotwenty"}" selected value="${"10.000 - 20.000"}">10.000 - 20.000</option><option value="${"twentytofifty"}">20.000 - 50.000</option><option value="${"fiftytohundred"}">50.000 - 100.000</option><option value="${"morethanhundred"}">+100.000</option></select></div>
                <div class="${"mb-4 mt-5 form-floating"}"><textarea class="${"form-control"}" id="${"query"}" name="${"query"}" style="${"height: 140px"}" placeholder="${"query"}"></textarea>
                  <label for="${"query"}" class="${"text-secondary"}">${escape(FORM_SPEC)}</label></div>
                <div class="${"mb-3 text-center"}"><button type="${"submit"}" class="${"btn btn-secondary bg-light text-dark"}">${escape(FORM_SUBMIT)}</button></div>

                <div class="${"mb-1 text-center"}"><img src="${"images/virtual_reality_ development_agency_orbisnauta_logo.png"}" class="${"logo-img img-fluid svelte-12cnnjf"}" alt="${""}"></div></form></div></div></div></section></div></div>
</section>`;
});
export { CtaBanner as C };
