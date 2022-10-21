<!--SCRIPT-->
<script>
  export let servicesbannerData = {};
    const {  HEADING,

    SERVICES_HEADING_1,
    SERVICES_TITLE_1_1,
    //SERVICES_DESCRIPTION_1_1,
    SERVICES_TITLE_1_2,
    //SERVICES_DESCRIPTION_1_2,
    SERVICES_TITLE_1_3,
    //SERVICES_DESCRIPTION_1_3,
    SERVICES_TITLE_1_4,
    //SERVICES_DESCRIPTION_1_4,
    SERVICES_TITLE_1_5,

    SERVICES_HEADING_2,
    SERVICES_TITLE_2_1,
    //SERVICES_DESCRIPTION_2_1,
    SERVICES_TITLE_2_2,
    //SERVICES_DESCRIPTION_2_2,
    SERVICES_TITLE_2_3,
    //SERVICES_DESCRIPTION_2_3,

    SERVICES_HEADING_3,
    SERVICES_TITLE_3_1,
    //SERVICES_DESCRIPTION_3_1,
    SERVICES_TITLE_3_2,
    //SERVICES_DESCRIPTION_3_2,
    SERVICES_TITLE_3_3,
    //SERVICES_DESCRIPTION_3_3,

    } = servicesbannerData;
</script>
  



<section id="servicesbanner" class="bg-dark d-flex align-items-center">
    <div class="container-fluid">

        <div class="row section-body justify-content-center my-3">

            <div id="title-content-wrapper" class="col-md-7 col-lg-9">
                <h1 class="main-text-main text-light">
                  {HEADING}
                </h1>
    
            </div>

        </div>

        <div class="row section-body justify-content-center">

          <div class="my-3 col-lg-6 col-xxl-4">
            <h2 class="text-light"> {SERVICES_HEADING_1} </h2>

            <div class="industry-prev-card__desc">
              <ul class="industry-prev-card__list text-light">
                <li> {SERVICES_TITLE_1_1} </li>
                <li>  {SERVICES_TITLE_1_2}  </li>
                <li>  {SERVICES_TITLE_1_3} </li>
                <li>  {SERVICES_TITLE_1_4}  </li>
                <li>  {SERVICES_TITLE_1_5}  </li>
              </ul>
            </div>

          </div>

          <div class="container my-3 col-lg-6 col-xxl-4">
            <h2 class="text-light"> {SERVICES_HEADING_2} </h2>

            
            <div class="industry-prev-card__desc">
              <ul class="industry-prev-card__list text-light">
                <li> {SERVICES_TITLE_2_1} </li>
                <li>  {SERVICES_TITLE_2_2}  </li>
                <li>  {SERVICES_TITLE_2_3} </li>
              </ul>
            </div>
            
          </div>

          <div class ="container my-3 col-lg-6 col-xxl-4">

            <h2 class="text-light"> {SERVICES_HEADING_3} </h2>

            <div class="industry-prev-card__desc">
              <ul class="industry-prev-card__list text-light">
                <li> {SERVICES_TITLE_3_1} </li>
                <li>  {SERVICES_TITLE_3_2}  </li>
                <li>  {SERVICES_TITLE_3_3} </li>
              </ul>
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

/*
p{
  text-align: center;
  padding-bottom: 20px;
 
}
*/

h2{
  text-align: center;
  text-decoration: underline;
  padding-bottom: 5px;
  text-underline-offset: 3px;
  }

.container-fluid{
  margin-top: 30px;
  margin-bottom: 60px;
  max-width: 1300px;
  
}

li{

  text-align: center;
  list-style: inside;

  padding: 0; /* Remove padding */
  margin: 0;

}

ul{

  padding: 0;
    list-style-type: none;
}


/*
.card-container{
  // margin-top: 20px;
  margin: 10px 0px;
  max-width: 400px;
}
*/
  
/*
.card-wrapper{
padding-top: 10px;
}
*/
        
/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 80px;
        line-height: 80px;
        margin-top: 40px;
        margin-bottom: 20px;
    }

   /*ACTUAL BULLET POINTS*/
   li{
      font-size: 28px;

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

  /*ACTUAL BULLET POINTS*/
  li{
      font-size: 25px;

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

  /*ACTUAL BULLET POINTS*/
  li{
      font-size: 25px;

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

  /*ACTUAL BULLET POINTS*/
  li{
      font-size: 22px;

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

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 42px;
        line-height: 51px;
        margin-bottom: 5px;
        max-width: 480px;
    }
    
    /*ACTUAL BULLET POINTS*/
    li{
      font-size: 19px;

    }


}


  </style>