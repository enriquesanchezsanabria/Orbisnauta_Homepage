<!--SCRIPT-->
<script>
    export let reeltabbannerData = {};
        const {  REEL_ID,REEL_IMAGE_QUANTITY, IMG_SRC_REEL_1, IMG_SRC_REEL_2, IMG_SRC_REEL_3,IMG_SRC_REEL_4,IMG_SRC_REEL_5,
            TAG1, TAG2,TAG3,TAG4, HEADING, DESCRIPTION_ONE,STACK_SIZE,
            STACK_1,IMG_SRC_STACK_1,STACK_2,IMG_SRC_STACK_2,STACK_3,IMG_SRC_STACK_3,STACK_4,IMG_SRC_STACK_4,
            STACK_5,IMG_SRC_STACK_5,STACK_6,IMG_SRC_STACK_6,STACK_7,IMG_SRC_STACK_7,STACK_8,IMG_SRC_STACK_8
        } = reeltabbannerData;

    /*5 is MAX NUMBER OF PHOTOS PER COMPONENT*/
    const IMG_SRC_REEL = [IMG_SRC_REEL_1,IMG_SRC_REEL_2,IMG_SRC_REEL_3,IMG_SRC_REEL_4,IMG_SRC_REEL_5];
    /*8 is MAX NUMBER OF STACK TITLES PER COMPONENT*/
    const SRC_STACK = [STACK_1,STACK_2,STACK_3,STACK_4,STACK_5,STACK_6,STACK_7,STACK_8];
    /*8 is MAX NUMBER OF STACK IMAGES PER COMPONENT*/
    const IMG_SRC_STACK = [IMG_SRC_STACK_1,IMG_SRC_STACK_2,IMG_SRC_STACK_3,IMG_SRC_STACK_4,IMG_SRC_STACK_5,
    IMG_SRC_STACK_6,IMG_SRC_STACK_7,IMG_SRC_STACK_8];


</script>


