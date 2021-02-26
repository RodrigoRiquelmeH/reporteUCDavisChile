<template>
  <div class="ht-tab-wrap">
    <b-tabs class="ht-tab-menu">
      <b-tab title="Objetivos" active>
        <!-- tab content one component -->
        <Objetivos />
      </b-tab>
      <b-tab title="Valores">
        <!-- tab content two component -->
        <Valores />
      </b-tab>
      <b-tab title="Misión">
        <!-- tab content third component -->
        <div class="clinic-work-process-step section-space--pt_90">
          <div class="row">
            <div class="col-lg-6">
              <div class="clinic-work-step__media images-left-ml text-center">
                <img
                  src="@/assets/img/mision.jpg"
                  class="img-fluid mision-img"
                  alt="thumbnail"
                />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="clinic-work-process-step__content">
                <div class="app-showcase__inner">
                  <div class="sub__title mb-20">
                    <h6 class="font-weight--blod">Misión</h6>
                  </div>

                  <div class="sub-text section-space--mb_40">
                    <h5>
                      Entregar al mercado y la sociedad soluciones tecnológicas
                      basadas en ciencia, a través de investigación
                      colaborativa, desarrollo y transferencia de tecnologías
                      que generen impacto económico y desarrollo social.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Visión">
        <div class="clinic-work-process-step section-space--pt_90">
          <div class="row">
            <div class="col-lg-6 order-lg-1 order-2">
              <div class="clinic-work-process-step__content">
                <div class="app-showcase__inner">
                  <div class="sub__title mb-20">
                    <h6 class="vision font-weight--blod">Visión</h6>
                  </div>
                  <div class="sub-text section-space--mb_40">
                    <h5>
                      Ser líder en Latinoamérica en investigación aplicada y
                      transferencia de soluciones tecnológicas en los ámbitos
                      agroalimentario y ambiental.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 order-lg-2 order-1">
              <div class="clinic-work-step__media images-right-mr text-center">
                <img
                  src="@/assets/img/vision.jpg"
                  class="img-fluid mision-img"
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Valores from "@/components/Valores";
import Objetivos from "@/components/Objetivos";

export default {
  name: "TabOne",
  components: {
    Objetivos,
    Valores,
  },
};
</script>

<style lang="scss">
#mision {
  .ht-tab-menu {
    .nav-tabs li a.active {
      background: $strawberry !important;
    }
  }
  .sub-text {
    h5 {
      font-size: 25px;
      line-height: 1.4;
    }
  }
  .sub__title {
    h6 {
      color: $strawberry;
      font-size: 15px;
      letter-spacing: 3px;
      text-transform: uppercase;
      line-height: 1.34;
    }
  }
  .vision {
    font-size: 25px;
    line-height: 1.4;
  }
  .ht-service-box--three {
    .image__media {
      height: 130px;
    }
  }
  .mision-img {
    height: 300px;
  }
}
</style>