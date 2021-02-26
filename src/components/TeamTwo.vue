<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="swiper-container team-slider__container">
        <swiper :options="swiperOption">
          <div class="swiper-slide" v-for="item in team" :key="item.name">
            <div class="grid-item wow move-up">
              <!-- ht-team-member Start -->
              <div class="ht-team-member text-center">
                <div class="ht-team-member--inner">
                  <!-- team-image Start -->
                  <div class="team-image">
                    <div v-if="item.img" class="wrapper">
                      <img
                        class="img-fluid"
                        :src="require(`@/assets/img/team/${item.img}`)"
                        :alt="item.name"
                      />
                    </div>
                    <img
                      v-if="item.country == 'US'"
                      class="flag-icon"
                      src="@/assets/img/team/US.png"
                      alt="US"
                    />
                    <img
                      v-if="item.country == 'CL'"
                      class="flag-icon"
                      src="@/assets/img/team/CL.png"
                      alt="CL"
                    />
                  </div>

                  <!-- team-image End -->
                  <!-- team-info Start -->
                  <div class="team-info text-center">
                    <div class="position">{{ item.boardPosition }}</div>
                    <h5 class="name">{{ item.name }}</h5>
                    <div class="position">{{ item.position }}</div>
                  </div>
                  <!-- team-info End -->
                </div>
              </div>
              <!-- ht-team-member End -->
            </div>
          </div>
        </swiper>
        <!-- Add Arrows -->
        <div
          class="swiper-pagination swiper-pagination-2 section-space--mt_50"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamTwo",
  data() {
    return {
      swiperOption: {
        speed: 800,
        loop: false,
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1499: {
            slidesPerView: 5,
          },

          991: {
            slidesPerView: 6,
          },

          767: {
            slidesPerView: 3,
          },

          575: {
            slidesPerView: 2,
          },
        },
      },
      team: [
        {
          boardPosition: "Presidente",
          name: "Cindy M. Kiel",
          position:
            "Excecutive Associate Vice Chancellor of Research Administration",
          img: "empty.jpg",
          country: "US",
        },
        {
          boardPosition: "Vice-Presidente",
          name: "Joanna Regulska",
          position: "Vice Provost and Dean of Global Affairs",
          img: "",
          country: "US",
        },
        {
          boardPosition: "Secretaria",
          name: "Kristen C. Stevenson",
          position: "Associate Campus Counsel",
          img: "",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "William Tucker",
          position:
            "Associate Vice Chancellor for Innovation and Technology Commercialization",
          img: "",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Prasant Mohapatra",
          position: "Vice Chancellor for Research",
          img: "",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Ermias Kebreab",
          position:
            "Associate Vice Provost of Academic Programs in Global Affairs",
          img: "",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Michael Lazzara",
          position: "Associate Vice Provost of Academic Programs.",
          img: "",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Paul Dodd",
          position:
            "Associate Vice Chancellor for Interdisciplinary Research and Strategic Initiatives, UC Davis",
          img: "",
          country: "US",
        },
        {
          boardPosition: "Director",
          name: "Pedro Bustos",
          position:
            "Director Nacional del Instituto de Investigaciones Agropecuarias (INIA), en representación del Ministerio de Agricultura",
          img: "",
          country: "CL",
        },
        {
          boardPosition: "Director",
          name: "Pablo Villalobos",
          position:
            "Director Departamento de Innovación y Transferencia Tecnológica, Universidad de Tarapacá",
          img: "",
          country: "CL",
        },
        {
          boardPosition: "Director",
          name: "Eugenio Doussoulin",
          position: "Associate Campus Counsel",
          img: "",
          country: "CL",
        },
        {
          boardPosition: "Director",
          name: "Ariel Orellana",
          position:
            "Vicerrector de Investigación y Doctorado, Universidad Andrés Bello",
          img: "",
          country: "CL",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.team-image {
  .wrapper {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  img.flag-icon {
    position: absolute;
    z-index: 10;
    top: 10px;
    right: 45px;
    width: 30px;
  }
}
</style>