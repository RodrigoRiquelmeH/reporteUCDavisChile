<template>
  <div class="main-container">
    <router-view></router-view>
    <HeaderProject />
    <!-- Navbar section -->
    <!-- breadcrumb strat -->
    <Breadcrumb>
      <template slot="breadcrumb">
        <div class="breadcrumb_box text-center">
          <h2 class="breadcrumb-title">{{ project.title }}</h2>
          <!-- breadcrumb-list start -->
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/#proyectos">Proyectos</router-link>
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
            <div class="portfolio-details-one-images mb-30">
              <img
                class="img-fluid border-radus-5"
                src="@/assets/img/projects/01/01.jpg"
                alt="image"
              />
            </div>
            <div class="portfolio-details-one-images mb-30">
              <img
                class="img-fluid border-radus-5"
                src="@/assets/img/projects/01/02.jpg"
                alt="image"
              />
            </div>
            <div class="portfolio-details-one-images mb-30">
              <img
                class="img-fluid border-radus-5"
                src="@/assets/img/projects/01/03.jpg"
                alt="image"
              />
            </div>
            <div class="portfolio-details-one-images mb-30">
              <img
                class="img-fluid border-radus-5"
                src="@/assets/img/projects/01/04.jpg"
                alt="image"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="portfolio-details-content">
              <div class="portfolio-details-title">
                <a class="portfolio-categories" href="#">Nombre del proyecto</a>
                <h3 class="portfolio-details-title blue">
                  {{ project.name }}
                </h3>
              </div>
              <div class="portfolio-details-table mt-30">
                <table class="mb-0">
                  <tbody>
                    <tr class="portfolio-details-date">
                      <td class="label">Fecha de Ejecución</td>
                      <td>{{ project.date }}</td>
                    </tr>

                    <tr class="portfolio-details-client">
                      <td class="label">Mandantes</td>
                      <td>{{ project.customer }}</td>
                    </tr>
                    <tr class="portfolio-details-client">
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
                <div class="how-to border-top pt-4">
                  <div class="portfolio-details-client pb-2">
                    <h3 class="label">Cómo se hizo el proyecto</h3>
                  </div>
                  <p
                    v-for="(item, e) in project.how"
                    :key="e"
                    v-html="item"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-nav-links bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="nav-list">
              <div class="nav-item prev">
                <div class="inner">
                  <a href="#" rel="prev">
                    <div>
                      <img
                        class="img-fluid border-radus-5"
                        src="@/assets/img/portfolio/portfolio-08-01-120x80.jpg"
                        alt="portfolio-08-01"
                      />
                      <h6>Smart Technology Source</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div class="nav-item next">
                <div class="inner">
                  <a href="#" rel="next">
                    <div>
                      <img
                        class="img-fluid border-radus-5"
                        src="@/assets/img/portfolio/portfolio-06-120x80.jpg"
                        alt="portfolio-06-01"
                      />
                      <h6>Digitized Visual Projects</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <button @click="backToProjects" class="entry-portfolio-return-link">
              <span class="fa fa-th"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- portfolio details wrapper end -->
    <OverlayMenu :displayInternal="true" />
    <!-- footer section -->
    <FooterMain />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import FooterMain from "@/components/FooterMain";
