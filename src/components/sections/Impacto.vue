<template>
  <div
    class="feature-app-showcase section-space--pt_120 section-space--mb_120"
    id="impacto"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ChartCircleTwo
            color="poppy"
            sectionProgress="63"
            circleValue="07"
            class="section-space--mb_40"
          />
        </div>
        <div class="col-12">
          <SectionTitle
            color="poppy"
            sectionTitle="Impacto"
            class="wow move-up"
          />
          <h3 class="subtitle text-center mb-5 pb-5 poppy text-uppercase">
            EN 5 AÑOS NUESTRO APORTE AL PAÍS <br />SE TRADUCE EN:
          </h3>
        </div>
      </div>
    </div>
    <Aporte />
  </div>
</template>

<script>
import ChartCircleTwo from "@/components/ChartCircleTwo";
import SectionTitle from "@/components/SectionTitle";
import Aporte from "@/components/Aporte";
export default {
  name: "RelacionHistorica",
  components: {
    SectionTitle,
    ChartCircleTwo,
    Aporte,
  },
};
</script>

<style lang="scss" scoped>
h5 {
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
  color: #022851;
  margin-bottom: 15px;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
</style>