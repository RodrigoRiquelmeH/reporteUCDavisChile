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
            <small class="text-uppercase anexo-number">Anexo:</small><br />
            {{ title }}
          </h2>
          <!-- breadcrumb-list start -->
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Impacto' }">Impacto</router-link>
            </li>
            <li class="breadcrumb-item active gold">{{ shortName }}</li>
          </ul>
          <!-- breadcrumb-list end -->
        </div>
      </template>
    </Breadcrumb>
    <!-- breadcrumb end -->

    <!-- portfolio details wrapper start -->
    <div class="portfolio-details-wrapper section-space--ptb_100">
      <div class="container">
        <Anexo1 v-if="currentPage == 'anexo-1'" />
        <Anexo2 v-if="currentPage == 'anexo-2'" />
        <Anexo3 v-if="currentPage == 'anexo-3'" />
        <Anexo4 v-if="currentPage == 'anexo-4'" />
        <Anexo5 v-if="currentPage == 'anexo-5'" />
        <Anexo6 v-if="currentPage == 'anexo-6'" />
        <Anexo7 v-if="currentPage == 'anexo-7'" />
        <Anexo8 v-if="currentPage == 'anexo-8'" />
        <Anexo9 v-if="currentPage == 'anexo-9'" />
      </div>
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
import Anexo1 from "@/components/anexos/Anexo1";
import Anexo2 from "@/components/anexos/Anexo2";
import Anexo3 from "@/components/anexos/Anexo3";
import Anexo4 from "@/components/anexos/Anexo4";
import Anexo5 from "@/components/anexos/Anexo5";
import Anexo6 from "@/components/anexos/Anexo6";
import Anexo7 from "@/components/anexos/Anexo7";
import Anexo8 from "@/components/anexos/Anexo8";
import Anexo9 from "@/components/anexos/Anexo9";
export default {
  name: "PortfolioGrid",
  components: {
    HeaderProject,
    Breadcrumb,
    FooterMain,
    OverlayMenu,
    Anexo1,
    Anexo2,
    Anexo3,
    Anexo4,
    Anexo5,
    Anexo6,
    Anexo8,
    Anexo7,
    Anexo9,
  },
  data: () => ({
    title: "",
    currentPage: "",
    number: "",
    shortName: "",
    anexos: [
      {
        id: "anexo-1",
        num: "1",
        title: "Investigadores, académicos y staff UC Davis",
        shortName: "Investigadores UC Davis",
      },
      {
        id: "anexo-2",
        num: "2",
        title: "Investigadores nacionales contratados por UC Davis Chile",
      },
      {
        id: "anexo-3",
        num: "3",
        title: "Publicaciones Científicas",
        shortName: "Investigadores nacionales",
      },
      {
        id: "anexo-4",
        num: "4",
        title: "Tesis de Posgrado - Capital humano formado por UC Davis Chile",
        shortName: "Tesis de Posgrado",
      },
      {
        id: "anexo-5",
        num: "5",
        title:
          "Artículos de difusión técnica en medios especializados del sector agroalimentario",
        shortName: "Artículos de difusión técnica",
      },
      {
        id: "anexo-6",
        num: "6",
        title: "Proyectos ejecutados",
        shortName: "Proyectos ejecutados",
      },
      {
        id: "anexo-7",
        num: "7",
        title: "Eventos UC Davis Chile 2015 - 2020",
        shortName: "Eventos",
      },
      {
        id: "anexo-8",
        num: "8",
        title: "Solicitudes de patentes presentadas",
        shortName: "Solicitudes de patentes",
      },
      {
        id: "anexo-9",
        num: "9",
        title: "Tecnologías biotech licenciadas",
        shortName: "Tecnologías biotech licenciadas",
      },
    ],
  }),
  created() {
    let id = this.$route.params.anexo;
    let currentAnexo = this.anexos.find((anexo) => anexo.id === id);
    this.title = currentAnexo.title;
    this.number = currentAnexo.num;
    this.shortName = currentAnexo.shortName;
    this.currentPage = id;
  },
  methods: {
    backToProjects() {
      console.log("click");
      return this.$router.push("/#proyectos");
    },
  },
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
</style>