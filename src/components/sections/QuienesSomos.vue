<template>
  <div
    class="feature-app-showcase section-space--pt_60 section-space--mb_60 pb-3 bg-gray"
    id="quienes-somos"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <ChartCircleTwo
            color="arboretum"
            sectionProgress="72"
            circleValue="06"
            class="section-space--mb_40"
          />
        </div>
      </div>
      <SectionTitle
        color="arboretum"
        sectionTitle="Quiénes somos"
        class="wow move-up"
      />
    </div>

    <section
      class="executive-team section-space--pb_120 section-space--pt_60 mt-lg-6"
    >
      <div class="container mt-lg-5 inner-section">
        <div class="row pt-mb-5">
          <div class="col-lg-4">
            <div class="section-title section-space--mb_60">
              <h3
                class="subtitle arboretum font-weight--light mb-15 wow move-up"
              >
                EQUIPO DIRECTIVO
              </h3>
              <p class="wow move-up">
                El equipo responsable de la gestión y dirección UC Davis Chile
                actualmente está liderado por:
              </p>
            </div>
          </div>

          <div class="col-lg-8 px-4 justify-content-center">
            <div class="row">
              <div
                class="ht-team-member col-12 col-md-4 col-lg-4 mb-4 wow move-up"
                v-for="(item, e) in executiveTeam"
                :key="e"
              >
                <TeamMember
                  :name="item.name"
                  :position="item.position"
                  :img="item.img"
                />
              </div>
              <div class="text-left d-flex align-items-center">
                <div class="small-img">
                  <img
                    src="@/assets/img/team/Alan-Bennett.jpg"
                    alt="Alan Bennett"
                    class="img-fluid"
                  />
                </div>
                <div>
                  Ex Director Ejecutivo y fundador del Centro:
                  <strong>Alan Bennett</strong>
                </div>
              </div>
            </div>
            <!-- ht-team-member End -->
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4">
            <p class="wow move-up">
              La estructura organizacional y operacional de nuestro Centro se
              puede graficar de la siguiente manera:
            </p>
          </div>
          <div class="col-lg-8 mt-4 mt-lg-0">
            <img
              src="@/assets/img/organigrama-03.png"
              alt="organization chart"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-arboretum white board section-space--pb_120 section-space--pt_60"
    >
      <div class="container mt-md-3 mt-lg-5">
        <div class="row">
          <div class="col-lg-10">
            <div class="section-title section-space--mb_60">
              <h3
                class="subtitle text-white font-weight--light mb-15 wow move-up"
              >
                DIRECTORIO
              </h3>
              <p class="wow move-up white">
                La gestión que realizamos en UC Davis Chile cuenta con el
                respaldo y apoyo de un directorio que incluye a las más altas
                autoridades del campus de Davis, así como a representantes de
                universidades chilenas que trabajan directamente con nuestro
                Centro y quienes sesionan con una periodicidad trimestral, con
                el objetivo de abordar desafíos y proyecciones, así como también
                para conocer el estado de los proyectos que desarrollamos en el
                país.
              </p>
              <p class="wow move-up">
                Actualmente nuestro directorio está integrado por:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <Board />
      </div>
    </section>

    <section class="administration section-space--pt_60">
      <div class="container">
        <div class="row pt-lg-5 mt-mb-5">
          <div class="col-lg-10">
            <div class="section-title section-space--mb_30">
              <h3
                class="subtitle arboretum font-weight--light mb-15 wow move-up"
              >
                Equipo corporativo
              </h3>
              <p class="wow move-up">
                Para lograr el óptimo funcionamiento de UC Davis Chile, nuestro
                Centro cuenta con un equipo ejecutivo de alto nivel compuesto
                por especialistas de distintas áreas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="container">
              <h5>Partnership y Comunicaciones</h5>
            </div>
            <div class="swiper-container team-slider__container">
              <swiper :options="swiperOptionComunication">
                <div
                  class="swiper-slide"
                  v-for="(item, e) in comunicationTeam"
                  :key="e"
                >
                  <div class="grid-item wow move-up py-4">
                    <!-- ht-team-member Start -->
                    <div class="ht-team-member text-center">
                      <TeamMember
                        :name="item.name"
                        :position="item.position"
                        :img="item.img"
                      />
                    </div>
                    <!-- ht-team-member End -->
                  </div>
                </div>
              </swiper>
              <!-- Add Arrows -->
              <div class="swiper-pagination comunication mb-5"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="container">
              <h5>Administración y Finanzas</h5>
            </div>
            <div class="swiper-container team-slider__container">
              <swiper :options="swiperOptionAdmin">
                <div
                  class="swiper-slide"
                  v-for="(item, e) in administrativeTeam"
                  :key="e"
                >
                  <div class="grid-item wow move-up py-4">
                    <!-- ht-team-member Start -->
                    <div class="ht-team-member text-center">
                      <TeamMember
                        :name="item.name"
                        :position="item.position"
                        :img="item.img"
                      />
                    </div>
                    <!-- ht-team-member End -->
                  </div>
                </div>
              </swiper>
              <!-- Add Arrows -->
              <div class="swiper-pagination admin mb-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row pt-5 mt-5">
          <div class="col-lg-10">
            <div class="section-title section-space--mb_60">
              <h3
                class="subtitle arboretum font-weight--light mb-15 wow move-up"
              >
                ESPECIALISTAS E INVESTIGADORES
              </h3>
              <p class="wow move-up">
                El Centro de Innovación UC Davis Chile está integrado por
                especialistas e investigadores de los distintos ámbitos que
                componen el sector agroalimentario. Su objetivo es desarrollar
                investigación colaborativa entre Chile y California, transferir
                tecnologías desarrolladas en los Estados Unidos hacia la
                industria chilena e instalar capacidades de UC Davis en Chile.
              </p>
              <p class="wow move-up">
                Profesionales investigadores y especialistas en agronomía,
                sustentabilidad, ciencias de la alimentación, vitivinicultura y
                enología, extensión e innovación forman parte de nuestro equipo
                de excelencia el que actualmente está compuesto por:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row px-4 justify-content-center">
          <div
            class="ht-team-member col-12 col-md-3 col-lg-2 mb-4 wow move-up"
            v-for="(item, e) in researchTeam"
            :key="e"
          >
            <TeamMember
              :name="item.name"
              :position="item.position"
              :img="item.img"
            />
          </div>
          <!-- ht-team-member End -->
        </div>
      </div>
      <div class="container pb-5">
        <div class="row pt-4 mt-5">
          <div class="col-lg-10">
            <div class="section-title mb-3">
              <p class="wow move-up">
                A ellos se suman, para cada proyecto, investigadores y
                especialistas de UC Davis, quienes aportan toda su experiencia,
                conocimiento y excelencia.
              </p>
              <p class="wow move-up">
                Algunos de los principales investigadores de UC Davis que
                colaboran o han colaborado en proyectos del Centro son:
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-3">
            <ul class="wow move-up">
              <li>
                <a
                  href="https://biology.ucdavis.edu/people/alan-bennett"
                  target="_blank"
                  >Alan Bennett</a
                >
              </li>
              <li>
                <a
                  href="https://globalaffairs.ucdavis.edu/people/lovell-jarvis"
                  target="_blank"
                  >Lovell “Tu” Jarvis</a
                >
              </li>
              <li>
                <a href="https://cantulab.github.io/people.html" target="_blank"
                  >Dario Cantu</a
                >
              </li>
              <li>
                <a
                  href="http://lawr.ucdavis.edu/people/faculty/zaccaria-daniele"
                  target="_blank"
                  >Daniele Zaccaria</a
                >
              </li>
              <li>
                <a
                  href="http://lawr.ucdavis.edu/people/faculty/sandoval-solis-samuel"
                  target="_blank"
                  >Sam Sandoval</a
                >
              </li>
              <li>
                <a
                  href="https://wineserver.ucdavis.edu/people/susan-ebeler#/"
                  target="_blank"
                  >Susan Ebeler</a
                >
              </li>
              <li>
                <a
                  href="https://foodscience.ucdavis.edu/people/edward-spang#/"
                  target="_blank"
                  >Edward Spang</a
                >
              </li>
              <li>
                <a
                  href="https://www.plantsciences.ucdavis.edu/people/kenneth-shackel"
                  target="_blank"
                  >Kenneth A. Shackel</a
                >
              </li>
              <li>
                <a
                  href="https://biology.ucdavis.edu/people/m-andrew-walker"
                  target="_blank"
                  >Andrew Walker</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-3">
            <ul class="wow move-up">
              <li>
                <a
                  href="http://lawr.ucdavis.edu/people/faculty/fogg-graham"
                  target="_blank"
                  >Graham Fogg</a
                >
              </li>
              <li>
                <a
                  href="https://wineserver.ucdavis.edu/people/david-block#/"
                  target="_blank"
                  >David E. Block</a
                >
              </li>
              <li>
                <a
                  href="https://are.ucdavis.edu/people/faculty/daniel-sumner/"
                  target="_blank"
                  >Daniel Sumner</a
                >
              </li>
              <li>
                <a
                  href="https://www.plantsciences.ucdavis.edu/people/louise-ferguson"
                  target="_blank"
                  >Louise Ferguson</a
                >
              </li>
              <li>
                <a
                  href="https://caes.ucdavis.edu/people/anita-oberholster"
                  target="_blank"
                  >Anita Oberholster</a
                >
              </li>
              <li>
                <a
                  href="https://ucanr.edu/sites/anrstaff/Divisionwide_Programs/Program_Council/?facultyid=33294"
                  target="_blank"
                  >Mark Bell</a
                >
              </li>
              <li>
                <a href="https://ucanr.edu/?facultyid=732" target="_blank"
                  >Allan Fulton</a
                >
              </li>
              <li>
                <a href="https://ucanr.edu/?facultyid=2860" target="_blank"
                  >Kendra Baumgartner</a
                >
              </li>
              <li>
                <a
                  href="https://wineserver.ucdavis.edu/people/kaan-kurtural#/"
                  target="_blank"
                  >Kaan Kurtural</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-3">
            <ul class="wow move-up">
              <li>
                <a href="https://ucanr.edu/?facultyid=122" target="_blank"
                  >Mark Battany</a
                >
              </li>
              <li>
                <a
                  href="https://www.vetmed.ucdavis.edu/people/michael-lairmore"
                  target="_blank"
                  >Michael Lairmore</a
                >
              </li>
              <li>
                <a
                  href="https://www.vetmed.ucdavis.edu/faculty/rodrigo-gallardo"
                  target="_blank"
                  >Rodrigo Gallardo</a
                >
              </li>
              <li>
                <a
                  href="https://health.ucdavis.edu/team/internalmedicine/706/michael-wilkes---internal-medicine-sacramento"
                  target="_blank"
                  >Michael Wilkes</a
                >
              </li>
              <li>
                <a
                  href="https://physicians.ucdavis.edu/details/42404/andres-sciolla-psychiatry-sacramento"
                  target="_blank"
                  >Andrés Sciolla</a
                >
              </li>
              <li>
                <a
                  href="https://health.ucdavis.edu/team/children/516/james-marcin---pediatric-critical-care-sacramento"
                  target="_blank"
                  >James Marcin</a
                >
              </li>
              <li>
                <a
                  href="https://health.ucdavis.edu/team/informatics/1171/heather-young---gerontology---rural-health-care---health-policy-sacramento"
                  target="_blank"
                  >Heather Young</a
                >
              </li>
              <li>
                <a
                  href="https://sustainability.ucdavis.edu/about/index.html"
                  target="_blank"
                  >Camille Kirk</a
                >
              </li>
              <li>
                <a
                  href="https://www.vetmed.ucdavis.edu/faculty/patricia-ann-conrad"
                  target="_blank"
                  >Patricia Conrad</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-3">
            <ul class="wow move-up">
              <li>
                <a
                  href="http://lawr.ucdavis.edu/people/faculty/dahlke-helen"
                  target="_blank"
                  >Helen Dahlke</a
                >
              </li>
              <li>
                <a
                  href="https://its.ucdavis.edu/people/daniel-sperling/"
                  target="_blank"
                  >Daniel Sperling</a
                >
              </li>
              <li>
                <a
                  href="https://cee.engineering.ucdavis.edu/directory/geoffrey-schladow"
                  target="_blank"
                  >Geoffrey Schladow</a
                >
              </li>
              <li>
                <a
                  href="https://faculty.engineering.ucdavis.edu/lund/"
                  target="_blank"
                  >Jay Lund</a
                >
              </li>
              <li>
                <a
                  href="https://aqrc.ucdavis.edu/people/anthony-wexler"
                  target="_blank"
                  >Anthony Wexler</a
                >
              </li>
              <li>
                <a
                  href="https://cltc.ucdavis.edu/michael-siminovitch"
                  target="_blank"
                  >Michael Siminovitch</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-5 text-center mx-2">
          <router-link
            :to="{
              name: 'Anexo',
              params: {
                anexo: 'anexo-1',
              },
            }"
            class="ht-btn ht-btn-md ht-btn-custom bg-gold text-uppercase mx-auto"
          >
            Ver listado completo de investigadores UC Davis que han colaborado
            con el centro
          </router-link>
        </div>
      </div>
    </section>

    <div
      class="container-fluid bg-white section-space--ptb_60 section-space--mt_60"
    >
      <h3 class="subtitle arboretum text-center mb-5 pb-3">
        Departamento y Centros que colaboran <br />más estrechamente con UC
        Davis Chile
      </h3>
      <SlideLogos />
    </div>
  </div>
