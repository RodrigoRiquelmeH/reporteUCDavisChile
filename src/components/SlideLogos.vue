<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="swiper-container logos-slider__container">
        <swiper :options="sliderOptionLogos">
          <div class="swiper-slide logo-img" v-for="logo in logos" :key="logo">
            <img
              :src="require(`@/assets/img/logos/${logo}`)"
              alt="logo"
              class="img-fluid border-radus-5"
            />
          </div>
        </swiper>
        <!-- Add Arrows -->
        <div
          class="swiper-pagination swiper-pagination-logos section-space--mt_50"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideLogos",
  data() {
    return {
      sliderOptionLogos: {
        speed: 800,
        loop: false,
        slidesPerView: 5,
        slidesPerColumn: 4,
        dynamicBullets: true,
        // spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-logos",

          clickable: true,
        },
        breakpoints: {
          991: {
            slidesPerView: 4,
          },

          767: {
            slidesPerView: 3,
          },

          575: {
            slidesPerView: 2,
          },
        },
      },
      logos: [
        "logo_1.png",
        "logo_2.png",
        "logo_3.png",
        "logo_4.png",
        "logo_5.png",
        "logo_6.png",
        "logo_7.png",
        "logo_8.png",
        "logo_9.png",
        "logo_10.png",
        "logo_11.png",
        "logo_12.png",
        "logo_13.png",
        "logo_14.png",
        "logo_15.png",
        "logo_16.png",
        "logo_17.png",
        "logo_18.png",
        "logo_19.png",
        "logo_20.png",
        "logo_21.png",
        "logo_22.png",
        "logo_23.png",
        "logo_24.png",
        "logo_25.png",
        "logo_26.png",
        "logo_27.png",
        "logo_28.png",
        "logo_29.png",
        "logo_30.png",
        "logo_31.png",
        "logo_32.png",
        "logo_33.png",
        "logo_34.png",
        "logo_35.png",
        "logo_36.png",
        "logo_37.png",
        "logo_38.png",
        "logo_39.png",
        "logo_40.png",
        "logo_41.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.logo-img img {
  max-height: 120px;
  margin: 0 auto;
  padding: 15px;
  @media #{$min-desktop} {
    padding: 30;
  }
}
</style>