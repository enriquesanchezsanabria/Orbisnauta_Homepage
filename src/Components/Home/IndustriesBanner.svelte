<script>
    export let industriesbannerData = {};
      const { HEADING, DESCRIPTION, 
        INDUSTRY_1_TITLE,INDUSTRY_1_1,INDUSTRY_1_2,INDUSTRY_1_3,INDUSTRY_1_4,INDUSTRY_1_5, 
        INDUSTRY_2_TITLE,INDUSTRY_2_1,INDUSTRY_2_2,INDUSTRY_2_3,INDUSTRY_2_4,INDUSTRY_2_5,
        INDUSTRY_3_TITLE,INDUSTRY_3_1,INDUSTRY_3_2,INDUSTRY_3_3,INDUSTRY_3_4,INDUSTRY_3_5,
        INDUSTRY_4_TITLE,INDUSTRY_4_1,INDUSTRY_4_2,INDUSTRY_4_3,INDUSTRY_4_4,INDUSTRY_4_5,
        INDUSTRY_5_TITLE,INDUSTRY_5_1,INDUSTRY_5_2,INDUSTRY_5_3,INDUSTRY_5_4,INDUSTRY_5_5,
        INDUSTRY_6_TITLE,INDUSTRY_6_1,INDUSTRY_6_2,INDUSTRY_6_3,INDUSTRY_6_4,INDUSTRY_6_5,
      } = industriesbannerData;
</script>

<section id="industriesbanner" class="bg-white d-flex align-items-center">
  <div class="container-fluid my-4">
    <div class="row section-body justify-content-center">

      <div id="title-content-wrapper" class="col-11 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">

        <div class="col-12 mb-3 mb-xxl-4 my-4 ">
          <h2 class="main-text-main text-black display-2 fw-bold text-center">
            {HEADING}
          </h2>
        </div>
      
        <div class="col-12 my-3 my-sm-4 my-4">
          <h3 class="main-text-post text-black  text-center">
            {DESCRIPTION}       
          </h3>
        </div>
      </div>

    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-md-12 col-xxl-9" align="center">
        <div class="row card-row justify-content-center">

          <div class="card-container col-sm-12 col-md-6 col-xl-4 ">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  <i class="bi bi-headset-vr"></i>
                  {INDUSTRY_1_TITLE}
                </h4>
                <!-- <p class="card-text">1 Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
                  <div class="industry-prev-card__desc">
                    <ul class="industry-prev-card__list">
                      <li> {INDUSTRY_1_1} </li>
                      <li> {INDUSTRY_1_2} </li>
                      <li> {INDUSTRY_1_3} </li>
                      <li> {INDUSTRY_1_4} </li>
                      <li> {INDUSTRY_1_5} </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>

          <div class="card-container col-sm-12 col-md-6 col-xl-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  <i class="bi bi-cone-striped"></i>
                  {INDUSTRY_2_TITLE}
                </h4>
                <!-- <p class="card-text">2 Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
                  <div class="industry-prev-card__desc">
                    <ul class="industry-prev-card__list">
                      <li> {INDUSTRY_2_1} </li>
                      <li> {INDUSTRY_2_2} </li>
                      <li> {INDUSTRY_2_3} </li>
                      <li> {INDUSTRY_2_4} </li>
                      <li> {INDUSTRY_2_5} </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>

          <div class="card-container col-sm-12 col-md-6 col-xl-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  <i class="bi bi-palette-fill"></i>
                  {INDUSTRY_3_TITLE}
                </h4>
                <!-- <p class="card-text">3 Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
                  <div class="industry-prev-card__desc">
                    <ul class="industry-prev-card__list">
                      <li> {INDUSTRY_3_1} </li>
                      <li> {INDUSTRY_3_2} </li>
                      <li> {INDUSTRY_3_3} </li>
                      <li> {INDUSTRY_3_4} </li>
                      <li> {INDUSTRY_3_5} </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>



          <div class="card-container col-sm-12 col-md-6 col-xl-4 ">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  <i class="bi bi-lightbulb"></i>
                  {INDUSTRY_4_TITLE}
                </h4>
                <!-- <p class="card-text">4 Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                  <div class="industry-prev-card__desc">
                    <ul class="industry-prev-card__list">
                      <li> {INDUSTRY_4_1} </li>
                      <li> {INDUSTRY_4_2} </li>
                      <li> {INDUSTRY_4_3} </li>
                      <li> {INDUSTRY_4_4} </li>
                      <li> {INDUSTRY_4_5} </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>

          <div class="card-container col-sm-12 col-md-6 col-xl-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  <i class="bi bi-heart-pulse-fill"></i>
                  {INDUSTRY_5_TITLE}
                </h4>
                  <!-- <p class="card-text">5 Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                  <div class="industry-prev-card__desc">
                    <ul class="industry-prev-card__list">
                      <li> {INDUSTRY_5_1} </li>
                      <li> {INDUSTRY_5_2} </li>
                      <li> {INDUSTRY_5_3} </li>
                      <li> {INDUSTRY_5_4} </li>
                      <li> {INDUSTRY_5_5} </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>

          <div class="card-container col-sm-12 col-md-6 col-xl-4 ">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  <i class="bi bi-building"></i>
                  {INDUSTRY_6_TITLE}
                </h4>
                <!-- <p class="card-text">6 Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                  <div class="industry-prev-card__desc">
                    <ul class="industry-prev-card__list">
                      <li> {INDUSTRY_6_1} </li>
                      <li> {INDUSTRY_6_2} </li>
                      <li> {INDUSTRY_6_3} </li>
                      <li> {INDUSTRY_6_4} </li>
                      <li> {INDUSTRY_6_5} </li>
                    </ul>
                  </div>
              </div>
            </div>
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

.card{
    border-radius: 25px;
    border-style: solid;
    border-width: 3px;
    border-color: black;
    background-color: #deed0a;
}

.card:hover{
  background-color: black;
  border-style: solid;
  border-color: #deed0a;

}

.card:hover li{
    color: white;
}
.card:hover i{
    color: #deed0a;
}
.card:hover h4{
    color: #deed0a;
}


ul{
  padding: 0px 0px 0px 20px;
}

.card-title {
  text-align: center;
}

.card-container{
  margin: 10px 0;
  max-width: 400px;
}



/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

  .card-row{
    max-width: 99rem;
  }


  .main-text-main{
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
  }

  .main-text-post{
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
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


}


/* 0) VERY VERY VERY SMALL SIZE - SMALL PHONES <376px*/
@media(max-width: 575px) and (min-width: 377px){

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

@media(max-width: 376px){

  .main-text-main{
    font-size: 1.9rem;
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
