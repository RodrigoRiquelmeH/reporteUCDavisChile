<template>
  <div class="main-container">
    <router-view></router-view>
    <HeaderProject />
    <!-- Navbar section -->
    <!-- breadcrumb strat -->
    <Breadcrumb>
      <template slot="breadcrumb">
        <div class="breadcrumb_box text-center">
          <h2 class="breadcrumb-title" v-html="project.name"></h2>
          <!-- breadcrumb-list start -->
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Proyectos' }">Proyectos</router-link>
            </li>
            <li class="breadcrumb-item active gold">
              {{ project.title }}
            </li>
          </ul>
          <!-- breadcrumb-list end -->
        </div>
      </template>
    </Breadcrumb>
    <!-- breadcrumb end -->

    <!-- portfolio details wrapper start -->
    <div class="portfolio-details-wrapper section-space--ptb_100">
      <div class="container">
        <div class="row portfolio-details-feature-wrap">
          <div class="col-lg-6">
            <div
              v-for="(image, e) in project.images"
              :key="e"
              class="portfolio-details-one-images mb-30"
            >
              <img
                :src="require(`@/assets/img/projects/${image}`)"
                :alt="project.name"
                class="img-fluid border-radus-5"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="portfolio-details-content">
              <div class="portfolio-details-title">
                <a class="portfolio-categories" href="#">Nombre del proyecto</a>
                <h3 class="portfolio-details-title blue" v-html="project.name">
                  {{ project.name }}
                </h3>
                <div
                  class="subtitle"
                  v-if="project.subtitle"
                  v-html="project.subtitle"
                ></div>
              </div>
              <div class="portfolio-details-table mt-30">
                <table class="mb-0">
                  <tbody>
                    <tr class="portfolio-details-date">
                      <td class="label">Fecha de Ejecución</td>
                      <td v-html="project.date"></td>
                    </tr>

                    <tr class="portfolio-details-client">
                      <td class="label">Mandantes</td>
                      <td>
                        <ul>
                          <li
                            v-for="item in project.customer"
                            :key="item"
                            v-html="item"
                          ></li>
                        </ul>
                      </td>
                    </tr>
                    <tr
                      v-if="project.investment"
                      class="portfolio-details-client"
                    >
                      <td class="label">Inversión total</td>
                      <td>{{ project.investment }}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="team border-top pt-4">
                  <div v-for="(item, e) in project.team" :key="e" class="pb-4">
                    <div class="portfolio-details-client">
                      <h3 class="label">{{ item.teamName }}</h3>
                    </div>
                    <ul class="team-list">
                      <li v-for="(member, i) in item.members" :key="i">
                        <span class="name">{{ member.name }}</span>
                        <span class="position"> {{ member.position }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="description border-top pt-4 mb-4">
                  <div class="portfolio-details-client pb-2">
                    <h3 class="label">Descripción del proyecto</h3>
                  </div>
                  <p
                    v-for="(item, e) in project.description"
                    :key="e"
                    v-html="item"
                  ></p>
                </div>
                <div class="how-to border-top pt-4 mb-4">
                  <div class="portfolio-details-client pb-2">
                    <h3 class="label">Cómo se hizo el proyecto</h3>
                  </div>
                  <p
                    v-for="(item, e) in project.how"
                    :key="e"
                    v-html="item"
                  ></p>
                </div>
                <div class="description border-top pt-4 mb-4">
                  <div class="portfolio-details-client pb-2">
                    <h3 class="label">Aporte</h3>
                  </div>
                  <p
                    v-for="(item, e) in project.value"
                    :key="e"
                    v-html="item"
                  ></p>
                </div>
                <div
                  v-if="project.partnership"
                  class="description border-top pt-4 mb-4"
                >
                  <div class="portfolio-details-client pb-2">
                    <h3 class="label">ALIANZAS:</h3>
                  </div>
                  <ul class="team-list">
                    <li
                      v-for="(item, i) in project.partnership"
                      :key="`parnetship-${i}`"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-nav-links bg-arboretum">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="nav-list">
              <div class="nav-item prev">
                <div class="inner">
                  <router-link
                    :to="{
                      name: 'ProjectDetail',
                      params: { slug: prevProject.slug },
                    }"
                    class="single-grid-caption"
                  >
                    <div>
                      <img
                        v-if="prevProject.thumb"
                        class="img-fluid border-radus-5"
                        :src="
                          require(`@/assets/img/projects/${prevProject.thumb}`)
                        "
                        :alt="project.name"
                      />
                      <h6 class="text-white" v-html="prevProject.name"></h6>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="nav-item next">
                <div class="inner">
                  <router-link
                    :to="{
                      name: 'ProjectDetail',
                      params: { slug: nextProject.slug },
                    }"
                    class="single-grid-caption"
                  >
                    <div>
                      <img
                        v-if="prevProject.thumb"
                        class="img-fluid border-radus-5"
                        :src="
                          require(`@/assets/img/projects/${nextProject.thumb}`)
                        "
                        :alt="project.name"
                      />
                      <h6 class="text-white" v-html="nextProject.name"></h6>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <router-link
              :to="{ name: 'Proyectos' }"
              class="entry-portfolio-return-link"
            >
              <span class="fa fa-th"></span>
              <!-- <button @click="backToProjects" class="entry-portfolio-return-link"></button> -->
            </router-link>
          </div>
        </div>
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
import projects from "@/store/projects.js";

export default {
  name: "PortfolioGrid",
  components: {
    HeaderProject,
    Breadcrumb,
    FooterMain,
    OverlayMenu,
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    project() {
      return projects.list.find((project) => project.slug === this.slug);
    },
    nextProject() {
      let currentProject = (project) => project.slug === this.slug;
      let index = projects.list.findIndex(currentProject);
      if (index === 19) {
        return projects.list[0];
      } else {
        index = index + 1;
        return projects.list[index];
      }
    },
    prevProject() {
      let currentProject = (project) => project.slug === this.slug;
      let index = projects.list.findIndex(currentProject);
      if (index === 0) {
        index = projects.list.length;
        return projects.list[19];
      } else {
        index = index - 1;
        index = index % projects.list.length;
        return projects.list[index];
      }
    },
  },
  methods: {
    backToProjects() {
      console.log("click");
      return this.$router.push("/proyectos");
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

.portfolio-details-title {
  font-size: 32px;
}
</style>