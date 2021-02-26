<template>
  <div
    class="app-landing--center-slider-wrapper bg-blue section-space--ptb_120"
  >
    <div class="app-landing-listing-title-wrap drak-area pt-0 pt-md-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3 pb-md-4">
            <div class="app-landing-title-contet">
              <div class="title-details_two wow move-up">
                <h2>Hitos</h2>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3 pb-5 pb-md-0">
            <div class="app-landing-title-contet">
              <div class="title-details_one wow move-up">
                <h2>+240</h2>
              </div>
              <div class="subtitle wow move-up">
                divulgaciones de invenciones al año
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3 pb-5 pb-md-0">
            <div class="app-landing-title-contet">
              <div class="title-details_one wow move-up">
                <h2>950</h2>
                <h5 class="mb-0">patentes activas</h5>
              </div>
              <div class="subtitle wow move-up">en EE. UU. y el mundo</div>
            </div>
          </div>

          <div class="col-12 col-md-4 col-lg-3 pb-5 pb-md-0">
            <div class="app-landing-title-contet">
              <div class="title-details_one wow move-up">
                <h2>US$8,1</h2>
                <h5 class="mb-0">billones</h5>
              </div>
              <div class="subtitle wow move-up">
                de contribución anual <br />a la economía de California
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-md-5 pt-md-5 border-md-top">
          <div class="col-12 col-md-4 pb-5 pb-md-0">
            <div class="app-landing-title-contet">
              <div class="title-details_one wow move-up">
                <h2>+164</h2>
              </div>
              <div class="subtitle wow move-up">
                solicitudes de patentes al año
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 pb-5 pb-md-0">
            <div class="app-landing-title-contet">
              <div class="title-details_one wow move-up">
                <h2>+ US$13</h2>
                <h5 class="mb-0">millones</h5>
              </div>
              <div class="subtitle wow move-up">
                en ingresos por licencias al año
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="app-landing-title-contet">
              <div class="title-details_one wow move-up">
                <h2>14</h2>
                <h5 class="mb-0">startups</h5>
              </div>
              <div class="subtitle wow move-up">creadas entre 2018 y 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hitos",
};
</script>

<style lang="scss">
.app-landing--center-slider-wrapper {
  transform: skewY(-8deg);
  .app-landing-listing-title-wrap {
    transform: skewY(8deg);
  }
  .border-md-top {
    @media #{$min-tablet} {
      border-top: solid thin #fff;
    }
  }
}
.app-landing-title-contet {
  display: flex;
  flex-direction: column;
  & .title-details_one {
    max-width: 287px;
    width: 100%;
    & h2 {
      font-size: 50px;
      line-height: 1.1;
      font-weight: 700;
    }
    & h5 {
      font-size: 18px;
      line-height: 2;
      letter-spacing: 5px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  .subtitle {
    color: #fff;
    font-size: 21px;
    line-height: 1.3;
    margin-top: 0;
  }
  & .title-details_two {
    margin-left: 0px;
  }

  @media #{$tablet-device} {
    & .title-details_one {
      margin-bottom: 30px;
    }
  }
  @media #{$small-mobile} {
    & .title-details_one {
      text-align: left;
    }
    & .title-details_two {
      margin-top: 30px;
      margin-bottom: 30px;
      margin-left: 0px;
    }
  }
  @media #{$large-mobile} {
    & .title-details_two {
      margin-top: 30px;
      margin-bottom: 30px;
      margin-left: 0px;
    }
  }
}
</style>