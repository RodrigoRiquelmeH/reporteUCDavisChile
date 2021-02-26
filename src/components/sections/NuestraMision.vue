<template>
  <div
    class="feature-app-showcase section-space--ptb_120 section-space--mb_120 section-space--pb_120"
    id="mision"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <ChartCircleTwo
            color="strawberry"
            sectionProgress="54"
            circleValue="05"
            class="section-space--mb_40"
          />
        </div>
      </div>
      <SectionTitle
        color="strawberry"
        sectionTitle="Nuestra misión"
        class="wow move-up"
      />
      <!-- tab conetent section -->
      <TabOne />
    </div>
  </div>
</template>
<script>
import SectionTitle from "@/components/SectionTitle";
import ChartCircleTwo from "@/components/ChartCircleTwo";
import TabOne from "@/components/TabOne";
export default {
  name: "nuestraMision",
  components: {
    ChartCircleTwo,
    SectionTitle,
    TabOne,
  },
};
</script>

