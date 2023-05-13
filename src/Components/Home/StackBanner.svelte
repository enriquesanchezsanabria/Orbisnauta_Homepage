<script>
    export let stackbannerData = {};
      const { HEADING, DESCRIPTION,   
        PLATFORMS_TITLE,PLATFORMS_HEADING_1,PLATFORMS_TEXT_1,PLATFORMS_HEADING_2,
        PLATFORMS_TEXT_2,PLATFORMS_HEADING_3,PLATFORMS_TEXT_3,PLATFORMS_HEADING_4,PLATFORMS_TEXT_4,

        IMG_STACK_PLATFORM_1,IMG_STACK_PLATFORM_2,IMG_STACK_PLATFORM_3,IMG_STACK_PLATFORM_4,

        SOFTWARE_TITLE,SOFTWARE_HEADING_1,SOFTWARE_HEADING_2,SOFTWARE_HEADING_3,
        SOFTWARE_HEADING_4,SOFTWARE_HEADING_5,SOFTWARE_HEADING_6,SOFTWARE_HEADING_7,
        SOFTWARE_HEADING_8,SOFTWARE_HEADING_9,SOFTWARE_HEADING_10,

        IMG_STACK_SOFTWARE_1,IMG_STACK_SOFTWARE_2,IMG_STACK_SOFTWARE_3,IMG_STACK_SOFTWARE_4,
        IMG_STACK_SOFTWARE_5,IMG_STACK_SOFTWARE_6,IMG_STACK_SOFTWARE_7,IMG_STACK_SOFTWARE_8,
        IMG_STACK_SOFTWARE_9,IMG_STACK_SOFTWARE_10,

        HARDWARE_TITLE,HARDWARE_HEADING_1,HARDWARE_HEADING_2,HARDWARE_HEADING_3,
        HARDWARE_HEADING_4,HARDWARE_HEADING_5,HARDWARE_HEADING_6,HARDWARE_HEADING_7,
        HARDWARE_HEADING_8,HARDWARE_HEADING_9,HARDWARE_HEADING_10,

        IMG_STACK_HARDWARE_1,IMG_STACK_HARDWARE_2,IMG_STACK_HARDWARE_3,IMG_STACK_HARDWARE_4,
        IMG_STACK_HARDWARE_5,IMG_STACK_HARDWARE_6,IMG_STACK_HARDWARE_7,IMG_STACK_HARDWARE_8,
        IMG_STACK_HARDWARE_9,IMG_STACK_HARDWARE_10

  } = stackbannerData;

let isSoftwareOpen = false;
let isHardwareOpen = false;

function showOnlySoftware() {

  let softwareCollapse = document.getElementById("multiCollapseExample1");
  let hardwareCollapse = document.getElementById("multiCollapseExample2");

  let softwareButton = document.getElementsByClassName("stack-button-software");
  let hardwareButton = document.getElementsByClassName("stack-button-hardware");

  softwareButton[0].setAttribute("disabled", true);
  hardwareButton[0].setAttribute("disabled", true);

  /*Add 'button-selected' class to ensure its seen as selected in CSS*/
  softwareButton[0].classList.add("button-selected");

  var hardwareCollapseVariable = new bootstrap.Collapse(hardwareCollapse, {
        toggle: false
    })

  var softwareCollapseVariable = new bootstrap.Collapse(softwareCollapse, {
      toggle: false
    })

  // HIDE HARDWARE
  if(isHardwareOpen){
    hardwareCollapseVariable.hide();
    /*Remove 'button-selected' class to ensure its seen as selected in CSS*/
    hardwareButton[0].classList.remove("button-selected");

    hardwareCollapse.addEventListener('hidden.bs.collapse', function () {

      softwareCollapseVariable.show();
      isSoftwareOpen = true;
      isHardwareOpen = false;

      /* ADD LISTENER TO ENABLE BUTTONS AS SOON AS IT FNISHES OPENING */
      softwareCollapse.addEventListener('shown.bs.collapse', function () {
      softwareButton[0].removeAttribute("disabled", true);
      hardwareButton[0].removeAttribute("disabled", true);

      },{ once: true });

    },{ once: true });

  }else{
     // TOOGLE SOFTWARE

    if(isSoftwareOpen){
      softwareCollapseVariable.hide();
      isSoftwareOpen = false;

      /*Remove 'button-selected' class to ensure its seen as selected in CSS*/
      softwareButton[0].classList.remove("button-selected");

      /* ADD LISTENER TO ENABLE BUTTONS AS SOON AS IT FNISHES OPENING */
      softwareCollapse.addEventListener('hidden.bs.collapse', function () {
      softwareButton[0].removeAttribute("disabled", true);
      hardwareButton[0].removeAttribute("disabled", true);

      },{ once: true });

    }else{
      softwareCollapseVariable.show();
      isSoftwareOpen = true;

       /* ADD LISTENER TO ENABLE BUTTONS AS SOON AS IT FNISHES OPENING */
      softwareCollapse.addEventListener('shown.bs.collapse', function () {
      softwareButton[0].removeAttribute("disabled", true);
      hardwareButton[0].removeAttribute("disabled", true);
      },{ once: true });

    }
  }
}

