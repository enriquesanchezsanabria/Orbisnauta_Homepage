<!--SCRIPT-->
<script>
export let mainbannerData = {};
  const { PREHEADING, HEADING_1, HEADING_2, DESCRIPTION_1, DESCRIPTION_2_STRONG, DESCRIPTION_3, DESCRIPTION_4_STRONG, DESCRIPTION_5, DESCRIPTION_6_STRONG, DESCRIPTION_7 } = mainbannerData;

  /*
export let mainbannerData_Esp = {};
  const { PREHEADING, HEADING_1, HEADING_2, DESCRIPTION } = mainbannerData_Esp;
*/

</script>

  <section id="mainbanner" class="bg-white d-flex align-items-center">
    <div class="container-fluid">
      <div class="row justify-content-center">

        <div id="content-wrapper" class="col-12 text-left">

                <p class="main-text-sub text-primary mb-0">
                    {PREHEADING}
                </p>

                <h1 class="main-text-main text-dark">
                    {HEADING_1}
                    <br>
                    {HEADING_2}
                </h1>
    
                <p class="main-text-post text-dark">
                    {DESCRIPTION_1}
                    <strong><u>{DESCRIPTION_2_STRONG}</u></strong>
                    {DESCRIPTION_3}
                    <strong><u>{DESCRIPTION_4_STRONG}</u></strong>
                    {DESCRIPTION_5}
                    <strong><u>{DESCRIPTION_6_STRONG}</u></strong>
                    {DESCRIPTION_7}
                </p>

        </div>
      </div>
    </div>
  </section>
  

  <style>
    .main-text-sub {
        font-weight: bold;
        text-align: left;
    }

    h1{
        font-weight: bold;
        flex-wrap: wrap;
    }

    p{
        flex-wrap: wrap;
    }

    .main-text-post{
        text-align: justify;
    }

     /* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
   @media(min-width: 1921px){

        /* SECTION */
        #mainbanner {
            height: 980px;    
        }

         /* CONTAINER */
        .container-fluid {
            width: 90%;
            max-width: 1800px;
        }

          /*INSIDE TEXT*/
        .main-text-main{
            font-size: 110px;
            line-height: 120px;
            margin-bottom: 40px;
          
        }
        .main-text-sub{
            font-size: 35px;
        }
        .main-text-post{
            font-size: 36px;
            line-height: 40px;
            max-width: 1000px;
        }
    }

     /* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
    @media(max-width: 1920px) and (min-width: 1400px){

         /* SECTION */
        #mainbanner {
            height: 850px;    
        }

         /* CONTAINER */
        .container-fluid {
            width: 90%;
            max-width: 1500px;
        }

          /*INSIDE TEXT*/
        .main-text-main{
            font-size: 86px;
            line-height: 90px;
            margin-top: 0px;
            margin-bottom: 27px;
        }
        .main-text-sub{
            font-size: 23px;
        }
        .main-text-post{
            font-size: 26px;
            line-height: 27px;
            max-width: 700px;
        }
    }

    /* 3) LARGE SIZE - PC  >1399px and <992px */
    @media(max-width: 1399px) and (min-width: 992px){

        /* SECTION */
        #mainbanner {
            height: 570px;    
        }

        /* CONTAINER */
        .container-fluid {
            width: 90%;
            max-width: 1000px;
        }

        /*INSIDE TEXT*/
        .main-text-main{
            font-size: 60px;
            line-height: 60px;
            margin-bottom: 20px;
        }
        .main-text-sub{
            font-size: 17px;
        }
        .main-text-post{
            font-size: 18px;
            line-height: 21px;
            max-width: 500px;
        }
    }

   /* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
   @media(max-width: 991px) and (min-width: 768px){

         /* SECTION */
        #mainbanner {
            height: 570px;    
        }

        /* CONTAINER */
        .container-fluid {
            width: 90%;
            max-width: 600px;
        }

          /*INSIDE TEXT*/
        .main-text-main{
            font-size: 48px;
            line-height: 48px;
            max-width: 550px;
            margin-bottom: 15px;

        }
        .main-text-sub{
            font-size: 17px;
        }
        .main-text-post{
            font-size: 18px;
            line-height: 23px;
            max-width: 510px;
        }
    }

    /* 1) SMALL SIZE - TABLETS AND PHONES <768px*/
    @media(max-width: 767px){

        /* SECTION */
        #mainbanner {
            height: 570px;    
        }

        /* CONTAINER */
         .container-fluid {
            width: 90%;
            max-width: 500px;
        }

        /*INSIDE TEXT*/
        .main-text-main{
            font-size: 35px;
            line-height: 42px;
            max-width: 480px;
            margin-bottom: 10px;

           
        }
        .main-text-sub{
            font-size: 17px;
        }
        .main-text-post{
            font-size: 18px;
            line-height: 23px;
            max-width: 510px ;
        }
    }
</style>

