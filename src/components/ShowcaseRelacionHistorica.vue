<template>
  <div class="product-showcase-product-view-wrapper section-space--pt_120">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <!-- gallery-warp Start -->
          <div class="gallery-warp">
            <div class="popup-images gallery-grid-4">
              <!-- single gallery Start -->
              <silentbox-single
                :src="require('../assets/img/showcase/gallery-01.jpg')"
                class="single-gallery grid-width-2 grid-height-2"
              >
                <div class="single-gallery__item">
                  <div class="single-gallery__thum">
                    <img
                      class="img-fluid"
                      src="../assets/img/showcase/gallery-01.jpg"
                    />
                  </div>
                  <div class="ht-overlay"></div>
                  <div class="overlay-icon">
                    <i class="far fa-search"></i>
                  </div>
                </div>
              </silentbox-single>
              <!-- single gallery End -->

              <!-- single gallery Start -->
              <silentbox-single
                :src="require('../assets/img/showcase/gallery-03.jpg')"
                class="single-gallery"
              >
                <div class="single-gallery__item">
                  <div class="single-gallery__thum">
                    <img
                      class="img-fluid"
                      src="../assets/img/showcase/gallery-03.jpg"
                    />
                  </div>
                  <div class="ht-overlay"></div>
                  <div class="overlay-icon">
                    <i class="far fa-search"></i>
                  </div>
                </div>
              </silentbox-single>
              <!-- single gallery End -->

              <!-- single gallery Start -->
              <silentbox-single
                :src="require('../assets/img/showcase/gallery-02.jpg')"
                class="single-gallery"
              >
                <div class="single-gallery__item">
                  <div class="single-gallery__thum">
                    <img
                      class="img-fluid"
                      src="../assets/img/showcase/gallery-02.jpg"
                    />
                  </div>
                  <div class="ht-overlay"></div>
                  <div class="overlay-icon">
                    <i class="far fa-search"></i>
                  </div>
                </div>
              </silentbox-single>
              <!-- single gallery End -->

              <!-- single gallery Start -->
              <silentbox-single
                :src="require('../assets/img/showcase/gallery-04.jpg')"
                class="single-gallery"
              >
                <div class="single-gallery__item">
                  <div class="single-gallery__thum">
                    <img
                      class="img-fluid"
                      src="../assets/img/showcase/gallery-04.jpg"
                    />
                  </div>
                  <div class="ht-overlay"></div>
                  <div class="overlay-icon">
                    <i class="far fa-search"></i>
                  </div>
                </div>
              </silentbox-single>
              <!-- single gallery End -->

              <!-- single gallery Start -->
              <silentbox-single
                :src="require('../assets/img/showcase/gallery-05.jpg')"
                class="single-gallery"
              >
                <div class="single-gallery__item">
                  <div class="single-gallery__thum">
                    <img
                      class="img-fluid"
                      src="../assets/img/showcase/gallery-05.jpg"
                    />
                  </div>
                  <div class="ht-overlay"></div>
                  <div class="overlay-icon">
                    <i class="far fa-search"></i>
                  </div>
                </div>
              </silentbox-single>
              <!-- single gallery End -->
            </div>
          </div>
          <!-- gallery-warp End -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcaseRelacionHistorica",
};
</script>

<style lang="scss" scoped>
.single-gallery__item {
  .ht-overlay {
    background-color: $pinot;
  }
}
</style>