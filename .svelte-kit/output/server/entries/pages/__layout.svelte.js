import { c as create_ssr_component, e as escape } from "../../chunks/index-59524ad9.js";
import { M as MOCK_DATA } from "../../chunks/data-a61deb9a.js";
var global = "";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{text-align:center;margin:auto}img.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{max-height:60px}.nav-item.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt,.more-nav-links.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt,.social.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt,.copyright.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt,.footer-email.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt,.language-btn.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{font-family:Georgia, 'Times New Roman', Times, serif}.logo-img.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover{border-color:#deed0a !important;border-width:2px !important}.logo-img.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{width:auto;height:5rem;border-width:2px !important;border-radius:150px}.nav-link.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover,.footer-email.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover,.bi.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover,.legal.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover{color:#deed0a !important}.navbar.svelte-1n39ubt ul.svelte-1n39ubt li a.svelte-1n39ubt{border-radius:150px;overflow:hidden;white-space:nowrap;color:#000000}.nav-link.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:inline}.dropdown-menu.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{border-style:none;min-width:0px;width:100%;padding-bottom:0px;display:none}.dropdown.svelte-1n39ubt:hover .dropdown-menu.svelte-1n39ubt.svelte-1n39ubt{display:block;margin-top:0}.dropdown.svelte-1n39ubt:hover .nav-link.svelte-1n39ubt.svelte-1n39ubt{color:#deed0a !important}.language-btn.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{text-align:center;font-family:Verdana, Geneva, Tahoma, sans-serif}.language-btn.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover{background-color:#343a40;color:#deed0a !important}.contact-button.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{border-style:solid;border-radius:150px;white-space:nowrap;border-width:2px;background-color:rgb(0, 0, 0) !important;color:#deed0a !important;border-color:#deed0a}.contact-button.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover{background-color:#deed0a !important;color:rgb(0, 0, 0) !important;border-color:hsl(0, 0%, 0%, 0) !important;text-decoration:none !important}.contact-button.svelte-1n39ubt:hover .bi.svelte-1n39ubt.svelte-1n39ubt{display:inline-block;transform:translate(5px,0px)}.navbar-brand.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{margin-left:3px;margin-right:0px;padding:0px 0px 0px 0px}.footer-img.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt:hover{border-color:#deed0a !important;border-width:2px !important}.footer-img.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{width:auto;height:5rem;border-width:2px !important;max-height:60px;border-radius:150px}.footer-basic.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{padding:20px 0;background-color:#ffffff;color:#4b4c4d}.footer-basic.svelte-1n39ubt ul.svelte-1n39ubt a.svelte-1n39ubt{color:inherit;text-decoration:none;opacity:0.8}.footer-basic.svelte-1n39ubt ul.svelte-1n39ubt a.svelte-1n39ubt:hover{opacity:1}.footer-basic.svelte-1n39ubt .social.svelte-1n39ubt.svelte-1n39ubt{text-align:center;padding-bottom:10px}.footer-basic.svelte-1n39ubt .social.svelte-1n39ubt>a.svelte-1n39ubt{font-size:30px;width:40px;height:40px;line-height:40px;display:inline-block;text-align:center;border-radius:50%;margin:0 8px;color:inherit;opacity:0.75}.footer-basic.svelte-1n39ubt .social.svelte-1n39ubt>a.svelte-1n39ubt:hover{opacity:0.9}.footer-basic.svelte-1n39ubt .copyright.svelte-1n39ubt.svelte-1n39ubt{margin-top:15px;text-align:center;font-size:13px;color:#aaa;margin-bottom:0}.footer-basic.svelte-1n39ubt .legal.svelte-1n39ubt.svelte-1n39ubt{margin-top:15px;text-align:center;font-size:13px;color:#aaa;margin-bottom:0}a.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{cursor:pointer}@media(min-width: 1921px){.contact-mobile-version.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.logo-img-small.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.contact-button.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{margin-right:29px}}@media(max-width: 1920px) and (min-width: 1400px){.contact-mobile-version.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.logo-img-small.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}}@media(max-width: 1399px) and (min-width: 992px){.contact-mobile-version.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.logo-img-small.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}}@media(max-width: 991px) and (min-width: 768px){.contact-mobile-version.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.logo-img-small.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}}@media(max-width: 767px) and (min-width: 576px){.contact-mobile-version.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.logo-img-normal.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}}@media(max-width: 575px)  and (min-width: 377px){.contact-pc-version.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.logo-img-normal.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.dropdown-language.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{margin-bottom:15px}.language-btn.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{text-align:center;max-width:90px;margin:auto}.contact-button.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:inline-block}.navbar.svelte-1n39ubt ul.svelte-1n39ubt li a.svelte-1n39ubt{font-size:15px;display:flex;justify-content:center}#navbarDropdown.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt::after{display:flex ;justify-content:center;align-self:center}.dropdown-menu.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{margin:0px 0px 0px 0px;padding:5px 0px 0px 0px}.copyright.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{padding:0px 20px 0px 20px;font-size:13px !important}.legal.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{font-size:13px !important}}@media(max-width: 376px){.contact-pc-version.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.logo-img-normal.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:none}.dropdown-language.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{margin-bottom:10px}.language-btn.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{text-align:center;max-width:90px;margin:auto}.contact-button.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{display:inline-block;max-width:11rem;font-size:0.9rem}.navbar.svelte-1n39ubt ul.svelte-1n39ubt li a.svelte-1n39ubt{font-size:1rem;display:flex;justify-content:center}#navbarDropdown.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt::after{display:flex ;justify-content:center;align-self:center}.dropdown-menu.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{margin:0px 0px 0px 0px;padding:5px 0px 0px 0px}.copyright.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{padding:0px 20px 0px 20px;font-size:13px !important}.legal.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{font-size:13px !important}.nav-link.svelte-1n39ubt.svelte-1n39ubt.svelte-1n39ubt{font-size:0.9rem}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navbannerData = MOCK_DATA.NAVBANNER_DATA;
  $$result.css.add(css);
  return `<nav class="${"navbar sticky-top navbar-expand-sm bg-dark navbar-dark py-0 svelte-1n39ubt"}"><div class="${"mx-auto d-sm-flex d-block flex-sm-nowrap py-2"}">${`<a href="${"/es"}" class="${"navbar-brand svelte-1n39ubt"}"><img src="${"images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo.png"}" class="${"logo-img logo-img-normal border border-dark img-fluid py-1 px-1 svelte-1n39ubt"}" alt="${""}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}">
        <img src="${"images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo_small.png"}" class="${"logo-img logo-img-small border border-dark img-fluid svelte-1n39ubt"}" alt="${""}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}"></a>`}


          
      <span class="${"contact-section contact-mobile-version svelte-1n39ubt"}">${`<a class="${"contact-button px-3 nav-link fw-bold svelte-1n39ubt"}" href="${"/contact_es"}"><span>${escape(navbannerData.CONTACT)}<i class="${"bi bi-arrow-right-short svelte-1n39ubt"}"></i></span></a>`}</span>


      <button class="${"navbar-toggler mx-3 px-1"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapsibleNavbar"}" aria-controls="${"collapsibleNavbar"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>

      <div class="${"collapse navbar-collapse mx-1 mx-md-2"}" id="${"collapsibleNavbar"}"><ul class="${"navbar-nav svelte-1n39ubt"}">${`<li class="${"nav-item dropdown-portfolio svelte-1n39ubt"}"><a class="${"nav-link text-white mx-1 svelte-1n39ubt"}" href="${"/reel_es"}"><span class="${"more-nav-links svelte-1n39ubt"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}">${escape(navbannerData.PORTFOLIO)}</span></a></li>`}

              ${`<li class="${"nav-item dropdown-portfolio svelte-1n39ubt"}"><a class="${"nav-link text-white mx-1 svelte-1n39ubt"}" href="${"/services_es"}"><span class="${"more-nav-links svelte-1n39ubt"}" data-bs-toggle="${"collapse"}" data-bs-target="${".navbar-collapse.show"}">${escape(navbannerData.SERVICES)}</span></a></li>`}
        
              <li class="${"nav-item dropdown dropdown-language svelte-1n39ubt"}"><a class="${"nav-link dropdown-toggle text-white mx-1 svelte-1n39ubt"}" id="${"navbarDropdown"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">${escape(navbannerData.LANGUAGE)}</a>

                <ul class="${"dropdown-menu bg-dark svelte-1n39ubt"}" aria-labelledby="${"navbarDropdown"}">

                  <li><a href="${"/"}" class="${"language-btn dropdown-item text-white py-2 px-2 svelte-1n39ubt"}"><span class="${"more-nav-links svelte-1n39ubt"}">${escape(navbannerData.LANGUAGE_ENG)}</span></a></li>

                  <li><a href="${"/es"}" class="${"language-btn dropdown-item text-white py-2 px-2 svelte-1n39ubt"}"><span class="${"more-nav-links svelte-1n39ubt"}">${escape(navbannerData.LANGUAGE_ES)}</span></a></li></ul></li></ul></div>

      
      <div class="${"contact-section contact-pc-version my-auto svelte-1n39ubt"}">${`<a class="${"contact-button px-4 mx-2 nav-link fw-bold svelte-1n39ubt"}" href="${"/contact_es"}"><span>${escape(navbannerData.CONTACT)} <i class="${"bi bi-arrow-right-short svelte-1n39ubt"}"></i></span></a>`}</div></div></nav>


<main>${slots.default ? slots.default({}) : `
    
  `}</main>




<div class="${"pt-1 footer-basic bg-dark svelte-1n39ubt"}"><footer>${`<a href="${"/es"}" class="${"svelte-1n39ubt"}"><div class="${"text-center py-2"}"><img src="${"images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo.png"}" class="${"footer-img border border-dark py-1 px-1 img-fluid svelte-1n39ubt"}" alt="${""}"></div></a>`}

    <div class="${"container"}"><div class="${"row"}"><div class="${"col-6 text-center d-flex justify-content-center align-items-center"}"><h2 class="${"text-white nav-item fw-bold svelte-1n39ubt"}">${escape(navbannerData.FOOTER_HEADING_1)}</h2></div>
        <div class="${"col-6 d-flex justify-content-center align-items-center"}"><h2 class="${"text-white nav-item fw-bold  svelte-1n39ubt"}">${escape(navbannerData.FOOTER_HEADING_2)}</h2></div></div></div>

    <div class="${"container"}"><div class="${"row"}"><div class="${"col-6"}" align="${"center"}">
          <ul class="${"nav flex-column svelte-1n39ubt"}">${`<li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/es#seobanner"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_1_1)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/es#industriesbanner"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_1_2)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/es#stackbanner"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_1_3)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/es#pipelinebanner"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_1_4)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/contact_es"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.CONTACT)}</a></li>`}</ul></div>
  
        <div class="${"col-6"}" align="${"center"}">
          <ul class="${"nav flex-column svelte-1n39ubt"}">${`<li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/services_es#serviceindividualbannervr1"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_2_1)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/services_es#serviceindividualbannervr2"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_2_2)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/services_es#serviceindividualbannervr3"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_2_3)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/services_es#serviceindividualbannervr4"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_2_4)}</a></li>
            <li class="${"nav-item mb-2 svelte-1n39ubt"}"><a href="${"/services_es#serviceindividualbannervr5"}" class="${"nav-link p-0 text-white svelte-1n39ubt"}">${escape(navbannerData.FOOTER_TITLE_2_5)}</a></li>`}</ul></div></div></div>
    
    <div class="${"text-center my-3"}"><a href="${"mailto:info@orbisnauta.com"}" class="${"text-white fw-bold footer-email svelte-1n39ubt"}">info@orbisnauta.com </a></div>

    <div class="${"social svelte-1n39ubt"}"><a href="${"https://twitter.com/orbisnauta_"}" class="${"svelte-1n39ubt"}"><i class="${"bi bi-twitter text-white svelte-1n39ubt"}"></i></a>
      <a href="${"https://www.linkedin.com/company/orbisnauta"}" class="${"svelte-1n39ubt"}"><i class="${"bi bi-linkedin text-white svelte-1n39ubt"}"></i></a>
      <a href="${"https://www.facebook.com/orbisnauta"}" class="${"svelte-1n39ubt"}"><i class="${"bi bi-facebook text-white svelte-1n39ubt"}"></i></a>
      <a href="${"https://www.instagram.com/orbisnauta"}" class="${"svelte-1n39ubt"}"><i class="${"bi bi-instagram text-white svelte-1n39ubt"}"></i></a>
      <a href="${"https://www.youtube.com/@orbisnauta"}" class="${"svelte-1n39ubt"}"><i class="${"bi bi-youtube text-white svelte-1n39ubt"}"></i></a></div>

    <div><p class="${"copyright svelte-1n39ubt"}">${`<a class="${"legal svelte-1n39ubt"}" href="${"docs/Aviso_Legal_Orbisnauta.pdf"}">${escape(navbannerData.LEGAL_DISCLAIMER)}</a>
          -  
        <a class="${"legal svelte-1n39ubt"}" href="${"docs/Politica_Privacidad_Orbisnauta.pdf"}">${escape(navbannerData.PRIVACY_POLICY)}</a>
        -  
        <a class="${"legal svelte-1n39ubt"}" href="${"docs/Politica_Cookies_Orbisnauta.pdf"}">${escape(navbannerData.COOKIE_POLICY)}</a>`}
        -  Copyright \u24B8 2017-2024 Orbisnauta  -
      </p></div></footer>
</div>`;
});
export { _layout as default };
