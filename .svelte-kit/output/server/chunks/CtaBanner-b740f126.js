import { c as create_ssr_component, e as escape, a as add_attribute } from "./index-59524ad9.js";
var CtaBanner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-check-label.svelte-yh8pbe.svelte-yh8pbe,.form-control.svelte-yh8pbe.svelte-yh8pbe,.form-label.svelte-yh8pbe.svelte-yh8pbe{font-family:Georgia, 'Times New Roman', Times, serif}.btn.svelte-yh8pbe.svelte-yh8pbe{border-style:solid;border-color:rgb(0, 0, 0);background-color:#deed0a;color:black;border-radius:150px;overflow:hidden;white-space:nowrap;border-width:2px}.btn.svelte-yh8pbe.svelte-yh8pbe:hover{background-color:rgb(0, 0, 0) !important;color:#deed0a !important;text-decoration:none !important;border-color:#deed0a}.btn.svelte-yh8pbe:hover .bi.svelte-yh8pbe{display:inline-block;transform:translate(5px,0px)}.btn.svelte-yh8pbe.svelte-yh8pbe:focus,.btn.svelte-yh8pbe.svelte-yh8pbe:active{outline:none !important;box-shadow:none}.input-group-text.svelte-yh8pbe.svelte-yh8pbe,.form-radius.svelte-yh8pbe.svelte-yh8pbe,.form-select.svelte-yh8pbe.svelte-yh8pbe,.form-specification.svelte-yh8pbe.svelte-yh8pbe,.legal-box.svelte-yh8pbe.svelte-yh8pbe,.legal-check.svelte-yh8pbe.svelte-yh8pbe{border-radius:25px}.form-control.svelte-yh8pbe.svelte-yh8pbe{border-radius:15px}.main-text-main.svelte-yh8pbe.svelte-yh8pbe{color:#deed0a}.form-check.svelte-yh8pbe.svelte-yh8pbe{display:flex;align-self:center;justify-content:center}.legal-text.svelte-yh8pbe.svelte-yh8pbe,.form-check-label.svelte-yh8pbe.svelte-yh8pbe{font-size:0.8rem }@media(min-width: 1921px){#title-content-wrapper.svelte-yh8pbe.svelte-yh8pbe{max-width:80rem}#form-content-wrapper.svelte-yh8pbe.svelte-yh8pbe{max-width:40rem}}@media(max-width: 1920px) and (min-width: 1400px){#title-content-wrapper.svelte-yh8pbe.svelte-yh8pbe{max-width:80rem}#form-content-wrapper.svelte-yh8pbe.svelte-yh8pbe{max-width:40rem}}@media(max-width: 1399px) and (min-width: 992px){#title-content-wrapper.svelte-yh8pbe.svelte-yh8pbe{max-width:75rem}}@media(max-width: 991px) and (min-width: 768px){}@media(max-width: 767px) and (min-width: 377px){.form-check-label.svelte-yh8pbe.svelte-yh8pbe{font-size:0.7rem ;text-align:center}}@media(max-width: 376px){.form-check-label.svelte-yh8pbe.svelte-yh8pbe{font-size:0.7rem ;text-align:center}.main-text-main.svelte-yh8pbe.svelte-yh8pbe{font-size:2rem}.main-text-post.svelte-yh8pbe.svelte-yh8pbe{font-size:1rem}.form-label.svelte-yh8pbe.svelte-yh8pbe,.form-control.svelte-yh8pbe.svelte-yh8pbe{font-size:1rem}.legal-text.svelte-yh8pbe.svelte-yh8pbe{font-size:0.6rem}}",
  map: null
};
const CtaBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ctabannerData = {} } = $$props;
  const { HEADING, DESCRIPTION, FORM_MANDATORY, FORM_EMAIL, FORM_EMAIL_PLACEHOLDER, FORM_NAME, FORM_NAME_PLACEHOLDER, FORM_COMPANY, FORM_COMPANY_PLACEHOLDER, FORM_BUDGET, FORM_SPEC, FORM_SUBMIT, LEGAL_MESSAGE_1b, LEGAL_MESSAGE_2b, LEGAL_MESSAGE_3, LEGAL_MESSAGE_4b, LEGAL_MESSAGE_5, LEGAL_MESSAGE_6b, LEGAL_MESSAGE_7, LEGAL_MESSAGE_8b, LEGAL_MESSAGE_9, LEGAL_MESSAGE_10b, LEGAL_MESSAGE_11, LEGAL_MESSAGE_12b, LEGAL_MESSAGE_13, LEGAL_MESSAGE_14, LEGAL_MESSAGE_15b } = ctabannerData;
  if ($$props.ctabannerData === void 0 && $$bindings.ctabannerData && ctabannerData !== void 0)
    $$bindings.ctabannerData(ctabannerData);
  $$result.css.add(css);
  return `<section id="${"ctabanner"}" class="${"bg-black d-flex align-items-center"}"><div class="${"container-fluid my-2 my-md-3"}"><div class="${"row justify-content-center mt-4"}"><div id="${"title-content-wrapper"}" class="${"col-12 col-sm-10 col-md-10 col-xl-12 col-xxl-11 my-2 my-md-1  svelte-yh8pbe"}"><h1 class="${"main-text-main text-center fw-bold my-1 my-md-3 display-2 svelte-yh8pbe"}">${escape(HEADING)}</h1>
        <h2 class="${"main-text-post text-center text-light my-1 my-md-3 lh-base  svelte-yh8pbe"}">${escape(DESCRIPTION)}</h2></div></div>
    
    <div class="${"row justify-content-center"}"><div id="${"form-content-wrapper"}" class="${"col-12 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-5 all-form svelte-yh8pbe"}"><form action="${"https://formsubmit.co/83e179bcf98635a439c6b9420b270ab2"}" method="${"POST"}"><div class="${"formdiv my-1 my-sm-2"}"><label for="${"email"}" class="${"form-label my-1 text-light svelte-yh8pbe"}">${escape(FORM_EMAIL)} *(${escape(FORM_MANDATORY)})</label>
            <div class="${"input-group"}"><span class="${"input-group-text svelte-yh8pbe"}"><i class="${"bi bi-envelope-fill text-secondary"}"></i></span>
              <input type="${"text"}" id="${"email"}" name="${"email"}" class="${"form-control form-radius svelte-yh8pbe"}"${add_attribute("placeholder", FORM_EMAIL_PLACEHOLDER, 0)} required></div></div>

          <div class="${"formdiv my-1 my-sm-2"}"><label for="${"name"}" class="${"form-label my-1 text-light svelte-yh8pbe"}">${escape(FORM_NAME)} *</label>
            <div class="${"input-group"}"><span class="${"input-group-text svelte-yh8pbe"}"><i class="${"bi bi-person-fill text-secondary"}"></i></span>
              <input type="${"text"}" id="${"name"}" name="${"fullname"}" class="${"form-control form-radius svelte-yh8pbe"}"${add_attribute("placeholder", FORM_NAME_PLACEHOLDER, 0)} required></div></div>




          <div class="${"collapse multi-collapse svelte-yh8pbe"}" id="${"contactCollapseExample"}"><div class="${"formdiv my-1 my-sm-2"}"><label for="${"company"}" class="${"form-label my-1 text-light svelte-yh8pbe"}">${escape(FORM_COMPANY)}</label>
              <div class="${"input-group"}"><span class="${"input-group-text svelte-yh8pbe"}"><i class="${"bi bi-person-fill text-secondary"}"></i></span>
                <input type="${"text"}" id="${"company"}" name="${"company"}" class="${"form-control form-radius svelte-yh8pbe"}"${add_attribute("placeholder", FORM_COMPANY_PLACEHOLDER, 0)}></div></div>
  
            <div class="${"formdiv my-1 my-sm-2"}"><label for="${"budget"}" class="${"form-label my-1 text-light svelte-yh8pbe"}">${escape(FORM_BUDGET)} *</label>
              <div class="${"input-group"}"><span class="${"input-group-text svelte-yh8pbe"}"><i class="${"bi bi-chat-right-dots-fill text-secondary"}"></i></span>
                <select class="${"form-select text-secondary form-radius svelte-yh8pbe"}" id="${"budget"}" name="${"budget"}" required><option svalue="${"tentotwenty"}" selected value="${"10.000 - 20.000"}">10.000 - 20.000</option><option value="${"twentytofifty"}">20.000 - 50.000</option><option value="${"fiftytohundred"}">50.000 - 100.000</option><option value="${"morethanhundred"}">+100.000</option></select></div></div>
  
            <div class="${"formdiv my-1 my-sm-2"}"><label for="${"query"}" class="${"form-label my-1 text-light svelte-yh8pbe"}">${escape(FORM_SPEC)}</label>
                <div class="${"specification-form"}"><textarea class="${"form-control form-specification px-3 pb-5 svelte-yh8pbe"}" name="${"specification"}" style="${"height: 140px"}"></textarea></div></div></div>
        
          <div class="${"row form-check-row justify-content-center mt-3 mb-2 mt-xs-4 mb-xs-3"}"><div class="${"col-11 justify-content-center"}"><div class="${"form-check svelte-yh8pbe"}"><input class="${"form-check-input px-2 my-2"}" type="${"checkbox"}" value="${""}" id="${"flexCheckChecked"}" ${""}>
                <label class="${"form-check-label legal-check text-white mb-0 py-2 px-2 h6 svelte-yh8pbe"}" for="${"flexCheckChecked"}">${escape(LEGAL_MESSAGE_14)}
                  <a href="${"docs/Politica_Privacidad_Orbisnauta.pdf"}"><strong>${escape(LEGAL_MESSAGE_15b)}</strong></a></label></div></div></div>

          <div class="${"text-center my-1 mb-2"}"><button ${"disabled"} type="${"submit"}" class="${"btn py-2 px-5 py-sm-3 svelte-yh8pbe"}"><span class="${"text-inside-button my-0 h4 fw-bold"}">${escape(FORM_SUBMIT)}
                <i class="${"bi bi-arrow-right-short svelte-yh8pbe"}"></i></span></button></div>

          <div class="${"legal-form form-floating mt-4 mb-4 my-sm-4"}"><div class="${"legal-box svelte-yh8pbe"}"><p class="${"legal-text text-white text-justify mx-2 my-1 h6 svelte-yh8pbe"}"><strong><u>${escape(LEGAL_MESSAGE_1b)}</u></strong> - <strong>${escape(LEGAL_MESSAGE_2b)}</strong>${escape(LEGAL_MESSAGE_3)}<strong>${escape(LEGAL_MESSAGE_4b)}</strong>${escape(LEGAL_MESSAGE_5)}<strong>${escape(LEGAL_MESSAGE_6b)}</strong>${escape(LEGAL_MESSAGE_7)}<strong>${escape(LEGAL_MESSAGE_8b)}</strong>${escape(LEGAL_MESSAGE_9)}<strong>${escape(LEGAL_MESSAGE_10b)}</strong>${escape(LEGAL_MESSAGE_11)}
                <a href="${"docs/Politica_Privacidad_Orbisnauta.pdf"}"><strong>${escape(LEGAL_MESSAGE_12b)}</strong></a> ${escape(LEGAL_MESSAGE_13)}</p></div></div></form></div></div></div>
</section>`;
});
export { CtaBanner as C };