function showOnlyHardware() {


  let softwareCollapse = document.getElementById("multiCollapseExample1");
  let hardwareCollapse = document.getElementById("multiCollapseExample2");

  let softwareButton = document.getElementsByClassName("stack-button-software");
  let hardwareButton = document.getElementsByClassName("stack-button-hardware");

  softwareButton[0].setAttribute("disabled", true);
  hardwareButton[0].setAttribute("disabled", true);

  /*Add 'button-selected' class to ensure its seen as selected in CSS*/
  hardwareButton[0].classList.add("button-selected");

  var softwareCollapseVariable = new bootstrap.Collapse(softwareCollapse, {
        toggle: false
    })

  var hardwareCollapseVariable = new bootstrap.Collapse(hardwareCollapse, {
      toggle: false
  })

  // HIDE SOFTWARE
  if(isSoftwareOpen){

    softwareCollapseVariable.hide();

    /*Remove 'button-selected' class to ensure its seen as selected in CSS*/
    softwareButton[0].classList.remove("button-selected");

    softwareCollapse.addEventListener('hidden.bs.collapse', function () {
      hardwareCollapseVariable.show();
      isHardwareOpen = true;
      isSoftwareOpen = false;

      /* ADD LISTENER TO ENABLE BUTTONS AS SOON AS IT FNISHES OPENING */
      hardwareCollapse.addEventListener('shown.bs.collapse', function () {
      softwareButton[0].removeAttribute("disabled", true);
      hardwareButton[0].removeAttribute("disabled", true);

      },{ once: true });

    },{ once: true });

  }else{
    // TOOGLE HARDWARE

    if(isHardwareOpen){
      hardwareCollapseVariable.hide();
      isHardwareOpen = false;

      /*Remove 'button-selected' class to ensure its seen as selected in CSS*/
      hardwareButton[0].classList.remove("button-selected");

      /* ADD LISTENER TO ENABLE BUTTONS AS SOON AS IT FNISHES OPENING */
      hardwareCollapse.addEventListener('hidden.bs.collapse', function () {
      softwareButton[0].removeAttribute("disabled", true);
      hardwareButton[0].removeAttribute("disabled", true);
      },{ once: true });
  
    }else{
      hardwareCollapseVariable.show();
      isHardwareOpen = true;

      /* ADD LISTENER TO ENABLE BUTTONS AS SOON AS IT FNISHES OPENING */
      hardwareCollapse.addEventListener('shown.bs.collapse', function () {
      softwareButton[0].removeAttribute("disabled", true);
      hardwareButton[0].removeAttribute("disabled", true);

     
      },{ once: true });
  
    }
  }
}
</script>