<section id="reeltabbanner" class="d-flex align-items-center">
    <div class="container-fluid">

        <div class="row justify-content-center my-4 py-4 mx-2 ">

            
            <!-- 1ST COLUMN = TEXT -->
            <div id="text-content-wrapper" class="col-11 col-lg-6 col-xxl-5 text-start align-middle my-auto mx-2">
                <div class="row">

                    <div class="row-fluid d-flex justify-content-between text-center my-2 mt-lg-3">
                        <div class="col-12">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item main-text-tag fw-bold h6 mb-0">- {TAG1}</li>
                                <!-- <li class="list-inline-item main-text-tag">-</li> -->
                                <li class="list-inline-item main-text-tag fw-bold h6 mb-0">- {TAG2}</li>
                                <!-- <li class="list-inline-item main-text-tag">-</li> -->
                                <li class="list-inline-item main-text-tag fw-bold h6 mb-0">- {TAG3}</li>
                                <!-- <li class="list-inline-item main-text-tag">-</li> -->
                                <li class="list-inline-item main-text-tag fw-bold h6 mb-0">- {TAG4}</li>
                            </ul>
                        </div>
                    </div>
        
                    <h3 class="main-text-main text-white display-2 text-center my-2">
                        {HEADING}
                    </h3>
        
                    <h2 class="main-text-post text-white h4 text-center my-2 lh-base">
                        {DESCRIPTION_ONE}  
                    </h2>
                    
                    <!--PORTFOLIO PROJECT STACK-->
                    <div class="card-row row section-body justify-content-center card-wrapper my-2 my-lg-3 mx-auto">

                        {#each Array(STACK_SIZE) as _, counterthree}

                            <div class="card-container col-6 col-sm-4 col-md-4 col-lg-4 my-2 px-1 px-xl-2">
                            <div class="card h-100">
                                <div class="card-body text-center px-2 py-2">
                                    <img src={IMG_SRC_STACK[counterthree]} alt="" class="img-fluid icon-image" />
                                    <h6 class="card-title fw-bold">{SRC_STACK[counterthree]}</h6>
                                </div>
                            </div>
                            </div> 

                        {/each}
                
                    </div>
                </div>
            </div>

            <!-- 2ND COLUMN = IMAGE -->
            <div id="image-content-wrapper" class="col-11 col-lg-6 col-xxl-7 text-end align-middle my-auto mx-2">

                <div id="carouselExampleIndicators{REEL_ID}" class="carousel slide carousel-pc" data-bs-ride="carousel">
                    <div class="carousel-indicators">

                        {#each Array(REEL_IMAGE_QUANTITY) as _, counter}

                            {#if counter == 0}
                            <button type="button" data-bs-target="#carouselExampleIndicators{REEL_ID}" data-bs-slide-to="{counter}" class="active" aria-label="Slide {counter}"></button>
                            {:else}
                            <button type="button" data-bs-target="#carouselExampleIndicators{REEL_ID}" data-bs-slide-to="{counter}" aria-label="Slide {counter}"></button>
                            {/if}

                        {/each}

                    </div>

                    <div class="carousel-inner">

                        {#each Array(REEL_IMAGE_QUANTITY) as _, countertwo}

                            {#if countertwo == 0}
                                <div class="carousel-item active">
                                    <img src={IMG_SRC_REEL[countertwo]} class="d-block w-100" alt="...">
                                </div>
                            {:else}
                                <div class="carousel-item">
                                    <img src={IMG_SRC_REEL[countertwo]} class="d-block w-100" alt="...">
                                </div>
                            {/if}

                        {/each}

                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators{REEL_ID}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators{REEL_ID}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    
                </div>

            </div>
        
        
        </div>
    </div>
</section>



<style>

section{
    border-bottom:5px solid white;
    background-color: black;
}

#image-content-wrapper{
    border-radius: 25px;
    background: rgb(0, 0, 0);
    border-style: solid;
    border-width: 3px;
    border-color: #deed0a;
}

.carousel-item img{  
    height:78vh;
    max-height:40rem;
    border-radius: 25px;
    object-fit: contain;
    object-position: center;
    overflow: hidden;

}


#text-content-wrapper{
    border-radius: 25px;
    background: rgb(0, 0, 0);
    border-style: solid;
    border-width: 3px;
    border-color: #deed0a;
}

.main-text-tag{
    color:#deed0a !important;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
}

.card-title{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card{
    border-radius: 25px;
    border-style: solid;
    border-width: 2px;
    border-color: #deed0a;
}


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

    #image-content-wrapper{
        max-width: 50rem;
    }
    #text-content-wrapper{
        max-width: 50rem;
    }
    .main-text-tag{
        font-size:0.9rem;
    }
    .card-title{
        font-size:1rem;
    }
    .card-container{
        max-width: 13rem;
    }

}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

    #image-content-wrapper{
        max-width: 50rem;
        margin-top: 1rem !important;
    }
    #text-content-wrapper{
        max-width: 50rem;
    }
    .card-row{
        max-width: 30rem;
        margin-left: auto;
        margin-right: auto;
    }
    .main-text-tag{
        font-size:0.9rem;
    }
    .card-title{
        font-size:0.9rem;
    }
    .card-container{
        max-width: 13rem;
    }

}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

    #image-content-wrapper{
        margin-top: 1rem !important;
        max-width: 50rem;
    }
    #text-content-wrapper{
        max-width: 50rem;
    }
    .card-row{
        max-width: 30rem;
        margin-left: auto;
        margin-right: auto;
    }
    .main-text-tag{
        font-size:0.9rem;
    }
    .card-title{
        font-size:0.9rem;
    }
    .card-container{
        max-width: 10rem;
    }

}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){

    #image-content-wrapper{
        margin-top: 1rem !important;
        max-width: 40rem;
    }
    #text-content-wrapper{
        max-width: 40rem;
    }
    .card-row{
        max-width: 30rem;
        margin-left: auto;
        margin-right: auto;
    }
    .main-text-tag{
        font-size:0.9rem;
    }
    .card-title{
        font-size:0.9rem;
    }
    .card-container{
        max-width: 10rem;
    }

    .carousel-item img {  
        height:58vh;
        max-height:20rem;
    }

}

/* 1) SMALL SIZE - TABLETS AND PHONES <433px*/
@media(max-width: 767px)and (min-width: 433px){

    #image-content-wrapper{
        margin-top: 1rem !important;
        max-width: 40rem;
    }
    #text-content-wrapper{
        max-width: 40rem;
    }
    .card-row{
        max-width: 30rem;
        margin-left: auto;
        margin-right: auto;
    }
    .main-text-tag{
        font-size:0.9rem;
    }
    .card-title{
        font-size:0.9rem;
    }
    .card-container{
        max-width: 10rem;
    }
    .carousel-item img {  
        height:58vh;
        max-height:20rem;
    }

}


/* 0) UBBER SMALL SIZE - TABLETS AND PHONES <575px*/
@media(max-width: 432px){

    #image-content-wrapper{
        margin-top: 1rem !important;
        max-width: 40rem;
    }
    #text-content-wrapper{
        max-width: 40rem;
    }
    .card-row{
        max-width: 25rem;
        margin-left: auto;
        margin-right: auto;
    }
    .main-text-tag{
        font-size:0.9rem;
    }
    .main-text-main{
        font-size:2.1rem;

    }
    .card-title{
        font-size:0.8rem;
    }
    .card-container{
        max-width: 10rem;
    }

    .carousel-item img {  
        height:58vh;
        max-height:20rem;
    }


}
</style>

