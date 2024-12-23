<script>
  import "../global.css";
  import "../app.scss";
  import DATA from "../Data/data";
  import DATA_ES from "../Data/data_es";
  import { onMount } from 'svelte';

  let navbannerData = DATA.NAVBANNER_DATA;
  let language;
  

onMount(() => {
  language = navigator.language || navigator.userLanguage; 
  checkWebExplorerLanguage();
});

function checkWebExplorerLanguage(){

    if(language=="es-ES"||language=="es"){
      
      if(window.location.pathname!="/es"){
        window.location.pathname = "/es";
      }else{
        //Language is spanish and we're in /es, so change layout to spanish
        noReloadChangeToSpanish();
      }
    }else{
      if(window.location.pathname!="/"){
        window.location.pathname = "/";
      }else{
          //Language is english and we're in /, so change layout to english
          noReloadChangeToEnglish();
      }
    }
  
}

/*EN EL FUTURO, AÑADIR OPCION QUE SI EL USUARIO ELIJE LANGUAGE, AÑADIMOS UN COOKIE PARA RECORDAR ESE LANGUAGE SELECTION*/
function noReloadChangeToSpanish(){
  navbannerData = DATA_ES.NAVBANNER_DATA_ES;
  language="es";
}

function noReloadChangeToEnglish(){
  navbannerData = DATA.NAVBANNER_DATA;
  language="en";
}

</script>

