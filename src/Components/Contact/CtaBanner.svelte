<script>
    import { debug } from "svelte/internal";

export let ctabannerData = {};
  const {HEADING, DESCRIPTION,FORM_MANDATORY,
  FORM_EMAIL,FORM_EMAIL_PLACEHOLDER,FORM_NAME,FORM_NAME_PLACEHOLDER,
  FORM_COMPANY,FORM_COMPANY_PLACEHOLDER,FORM_BUDGET,FORM_SPEC,FORM_SUBMIT,

  LEGAL_MESSAGE_1b,LEGAL_MESSAGE_2b,LEGAL_MESSAGE_3,LEGAL_MESSAGE_4b,
  LEGAL_MESSAGE_5,LEGAL_MESSAGE_6b,LEGAL_MESSAGE_7,LEGAL_MESSAGE_8b,
  LEGAL_MESSAGE_9,LEGAL_MESSAGE_10b,LEGAL_MESSAGE_11,LEGAL_MESSAGE_12b,
  LEGAL_MESSAGE_13,LEGAL_MESSAGE_14,LEGAL_MESSAGE_15b
} = ctabannerData;

let isCheckMarked = false;

function checkboxClicked(){
  if (isCheckMarked){
    isCheckMarked=false;
  }else{
    isCheckMarked=true;
  }
}

function showOptionalForm(){
  console.log("hello");

  // <div class="collapse multi-collapse mb-4" id="multiCollapseExample1">

    let contactCollapse = document.getElementById("contactCollapseExample");

    var contactCollapseVariable = new bootstrap.Collapse(contactCollapse, {
        toggle: false
    })

    contactCollapseVariable.show();

    console.log("done");
}

</script>

<section id="ctabanner" class="bg-black d-flex align-items-center">
  <div class="container-fluid my-2 my-md-3">

    <div class="row justify-content-center mt-4">
      <div id="title-content-wrapper" class="col-12 col-sm-10 col-md-10 col-xl-12 col-xxl-11 my-2 my-md-1 ">
        <h1 class="main-text-main text-center fw-bold my-1 my-md-3 display-2">
            {HEADING}
        </h1>
        <h2 class="main-text-post text-center text-light my-1 my-md-3 lh-base ">
          {DESCRIPTION}
        </h2>
      </div>
    </div>
    
    <div class="row justify-content-center">
      <div id="form-content-wrapper" class="col-12 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-5 all-form">
        
        <form action="https://formsubmit.co/83e179bcf98635a439c6b9420b270ab2" method="POST">
        
          <div class="formdiv my-1 my-sm-2">
            <label for="email" class="form-label my-1 text-light">{FORM_EMAIL} *({FORM_MANDATORY})</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-envelope-fill text-secondary"></i>
              </span>
              <input type="text" id="email" name="email" class="form-control form-radius" placeholder={FORM_EMAIL_PLACEHOLDER} required>
            </div>
          </div>

          <div class="formdiv my-1 my-sm-2">
            <label for="name" class="form-label my-1 text-light">{FORM_NAME} *</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-person-fill text-secondary"></i>
              </span>
              <input type="text" id="name" name="fullname" class="form-control form-radius" placeholder={FORM_NAME_PLACEHOLDER} required on:input={showOptionalForm}>
            </div>
          </div>




          <div class="collapse multi-collapse" id="contactCollapseExample">

            <div class="formdiv my-1 my-sm-2">
              <label for="company" class="form-label my-1 text-light">{FORM_COMPANY}</label>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bi bi-person-fill text-secondary"></i>
                </span>
                <input type="text" id="company" name="company" class="form-control form-radius" placeholder={FORM_COMPANY_PLACEHOLDER}>
              </div>
            </div>
  
            <div class="formdiv my-1 my-sm-2">
              <label for="budget" class="form-label my-1 text-light">{FORM_BUDGET} *</label>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bi bi-chat-right-dots-fill text-secondary"></i>
                </span>
                <select class="form-select text-secondary form-radius" id="budget" name="budget" required>
                  <option  svalue="tentotwenty" selected>10.000 - 20.000</option>
                  <option  value="twentytofifty">20.000 - 50.000</option>
                  <option  value="fiftytohundred">50.000 - 100.000</option>
                  <option  value="morethanhundred">+100.000</option>
                </select>
              </div>
            </div>
  
            <div class="formdiv my-1 my-sm-2">
              <label for="query" class="form-label my-1 text-light">{FORM_SPEC}</label>
                <div class="specification-form">
                  <textarea class="form-control form-specification px-3 pb-5" name="specification" style="height: 140px"></textarea>
                </div>
            </div>

          </div>
        
          <div class="row form-check-row justify-content-center mt-3 mb-2 mt-xs-4 mb-xs-3">
            <div class="col-11 justify-content-center">
              <div class="form-check">
                <input class="form-check-input px-2 my-2" type="checkbox" value="" id="flexCheckChecked" checked={isCheckMarked} on:click={checkboxClicked} >
                <label class="form-check-label legal-check text-white mb-0 py-2 px-2 h6" for="flexCheckChecked">
                  {LEGAL_MESSAGE_14}
                  <a href="docs/Politica_Privacidad_Orbisnauta.pdf"><strong>{LEGAL_MESSAGE_15b}</strong></a>
                </label>
              </div>
            </div>
          </div>

          <div class="text-center my-1 mb-2">
            <button disabled={!isCheckMarked} type="submit" class="btn py-2 px-5 py-sm-3">
                <span class="text-inside-button my-0 h4 fw-bold">{FORM_SUBMIT}
                <i class="bi bi-arrow-right-short">
              </i></span>
            </button>
          </div>

          <div class="legal-form form-floating mt-4 mb-4 my-sm-4">
            <div class="legal-box">
              <p class="legal-text text-white text-justify mx-2 my-1 h6">
                <strong><u>{LEGAL_MESSAGE_1b}</u></strong> - <strong>{LEGAL_MESSAGE_2b}</strong>{LEGAL_MESSAGE_3}<strong>
                {LEGAL_MESSAGE_4b}</strong>{LEGAL_MESSAGE_5}<strong>{LEGAL_MESSAGE_6b}</strong>{LEGAL_MESSAGE_7}<strong>
                {LEGAL_MESSAGE_8b}</strong>{LEGAL_MESSAGE_9}<strong>{LEGAL_MESSAGE_10b}</strong>{LEGAL_MESSAGE_11}
                <a href="docs/Politica_Privacidad_Orbisnauta.pdf"><strong>{LEGAL_MESSAGE_12b}</strong></a> {LEGAL_MESSAGE_13}
              </p>
            </div>
          </div>

          
        </form>

      </div>
    </div>

  </div>
