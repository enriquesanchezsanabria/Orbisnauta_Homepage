<!--SCRIPT-->
<script>
    export let mainbannerData = {};
    const { PREHEADING, HEADING_1, HEADING_2, DESCRIPTION_1, DESCRIPTION_2_STRONG, 
        DESCRIPTION_3, DESCRIPTION_4_STRONG, DESCRIPTION_5, DESCRIPTION_6_STRONG, DESCRIPTION_7 
    } = mainbannerData;
</script>

<section id="mainbanner" class="bg-white d-flex align-items-center">
    <div class="container-fluid  my-sm-5">
        <div class="row justify-content-center">

            <div id="content-wrapper" class="col-12 px-0 col-sm-9 col-md-8 col-lg-8 mx-md-5">

                <div class="col-12 main-text-background px-2">
                    <p class="main-text-sub my-0 px-md-4 py-2 h4">
                        {PREHEADING}
                    </p>
                </div>

                <div class="col-12 my-2 mb-3 mb-md-3">
                    <h1 class="main-text-main text-black display-1 my-4">
                        {HEADING_1}
                        <br>
                        {HEADING_2}
                    </h1>
                </div>

                <div class="col-12">
                    <h2 class="main-text-post text-black px-2 lh-base">
                        {DESCRIPTION_1}
                        <strong>{DESCRIPTION_2_STRONG}</strong>
                        {DESCRIPTION_3}
                        <strong>{DESCRIPTION_4_STRONG}</strong>
                        {DESCRIPTION_5}
                        <strong>{DESCRIPTION_6_STRONG}</strong>
                        {DESCRIPTION_7}
                    </h2>
                </div>

            </div>

    
        </div>
    </div>
</section>
  
<style>

.main-text-sub {
    font-weight: bold;
    color: #deed0a !important;  
    background-color: black;
    border-radius: 25px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 27rem;

}

.main-text-main{
    font-weight:bold;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

 
        /*font-family: 'Tangerine', serif;
        font-size: 48px;*/
      

}

.main-text-post{
    text-align: center;

}

/* SECTION */
#mainbanner {
    /*full viewport height minus the navbar we know its 96px*/
    /*height: calc(100vh - 96px);
    min-height: calc(1080px - 96px);*/
    /* height: calc(100vh - 96px); */
}

/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    .main-text-post{
        text-align: justify;
    }

    .main-text-main{
       /*max-width: 550px !important;*/
       max-width: 50rem;
    }

    #content-wrapper{
        max-width: 60rem;
    }

    .main-text-post{
        margin-left: auto;
        margin-right: auto;
        max-width: 50rem;
    }
    
        /* SECTION 
    #mainbanner {
        height: calc(100vh - 96px);
    }*/

}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    .main-text-post{
    text-align: justify;
    }

    .main-text-main{
        max-width: 46rem;
    }

    .main-text-post{
        margin-left: auto;
        margin-right: auto;
        max-width: 46rem;
    }

    /* SECTION 
    #mainbanner {
        height: calc(100vh - 96px);
    }*/
}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){



    .main-text-sub{ 
        max-width: 25rem;
        font-size: 1.4rem;
    }

    .main-text-main{
        max-width: 45rem;
        font-size: 3.5rem;
    }



    .main-text-post{
        text-align: justify;
        font-size: 1.4rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 31rem;
    }


}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    .main-text-sub{
        max-width: 27rem;
        font-size: 1.4rem;

    }   

    .main-text-main{
        max-width: 55rem;
        font-size: 3rem;

    }

    .main-text-post{
        font-size: 1.4rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 31rem;
    }
    
}

/* 1) SMALL SIZE - TABLETS AND PHONES <768px*/
@media(max-width: 767px) and (min-width: 576px){

    .main-text-sub{
        margin-left: auto;
        margin-right: auto;
        max-width: 23rem;
        font-size: 1.3rem;
    }

    .main-text-main{
        min-width: 27rem;
        font-size: 2.5rem;
    }

    .main-text-post{
    font-size: 1.4rem;
    margin-left: auto;
        margin-right: auto;
        max-width: 27rem;
    }
    


}

/* 0) VERY VERY VERY SMALL SIZE - SMALL PHONES <376px*/
@media(max-width: 575px) and (min-width: 377px){

    .main-text-sub{
        max-width: 17rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 1rem;
    }

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

    /* SECTION */
    #mainbanner {
        height: calc(100vh - 96px);
    }
}

@media(max-width: 376px){
    .main-text-sub{
        max-width: 17rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 1rem;
    }

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

    /* SECTION */
    #mainbanner {
        height: calc(100vh - 96px);
    }
}



</style>