<nav class="navbar sticky-top navbar-expand-sm bg-dark navbar-dark py-0">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap py-2">

      {#if language == "en"}
      <a href="/" class="navbar-brand">
        <img src="images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo.png"
        class="logo-img logo-img-normal border border-dark img-fluid py-1 px-1" alt="" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"/>
        <img src="images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo_small.png"
        class="logo-img logo-img-small border border-dark img-fluid " alt="" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"/>
      </a>
      {:else}
      <a href="/es" class="navbar-brand">
        <img src="images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo.png"
        class="logo-img logo-img-normal border border-dark img-fluid py-1 px-1" alt="" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"/>
        <img src="images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo_small.png"
        class="logo-img logo-img-small border border-dark img-fluid" alt="" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"/>
      </a>
      {/if}


          <!-- only shown from 574px or less screen size-->
      <span class="contact-section contact-mobile-version">
        {#if language == "en"}
        <a class="contact-button px-3 nav-link fw-bold" href="/contact">
          <span>{navbannerData.CONTACT}<i class="bi bi-arrow-right-short"></i></span>
        </a>
        {:else}
        <a class="contact-button px-3 nav-link fw-bold" href="/contact_es">
          <span>{navbannerData.CONTACT}<i class="bi bi-arrow-right-short"></i></span>
        </a>
        {/if}
      </span>


      <button class="navbar-toggler mx-3 px-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"  aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse mx-1 mx-md-2" id="collapsibleNavbar">
        <ul class="navbar-nav">
              
              {#if language == "en"}
              <li class="nav-item dropdown-portfolio">
                <a class="nav-link text-white mx-1" href="/reel">
                  <span class="more-nav-links" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{navbannerData.PORTFOLIO}</span>
                </a>
              </li>
              {:else}
              <li class="nav-item dropdown-portfolio">
                <a class="nav-link text-white mx-1" href="/reel_es">
                  <span class="more-nav-links" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{navbannerData.PORTFOLIO}</span>
                </a>
              </li>
              {/if}

              {#if language == "en"}
              <li class="nav-item dropdown-portfolio">
                <a class="nav-link text-white mx-1" href="/services">
                  <span class="more-nav-links" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{navbannerData.SERVICES}</span>
                </a>
              </li>
              {:else}
              <li class="nav-item dropdown-portfolio">
                <a class="nav-link text-white mx-1" href="/services_es">
                  <span class="more-nav-links" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{navbannerData.SERVICES}</span>
                </a>
              </li>
              {/if}
        
              <li class="nav-item dropdown dropdown-language">
                <a class="nav-link dropdown-toggle text-white mx-1"  id="navbarDropdown" role="button" 
                  data-bs-toggle="dropdown" aria-expanded="false">{navbannerData.LANGUAGE}</a>

                <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">

                <!-- 
                  <li>
                    <button type="button" class="btn language-btn dropdown-item text-white py-2 px-2" data-bs-toggle="collapse" 
                    data-bs-target=".navbar-collapse.show" on:click={switchToEnglish}><span class="more-nav-links">{navbannerData.LANGUAGE_ENG}</span></button>
                  </li>

                  <li>
                    <button type="button" class="btn language-btn dropdown-item text-white py-2 px-2" data-bs-toggle="collapse"
                     data-bs-target=".navbar-collapse.show" on:click={switchToSpanish}><span class="more-nav-links">{navbannerData.LANGUAGE_ES}</span></button>
                  </li> 
                -->

                  <li>
                    <a href="/" class="language-btn dropdown-item text-white py-2 px-2" on:click={noReloadChangeToEnglish}><span class="more-nav-links">{navbannerData.LANGUAGE_ENG}</span></a>
                  </li>

                  <li>
                    <a href="/es" class=" language-btn dropdown-item text-white py-2 px-2" on:click={noReloadChangeToSpanish}><span class="more-nav-links">{navbannerData.LANGUAGE_ES}</span></a>
                  </li>

                </ul>
              </li>
        </ul>
      </div>

      <!-- only shown from 575px or more screen size-->
      <div class="contact-section contact-pc-version my-auto">
        {#if language == "en"}
          <a class="contact-button px-4 mx-2 nav-link fw-bold" href="/contact">
            <span>{navbannerData.CONTACT} <i class="bi bi-arrow-right-short"></i></span>
          </a>
        {:else}
        <a class="contact-button px-4 mx-2 nav-link fw-bold" href="/contact_es">
          <span>{navbannerData.CONTACT} <i class="bi bi-arrow-right-short"></i></span>
        </a>
        {/if}
      </div>


  
  </div>
</nav>


<main>

  <slot>
    
  </slot>

</main>



<!-- ----------------MAIN FOOTER------------------- -->
<div class="pt-1 footer-basic bg-dark">
  <footer>

    {#if language == "en"}
    <a href="/">
      <div class="text-center py-2">
        <img src="images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo.png" class="footer-img border border-dark py-1 px-1 img-fluid" alt="" />
      </div>
    </a>
    {:else}
    <a href="/es">
      <div class="text-center py-2">
        <img src="images/navbarandfooter/virtual_reality_ development_agency_orbisnauta_logo.png" class="footer-img border border-dark py-1 px-1 img-fluid" alt="" />
      </div>
    </a>
    {/if}

    <div class="container">
      <div class="row">
        <div class="col-6 text-center d-flex justify-content-center align-items-center">
          <h2 class="text-white nav-item fw-bold">{navbannerData.FOOTER_HEADING_1}</h2>
        </div>
        <div class="col-6  d-flex justify-content-center align-items-center">
          <h2 class="text-white nav-item fw-bold ">{navbannerData.FOOTER_HEADING_2}</h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-6" align="center">
          <!-- <h2 class="text-white nav-item fw-bold">{navbannerData.FOOTER_HEADING_1}</h2> -->
          <ul class="nav flex-column">
            {#if language == "en"}
            <li class="nav-item mb-2"><a href="/./#seobanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_1}</a></li>
            <li class="nav-item mb-2"><a href="/./#industriesbanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_2}</a></li>
            <li class="nav-item mb-2"><a href="/./#stackbanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_3}</a></li>
            <li class="nav-item mb-2"><a href="/./#pipelinebanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_4}</a></li>
            <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-white">{navbannerData.CONTACT}</a></li>
            {:else}
            <li class="nav-item mb-2"><a href="/es#seobanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_1}</a></li>
            <li class="nav-item mb-2"><a href="/es#industriesbanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_2}</a></li>
            <li class="nav-item mb-2"><a href="/es#stackbanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_3}</a></li>
            <li class="nav-item mb-2"><a href="/es#pipelinebanner" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_1_4}</a></li>
            <li class="nav-item mb-2"><a href="/contact_es" class="nav-link p-0 text-white">{navbannerData.CONTACT}</a></li>
            {/if}
          </ul>
        </div>
  
        <div class="col-6" align="center">
          <!-- <h2 class="text-white nav-item fw-bold">{navbannerData.FOOTER_HEADING_2}</h2> -->
          <ul class="nav flex-column">
            {#if language == "en"}
            <li class="nav-item mb-2"><a href="/services/#serviceindividualbannervr1" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_1}</a></li>
            <li class="nav-item mb-2"><a href="/services/#serviceindividualbannervr2" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_2}</a></li>
            <li class="nav-item mb-2"><a href="/services/#serviceindividualbannervr3" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_3}</a></li>
            <li class="nav-item mb-2"><a href="/services/#serviceindividualbannervr4" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_4}</a></li>
            <li class="nav-item mb-2"><a href="/services/#serviceindividualbannervr5" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_5}</a></li>
            {:else}
            <li class="nav-item mb-2"><a href="/services_es#serviceindividualbannervr1" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_1}</a></li>
            <li class="nav-item mb-2"><a href="/services_es#serviceindividualbannervr2" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_2}</a></li>
            <li class="nav-item mb-2"><a href="/services_es#serviceindividualbannervr3" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_3}</a></li>
            <li class="nav-item mb-2"><a href="/services_es#serviceindividualbannervr4" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_4}</a></li>
            <li class="nav-item mb-2"><a href="/services_es#serviceindividualbannervr5" class="nav-link p-0 text-white">{navbannerData.FOOTER_TITLE_2_5}</a></li>
            {/if}
          </ul>
        </div>
  
      </div>
    </div>
    
    <div class="text-center my-3"><a href="mailto:info@orbisnauta.com" class="text-white fw-bold footer-email">info@orbisnauta.com </a></div>

    <div class="social">
      <a href="https://twitter.com/orbisnauta_">
          <i class="bi bi-twitter text-white"></i>
      </a>
      <a href="https://www.linkedin.com/company/orbisnauta">
          <i class="bi bi-linkedin text-white"></i>
      </a>
      <a href="https://www.facebook.com/orbisnauta">
          <i class="bi bi-facebook text-white"></i>
      </a>
      <a href="https://www.instagram.com/orbisnauta">
          <i class="bi bi-instagram text-white"></i>
      </a>
      <a href="https://www.youtube.com/@orbisnauta">
            <i class="bi bi-youtube text-white"></i>
      </a>
    </div>

    <div>

      <p class="copyright">

        {#if language == "en"}
        <a class="legal" href="docs/Legal_Disclaimer_Orbisnauta.pdf">
          {navbannerData.LEGAL_DISCLAIMER}
        </a>
          -  
        <a class="legal" href="docs/Privacy_Policy_Orbisnauta.pdf">
          {navbannerData.PRIVACY_POLICY}
        </a>
        -  
        <a class="legal" href="docs/Cookie_Policy_Orbisnauta.pdf">
          {navbannerData.COOKIE_POLICY}
        </a>
        {:else}
        <a class="legal" href="docs/Aviso_Legal_Orbisnauta.pdf">
          {navbannerData.LEGAL_DISCLAIMER}
        </a>
          -  
        <a class="legal" href="docs/Politica_Privacidad_Orbisnauta.pdf">
          {navbannerData.PRIVACY_POLICY}
        </a>
        -  
        <a class="legal" href="docs/Politica_Cookies_Orbisnauta.pdf">
          {navbannerData.COOKIE_POLICY}
        </a>

        {/if}
        -  Copyright Ⓒ 2017-2024 Orbisnauta  -
      </p>


    </div>
  </footer>
</div>









<style>


/*-----------------------------HEADER--------------------------------*/

p{
  text-align: center;
  margin:auto;
}

img{
  /*height: 60px;*/ /*LOGO IMAGE HEIGHT*/
  max-height: 60px;
}


.nav-item, .more-nav-links, .social, .copyright, .footer-email, .language-btn  {
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    font-family:Georgia, 'Times New Roman', Times, serif;

}


/*----------- NAV LINKS ------------*/

.logo-img:hover{
  border-color: #deed0a !important;
  border-width: 2px !important;
}

.logo-img{
  width:auto;
  height: 5rem;
  border-width: 2px !important;
  border-radius:150px;
}

.nav-link:hover, .footer-email:hover, .bi:hover, .legal:hover{
  color: #deed0a !important;
}

.navbar ul li a {
  border-radius:150px;
  overflow:hidden;
  white-space: nowrap;
  color: #000000;
}

.nav-link{
  display:inline;
}



/*----------- DROPDOWN MENU------------*/
.dropdown-menu{
    border-style: none;

  min-width: 0px;
  width: 100%;
  padding-bottom:0px;
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}

.dropdown:hover .nav-link {
  color: #deed0a !important;
}


.language-btn{
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}

.language-btn:hover{
  background-color:#343a40;
  color: #deed0a !important;
}

/*------------CONTACT BUTTON-------------*/

.contact-button{
  border-style: solid;
  border-radius:150px;
  white-space: nowrap;
  border-width: 2px; 

  background-color: rgb(0, 0, 0) !important;
  color:#deed0a !important;
  border-color: #deed0a;



}

.contact-button:hover{
  background-color:  #deed0a !important;
  color:rgb(0, 0, 0) !important;
  border-color: hsl(0, 0%, 0%, 0) !important;
  text-decoration:none !important;


}

.contact-button:hover .bi{
    display: inline-block; 
    transform: translate(5px,0px);
}



/*---------------------------FOOTER--------------------------------*/
.navbar-brand{
  margin-left: 3px;
  margin-right: 0px;
  padding: 0px 0px 0px 0px;
}

.footer-img:hover{
  border-color: #deed0a !important;
  border-width: 2px !important;
}

.footer-img{
  width:auto;
  height: 5rem;
  border-width: 2px !important;
  max-height: 60px;
  border-radius:150px;
}

.footer-basic {
  padding:20px 0;
  background-color:#ffffff;
  color:#4b4c4d;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
  
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:10px;
}

.footer-basic .social > a {
  font-size: 30px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  /*border:1px solid #ccc;*/
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}

.footer-basic .legal {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}

a{
  cursor: pointer;
}



/*------------------------------------------------------------------MEDIA QUERIES----------------------------------------------*/
/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){
  
  .contact-mobile-version{
    display:none;
  }

  .logo-img-small{
    display:none;
  }

  .contact-button{
    margin-right: 29px;
  }
  
}


