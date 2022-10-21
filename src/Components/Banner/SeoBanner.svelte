<!--SCRIPT-->
<script>
    export let seobannerData = {};
      const { PREHEADING, HEADING, DESCRIPTION_ONE, DESCRIPTION_TWO} = seobannerData;
</script>
    
<section id="seobanner" class="bg-dark d-flex align-items-center">
    <div class="container-fluid">
        <div class="row justify-content-center">

            <div id="image-content-wrapper" class="col-md-6">
                <div id="background-color-wrapper">
                    <img src="images/intro-image1.png" alt="" class="img-fluid" />
                </div>
            </div>

            <div id="text-content-wrapper" class="col-md-6 col-12 text-left">

                <p class="main-text-sub text-info mb-0">
                    {PREHEADING}
                </p>

                <h1 class="main-text-main text-light">
                    {HEADING}
                </h1>
    
                <p class="main-text-post text-light">
                    {DESCRIPTION_ONE}
                    <br>
                    {DESCRIPTION_TWO}
       
                </p>
            
            </div>

        </div>
    </div>
  </section>


<style>

    .text-primary {
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

    #image-content-wrapper{
        margin: auto;
        padding-right: 60px;
    }

    .main-text-post{
        text-align: justify;
    }

    /*
    #text-content-wrapper{
        align-self: center;
    }*/


    /*
    .justify-content-center{
        /*background-color: black;

    }

    img{
        
    }*/

/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    /* SECTION */
    #seobanner {
        height: 1400px;    
    }

    /* CONTAINER */
    .container-fluid{
        width: 90%;
        max-width: 1800px;
    }

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 110px;
        line-height: 120px;
        margin-bottom: 30px;
        padding-top: 0px;
        max-width: 1000px;
    }
    .main-text-sub{
        font-size: 35px;
    }
    .main-text-post{
        font-size: 36px;
        line-height: 40px;
        max-width: 845px;
    }
}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    /* SECTION */
    #seobanner {
        height: 1100px;    
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
        margin-bottom: 30px;
        max-width: 500px;
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
    #seobanner {
        height: 850px;    
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
        max-width: 450px;
    }
    .main-text-sub{
        font-size: 20px;
    }
    .main-text-post{
        font-size: 22px;
        line-height: 25px;
        max-width: 456px;
    }
}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    /* SECTION */
    #seobanner {
        height: 770px;    
    }

    /* CONTAINER */
    .container-fluid {
        width: 90%;
        max-width: 800px;
    }

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 15px;
        max-width: 360px;
    }
    .main-text-sub{
        font-size: 17px;
    }
    .main-text-post{
        font-size: 18px;
        line-height: 23px;
        max-width: 456px;
    }
}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px){

    /*EXTRA*/
    #image-content-wrapper {
        display:none;
    }

    /* SECTION */
    #seobanner {
        height: 860px;  
    }

    /* CONTAINER */
    .container-fluid {
        width: 90%;
        max-width: 500px;
    }

    /*INSIDE TEXT
    .main-text-main{
        font-size: 45px;
        line-height: 51px;
        max-width: 480px;
        margin-bottom: 20px;
        margin-top: 5px;
        
    }*/

    /*INSIDE TEXT*/
    .main-text-main{
        font-size: 35px;
        line-height: 42px;
        margin-bottom: 10px;
        max-width: 480px;
    
    }

    .main-text-sub{
        font-size: 17px;
        
    }
    .main-text-post{
        font-size: 18px;
        line-height: 23px;
        max-width: 510px ;
        text-align: left;
        /*max-width: 510px ;*/
    }
}
</style>

