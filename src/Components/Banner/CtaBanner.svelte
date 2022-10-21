<script>
    export let ctabannerData = {};
      const {HEADING, DESCRIPTION, 
        FORM_EMAIL,
        FORM_EMAIL_PLACEHOLDER,
        FORM_NAME,
        FORM_NAME_PLACEHOLDER,
        FORM_COMPANY,
        FORM_COMPANY_PLACEHOLDER,
        FORM_BUDGET,
        FORM_SPEC,
        FORM_SUBMIT
      } = ctabannerData;
</script>

<section id="ctabanner" class="bg-primary d-flex align-items-center">
  <div class="container-fluid">
    <div class="row justify-content-center my-3">

      <div id="title-content-wrapper" class="col-md-7 col-xl-9">
        <h1 class="main-text-main text-light">
            <!--<u>{HEADING}</u>-->
            {HEADING}

        </h1>
      
        <p class="main-text-post text-light">
          {DESCRIPTION}
        </p>
      </div>

    </div>
    



    <div class="row justify-content-center my-2">
      
      <section id="contact">
        <div class="container-lg">
        
          <div class="row justify-content-center">
            <div class="col-lg-6">
              
              <form action="https://formsubmit.co/info@orbisnauta.com" method="POST">
                <label for="email" class="form-label text-light">{FORM_EMAIL}</label>
                <div class="input-group mb-4">
                  <span class="input-group-text">
                    <i class="bi bi-envelope-fill text-secondary"></i>
                  </span>
                  <input type="text" id="email" name="email" class="form-control" placeholder={FORM_EMAIL_PLACEHOLDER} />
                </div>

                <label for="name" class="form-label text-light">{FORM_NAME}</label>
                <div class="mb-4 input-group">
                  <span class="input-group-text">
                    <i class="bi bi-person-fill text-secondary"></i>
                  </span>
                  <input type="text" id="name" name="fullname" class="form-control" placeholder={FORM_NAME_PLACEHOLDER} />
                </div>

                <label for="company" class="form-label text-light">{FORM_COMPANY}</label>
                <div class="mb-4 input-group">
                  <span class="input-group-text">
                    <i class="bi bi-person-fill text-secondary"></i>
                  </span>
                  <input type="text" id="company" name="company" class="form-control" placeholder={FORM_COMPANY_PLACEHOLDER} />
                </div>


                <label for="budget" class="form-label text-light">{FORM_BUDGET}</label>
                <div class="mb-4 input-group">
                  <span class="input-group-text">
                    <i class="bi bi-chat-right-dots-fill text-secondary"></i>
                  </span>
                  <select class="form-select text-secondary" id="budget" name="budget">
                    <option  svalue="tentotwenty" selected>10.000 - 20.000</option>
                    <option  value="twentytofifty">20.000 - 50.000</option>
                    <option  value="fiftytohundred">50.000 - 100.000</option>
                    <option  value="morethanhundred">+100.000</option>
                  </select>
                </div>
                <div class="mb-4 mt-5 form-floating">
                  <textarea class="form-control" id="query" name="query" style="height: 140px" placeholder="query"></textarea>
                  <label for="query" class="text-secondary">{FORM_SPEC}</label>
                </div>
                <div class="mb-3 text-center">
                  <button type="submit" class="btn btn-secondary bg-light text-dark">{FORM_SUBMIT}</button>
                </div>

                <div class="mb-1 text-center">
                <img src="images/virtual_reality_ development_agency_orbisnauta_logo.png" class="logo-img img-fluid" alt="" />
                </div>

              </form>
            </div>


          </div>
        </div>
      </section>

      
        
      
    </div>

    
  </div>
</section>

<style>

.logo-img{
  width:auto;
  height: 5rem;
  padding-right: 16px;
}

h1{
  font-weight: bold;
  text-align: center;

}

p{
  text-align: center;
}


.container-fluid{
    margin-top: 25px;
    margin-bottom: 10px;
    
  }

  .main-text-post{
        text-align: justify;
    }


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    /* CONTAINER */
    .container-fluid{
    margin-top: 5px;
  }

  /*INSIDE TEXT*/
  .main-text-main{
    font-size: 80px;
    line-height: 80px;
    margin-top: 40px;
    margin-bottom: 35px;
  }

  .main-text-post{
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }

  /*
  h1{
    text-underline-offset: 6px;
  }*/

}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    /* CONTAINER */
    .container-fluid{
    margin-top: 25px;
  }

  /*INSIDE TEXT*/
  .main-text-main{
    font-size: 76px;
    line-height: 70px;
    margin-bottom: 40px;
  }

  .main-text-post{
    font-size: 26px;
    line-height: 27px;
  }

  /*
  h1{
    text-underline-offset: 5px;
  }*/

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

  /*
  h1{
    text-underline-offset: 4px;
  }*/

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

  /*
  h1{
    text-underline-offset: 2px;
  }*/

}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px){


  .logo-img{
  width:auto;
  height: 3rem;
  padding-right: 16px;
  }

  /* CONTAINER */
  .container-fluid{
    width: 90%;
    max-width: 1000px;
    margin-bottom: 10px;
    margin-top: 19px;
    
  }

  #title-content-wrapper{
    text-align: center;
    max-width: 500px;
  }

  /*INSIDE TEXT
  .main-text-main{
    font-size: 51px;
    line-height: 51px;
    margin-bottom: 15px;

  } */

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

  /*
  h1{
    text-underline-offset: 2px;
  }*/

}

</style>
