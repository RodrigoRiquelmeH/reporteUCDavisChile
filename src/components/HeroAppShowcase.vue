<template>
  <section class="hero-app-showcase bg-cover default-bg pb-5" id="home">
    <div class="hero-item text-center">
      <div class="hero-content">
        <img
          class="logo"
          src="@/assets/img/logo/logo_horizontal_transparente.png"
          alt="logo"
        />
        <h2 class="main-title font-weight-light text-white font-display">
          Reporte
        </h2>
        <h6 class="hero-content-subtitle">Nuestros primeros 5 años de vida</h6>
      </div>
    </div>
    <ShowcaseRelacionHistorica />
    <!-- <div class="vc_row-separator center_curve_alt bottom">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
      </svg>
    </div> -->
  </section>
</template>

<script>
import ShowcaseRelacionHistorica from "@/components/ShowcaseRelacionHistorica.vue";
export default {
  components: {
    ShowcaseRelacionHistorica,
  },
  data() {
    return {
      // bgImg: {
      //   backgroundImage: `url(${require("../assets/img/hero/showcase/showcase-hero-bg.jpg")})`,
      // },
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  max-width: 500px;
  margin-bottom: 80px;
  margin-top: 80px;
  width: 80%;
}
.main-title {
  font-size: 60px;
  @media #{$min-tablet} {
    font-size: 80px;
  }
  @media #{$min-desktop} {
    font-size: 90px;
  }
}
</style>