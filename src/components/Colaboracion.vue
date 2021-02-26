<template>
  <div class="payment-staps-way-last_wrap dark-area section-space--pt_60 pb-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="payment-process-step__three section-space--ptb_60">
            <div class="row align-items-center">
              <div
                class="col-lg-6 col-md-12 wow move-up"
                style="visibility: visible"
              >
                <div class="payment-process-step__media text-center">
                  <img
                    src="../assets/img/extension.jpg"
                    alt=""
                    class="img-fluid mb-3"
                  />
                  <img
                    src="../assets/img/extension-2.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <div class="circle"></div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 wow move-up colaboracion"
                style="visibility: visible"
              >
                <div class="payment-process-step__content float-md-right">
                  <div class="payment-process__inner">
                    <h2 class="font-weight--blod section-space--mb_40">
                      Sistema de Extensión de California
                    </h2>
                    <div class="sub-text section-space--mb_20">
                      El extensionismo de la U. de California tiene más de 100
                      años de trayectoria y ha mostrado ser un sistema eficiente
                      y eficaz, por lo que podría convertirse en un referente
                      para Chile.
                    </div>
                    <div class="sub-text section-space--mb_40">
                      El trabajo de investigación y extensión en el área
                      agroalimentaria está coordinado por la División de
                      Agricultura y Recursos Naturales (Division of Agriculture
                      and Natural Resources, ARN), conformado por:
                    </div>
                    <div class="payment-conters section-space--mb_40">
                      <div class="row">
                        <div class="col-md-6 col-6">
                          <div class="fun-fact--three">
                            <span class="fun-fact__count arboretum"
                              ><span>9</span></span
                            >
                            <h6 class="fun-fact__text white">
                              centros de investigación (Research and Extension
                              Centers) a lo largo de California
                            </h6>
                          </div>
                        </div>
                        <div class="col-md-6 col-6">
                          <div class="fun-fact--three">
                            <span class="fun-fact__count arboretum"
                              ><span>130</span></span
                            >
                            <h6 class="fun-fact__text white">
                              especialistas en extensión cooperativa
                            </h6>
                          </div>
                        </div>
                        <div class="col-md-6 col-6">
                          <div class="fun-fact--three">
                            <span class="fun-fact__count arboretum"
                              ><span>57</span></span
                            >
                            <h6 class="fun-fact__text white">oficinas</h6>
                          </div>
                        </div>

                        <div class="col-md-6 col-6">
                          <div class="fun-fact--three">
                            <span class="fun-fact__count arboretum"
                              ><span>200</span></span
                            >
                            <h6 class="fun-fact__text white">asesores</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Colaboracion",
};
</script>

<style lang="scss" scoped>
.dark-area {
  img {
    max-width: 100%;
  }
  color: #fff;
  .fun-fact--three {
    border-left: solid thin #fff;
    margin-bottom: 30px;
    padding-top: 0;
    span {
      line-height: 1.1;
      font-weight: 700;
    }
    h6 {
      margin-top: 10px;
      font-size: 15px;
      line-height: 1.4;
    }
    &::before {
      display: none;
    }
  }
}
.payment-process-step__media {
  &::before {
    display: block;
    content: "";
    background: $gold;
    width: 4px;
    height: 220px;
    position: absolute;
    bottom: -50px;
  }
  &::after {
    display: block;
    content: "";
    background: $gold;
    width: 4px;
    height: 220px;
    position: absolute;
    top: -50px;
    right: 15px;
  }
  .circle {
    border: dotted 3px $arboretum;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    bottom: 120px;
    left: -40px;
  }
}
.colaboracion {
  margin-top: 80px;
}
</style>