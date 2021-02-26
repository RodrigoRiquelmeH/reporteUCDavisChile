<template>
  <div class="drak-area bg-cabernet section-space--ptb_40" id="about">
    <div class="container">
      <div class="row">
        <!-- <div class="col-lg-6 col-md-6 wow move-up">
          <div class="feature-app-landing__wrap">
            <div class="feature-app-landing__inner">
              <h4>
                Su campus de 2.145 hectáreas está en Davis, una vibrante ciudad
                universitaria en el norte de California, con una población
                aproximada de 68.000 personas. La ciudad vecina y capital
                estatal, Sacramento, es hogar del Sistema de Salud de UC Davis.
                Además, cercanos a Davis se encuentran destinos turísticos de
                clase mundial como la Bahía de San Francisco, el Lago Tahoe y el
                Valle de Napa.
              </h4>
            </div>
          </div>
        </div> -->
        <div class="col-12 col-md-12 col-lg-4 col-md-6 wow move-up escuelas">
          <div class="feature-app-landing__wrap">
            <div class="feature-app-landing__inner">
              <div class="feature-app-landing__content">
                <h5 class="heading">
                  <span class="big-num arboretum">4</span> Facultades
                </h5>
                <div class="text">
                  <ul>
                    <li>Agricultura y Ciencias medioambientales</li>
                    <li>Ciencias biológicas</li>
                    <li>Ingeniería</li>
                    <li>Letras y Ciencia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="feature-app-landing__wrap">
            <div class="feature-app-landing__inner">
              <div class="feature-app-landing__content">
                <h5 class="heading">
                  <span class="big-num arboretum">6</span> Escuelas
                </h5>
                <div class="text">
                  <ul>
                    <li>Educación</li>
                    <li>Leyes</li>
                    <li>Administración y Negocios</li>
                    <li>Medicina</li>
                    <li>Medicina veterinaria</li>
                    <li>Enfermería</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow move-up">
          <div class="feature-app-landing__wrap">
            <div class="feature-app-landing__inner">
              <div class="feature-app-landing__icon">
                <img
                  src="../assets/img/icons/001-rank.svg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="feature-app-landing__content">
                <h5 class="heading mb-10">Rankings</h5>

                <div class="text">
                  <ul>
                    <li>1º lugar en el mundo en medicina veterinaria</li>
                    <li>1º lugar en EE. UU. en agricultura</li>
                    <li>
                      1º lugar en EE. UU. en diversidad e internacionalización
                    </li>
                    <li>
                      2º lugar en el mundo en agricultura y ciencias
                      veterinarias
                    </li>
                    <!-- <li>
                      5º lugar entre las universidades públicas de EE. UU.
                    </li> -->
                    <li>3º universidad más verde del planeta</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-4 col-md-6 wow move-up">
          <div class="feature-app-landing__wrap">
            <div class="feature-app-landing__inner">
              <div class="feature-app-landing__icon">
                <img
                  src="../assets/img/icons/002-diploma.svg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="feature-app-landing__content">
                <h5 class="heading mb-10">Carreras</h5>

                <div class="text">
                  <ul>
                    <li>102 carreras de pregrado</li>
                    <li>
                      101 programas de postgrado, más de la mitad
                      interdisciplinarios
                    </li>
                    <li>Más de 20 mil cursos de extensión</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="col-lg-4 col-md-6 wow move-up">
          <div class="feature-app-landing__wrap">
            <div class="feature-app-landing__inner">
              <div class="feature-app-landing__icon">
                <img
                  src="../assets/img/icons/003-cap.svg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="feature-app-landing__content">
                <h5 class="heading mb-10">Estudiantes y profesores</h5>

                <div class="text">
                  <ul>
                    <li>Cerca de 40 mil estudiantes</li>
                    <li>Más de 10 mil estudiantes internacionales</li>
                    <li>25% de estudiantes de postgrado</li>
                    <li>4.500 profesores titulares con grado de doctor</li>
                  </ul>
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
  name: "",
};
</script>

<style lang="scss" scoped>
h4 {
  line-height: 1.4;
  font-size: 24px;
  font-weight: 300;
}

.heading {
  font-weight: bold;
  font-size: 20px;
  @media #{$min-tablet} {
    font-size: 25px;
  }
}
.big-num {
  font-size: 80px;
}
.feature-app-landing__inner {
  margin-bottom: 0;
}
.feature-app-landing__icon {
  width: 80px;
  height: 80px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  .img-fluid {
    width: 50px;
  }
}

.escuelas {
  @media #{$min-tablet} {
    display: flex;
  }
  @media #{$min-desktop} {
    display: block;
  }
}
</style>