import HeaderProject from "@/components/HeaderProject";
import OverlayMenu from "@/components/OverlayMenu";
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
      project: {
        title: "Agroinchalam",
        name:
          "Programa de extensión y difusión tecnológica en estructuras de conducción y protección en frutales.",
        date: "Enero de 2017 a marzo de 2020.",
        team: [
          {
            teamName: "Equipo técnico",
            members: [
              {
                name: "Víctor González Morales. ",
                position: "Ingeniero Civil Industrial UC Davis Chile",
              },
              {
                name: "Edwin Moore S.",
                position: "Ingeniero Agrónomo Inchalam",
              },
              {
                name: "Catalina Montalvo A.",
                position: "Ingeniera Agrónomo UC Davis Chile",
              },
              {
                name: "María Paz Santibáñez A",
                position: "Ingeniera Agrónomo MS UC Davis UC Davis Chile",
              },
              {
                name: "Jessica Alvarado V.",
                position: "Ingeniera Agrónomo, MS Fruticultura UC Davis Chile",
              },
            ],
          },
          {
            teamName: "Asesores técnicos nacionales e internacionales",
            members: [
              {
                name: "Cecilia Peppi ",
                position: "(INIA)",
              },
              {
                name: "Martin Silva",
                position: "",
              },
              {
                name: "Marlene Ayala",
                position: "(PUC)",
              },
              {
                name: "Oscar Aliaga",
                position: "",
              },
              {
                name: "Oscar Carrasco",
                position: "",
              },
              {
                name: "Jordi Casas",
                position: "",
              },
              {
                name: "Richard Bastias",
                position: "(UdeC)",
              },
              {
                name: "Mark De Kleine",
                position: "(USA)",
              },
            ],
          },
        ],
        customer: "Inchalam S.A.",
        investment: "US$359.000",
        description: [
          "La fruticultura nacional ha incorporado gradualmente tecnologías para ser competitiva a nivel internacional y responder a las preferencias de consumo. Con ello, han incorporado nuevos sistemas productivos en que las operaciones se realizan en huertos de alta densidad de plantación, con árboles que provienen de patrones enanizantes que permiten huertos peatonales y homogéneos, entre otros. Es así como los sistemas de conducción en frutales se han ido sofisticando y, dependiendo de su vigor, se han introducido nuevas estructuras (trellis system) que utilizan alambre y que permiten tanto conducir y dar forma al frutal, como en entregar un soporte adicional ante eventos externos cuando se encuentran en plena producción.",
          "Sumado a estos desafíos, el cambio y variabilidad climática ha permitido el uso de cubiertas o techos que minimizan los efectos y condiciones extremas, extendiendo la fruticultura a otras locaciones, en condiciones de suelo y clima más complejos, pero que permiten aprovechar una ventana comercial mayor.",
          "Ante este escenario, los diferentes actores, entre los que destacan los proveedores de servicios e insumos asociados al establecimiento de estos nuevos huertos, han pasado desde un esquema prueba y error a la incorporación de criterios técnicos que permitan cumplir las expectativas en calidad y funcionalidad.",
          "Desde esta perspectiva, la compañía buscó identificar, definir e implementar un enfoque más cercano a los clientes y usuarios finales, que permita entender sus necesidades en el uso de estas estructuras y en la entrega de conocimiento y tecnologías con las cuales responder a las exigencias actuales y futuras de los agricultores.",
        ],
        how: [
          "1.	El proyecto se realizó por etapas con el fin de apoyar la toma de decisiones de la empresa, según el grado de conocimiento y capacidades técnicas, e ir implementando el modelo de vinculación con actores claves.",
          `2.	Entre las actividades realizadas se encuentran: 
            <ul>
            <li>Identificación de las tecnologías claves y habilitantes en frutales priorizados.</li>
            <li>Construcción de una hoja de ruta para la compañía.</li>
            <li>Gira tecnológica a EE. UU. para conocer los entornos de innovación de los estados de California, Oregon y Washington.</li>
            <li>Construcción y ejecución de un programa de extensión y difusión.</li>
            </ul> `,
        ],
        value: [
          "El programa contribuyó a implementar un puente entre la academia y la investigación con el sector privado para abordar las brechas de acceso a la información en esta temática a través de un proceso de extensión. ",
          "Además, articuló diferentes actores para la transferencia de conocimiento y adopción de tecnologías con un sentido práctico y fundamento.",
          "Para Ichalam, y como resultado de este proyecto, el aporte fue la creación de Agroinchalam, como un spin-off que permite atender las necesidades de los actores del rubro y definir mejor la oferta de productos y soluciones para sus clientes. ",
        ],
        partnership: [
          "Centro de Extensión Vitivinícola del Sur. ",
          "Universidad de Washington State",
          "Cooperative Extension de California ",
        ],
      },
    };
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
</style>