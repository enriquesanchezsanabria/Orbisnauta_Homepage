<script>
    export let industriesbannerData = {};
      const { HEADING, DESCRIPTION, 
        INDUSTRY_1_TITLE,
        INDUSTRY_1_1,
        INDUSTRY_1_2,
        INDUSTRY_1_3,
        INDUSTRY_1_4,
        INDUSTRY_1_5, 
        
        INDUSTRY_2_TITLE,
        INDUSTRY_2_1,
        INDUSTRY_2_2,
        INDUSTRY_2_3,
        INDUSTRY_2_4,
        INDUSTRY_2_5,

        INDUSTRY_3_TITLE,
        INDUSTRY_3_1,
        INDUSTRY_3_2,
        INDUSTRY_3_3,
        INDUSTRY_3_4,
        INDUSTRY_3_5,

        INDUSTRY_4_TITLE,
        INDUSTRY_4_1,
        INDUSTRY_4_2,
        INDUSTRY_4_3,
        INDUSTRY_4_4,
        INDUSTRY_4_5,

        INDUSTRY_5_TITLE,
        INDUSTRY_5_1,
        INDUSTRY_5_2,
        INDUSTRY_5_3,
        INDUSTRY_5_4,
        INDUSTRY_5_5,

        INDUSTRY_6_TITLE,
        INDUSTRY_6_1,
        INDUSTRY_6_2,
        INDUSTRY_6_3,
        INDUSTRY_6_4,
        INDUSTRY_6_5,
      
      
      } = industriesbannerData;

</script>

<section id="industriesbanner" class="bg-primary d-flex align-items-center">
  <div class="container-fluid">
    <div class="row justify-content-center my-3">

      <div id="title-content-wrapper" class="col-md-6">
        <h1 class="main-text-main text-light">
          {HEADING}
        </h1>
      
        <p class="main-text-post text-light">
          {DESCRIPTION}       
        </p>
      </div>

    </div>

    <div class="row justify-content-center">

      <div class="card-container col-sm-6 col-xl-4 col-xxl-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-headset-vr"></i>
              {INDUSTRY_1_TITLE}
            </h5>
            <!-- <p class="card-text">1 Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              <div class="industry-prev-card__desc">
                <ul class="industry-prev-card__list">
                  <li> {INDUSTRY_1_1} </li>
                  <li> {INDUSTRY_1_2}  </li>
                  <li> {INDUSTRY_1_3}  </li>
                  <li> {INDUSTRY_1_4}  </li>
                  <li> {INDUSTRY_1_5}  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div class="card-container col-sm-6 col-xl-4 col-xxl-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-cone-striped"></i>
              {INDUSTRY_2_TITLE}
            </h5>
             <!-- <p class="card-text">2 Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              <div class="industry-prev-card__desc">
                <ul class="industry-prev-card__list">
                  <li> {INDUSTRY_2_1} </li>
                  <li> {INDUSTRY_2_2}  </li>
                  <li> {INDUSTRY_2_3}  </li>
                  <li> {INDUSTRY_2_4}  </li>
                  <li> {INDUSTRY_2_5}  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div class="card-container col-sm-6 col-xl-4 col-xxl-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-palette-fill"></i>
              {INDUSTRY_3_TITLE}
            </h5>
            <!-- <p class="card-text">3 Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
              <div class="industry-prev-card__desc">
                <ul class="industry-prev-card__list">
                  <li> {INDUSTRY_3_1} </li>
                  <li> {INDUSTRY_3_2}  </li>
                  <li> {INDUSTRY_3_3}  </li>
                  <li> {INDUSTRY_3_4}  </li>
                  <li> {INDUSTRY_3_5}  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      
      <div class="card-container col-sm-6 col-xl-4 col-xxl-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-lightbulb"></i>
              {INDUSTRY_4_TITLE}
            </h5>
             <!-- <p class="card-text">4 Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <div class="industry-prev-card__desc">
                <ul class="industry-prev-card__list">
                  <li> {INDUSTRY_4_1} </li>
                  <li> {INDUSTRY_4_2}  </li>
                  <li> {INDUSTRY_4_3}  </li>
                  <li> {INDUSTRY_4_4}  </li>
                  <li> {INDUSTRY_4_5}  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div class="card-container col-sm-6 col-xl-4 col-xxl-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-heart-pulse-fill"></i>
              {INDUSTRY_5_TITLE}
            </h5>
              <!-- <p class="card-text">5 Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <div class="industry-prev-card__desc">
                <ul class="industry-prev-card__list">
                  <li> {INDUSTRY_5_1} </li>
                  <li> {INDUSTRY_5_2}  </li>
                  <li> {INDUSTRY_5_3}  </li>
                  <li> {INDUSTRY_5_4}  </li>
                  <li> {INDUSTRY_5_5}  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div class="card-container col-sm-6 col-xl-4 col-xxl-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-building"></i>
              {INDUSTRY_6_TITLE}
            </h5>
            <!-- <p class="card-text">6 Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <div class="industry-prev-card__desc">
                <ul class="industry-prev-card__list">
                  <li> {INDUSTRY_6_1} </li>
                  <li> {INDUSTRY_6_2}  </li>
                  <li> {INDUSTRY_6_3}  </li>
                  <li> {INDUSTRY_6_4}  </li>
                  <li> {INDUSTRY_6_5}  </li>
                </ul>
              </div>
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
  /*text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;*/
  /*-webkit-text-stroke: 2px black;*/

}

p{
  text-align: center;
}


.card-title {
  text-align: center;

}

.card-container{
 margin: 10px 0;
 max-width: 400px;
}

.container-fluid{
    margin-top: 40px;
    margin-bottom: 60px;
  }

.main-text-post{
      text-align: justify;
}


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

  /*INSIDE TEXT*/
  .main-text-main{
    font-size: 80px;
    line-height: 80px;
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
    line-height: 60px;
    margin-bottom: 30px;
  }

  .main-text-post{
    font-size: 26px;
    line-height: 27px;
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

  /* CONTAINER */
  .container-fluid{
    width: 90%;
    max-width: 1000px;
    margin-bottom: 30px;
  }

  /*INSIDE TEXT
  .main-text-main{
    font-size: 51px;
    line-height: 51px;
    margin-bottom: 15px;
    
  }*/

  #title-content-wrapper{
    text-align: center;
    max-width: 500px;
  }


/*INSIDE TEXT*/
.main-text-main{
    font-size: 35px;
    line-height: 42px;
    max-width: 480px;
    margin-bottom: 10px;

}

  

  .main-text-post{
    font-size: 18px;
    line-height: 23px;
    max-width: 510px ;
    /*max-width: 510px;*/
  }

}

</style>
