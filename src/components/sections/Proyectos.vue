<template>
  <div
    class="feature-app-showcase section-space--pt_120 section-space--pb_120 bg-blue"
    id="proyectos"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <ChartCircleTwo
            color="cabernet"
            sectionProgress="100"
            circleValue="11"
            class="section-space--mb_40"
          />
        </div>
      </div>
      <SectionTitle
        color="white"
        sectionTitle="Principales Proyectos"
        class="wow move-up"
      />
    </div>
    <!-- portfolio item wrapper start -->
    <div class="portfolio-pages-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 text-white text-center intro mx-auto">
            <p>
              A continuación, información relativa a nuestros principales
              proyectos. Si desea revisar el portafolio total de los
              <router-link
                :to="{
                  name: 'Anexo',
                  params: {
                    anexo: 'anexo-6',
                  },
                }"
                ><strong>55 proyectos</strong></router-link
              >.
            </p>
          </div>
        </div>
        <div class="row clearfix masonry-wrap">
          <!--v-masonry-->
          <div
            class="col-12 masonary-item"
            v-for="project in projects"
            :key="project.id"
          >
            <div class="portfolio-grid-caption mb-30" v-if="project.name">
              <router-link
                :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
                class="single-grid-caption"
              >
                <div v-if="project.thumb" class="single-portfolio__thumbnail">
                  <img
                    :src="require(`@/assets/img/projects/${project.thumb}`)"
                    :alt="project.name"
                    class="img-fluid border-radus-5"
                  />
                </div>
              </router-link>
              <div class="post-info">
                <h5 class="post-title font-weight--bold">
                  <router-link
                    :to="{
                      name: 'ProjectDetail',
                      params: { slug: project.slug },
                    }"
                    v-html="project.name"
                  ></router-link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <router-link
        :to="{
          name: 'Anexo',
          params: {
            anexo: 'anexo-6',
          },
        }"
        class="ht-btn ht-btn-md ht-btn-custom bg-gold text-uppercase"
      >
        Ver listado completo de proyectos
      </router-link>
    </div>
    <!-- portfolio item wrapper end -->

    <!-- footer section -->
  </div>
</template>

<script>
import HeaderElement from "@/components/HeaderElement";
import Breadcrumb from "@/components/Breadcrumb";
import FooterMain from "@/components/FooterMain";
import OffcanvasSearchBox from "@/components/OffcanvasSearchBox";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import SectionTitle from "@/components/SectionTitle";
import ChartCircleTwo from "@/components/ChartCircleTwo";
import Projects from "@/store/projects.js";
export default {
  name: "PortfolioMasonry",
  components: {
    HeaderElement,
    Breadcrumb,
    FooterMain,
    OffcanvasSearchBox,
    OffCanvasMobileMenu,
    SectionTitle,
    ChartCircleTwo,
  },

  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }

    this.onLoad();
  },

  methods: {
    async onLoad() {
      await this.sleep(950);
      this.$redrawVueMasonry();
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },

  data() {
    return {
      projects: Projects.list,
    };
  },
};
</script>

<style lang="scss" scoped>
.ht-btn {
  background-image: none;
}
</style>
