<!--SCRIPT-->
<script>
import ServicesMainBanner from "../Components/Services/ServicesMainBanner.svelte";
import ServicesIndividualBanner from "../Components/Services/ServicesIndividualBanner.svelte";
import CtaSmallBanner from "../Components/Contact/CtaSmallBanner.svelte"
import DATA from "../Data/data_es";
</script>

<svelte:head>
<title>Servicios de Realidad Virtual</title>
<!-- <link rel="canonical" href="https://www.orbisnauta.com/services_es"/> -->
<link rel="canonical" href="https://www.orbisnauta.com/services_es"/>

<html lang="es"/>
</svelte:head>

<ServicesMainBanner servicesmainbannerData={DATA.SERVICESMAIN_BANNER_DATA_ES}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_1_BANNER_DATA_ES}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_2_BANNER_DATA_ES}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_3_BANNER_DATA_ES}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_4_BANNER_DATA_ES}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_5_BANNER_DATA_ES}/>

<CtaSmallBanner ctasmallbannerData={DATA.CTASMALLBANNER_DATA_ES}  /> 