/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

  .contact-mobile-version{
  display:none;
  }

  .logo-img-small{
  display:none;
  }

}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

  .contact-mobile-version{
  display:none;
  }

  .logo-img-small{
  display:none;
  }

}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){
  
  .contact-mobile-version{
  display:none;
  }

  .logo-img-small{
  display:none;
  }


}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px) and (min-width: 576px){

  .contact-mobile-version{
  display:none;
  }

  .logo-img-normal{
  display:none;
  }



}

/* 0) VERY SMALL SIZE - SMALL PHONES <576px*/
/* IN THIS MEDIA QUERY WE USE THE RESPONSIVE MENU, NOT THE REGULAR MENU */
@media(max-width: 575px)  and (min-width: 377px){

  .contact-pc-version{
    display:none;
  }
  .logo-img-normal{
  display:none;
  }

  /*
  .dropdown-portfolio{
    margin-right: 10px;
  }*/

  .dropdown-language{
    margin-bottom: 15px;
  }

  .language-btn{
    text-align:center;
    max-width: 90px;
    margin:auto;
  }


  .contact-button{
    display: inline-block;
  }

  .navbar ul li a{
    font-size: 15px;
    display: flex; 
    justify-content: center;

  }

  /*ARROW ICON AFTER THE DROPDOWN*/
  #navbarDropdown::after{
    display:flex ;
    justify-content: center;
    align-self: center;
  }

  .dropdown-menu{
    margin: 0px 0px 0px 0px;
    padding: 5px 0px 0px 0px;
  }

  .copyright{
    padding: 0px 20px 0px 20px;
    font-size:13px !important;
  }

  .legal{
    font-size:13px !important;
  }


}

/* 0) VERY VERY VERY SMALL SIZE - SMALL PHONES <412px*/
@media(max-width: 376px){

  .contact-pc-version{
    display:none;
  }
  .logo-img-normal{
    display:none;
  }

  /*
  .dropdown-portfolio{
    margin-right: 10px;
  }*/

  .dropdown-language{
    margin-bottom: 10px;
  }

  .language-btn{
    text-align:center;
    max-width: 90px;
    margin:auto;
  }

  .contact-button{
    display: inline-block;
    max-width: 11rem;
    font-size: 0.9rem;

  }

  .navbar ul li a{
    font-size: 1rem;
    display: flex; 
    justify-content: center;
  }

  /*ARROW ICON AFTER THE DROPDOWN*/
  #navbarDropdown::after{
    display:flex ;
    justify-content: center;
    align-self: center;
  }

  .dropdown-menu{
    margin: 0px 0px 0px 0px;
    padding: 5px 0px 0px 0px;
  }

  .copyright{
    padding: 0px 20px 0px 20px;
    font-size:13px !important;
  }

  .legal{
    font-size:13px !important;
  }

  .nav-link{
    font-size: 0.9rem;
  }


}





</style>