<!--SCRIPT-->
<script>
import MainBanner from "../Components/Banner/MainBanner.svelte";
import SeoBanner from "../Components/Banner/SeoBanner.svelte";
import IndustriesBanner from "../Components/Banner/IndustriesBanner.svelte";
import StackBanner from "../Components/Banner/StackBanner.svelte";
import PipelineBanner from "../Components/Banner/PipelineBanner.svelte";
import ServicesBanner from "../Components/Banner/ServicesBanner.svelte";
import CtaBanner from "../Components/Banner/CtaBanner.svelte"
import DATA from "../Data/data";
</script>

<MainBanner mainbannerData={DATA.MAINBANNER_DATA} />
<SeoBanner seobannerData={DATA.SEOBANNER_DATA}  />
<IndustriesBanner industriesbannerData={DATA.INDUSTRIESBANNER_DATA}  />
<StackBanner stackbannerData={DATA.STACKBANNER_DATA}  />
<PipelineBanner pipelinebannerData={DATA.PIPELINEBANNER_DATA}  />
<ServicesBanner servicesbannerData={DATA.SERVICESBANNER_DATA}  /> 
<CtaBanner ctabannerData={DATA.CTABANNER_DATA}  />
