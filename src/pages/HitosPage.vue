<template>
  <div class="main-container">
    <router-view></router-view>
    <HeaderProject />
    <!-- Navbar section -->
    <!-- breadcrumb strat -->
    <Breadcrumb>
      <template slot="breadcrumb">
        <div class="breadcrumb_box text-center">
          <h2 class="breadcrumb-title">
            Hitos de la relación entre Chile y <br />UC Davis desde los años 60
          </h2>
          <!-- breadcrumb-list start -->
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'RelacionHistorica' }"
                >Relación Histórica</router-link
              >
            </li>
            <li class="breadcrumb-item active gold">Hitos</li>
          </ul>
          <!-- breadcrumb-list end -->
        </div>
      </template>
    </Breadcrumb>
    <!-- breadcrumb end -->

    <!-- portfolio details wrapper start -->
    <div class="portfolio-details-wrapper section-space--ptb_120">
      <Gradation />
    </div>

    <!-- portfolio details wrapper end -->
    <OverlayMenu />
    <!-- footer section -->
    <FooterMain />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import FooterMain from "@/components/FooterMain";
import HeaderProject from "@/components/HeaderProject";
import OverlayMenu from "@/components/OverlayMenu";
import Gradation from "@/components/Gradation";
export default {
  name: "PortfolioGrid",
  components: {
    HeaderProject,
    Breadcrumb,
    FooterMain,
    OverlayMenu,
    Gradation,
  },
  data: () => ({
    title: "",
    currentPage: "",
    number: "",
    shortName: "",
  }),
};
</script>

<style lang="scss" scoped>
.team-list {
  list-style: circle;
  padding-left: 40px;
  li {
    padding-bottom: 10px;
    span.position {
      display: block;
      font-size: 12px;
    }
  }
}
.portfolio-nav-links {
  .nav-list {
    img {
      margin-right: 28px;
      max-width: 130px;
    }
  }
}
.anexo-number {
  font-size: 30px;
  font-weight: 300;
}
.breadcrumb-area.bg-blue {
  background: $pinot;
}
</style>