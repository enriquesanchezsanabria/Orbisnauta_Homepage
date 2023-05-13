<!--SCRIPT-->
<script>
import MainBanner from "../Components/Home/MainBanner.svelte";
import SeoBanner from "../Components/Home/SeoBanner.svelte";
import IndustriesBanner from "../Components/Home/IndustriesBanner.svelte";
import StackBanner from "../Components/Home/StackBanner.svelte";
import PipelineBanner from "../Components/Home/PipelineBanner.svelte";
import CtaSmallBanner from "../Components/Contact/CtaSmallBanner.svelte"
import DATA from "../Data/data";
</script>

<svelte:head>
<title>Virtual Reality and Augmented Reality Agency</title>
<link rel="canonical" href="https://www.orbisnauta.com"/>
<html lang="en"/>
</svelte:head>

<MainBanner mainbannerData={DATA.MAINBANNER_DATA} />
<SeoBanner seobannerData={DATA.SEOBANNER_DATA}  />
<IndustriesBanner industriesbannerData={DATA.INDUSTRIESBANNER_DATA}  />
<StackBanner stackbannerData={DATA.STACKBANNER_DATA}  />
<PipelineBanner pipelinebannerData={DATA.PIPELINEBANNER_DATA}  />
<CtaSmallBanner ctasmallbannerData={DATA.CTASMALLBANNER_DATA}  /> 
