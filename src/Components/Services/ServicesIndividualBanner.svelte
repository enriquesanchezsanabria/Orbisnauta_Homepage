<!--SCRIPT-->
<script>
import { onMount } from 'svelte';
export let servicesindividualbannerData = {};
const {  SHOW_CTA, TEXT_SIDE,SERVICE_QUANTITY,SERVICE_ID,IMG_SRC_SERVICES,
    SERVICE_HEADING, SERVICE_SUBHEADING,SERVICE_TITLE_1, SERVICE_DESCRIPTION_1,
    SERVICE_TITLE_2, SERVICE_DESCRIPTION_2,SERVICE_TITLE_3, SERVICE_DESCRIPTION_3,
    SERVICE_TITLE_4, SERVICE_DESCRIPTION_4,PORTFOLIO_BUTTON,SERVICES_INDIVIDUAL_LANG
} = servicesindividualbannerData;

/*4 is MAX NUMBER OF SERVICES TITLES AND DESCRIPTIONS PER COMPONENT*/
const IMG_SERVICE_TITLES = [SERVICE_TITLE_1,SERVICE_TITLE_2, SERVICE_TITLE_3, SERVICE_TITLE_4];
const IMG_SERVICE_DESCRIPTIONS = [SERVICE_DESCRIPTION_1,SERVICE_DESCRIPTION_2, SERVICE_DESCRIPTION_3,SERVICE_DESCRIPTION_4];


let language;
onMount(() => {
    language= SERVICES_INDIVIDUAL_LANG;
}); 


/* CREATE A SCRIPT TO CHECK ID, IF ID IS ODD THEN ENABLE LEFT SIDE TRUE AND SHOW LEFT SIDE TEXT, SAME FOR EVEN SIDE*/
</script>
    
<section id={SERVICE_ID} class="bg-black">
    <div class="container-fluid">
        <div class="row justify-content-center my-4 my-md-5">
        
            <div class="d-flex justify-content-center">
                {#if TEXT_SIDE == 1}
                <!-- <div id="image-content-wrapper" class="col-11 col-lg-6 col-xxl-7 text-start align-middle my-auto mx-2"> -->
                <!-- <div id="image-content-wrapper" class="col-11 col-lg-6 col-xxl-7 text-end align-middle my-auto mx-2"> -->

                <!-- <div id="image-content-wrapper-left" class="col-lg-4 col-xl-5 my-auto mx-xl-3"> -->
                <div id="image-content-wrapper-left" class="px-4 my-auto">
                        <img src={IMG_SRC_SERVICES} alt="" class="img-fluid" />
                </div>

                {/if}

                <!-- <div id="text-content-wrapper" class="col-11 col-lg-7 col-xl-6 text-center my-auto mx-xl-3"> -->
                <div id="text-content-wrapper" class="px-4 my-auto">

                    <h2 class="main-text-sub text-center my-2 my-lg-3 my-xxl-3 display-3">
                        {SERVICE_HEADING}
                    </h2>
                    
                    <h4 class="main-text-main text-center text-light my-3 my-lg-3 my-xxl-3 display-5">
                        {SERVICE_SUBHEADING}
                    </h4>
                
                    <h3 class="main-text-post text-light my-3 my-lg-3 my-xxl-4">
                    {#if SERVICE_QUANTITY > 1}
                            {#each Array(SERVICE_QUANTITY) as _, servicescounter}
                            <li class="my-3 h3"> <strong class="text-titles">{IMG_SERVICE_TITLES[servicescounter]}</strong>
                                <span class="h4">{IMG_SERVICE_DESCRIPTIONS[servicescounter]}</span>
                            </li>
                            {/each}
                        {:else}
                            {SERVICE_DESCRIPTION_1}
                        {/if}
                    </h3>
                    
                    {#if SHOW_CTA == 1}
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
                        </div>
                    {/if}

                </div>
           

                {#if TEXT_SIDE == 0}
                <!-- <div id="image-content-wrapper-left" class="right-side-img col-lg-4 col-xl-5  my-auto mx-xl-3"> -->
                <!-- <div id="image-content-wrapper-right" class="col-11 col-lg-6 col-xxl-7 text-end align-middle my-auto mx-2"> -->
                <!-- <div id="image-content-wrapper-right" class="text-center col-lg-4 col-xl-5 my-auto mx-xl-3"> -->
                <!--<div id="image-content-wrapper-right" class="col-6 text-center align-middle my-auto mx-2">

                        <img src={IMG_SRC_SERVICES} alt="" class="img-fluid" /> -->
                    <div id="image-content-wrapper-right" class="px-4 my-auto">
                            <img src={IMG_SRC_SERVICES} alt="" class="img-fluid" />
                    </div>
            
                {/if}
            </div>

        
        </div>
    </div>
  </section>


<style>

/* SCROLL MARGIN SO THAT WHEN WE SCROLL TO IT IT ACCOUNDS FOR THE 97px HEADER */
section{
    scroll-margin-top: 96px;
}

.container-fluid{
    border-style: solid;
    border-width: 2px;
    border-color: #deed0a;
}

.main-text-sub{
    color: #deed0a !important; 
    font-weight: bold;
}

.text-titles{
    color: #deed0a !important; 
    /* font-weight: bold; */
}

img{
    border-radius:150px;
    border-style: solid;
    border-width: 6px;
    border-color: #deed0a;
    
}

.main-text-post{
    text-align: justify;
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

li{
    list-style-type: none;
}


/* 6) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    #text-content-wrapper{
        max-width: 60rem;

    }

    #image-content-wrapper{
        max-width: 60rem;
    }

    .btn-primary{
        max-width: 19rem;
        min-width: 15rem;
    }

    /* img{
        width: 40rem;
    } */

}

/* 5) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    .btn-primary{
        max-width: 18rem;
    }

    img{
        border-radius:100px;
        width: 200em;
    }

}

/* 4) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

    #image-content-wrapper-left{
        display:none;
    }
    #image-content-wrapper-right{
        display:none;
    }

    .btn-primary{
        min-width: 13rem;
    }

    /* .text-inside-button{
        font-size: 1.4rem;
    } */


}

/* 3) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    #image-content-wrapper-left{
        display:none;
    }
    #image-content-wrapper-right{
        display:none;
    }

    .main-text-post{
        text-align: center;
    }

    .btn-primary{
       max-width: 18rem;
     
    }


}

/* 2) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px) and (min-width: 576px){

    #image-content-wrapper-left{
        display:none;
    }
    #image-content-wrapper-right{
        display:none;
    }

    .main-text-post{
        text-align: center;
    }


    .btn-primary{
       max-width: 18rem;
    }


}

/* 0) VERY SMALL SIZE - SMALL PHONES <576px*/
/* IN THIS MEDIA QUERY WE USE THE RESPONSIVE MENU, NOT THE REGULAR MENU */
@media(max-width: 575px) and (min-width: 377px){

    #image-content-wrapper-left{
        display:none;
    }
    #image-content-wrapper-right{
        display:none;
    }

    .main-text-post{
        text-align: center;
    }


    .btn-primary{
       max-width: 18rem;
    }

    .text-inside-button{
        font-size: 1rem;
    }

}



/* 0) VERY VERY VERY SMALL SIZE - SMALL PHONES <376px*/
@media(max-width: 376px){

    #image-content-wrapper-left{
        display:none;
    }
    #image-content-wrapper-right{
        display:none;
    }

    .main-text-post{
        text-align: center;
    }


    /* .text-inside-button{
        font-size: 0.9rem;
    } */


    .main-text-main{
        font-size: 1.5rem;
    }

}




</style>

