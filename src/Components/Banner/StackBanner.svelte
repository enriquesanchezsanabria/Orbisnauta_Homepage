<script>
    export let stackbannerData = {};
      const { HEADING, DESCRIPTION,   
        PLATFORMS_TITLE,
        PLATFORMS_HEADING_1,
        PLATFORMS_TEXT_1,
        PLATFORMS_HEADING_2,
        PLATFORMS_TEXT_2,
        PLATFORMS_HEADING_3,
        PLATFORMS_TEXT_3,
        PLATFORMS_HEADING_4,
        PLATFORMS_TEXT_4,

        SOFTWARE_TITLE,
        SOFTWARE_HEADING_1,
        SOFTWARE_HEADING_2,
        SOFTWARE_HEADING_3,
        SOFTWARE_HEADING_4,
        SOFTWARE_HEADING_5,
        SOFTWARE_HEADING_6,
        SOFTWARE_HEADING_7,
        SOFTWARE_HEADING_8,

        HARDWARE_TITLE,
        HARDWARE_HEADING_1,
        HARDWARE_HEADING_2,
        HARDWARE_HEADING_3,
        HARDWARE_HEADING_4,
        HARDWARE_HEADING_5,
        HARDWARE_HEADING_6,
        HARDWARE_HEADING_7,
        HARDWARE_HEADING_8

  } = stackbannerData;
</script>

