<!--SCRIPT-->
<script>
import MainBanner from "../Components/Banner/MainBanner.svelte";
import SeoBanner from "../Components/Banner/SeoBanner.svelte";
import IndustriesBanner from "../Components/Banner/IndustriesBanner.svelte";
import StackBanner from "../Components/Banner/StackBanner.svelte";
import PipelineBanner from "../Components/Banner/PipelineBanner.svelte";
import ServicesBanner from "../Components/Banner/ServicesBanner.svelte";
import CtaBanner from "../Components/Banner/CtaBanner.svelte"
import DATA from "../Data/data_es";
</script>

<MainBanner mainbannerData={DATA.MAINBANNER_DATA_ES} />
<SeoBanner seobannerData={DATA.SEOBANNER_DATA_ES}  />
<IndustriesBanner industriesbannerData={DATA.INDUSTRIESBANNER_DATA_ES}  />
<StackBanner stackbannerData={DATA.STACKBANNER_DATA_ES}  />
<PipelineBanner pipelinebannerData={DATA.PIPELINEBANNER_DATA_ES}  />
<ServicesBanner servicesbannerData={DATA.SERVICESBANNER_DATA_ES}  /> 
<CtaBanner ctabannerData={DATA.CTABANNER_DATA_ES}  />
    