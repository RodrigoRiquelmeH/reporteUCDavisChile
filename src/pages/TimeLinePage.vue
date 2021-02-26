<template>
  <div class="main-container">
    <router-view></router-view>
    <HeaderProject />
    <!-- Navbar section -->
    <!-- breadcrumb strat -->
    <Breadcrumb>
      <template slot="breadcrumb">
        <div class="breadcrumb_box text-center">
          <h2 class="breadcrumb-title">Línea de tiempo</h2>
          <!-- breadcrumb-list start -->
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'UCDavisChile' }"
                >UC Davis Chile</router-link
              >
            </li>
            <li class="breadcrumb-item active gold">Línea de tiempo</li>
          </ul>
          <!-- breadcrumb-list end -->
        </div>
      </template>
    </Breadcrumb>
    <!-- breadcrumb end -->

    <!-- portfolio details wrapper start -->
    <div class="portfolio-details-wrapper">
      <Timeline />
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
import Timeline from "@/components/Timeline";
export default {
  name: "PortfolioGrid",
  components: {
    HeaderProject,
    Breadcrumb,
    FooterMain,
    OverlayMenu,
    Timeline,
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
        title: "Investigadores UC Davis",
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
.breadcrumb-area.bg-blue {
  background: $redbud;
  padding-bottom: 0;
}
</style>