<section id="stackbanner" class="bg-dark d-flex align-items-center">
  <div class="container-fluid">
    <div class="row justify-content-center my-3 title-container">

      <!--       10     PLATFORMS          -->


      <div id="title-content-wrapper" class="col-md-6 col-xl-9">
        <h1 class="main-text-main text-light">
            {HEADING}
        </h1>

        <!--
        <p class="main-text-post my-0 text-dark">
            {DESCRIPTION}    
        </p>
        -->
      </div>
    

    </div>

      <div class="row justify-content-center card-wrapper">
        <h2 class="text-light">
          {PLATFORMS_TITLE}
        </h2>
        
         <!--   1.  VR HEADSET   -->

        <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
          <div class="card">
            <div class="card-body text-center">
              <img src="images/stack-image-icon11.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{PLATFORMS_HEADING_1}</h5>
              <p class="card-text">{PLATFORMS_TEXT_1}</p>
              
            </div>
          </div>
        </div>

         <!--   2.  WEB/PC  -->

        <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
          <div class="card">
            <div class="card-body text-center">
              <img src="images/stack-image-icon12.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{PLATFORMS_HEADING_2}</h5>
              <p class="card-text">{PLATFORMS_TEXT_2}</p>
              
            </div>
          </div>
        </div>

         <!--   3.  MOBILE AR    -->

        <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
          <div class="card">
            <div class="card-body text-center">
              <img src="images/stack-image-icon13.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{PLATFORMS_HEADING_3}</h5>
              <p class="card-text">{PLATFORMS_TEXT_3}</p>
              
            </div>
          </div>
        </div>

         <!--   4.  MR HEADSETS    -->

        <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
          <div class="card">
            <div class="card-body text-center">
              <img src="images/stack-image-icon14.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{PLATFORMS_HEADING_4}</h5>
              <p class="card-text">{PLATFORMS_TEXT_4}</p>
              
            </div>
          </div>
        </div>
      
      </div>
    



      <!--       20     SOFTWARE             -->

      <div class="row section-body justify-content-center card-wrapper">

        <h2 class="mt-2 text-light">{SOFTWARE_TITLE}</h2>

        
        <!--  1. UNITY   -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon21.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{SOFTWARE_HEADING_1}</h5>
            </div>
          </div>
        </div>

        <!--  2.  UNREAL/BLUEPRINTS    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon22.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{SOFTWARE_HEADING_2}</h5> 
            </div>
          </div>
        </div>

         <!--  3.  OCULUS SDK    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon23.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{SOFTWARE_HEADING_3}</h5>
            </div>
          </div>
        </div>

         <!--  4.  STEAMVR   -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon24.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{SOFTWARE_HEADING_4}</h5>
            </div>
          </div>
        </div>

         <!--  5.  AFRAME/BABYLONJS/THREEJS    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center ">
              <img src="images/stack-image-icon25.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title my-auto">{SOFTWARE_HEADING_5}</h5>
            </div>
          </div>
        </div>

        <!--  6.  WEBXR/OPEN XR    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon26.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{SOFTWARE_HEADING_6}</h5>
            </div>
          </div>
        </div>

        <!--   7. ARCORE / VUFORIA   -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon27.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{SOFTWARE_HEADING_7}</h5>
            </div>
          </div>
        </div>

        <!--   8. ADOBE CREATIVE SUITE    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon28.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{SOFTWARE_HEADING_8}</h5>
            </div>
          </div>
        </div>

      </div>

      <!--        30    Hardware             -->

      <div class="row section-body justify-content-center card-wrapper">

        <h2 class="mt-2 text-light">{HARDWARE_TITLE}</h2>
        
        <!--   1.  Varjo VR-3    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon31.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_1}</h5>
              <!-- <p class="card-text">1 Best VR Headset in the market. Best VR Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        <!--  2.  Meta Quest 2 / Pico Neo 3   -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon32.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_2}</h5>
               <!--<p class="card-text">2 Best VR Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        <!--  3.  Insta360 Pro 2    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon33.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_3}</h5>
                <!--<p class="card-text">4 Zoom H3-VR binaural audio Best VR Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        <!--  4.  Phones / Tablets    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon34.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_4}</h5>
               <!--<p class="card-text">4 Best VR Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        <!--  5.  HTC Vive Pro 2 / Focus    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon35.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_5}</h5>
              <!--<p class="card-text">4 Best VR Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        <!--   6.  DRONES    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon36.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_6}</h5>
               <!--<p class="card-text">3 AR for phones Android & iOS. Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        <!--   7.  Looking Glass Holograms    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon37.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_7}</h5>
              <!--<p class="card-text">4 Best VR Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        <!--  8.  Immersive Rooms / Domes    -->

        <div class="card-container col-6 col-sm-6 col-xl-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <img src="images/stack-image-icon38.png" alt="" class="img-fluid icon-image" />
              <h5 class="card-title">{HARDWARE_HEADING_8}</h5>
              <!--<p class="card-text">4 No headset needed. Perfect for large audiences immersive experiences. Best VR Headsets in the market, quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              
            </div>
          </div>
        </div>

        

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
  }

  h2{
  text-align: center;
  text-decoration: underline;
  padding-bottom: 5px;
  text-underline-offset: 3px;
  }

  .card-wrapper{
    padding-top: 10px;
  }

  .card-container{
   /* margin-top: 20px;*/
    margin: 10px 0px;
    max-width: 400px;
  }

  .container-fluid{
    margin-top: 30px;
    margin-bottom: 60px;
    max-width: 1300px;

  }

  .icon-image{
    width: 150px;
  }

/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

   /*INSIDE TEXT*/
   .main-text-main{
    font-size: 80px;
    line-height: 85px;
    margin-top: 40px;
    margin-bottom: 20px;
  }



}


/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

   /*INSIDE TEXT*/
   .main-text-main{
    font-size: 76px;
    line-height: 80px;
    margin-bottom: 30px;
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
  

}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px){

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
        max-width: 480px;

        margin-bottom: 10px;
    }




}

/* 0) VERY SMALL SIZE - SMALL PHONES <576px*/
@media(max-width: 576px){

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 35px;
        line-height: 42px;
        max-width: 480px;
        margin-bottom: 10px;

    
    }


  #title-content-wrapper{
    text-align: center;
    max-width: 500px;
  }

  .card-title{
  font-size: 15px;

}


.card-text{
  font-size: 13px;

}


}




</style>
