<!--SCRIPT-->
<script>
    export let servicesmainbannerData = {};
      const {HEADING, DESCRIPTION,POST_HEADING} = servicesmainbannerData;
</script>


<section id="servicesmainebanner" class="bg-white d-flex align-items-center">
    <div class="container-fluid my-4">
        <div class="row section-body justify-content-center">

            <div id="title-content-wrapper" class="col-12 col-sm-11 col-md-10 col-xl-9 col-xxl-6 px-4">

                <p class="main-text-main fw-bold text-black my-4 display-1 text-center">
                    {HEADING}
                </p>

                <h1 class="main-text-post text-black my-4 text-center h3 lh-base">
                    {DESCRIPTION}
                </h1>

                <p class="main-text-main text-black my-3 display-4 text-center">
                    {POST_HEADING}
                </p>

                <div class="text-center">
                <i class="bi bi-arrow-down-short"></i>
                </div>

            </div>

        </div>

    </div>
</section>

<style>


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    #title-content-wrapper{
    max-width:50rem;
    }

    .bi{
        font-size: 80px;
    }

}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    #title-content-wrapper{
    max-width:50rem;
    }


    .bi{
        font-size: 76px;
    }

}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

    
    #title-content-wrapper{
    max-width:50rem;
    }

    
    .bi{
        font-size: 60px;
    }
}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    .bi{
        font-size: 55px;
    }
}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px){

    .main-text-post{
        font-size: 1.2rem;
    }

    .bi{
        font-size: 45px;
    }
}

  </style>
