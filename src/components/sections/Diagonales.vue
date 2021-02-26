<template>
  <div
    class="payment-staps-pricing_wrapper payment-pricing-table-bg"
    id="pricing-section"
  >
    <div class="position-relative section-space--pb_120">
      <div class="section-spartor_svg_02 vc_row-separator tilt_left bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 4 0.266661"
        >
          <linearGradient id="svg-fill-5d3ab43082011">
            <stop offset="0%" stop-color="#022851"></stop>
            <stop offset="100%" stop-color="#022851"></stop>
          </linearGradient>
          <polygon
            points="4,0 4,0.266661 -0,0.266661"
            fill="url( #svg-fill-5d3ab43082011 )"
          ></polygon>
        </svg>
      </div>
    </div>
    <Hitos />
    <!--========= Pricing  Table Area ===========-->
    <div
      class="pricing-table-area section-space--pb_120 position-relative"
      id="pricing"
    >
      <div
        class="pricing-table-title-area position-relative section-table_gradeient"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="section-title-wrapper text-center section-space--mb_60"
              >
                <h2
                  class="section-title text-white font-width-light mb-15 wow move-up"
                >
                  Affordable for everyone!
                </h2>
                <p class="text-white wow move-up">
                  Choose a suitable package for your site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-spartor_svg_02 vc_row-separator tilt_right top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 4 0.266661"
        >
          <linearGradient id="svg-fill-5d3ab430835b4">
            <stop offset="0%" stop-color="#a890f2"></stop>
            <stop offset="100%" stop-color="#8481ec"></stop>
          </linearGradient>
          <polygon
            points="4,0 4,0.266661 -0,0.266661"
            fill="url( #svg-fill-5d3ab430835b4 )"
          ></polygon>
        </svg>
      </div>

      <div class="pricing-table-content-area">
        <div class="container">
          <!-- PricingTwo component -->
        </div>
      </div>
    </div>
    <!--========= Pricing  Table End ===========-->
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import Hitos from "@/components/Hitos";

export default {
  name: "PaymentPricingWrapper",
  components: {
    ICountUp,
    Hitos,
  },
  data() {
    return {
      delay: 300,
    };
  },
};
</script>