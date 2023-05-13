<!--SCRIPT-->
<script>
import MediaQuery from 'svelte-media-queries'

export let mainreelbannerData = {};
    const { HEADING_1, DESCRIPTION_1,  MAINREELBANNER_MAINTEXT_FONTSIZE,MAINREELBANNER_MAINTEXT_LINEHEIGHT } = mainreelbannerData;


    /*USAR ESTE PARA EL DEV*/
    let mobileTextSize = MAINREELBANNER_MAINTEXT_FONTSIZE;
    let mobileLineHeight = MAINREELBANNER_MAINTEXT_LINEHEIGHT;

</script>

<section id="mainreelbanner" class="bg-white d-flex align-items-center">
    <div class="container-fluid px-0">
        <div class="row justify-content-center my-5 py-5 mx-3">

            <div class="heading-container col-12 col-md-6 col-xxl-3 align-middle my-auto mx-md-2">
                <p class="main-text-main fw-bold text-end text-black display-1">
                    {HEADING_1}
                </p>
            </div>

            <div class="description-container col-12 col-md-6 col-xxl-3 align-middle my-auto mx-md-2">
                <h1 class="main-text-post text-start text-black h3" display="justify">
                    {DESCRIPTION_1}
                </h1>
            </div>

        </div>
    </div>
</section>
  
<style>


/*5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){
    .description-container{
        max-width: 30rem;
    }
    .heading-container{
        max-width: 30rem;
    }
}
    

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){
    .description-container{
        max-width: 30rem;
    }
    .heading-container{
        max-width: 30rem;
    }
}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){
    .description-container{
        max-width: 23rem;
    }
    .heading-container{
        max-width: 23rem;
    }
}
    

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){
    .description-container{
        max-width: 20rem;
    }
    .heading-container{
        max-width: 20rem;
    }
}

/* 1) SMALL SIZE - TABLETS AND PHONES <768px*/
@media(max-width: 767px)and (min-width: 433px){

    .description-container{
        max-width: 35rem;
    }

    .main-text-post{
        font-size: 1.4rem;
        text-align: center !important;
    }

    .main-text-main{
        text-align: center !important;
    }
}

/* 0) UBBER SMALL SIZE - TABLETS AND PHONES <432px*/
@media(max-width: 432px){

    .main-text-post{
        font-size: 1.3rem;
        text-align: center !important;
    }

    .main-text-main{
        font-weight: bold;
        font-size: 2rem;
        text-align: center !important;
    }

}


</style>


