<!--SCRIPT-->
<script>
import { onMount } from 'svelte';
import { beforeUpdate, afterUpdate } from 'svelte';

    import { debug } from 'svelte/internal';

export let seobannerData = {};
const { PREHEADING, HEADING, DESCRIPTION_ONE, DESCRIPTION_TWO, PORTFOLIO_BUTTON,  SERVICES_BUTTON,SEOBANNER_LANG} = seobannerData;

let language;
onMount(() => {
    language=SEOBANNER_LANG;
}); 

</script>
    


<section id="seobanner" class="bg-black d-flex align-items-center">
    <div class="container-fluid">

        <div class="row justify-content-center my-4 py-5 mx-sm-3">

            <div id="image-content-wrapper" class="col-6 col-lg-5 col-xxl-5 text-end align-middle px-4 my-auto">
                <img src="images/home/empresa de realidad virtual desarrollo virtual reality company development.png" alt="" class="img-fluid" />
            </div>

            <div id="text-content-wrapper" class="col-11 col-lg-7 col-xxl-6 text-start align-middle my-auto">

                <div class="col-12">
                    <p class="main-text-sub h3 fw-bold text-center lh-base">
                        {PREHEADING}
                    </p>
                </div>

                <div class="col-12 mb-3 mb-xxl-4">
                    <h2 class="main-text-main text-white display-2 fw-bold text-center my-4">
                        {HEADING}
                    </h2>
                </div>
                
                <div class="col-12 my-3 my-sm-4 ">
                    <h3 class="main-text-post text-white fw-normal lh-base">
                        {DESCRIPTION_ONE}
                        <br>
                        <br>
                        {DESCRIPTION_TWO}
                    </h3>
                </div>

                <div class="row justify-content-center btn-section">

                    <div class="col-9 col-sm-9 col-md-5 col-lg-5 my-2 my-sm-2" align="center">
                        {#if language == "en"}
                            <a class="portfolio-button btn-primary nav-link fw-bold py-4 px-2" href="/reel">
                                <p class="text-inside-button my-0 h4 fw-bold" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{PORTFOLIO_BUTTON} <i class="bi bi-arrow-right-short"></i> </p>
                            </a>
                        {:else}
                            <a class="portfolio-button btn-primary nav-link fw-bold py-4 px-2" href="/reel_es">
                                <p class="text-inside-button my-0 h4 fw-bold" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{PORTFOLIO_BUTTON} <i class="bi bi-arrow-right-short"></i> </p>
                            </a>
                        {/if}
                    </div>

                    <div class="col-9 col-sm-9 col-md-5 col-lg-5 my-2 my-sm-2" align="center">
                        {#if language == "en"}
                        <a class="portfolio-button btn-primary nav-link fw-bold py-4 px-2" href="/services">
                            <p class="text-inside-button my-0 h4 fw-bold" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{SERVICES_BUTTON} <i class="bi bi-arrow-right-short"></i> </p>
                        </a>
                        {:else}
                        <a class="portfolio-button btn-primary nav-link fw-bold py-4 px-2" href="/services_es">
                            <p class="text-inside-button my-0 h4 fw-bold" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{SERVICES_BUTTON} <i class="bi bi-arrow-right-short"></i> </p>
                        </a>
                        {/if}
                    </div>

                </div>

            </div>

        </div>
    </div>
  </section>


<style>


/* SCROLL MARGIN */
section{
    scroll-margin-top: 96px;
}

/*BUTTONS*/
.btn-primary{
    border-style: solid;
    border-color: rgb(0, 0, 0);
    background-color:  #deed0a;
    color: black;
    color:rgb(0, 0, 0);
    border-radius:150px;
    overflow:hidden;
    white-space: nowrap;
    border-width: 2px;
}

.btn-primary:hover{
    background-color: rgb(0, 0, 0) !important;
    color:#deed0a !important;
    text-decoration:none !important;
    border-color: #deed0a;
}

.btn-primary:hover .bi{
    display: inline-block; 
    transform: translate(5px,0px);
}

/* USAMOS ESTO PARA QUE NO SE VEA EL BORDE AZUL CUANDO HEMOS CLICKEADO EL BOTON EN MOVIL*/
.btn-primary:focus, .btn-primary:active{
    outline: none !important;
    box-shadow: none;
}

.main-text-sub{
    color: #deed0a !important; 
}

.main-text-post{
    text-align: center;

}


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    img{
    min-width:40em;
    }

    #image-content-wrapper{
        text-align: center !important;
    }

    #text-content-wrapper{
        max-width: 50rem;
    }

    #image-content-wrapper{
        max-width: 50rem;
    }

    .main-text-post{
        text-align: justify;
    }
}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    img{
    min-width:30em;
    }


    #image-content-wrapper{
        max-width: 60rem;
        text-align: center !important;

    }

    .main-text-post{
        text-align: justify;
    }

    .btn-primary{
        max-width: 18rem;
    }


}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){


    .main-text-post{
        text-align: justify;
    }

    .btn-primary{
        min-width: 13rem;
    }

    .text-inside-button{
        font-size: 1.4rem;
    }



}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    #image-content-wrapper {
        display:none;
    }

    .main-text-post{
        text-align: left;
    }

    .btn-primary{
       max-width: 18rem;
     
    }


}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px) and (min-width: 576px){


    #image-content-wrapper {
        display:none;
    }

    .main-text-post{
        text-align: left;
    }

    .btn-primary{
       max-width: 18rem;
    }


}

/* 0) VERY SMALL SIZE - SMALL PHONES <576px*/
/* IN THIS MEDIA QUERY WE USE THE RESPONSIVE MENU, NOT THE REGULAR MENU */
@media(max-width: 575px) and (min-width: 377px){


    #image-content-wrapper {
        display:none;
    }
  
    .btn-primary{
       max-width: 18rem;
    }

    .text-inside-button{
        font-size: 1rem;
    }

    .main-text-sub{
        max-width: 19rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 1rem;
    }

    .main-text-main{
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
       
    }

    .main-text-post{
        font-size: 1rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
    }

}

/* 0) VERY VERY VERY SMALL SIZE - SMALL PHONES <376px*/
@media(max-width: 376px){

    #image-content-wrapper {
        display:none;
    }

    .text-inside-button{
        font-size: 1.2rem;
    }

    .main-text-sub{
        max-width: 16rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 1rem;
    }

    .main-text-main{
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
       
    }

    .main-text-post{
        font-size: 1rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
    }


}

</style>