</section>

<style>

.multi-collapse{}

.form-check-label,.form-control,.form-label{
  font-family:Georgia, 'Times New Roman', Times, serif;
}

.btn{
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color:  #deed0a;
  color: black;
  border-radius:150px;
  overflow:hidden;
  white-space: nowrap;
  border-width: 2px;
}

.btn:hover{
  background-color: rgb(0, 0, 0) !important;
  color:#deed0a !important;
  text-decoration:none !important;
  border-color: #deed0a;
}

.btn:hover .bi{
    display: inline-block; 
    transform: translate(5px,0px);  
}

/* USAMOS ESTO PARA QUE NO SE VEA EL BORDE AZUL CUANDO HEMOS CLICKEADO EL BOTON EN MOVIL*/
.btn:focus, .btn:active{
    outline: none !important;
    box-shadow: none;
}

.input-group-text, .form-radius, .form-select, .form-specification, .legal-box,.legal-check  {
  border-radius: 25px;
}

.form-control{
  /*EL FORM DEL SPECIFICATION*/
  border-radius: 15px;
} 

.main-text-main{
  color:#deed0a;
}

.form-check{
  display:flex;
  align-self: center;
  justify-content: center;
}

.legal-text,.form-check-label{
    font-size: 0.8rem ;
}

/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){

  #title-content-wrapper{
    max-width: 80rem;
  }
  #form-content-wrapper{
    max-width: 40rem;
  }


}

/* 4) VERY LARGE SIZE - LARGE SCREENS >1920px and <1400px */
@media(max-width: 1920px) and (min-width: 1400px){

  #title-content-wrapper{
    max-width: 80rem;
  }

  #form-content-wrapper{
    max-width: 40rem;
  }



}

/* 3) LARGE SIZE - PC  >1399px and <992px */
@media(max-width: 1399px) and (min-width: 992px){

  #title-content-wrapper{
    max-width: 75rem;
  }

}

/* 2) MID SIZE - HORIZONTAL TABLETS >991px and <768px */
@media(max-width: 991px) and (min-width: 768px){


}

/* 1) SMALL SIZE - TABLETS AND PHONES <767px*/
@media(max-width: 767px) and (min-width: 377px){

  .form-check-label{
    font-size: 0.7rem ;
    text-align: center;
  }

}

/* 0) VERY VERY VERY SMALL SIZE - SMALL PHONES <412px*/
@media(max-width: 376px){

  .form-check-label{
    font-size: 0.7rem ;
    text-align: center;
  }

  
  .main-text-main{
        font-size: 2rem;
  }

  .main-text-post{
    font-size: 1rem;
  }

  .form-label, .form-control{
    font-size: 1rem;
  }

  .legal-text{
    font-size: 0.6rem;

  }


}

</style>
