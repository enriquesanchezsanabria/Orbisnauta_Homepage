<!--SCRIPT-->
<script>
import { onMount } from 'svelte';

export let ctasmallbannerData = {};
  const { SUB_HEADING,HEADING_1, HEADING_12,HEADING_13,HEADING_14, CTASMALLCONTACTBUTTON,  CTASMALLBANNER_LANG
} = ctasmallbannerData;

let language;
onMount(() => {
    language= CTASMALLBANNER_LANG;
}); 


</script>

<section id="ctasmallbanner" class="bg-black d-flex align-items-center">
    <div class="container-fluid ">

        <div class="row justify-content-center my-4 py-5 mx-sm-3">

            <div id="content-wrapper" class="col-12 col-md-11 col-lg-12 col-xl-10 col-xxl-7" align="center">

                <div class="col-12 my-2">
                    <p class="main-text-sub my-0 fw-bold h3 text-center" align="center">
                        {SUB_HEADING}
                    </p>
                </div>

                <div class="col-12">
                    <h2 class="main-text-main text-white my-0 my-xxl-3 pb-xxl-2 display-3 lh-base">
                        {HEADING_1}
                        <br>
                        <span class="fw-bold heading-12">{HEADING_12}</span>
                        <br>
                        {HEADING_13}<span class="fw-bold">{HEADING_14}</span>.
                    </h2> 
                </div>

                <div class="row contact-button-row justify-content-center my-4 my-md-3 my-lg-4 mt-xxl-4">
                    <div class="col-12">
                        {#if language == "en"}
                        <a class="btn-primary nav-link py-4 px-2 py-md-4 px-md-2" href="/contact">
                        <p class="text-inside-button my-0 h4 fw-bold" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{CTASMALLCONTACTBUTTON} <i class="bi bi-arrow-right-short"></i> </p>
                        </a>
                        {:else}
                        <a class="btn-primary nav-link py-4 px-2 py-md-4 px-md-2" href="/contact_es">
                            <p class="text-inside-button my-0 h4 fw-bold" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{CTASMALLCONTACTBUTTON} <i class="bi bi-arrow-right-short"></i> </p>
                        </a>
                        {/if}
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</section>
  
<style>

.heading-12{
    color:#deed0a;

}

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


.main-text-sub {
    color: #deed0a;  
}


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    #content-wrapper{
        /* max-width: 50rem; */
    }

    .contact-button-row{
        max-width: 15rem ;

    }
    .main-text-main{
      /* max-width: 20rem; */
    }

    .main-text-sub{
        /* font-size: 35px;
        text-underline-offset: 13px; */
    }

    .portfolio-button{
        /* font-size: 30px; */
    }

}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    #content-wrapper{
        min-width: 60rem;
    }

    .contact-button-row{
        max-width: 15rem ;

    }
    .main-text-main{
        /* font-size: 86px;
        line-height: 90px; */
    }

    .main-text-sub{
        /* font-size: 23px;
        text-underline-offset: 7px; */
    }

    .portfolio-button{
        /* font-size: 23px; */
    }

}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

    #content-wrapper{
        min-width: 50rem;
    }

    .contact-button-row{
        max-width: 15rem ;

    }
    .main-text-main{
        /* font-size: 60px;
        line-height: 60px; */
    }

    .main-text-sub{
        /* font-size: 17px;
        text-underline-offset: 5px; */
    }

    .portfolio-button{
        /* font-size: 20px; */
    }

}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    #content-wrapper{
        min-width: 45rem;
    }

    .contact-button-row{
        max-width: 15rem ;

    }


    .main-text-main{
        /* font-size: 48px;
        line-height: 48px; */
    }

    .main-text-sub{
        /* font-size: 17px;
        text-underline-offset: 5px; */
    }

    .portfolio-button{
        /* font-size: 22px; */
    }

}

/* 1) SMALL SIZE - TABLETS AND PHONES <768px*/
@media(max-width: 767px){

    #content-wrapper{
        max-width: 50rem;
    }

    .contact-button-row{
        max-width: 13rem ;

    }

    .main-text-main{
        font-size: 2.3rem;
    }

  


}
</style>

