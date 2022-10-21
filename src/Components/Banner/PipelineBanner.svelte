<!--SCRIPT-->
<script>
    export let pipelinebannerData = {};
      const { HEADING, DESCRIPTION, IMG_SRC_H, IMG_SRC_V} = pipelinebannerData;
</script>
    

<section id="pipelinebanner" class="bg-white d-flex align-items-center">
    <div class="container-fluid">
        <div class="row section-body justify-content-center my-3">

            <div id="title-content-wrapper" class="col-md-7 col-xl-9">
                <h1 class="main-text-main text-dark">
                    {HEADING}
                </h1>
    
                <p class="main-text-post lead my-0 text-dark ">
                   {DESCRIPTION}                
                </p>
            </div>

        </div>

        <div id="image-content-wrapper" class="d-flex justify-content-center">
            <!--<img src="images/pipeline-image1.png" alt="" class="image1 img-fluid" />-->

            <img src={IMG_SRC_H} alt="" class="image1 img-fluid" />

            <img src={IMG_SRC_V} alt="" class="image1mobile img-fluid" />

        </div>

    </div>
  </section>

  <style>
h1{
  font-weight: bold;
  text-align: center;
}

p{
  text-align: center;
  padding-bottom: 20px;
 
}

.container-fluid{
    margin-top: 30px;
    margin-bottom: 60px;
    max-width: 1300px;
  }

.image1 {
    display: block;
}
.image1mobile{
    display: none;
}

.main-text-post{
        text-align: justify;
    }
        
/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 80px;
        line-height: 90px;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .main-text-post{
        font-size: 30px;
        line-height: 35px;
    }

}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 76px;
        line-height: 85px;
        margin-bottom: 20px;
        
    }

    .main-text-post{
        font-size: 26px;
        line-height: 24px;
    }

}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 60px;
        line-height: 60px;
        margin-bottom: 20px;
    }

    .main-text-post{
        font-size: 22px;
        line-height: 25px;
        /*max-width: 456px;*/
    }

}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    /* CONTAINER */
    .container-fluid{
        width: 90%;
        max-width: 1000px;
    }

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 15px;
        /* max-width: 360px;*/
    }

    .main-text-post{
        font-size: 18px;
        line-height: 23px;
        /*max-width: 456px;*/
    }

}


/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px){

    .image1 {
        display: none;
    }
    .image1mobile{
        display: block;
    }

     /* CONTAINER */
    .container-fluid{
        width: 90%;
        max-width: 1000px;
        margin-bottom: 30px;
    }

    #title-content-wrapper{
    text-align: center;
    max-width: 500px;
  }

    /*INSIDE TEXT
    .main-text-main{
        font-size: 42px;
        line-height: 51px;
        margin-bottom: 15px;
    }*/

      /*INSIDE TEXT*/
      .main-text-main{
        font-size: 35px;
        line-height: 42px;
        margin-bottom: 10px;
        max-width: 480px;

    
    }


    .main-text-post{
        font-size: 18px;
        line-height: 23px;
        max-width: 510px ;

        /*max-width: 510px;*/
    }

}


  </style>
