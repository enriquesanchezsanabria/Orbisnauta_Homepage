<!--SCRIPT-->
<script>
import MainBanner from "../Components/Home/MainBanner.svelte";
import SeoBanner from "../Components/Home/SeoBanner.svelte";
import IndustriesBanner from "../Components/Home/IndustriesBanner.svelte";
import StackBanner from "../Components/Home/StackBanner.svelte";
import PipelineBanner from "../Components/Home/PipelineBanner.svelte";
import CtaSmallBanner from "../Components/Contact/CtaSmallBanner.svelte"
import DATA from "../Data/data_es";
</script>

<svelte:head>
<title>Agencia de Realidad Virtual y Realidad Aumentada</title>
<link rel="canonical" href="https://www.orbisnauta.com/es"/>
<html lang="es"/>
</svelte:head>

<MainBanner mainbannerData={DATA.MAINBANNER_DATA_ES} />
<SeoBanner seobannerData={DATA.SEOBANNER_DATA_ES}  />
<IndustriesBanner industriesbannerData={DATA.INDUSTRIESBANNER_DATA_ES}  />
<StackBanner stackbannerData={DATA.STACKBANNER_DATA_ES}  />
<PipelineBanner pipelinebannerData={DATA.PIPELINEBANNER_DATA_ES}  />
<CtaSmallBanner ctasmallbannerData={DATA.CTASMALLBANNER_DATA_ES}  /> 


