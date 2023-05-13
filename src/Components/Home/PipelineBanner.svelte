<!--SCRIPT-->
<script>
    export let pipelinebannerData = {};
      const { HEADING, DESCRIPTION, IMG_SRC_H, IMG_SRC_V} = pipelinebannerData;
</script>
    
<section id="pipelinebanner" class="bg-white d-flex align-items-center">
    <div class="container-fluid my-4">
        <div class="row section-body justify-content-center">

            <div id="title-content-wrapper" class="col-11 col-md-10 col-lg-9 col-xl-9 col-xxl-6">

                <div class="col-12 mb-3 mb-xxl-4 my-4">
                    <h2 class="main-text-main text-black display-2 fw-bold text-center">
                        {HEADING}
                    </h2>
                </div>

                <div class="col-12 my-3 my-sm-4 my-4">
                    <h3 class="main-text-post text-black text-justify">
                        {DESCRIPTION}                
                    </h3>
                </div>

                
            </div>

        </div>

        <div id="image-content-wrapper" class="d-flex justify-content-center mb-4">
            <!--<img src="images/pipeline-image1.png" alt="" class="image1 img-fluid" />-->

            <img src={IMG_SRC_H} alt="" class="image1 img-fluid" />

            <img src={IMG_SRC_V} alt="" class="image1mobile img-fluid" />

        </div>

    </div>
</section>

<style>

/* SCROLL MARGIN SO THAT WHEN WE SCROLL TO IT IT ACCOUNDS FOR THE 97px HEADER */
section{
  scroll-margin-top: 96px;
}

.image1 {
    display: block;
}
.image1mobile{
    display: none;
}


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    #title-content-wrapper{
        max-width: 60rem;
    }

}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px) and (min-width: 576px){


    .image1 {
        display: none;
    }
    .image1mobile{
        display: block;
    }

    .main-text-main{
        text-align: center;
    }

    .main-text-post{
        text-align: center;
    }
}

@media(max-width: 575px) and (min-width: 377px){

    .image1 {
        display: none;
    }
    .image1mobile{
        display: block;
    }

    .main-text-main{
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
        text-align: center;
    }

    .main-text-post{
        font-size: 1rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
        text-align: center;
    }

}

@media(max-width: 376px){

    .image1 {
        display: none;
    }
    .image1mobile{
        display: block;
    }
    
    .main-text-main{
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
        text-align: center;
    }

    .main-text-post{
        font-size: 1rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
        text-align: center;
    }
}

  </style>
