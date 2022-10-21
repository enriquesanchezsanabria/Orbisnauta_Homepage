<script>
  import "../global.css";
  import "../app.scss";


</script>



<header>
  <!-- <Title title="Orbisnauta Labs"/> -->

</header>

  <nav class="navbar sticky-top navbar-expand navbar-light bg-dark">

    <div id="navcontainer" class="container">
        <a href="/es"  class="navbar-brand">
          <img src="images/virtual_reality_ development_agency_orbisnauta_logo.png" class="logo-img img-fluid"  alt="" />
        </a>

      <div class="collapse navbar-collapse d-flex flex-row-reverse px-3" id="navbarText">
        <ul class="navbar-nav mr-auto">

          <!--
          <li class="nav-item ">
            <a class="nav-link " href="/es">ESP</a>
          </li>
          -->
          
          <li class="nav-item">
            <a class="eng-button nav-link fw-bold text-white " href="/">ENG</a>
          </li>
          <li class="nav-item ">
            <a class="esp-button nav-link fw-bold text-white" href="/es">ESP</a>
          </li>

          <li class="nav-item">
            <a class="contact-button px-4 nav-link fw-bold bg-primary text-white" href="/contact_es">Contáctanos</a>
          </li>
        </div>
    </div>

  </nav>

<main>

  <slot>
    
  </slot>

</main>

<!--
<footer>
  <section id="footer" class="bg-light d-flex align-items-center">
    <div class="container-lg">
      <div class="row section-body justify-content-center my-1">
        <p> - Copyright Ⓒ 2022 Orbisnauta - </p>
      </div>
    </div>

  </section>
</footer>
-->
<div class="footer-basic bg-dark">
  <footer>
    <!--<p class="mb-4">_____________________________________________</p>-->
    <p class="mb-3 text-white">info@orbisnauta.com</p>
    <div class="social">
    
      <a href="https://twitter.com/orbisnauta_">
        <i class="bi bi-twitter text-white">
        </i>
      </a>
      <a href="https://www.linkedin.com/company/orbisnauta/">
        <i class="bi bi-linkedin text-white ">
        </i>
      </a>
      <a href="https://www.facebook.com/orbisnautafacebook">
        <i class="bi bi-facebook text-white ">
        </i>
      </a>
      <a href="https://www.instagram.com/orbisnauta/">
          <i class="bi bi-instagram text-white ">
          </i>
        </a>
        <a href="https://www.youtube.com/channel/UCDJB5ynupBQD2P8CACuOp1g">
          <i class="bi bi-youtube text-white ">
          </i>
        </a>
    </div>
    <!--<ul class="list-inline">
        <li class="list-inline-item"><a href="#">Home</a></li>
        <li class="list-inline-item"><a href="#">Services</a></li>
        <li class="list-inline-item"><a href="#">About</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
    </ul>-->
    <p class="copyright">Copyright Ⓒ 2022 Orbisnauta</p>
  </footer>
</div>


<style>

/*ESP BUTTON SELECTED*/

.esp-button{
  text-decoration: underline overline;
  text-underline-offset: 6px;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: 5px;
  margin-right: 20px;
}


.eng-button{
  text-underline-offset: 6px;
  padding-left: 0px;
  padding-right: 1px;
}

.eng-button:hover{
  text-decoration: underline;
}

.contact-button{
  text-underline-offset: 6px;
}

.contact-button:hover{
  text-decoration: underline;
}
  
.navbar ul li a {

color:rgb(0, 0, 0);
border-radius:150px;


}
.navbar ul li a:hover {

color:rgb(156, 156, 156);
}



#navcontainer{
max-width: 1840px;
}


p{
text-align: center;
margin:auto;
}

nav{
  text-align: right;
  padding-top:0px;
  padding-bottom:0px;
}

img{
 

  height: 50px;
}

.navbar-brand{

  margin-left: 3px;
  margin-right: 0px;
}

li{
  list-style: none;
}



.footer-basic {
  padding:20px 0;
  background-color:#ffffff;
  color:#4b4c4d;
}



.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:10px;
}

.footer-basic .social > a {
  font-size: 30px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  /*border:1px solid #ccc;*/
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}



/* 5) ULTRA LARGE SIZE - ULTRA SCREENS >1921 */
@media(min-width: 1921px){
  .logo-img{
    padding-left: 9px;
  }

  .contact-button{
    margin-right: 29px;

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
@media(max-width: 767px){

}

/* 0) VERY SMALL SIZE - SMALL PHONES <576px*/
@media(max-width: 576px){

#navbarText{
  margin: 0px 0px 0px 0px;
  padding-right: 0px !important;
}

.esp-button{
  margin-right: 5px;
}

}

/* 0) VERY VERY VERY SMALL SIZE - SMALL PHONES <412px*/
@media(max-width: 376px){

.logo-img{
max-height: 3rem;
width: auto; 
height: auto;
}

.navbar ul li a{
 padding: 0.3rem 0.3rem 0.4rem 0.4rem !important;
 font-size: 15px;
}

#navbarText{
  margin: 0px 0px 0px 0px;
  padding-right: 0px !important;
}

.esp-button{
  margin-right: 5px;
}

}




</style>