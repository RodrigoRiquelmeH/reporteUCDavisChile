<template>
  <div class="feature-list-progress d-block">
    <div class="app-showcase-progress__title">
      <div class="feature-list-progress__counter">
        <div class="circle-progress-wrapper">
          <div class="chart-progress">
            <div class="chart-progress__inner-wrapper">
              <div
                class="chart-progress__inner chart-progress__inner--blue"
                :class="color"
              >
                <!-- <vue-circle
                  :progress="parseInt(sectionProgress)"
                  :size="160"
                  line-cap="round"
                  :fill="blue"
                  :thickness="4"
                  :start-angle="0"
                  :show-percent="false"
                >
                </vue-circle> -->
                <div class="chart-progress__inner-content">
                  <h4 class="chart-progress__inner-text">
                    <span class="chart-number font-weight-bold">
                      #{{ circleValue }}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="circle-design circle-design--blue one"></div>
          <div class="circle-design circle-design--blue two"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress/src/index.vue";

export default {
  components: {
    VueCircle,
  },
  data() {
    return {
      fill: { gradient: ["#fad961", "#f76b1c"] },
      blue: { gradient: ["#0047BA", "#022851"] },
    };
  },
  props: ["circleValue", "color", "sectionProgress"],
};
</script>
<style lang="scss" scoped>
.circle-design--blue {
  background: $gold;
}
.chart-progress__inner--blue {
  background-color: transparent;
  background-size: 101%;
  background-repeat: no-repeat;
  background-position: center center;
}
.chart-progress__inner--blue.strawberry {
  background-image: url("../assets/img/watercolor/watercolor-strawberry.png");
}
.chart-progress__inner--blue.arboretum {
  background-image: url("../assets/img/watercolor/watercolor-arboretum.png");
}
.chart-progress__inner--blue.bodega {
  background-image: url("../assets/img/watercolor/watercolor-bodega.png");
}
.chart-progress__inner--blue.cabernet {
  background-image: url("../assets/img/watercolor/watercolor-cabernet.png");
}
.chart-progress__inner--blue.pinot {
  background-image: url("../assets/img/watercolor/watercolor-pinot.png");
}
.chart-progress__inner--blue.icing {
  background-image: url("../assets/img/watercolor/watercolor-icing.png");
}
.chart-progress__inner--blue.poppy {
  background-image: url("../assets/img/watercolor/watercolor-poppy.png");
}
.app-showcase-progress__title .chart-progress__inner-wrapper {
  padding: 10px;
}
</style>