<section id="stackbanner" class="bg-black d-flex align-items-center">
  <div class="container-fluid my-4">
    <div class="row justify-content-center title-container">

      <div id="title-content-wrapper" class="col-12 col-md-7 col-xl-6 col-xxl-5">
        <h2 class="main-text-main text-light display-2 fw-bold text-center mb-0 my-4">
            {HEADING}
        </h2>
       
      </div>
    </div>


    <div class="row justify-content-center card-wrapper my-2 my-md-4 mx-1">
      <!--  <h2 class="text-light">
        {PLATFORMS_TITLE}
      </h2> -->
        <!--   1.  VR HEADSET   -->
      <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body text-center">
            <img src={IMG_STACK_PLATFORM_1} alt="" class="img-fluid icon-image" />
            <h3 class="card-title fw-bold">{PLATFORMS_HEADING_1}</h3>
            <p class="card-text h5">{PLATFORMS_TEXT_1}</p>
          </div>
        </div>
      </div>
        <!--   2.  WEB/PC  -->
      <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body text-center">
            <img src={IMG_STACK_PLATFORM_2} alt="" class="img-fluid icon-image" />
            <h3 class="card-title fw-bold">{PLATFORMS_HEADING_2}</h3>
            <p class="card-text h5">{PLATFORMS_TEXT_2}</p>
          </div>
        </div>
      </div>
        <!--   3.  MOBILE AR    -->
      <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body text-center">
            <img src={IMG_STACK_PLATFORM_3} alt="" class="img-fluid icon-image" />
            <h3 class="card-title fw-bold">{PLATFORMS_HEADING_3}</h3>
            <p class="card-text h5">{PLATFORMS_TEXT_3}</p>
          </div>
        </div>
      </div>
        <!--   4.  MR HEADSETS    -->
      <div class="card-container col-sm-6 col-xl-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body text-center">
            <img src={IMG_STACK_PLATFORM_4} alt="" class="img-fluid icon-image" />
            <h3 class="card-title fw-bold">{PLATFORMS_HEADING_4}</h3>
            <p class="card-text h5">{PLATFORMS_TEXT_4}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center px-3 px-sm-1">
      
      <div class="col-6 col-sm-5 col-md-5 col-lg-3 col-xxl-2 px-1 my-2 my-sm-2" align="center">
        <p class="stack-button-software btn-primary fw-bold py-4 mx-0 px-0 text-inside-button h4" on:click={showOnlySoftware}
        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><i class="bi bi-arrow-down-short"></i>{SOFTWARE_TITLE}<i class="bi bi-arrow-down-short"></i>
        </p>
      </div>
      <div class="col-6 col-sm-5 col-md-5 col-lg-3 col-xxl-2 px-1 my-2 my-sm-2" align="center">
        <p class="stack-button-hardware btn-primary fw-bold py-4 mx-0 px-0 text-inside-button h4" on:click={showOnlyHardware}
        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><i class="bi bi-arrow-down-short"></i>{HARDWARE_TITLE}<i class="bi bi-arrow-down-short"></i>
        </p>
      </div>

    </div>

    <div class="row">
      <div class="collapse multi-collapse mb-4" id="multiCollapseExample1">
        <!--       20     SOFTWARE          --> 
        
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 col-xxl-9" align="center">
            <div class="row cards-row justify-content-center mx-1">

              <!-- <h2 class="mt-2 text-light">{SOFTWARE_TITLE}</h2> -->
              <!--  1. UNITY   -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_1} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_1}</h5>
                  </div>
                </div>
              </div>
              <!--  2.  UNREAL/BLUEPRINTS    -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_2} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_2}</h5> 
                  </div>
                </div>
              </div>
              <!--  3.  OCULUS SDK    -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_3} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_3}</h5>
                  </div>
                </div>
              </div>
              <!--  4.  STEAMVR   -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_4} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_4}</h5>
                  </div>
                </div>
              </div>
              <!--  5.  AFRAME/BABYLONJS/THREEJS    -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center ">
                    <img src={IMG_STACK_SOFTWARE_5} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_5}</h5>
                  </div>
                </div>
              </div>

              <!--  6.  WEBXR/OPEN XR    -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_6} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_6}</h5>
                  </div>
                </div>
              </div>

              <!--   7. ARCORE / VUFORIA   -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_7} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_7}</h5>
                  </div>
                </div>
              </div>

              <!--   8. ADOBE CREATIVE SUITE    -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_8} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_8}</h5>
                  </div>
                </div>
              </div>

              <!--   9. BLENDER    -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_9} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_9}</h5>
                  </div>
                </div>
              </div>

              <!--   10. SVELTE HTML JAVASCRIPT CSS    -->
              <div class="card-container px-2 col-6 col-sm-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <img src={IMG_STACK_SOFTWARE_10} alt="" class="img-fluid icon-image" />
                    <h5 class="small-card-title fw-bold">{SOFTWARE_HEADING_10}</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    

      <div class="collapse multi-collapse mb-4" id="multiCollapseExample2">
        <!--        30    Hardware             -->
          <div class="row justify-content-center">
            <div class="col-12 col-md-12 col-xxl-9" align="center">
              <div class="row cards-row justify-content-center mx-1">

          
                <!--   1.  Varjo VR-3    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_1} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_1}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--  2.  Meta Quest 2 / Pico Neo 3   -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_2} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_2}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--  3.  Insta360 Pro 2    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_3} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_3}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--  4.  Phones / Tablets    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_4} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_4}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--  5.  HTC Vive Pro 2 / Focus    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_5} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_5}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--   6.  DRONES    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_6} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_6}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--   7.  Looking Glass Holograms    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_7} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_7}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--  8.  Immersive Rooms / Domes    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_8} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_8}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--  9.  Oculus Go    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_9} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_9}</h5>
                      
                    </div>
                  </div>
                </div>
                <!--  10.  GoPro Max    -->
                <div class="card-container px-2 col-6 col-sm-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <img src={IMG_STACK_HARDWARE_10} alt="" class="img-fluid icon-image" />
                      <h5 class="small-card-title fw-bold">{HARDWARE_HEADING_10}</h5>
                      
                    </div>
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

