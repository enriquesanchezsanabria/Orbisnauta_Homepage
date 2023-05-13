<!--SCRIPT-->
<script>
import ServicesMainBanner from "../Components/Services/ServicesMainBanner.svelte";
import ServicesIndividualBanner from "../Components/Services/ServicesIndividualBanner.svelte";
import CtaSmallBanner from "../Components/Contact/CtaSmallBanner.svelte"
import DATA from "../Data/data";
</script>

<svelte:head>
<title>Virtual Reality Services</title>
<link rel="canonical" href="https://www.orbisnauta.com/services"/>
<html lang="en"/>
</svelte:head>

<ServicesMainBanner servicesmainbannerData={DATA.SERVICESMAIN_BANNER_DATA}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_1_BANNER_DATA}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_2_BANNER_DATA}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_3_BANNER_DATA}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_4_BANNER_DATA}/>
<ServicesIndividualBanner servicesindividualbannerData ={DATA.SERVICESINDIVIDUAL_5_BANNER_DATA}/>

<CtaSmallBanner ctasmallbannerData={DATA.CTASMALLBANNER_DATA}  /> 