</template>
<script>
import SectionTitle from "@/components/SectionTitle";
import ChartCircleTwo from "@/components/ChartCircleTwo";
import Board from "@/components/Board";
import TeamMember from "@/components/TeamMember";
import SlideLogos from "@/components/SlideLogos";
export default {
  name: "QuienesSomos",
  components: {
    ChartCircleTwo,
    SectionTitle,
    Board,
    TeamMember,
    SlideLogos,
  },
  data: () => ({
    swiperOptionAdmin: {
      speed: 800,
      loop: false,
      slidesPerView: 6,
      spaceBetween: 30,
      pagination: {
        el: ".admin",
        clickable: true,
      },
      breakpoints: {
        1499: {
          slidesPerView: 5,
        },
        991: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 1,
          slidesPerColumn: 2,
        },
      },
    },
    swiperOptionComunication: {
      speed: 800,
      loop: false,
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".comunication",
        clickable: true,
      },
      breakpoints: {
        767: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 1,
        },
      },
    },
    executiveTeam: [
      {
        name: "Mauricio Cañoles",
        position: "General Manager",
        img: "Mauricio-Canoles.jpg",
        country: "CL",
      },
      {
        name: "Dario Cantu",
        position: "Academic Director",
        img: "Dario-Cantu.jpg",
        country: "CL",
      },
      {
        name: 'Lovell "Tu" Jarvis',
        position: "Executive Director",
        img: "Lovell_Tu_Jarvis.jpg",
        country: "CL",
      },
    ],
    comunicationTeam: [
      {
        name: "Francisco Díaz",
        position: "Partnership & Communications Manager",
        img: "Francisco-Diaz.jpg",
      },
      {
        name: "Rodrigo Riquelme",
        position: "Partnership Coordinator",
        img: "Rodrigo-Riquelme.jpg",
      },
      {
        name: "Gabriela Jiménez",
        position: "Partnership Assistant",
        img: "Gabriela-Jimenez.jpg",
      },
      {
        name: "Carolina Aravena",
        position: "Communications Assistant",
        img: "Carolina-Aravena.jpg",
      },
    ],
    administrativeTeam: [
      {
        name: "María Trinidad Eva",
        position: "Administration & Finance Manager",
        img: "Trinidad-Eva.jpg",
      },
      {
        name: "Jorge Cabezas",
        position: "Administration & Finance Coordinator",
        img: "Jorge-Cabezas.jpg",
      },
      {
        name: "Marcela Hidalgo",
        position: "Finance & Human Resources Analyst",
        img: "Marcela-Hidalgo.jpg",
      },
      {
        name: "Patricio Cabezas",
        position: "Financial Assistant",
        img: "Patricio-Cabezas.jpg",
      },
      {
        name: "Silvia Fuentes ",
        position: "Executive Assistant",
        img: "Silvia-Fuentes.jpg",
      },
      {
        name: "Fernanda Retamales",
        position: "Finance Assistant",
        img: "Fernanda-Retamales.jpg",
      },
      {
        name: "Cecilia Pino",
        position: "Housekeeper",
        img: "Cecilia-Pino-01.jpg",
      },
    ],
    researchTeam: [
      {
        name: "Álvaro Castro",
        position: "Research & Development Coordinator",
        img: "Alvaro-Castro.jpg",
      },
      {
        name: "Patricia Anguita",
        position: "Intelectual Property & Technology Transfer Coordinator",
        img: "Patricia-Anguita.jpg",
      },
      {
        name: "Leticia Rojas",
        position: "Innovation & Extension Coordinator",
        img: "Leticia-Rojas.jpg",
      },
      {
        name: "Alejandra Acuña",
        position: "Agronomy Coordinator",
        img: "Alejandra-Acuna.jpg",
      },

      {
        name: "Fernando Coz",
        position: "Environment & Sustainability Coordinator",
        img: "Fernando-Coz.jpg",
      },

      {
        name: "Olivia Valdés",
        position: "Food Science Coordinator",
        img: "Olivia-Valdes.jpg",
      },
      {
        name: "Patricio Román",
        position: "Project Management",
        img: "Patricio-Roman.jpg",
      },
      {
        name: "Jessica Alvarado",
        position: "Innovation & Extension Specialist",
        img: "Jessica-Alvarado.jpg",
      },
      {
        name: "Juan Carlos Galaz",
        position: "Innovation & Extension Specialist",
        img: "Juan-Carlos-Galaz.jpg",
      },
      {
        name: "Victor González",
        position: "Innovation & Extension Specialist",
        img: "Victor-Gonzalez.jpg",
      },
      {
        name: "Natalia Díaz",
        position: "Innovation & Extension Specialist",
        img: "Natalia-Diaz.jpg",
      },
      {
        name: "Camila Saavedra",
        position: "Viticulture & Enology Specialist",
        img: "Camila-Saavedra.jpg",
      },
      {
        name: "Denise Cifuentes",
        position: "Bioprocess Researcher",
        img: "Denise-Cifuentes.jpg",
      },
      {
        name: "Patricio Muñoz",
        position: "Bioproduct Researcher",
        img: "Patricio-Munoz.jpg",
      },
      {
        name: "Catalina Pavez",
        position: "Molecular Researcher",
        img: "Catalina-Pavez.jpg",
      },
      {
        name: "Isidora Silva",
        position: "Junior Researcher",
        img: "Isidora-Silva.jpg",
      },
      {
        name: "Roberto Fuentes",
        position: "Developer Engineer",
        img: "Roberto-Fuentes.jpg",
      },
      {
        name: "Catalina Montalvo",
        position: "Extension & Innovation Advisor",
        img: "Catalina-Montalvo.jpg",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.subtitle {
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 300;
  margin-bottom: 20px;
}

.board {
  z-index: 200;
}
.swiper-pagination.swiper-pagination-2
  .swiper-pagination-bullet-active::before {
  background: $arboretum;
}
ul {
  list-style: circle;
  padding-left: 20px;
}
.small-img {
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 3px #fff;
  margin-left: 15px;
  margin-right: 15px;
}
a.ht-btn.ht-btn-md.ht-btn-custom.bg-gold.text-uppercase {
  line-height: 1.4;
  height: auto;
  padding: 10px 20px;

  @media #{$min-tablet} {
    padding: 20px 25px;
  }
}
</style>