/* SCROLL MARGIN SO THAT WHEN WE SCROLL TO IT IT ACCOUNDS FOR THE 97px HEADER */
section{
    scroll-margin-top: 96px;
}

/* BUTTONS */
.btn-primary{
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color:  #deed0a;
  color: black;
  color:rgb(0, 0, 0);
  border-radius:150px;
  overflow:hidden;
  white-space: nowrap;
  border-width: 2px;

}

.btn-primary:hover{
  background-color: rgb(0, 0, 0) !important;
  color:#deed0a !important;
  text-decoration:none !important;
  border-color: #deed0a;
}

.btn-primary:disabled{
  opacity: 100% !important;
}

.btn-primary:hover .bi{
  display: inline-block; 
  transform: translate(0px,5px) scale(1.5,1.5);
}

.btn-primary{
  cursor: pointer;
}

:global(.button-selected){
  background-color: rgb(0, 0, 0) !important;
  color:#deed0a !important;
  border-color: #deed0a !important;
}

.card{
  border-radius: 25px;
  border-style: solid;
  border-width: 5px;
  border-color: #deed0a;
}

.card-container{
  margin: 10px 0px;
  max-width: 400px;
}

.card-title{
  /* font-family:Verdana, Geneva, Tahoma, sans-serif !important; */
}


.icon-image{
  width: 150px;
}

.bi{
  font-size: 30px;
  line-height: 5px;
}


/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

  #title-content-wrapper{
    max-width: 50rem;
  }
  
  .btn-primary{
    max-width: 18rem;
  }

  .cards-row{
    max-width: 90rem;
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

/* 0) VERY SMALL SIZE - SMALL PHONES <576px*/
@media(max-width: 575px)  and (min-width: 377px){
  
  .btn-primary{
    font-size: 1rem;
    align-content: center;
  }
  
  .bi{
     font-size: 1rem; 
  }

  .small-card-title{
    font-size: 0.9rem;
  }

  .main-text-main{
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
    }

}

/* 0) VERY SMALL SIZE - SMALL PHONES <576px*/
/* IN THIS MEDIA QUERY WE USE THE RESPONSIVE MENU, NOT THE REGULAR MENU */
@media(max-width: 376px){
  
  .btn-primary{
    font-size: 0.9rem;
    align-content: center;
  }

  .card-title{
    font-size: 1.5rem;
  }

  .small-card-title{
    font-size: 0.7rem;
  }

  .bi{
     font-size: 1rem; 
  }

  .main-text-main{
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 21rem;
    }



}

</style>
