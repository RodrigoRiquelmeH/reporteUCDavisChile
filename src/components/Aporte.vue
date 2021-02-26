<template>
  <section class="bg-white">
    <div class="container">
      <div class="row info first">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="main d-flex blue">
            <span class="big">55</span><span class="genomas">Proyectos</span>
          </div>
          de I+D, transferencia, extensión tecnológica realizados
          <router-link
            :to="{
              name: 'Anexo',
              params: {
                anexo: 'anexo-6',
              },
            }"
            class="link text-uppercase gold pt-3"
            >Ver más</router-link
          >
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="main d-flex poppy">
            <span class="big">6</span
            ><span class="genomas"
              >millones<br />
              de dólares</span
            >
          </div>
          en contratos tecnológicos y de servicios con empresas e instituciones
          públicas
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="main d-flex blue">
            <span class="big">28</span
            ><span class="medium pl-2 mb-2"
              >Empresas, Asociaciones Gremiales e Instituciones públicas</span
            >
          </div>
          de distintos sectores productivos atendidas
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="main d-flex poppy mb-2">
            <span class="big pr-2">3</span
            ><span class="medium">Solicitudes de patentes presentadas</span>
          </div>
          <span> a PCT relacionadas con bioproductos</span>
          <router-link
            :to="{
              name: 'Anexo',
              params: {
                anexo: 'anexo-8',
              },
            }"
            class="link text-uppercase gold pt-3"
            >Ver más</router-link
          >
        </div>
      </div>
      <div class="row info medium">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="item">
            <div class="main d-flex poppy">
              <span class="big">4</span
              ><span class="genomas">Genomas de referencia</span>
            </div>
            de vides viníferas desarrollados
            <ul class="pb-3">
              <li>Merlot</li>
              <li>Chardonnay</li>
              <li>Savignon Blanc</li>
              <li>Carménerè</li>
            </ul>

            <a
              class="gold"
              href="https://cantulab.github.io/data.html"
              target="_blank"
              >REVISAR: Repositorio de genomas de vides viníferas</a
            >
          </div>
          <div class="item">
            <div>
              <div class="main d-flex blue">
                <span class="big">29</span
                ><span class="genomas">Genomas de Clones </span>
              </div>
              de vides viníferas utilizadas por la industria en Chile
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="item">
            <div class="main d-flex blue">
              <span class="big">2</span
              ><span class="genomas"
                >Tecnologías <br />biotech licenciadas</span
              >
            </div>
            <router-link
              :to="{
                name: 'Anexo',
                params: {
                  anexo: 'anexo-9',
                },
              }"
              class="link text-uppercase gold pt-3"
              >Ver más</router-link
            >
          </div>
          <div class="item">
            <div class="main d-flex d-md-block poppy">
              <span class="big">30</span
              ><span class="medium">Artículos de difusión</span>
            </div>
            técnica publicados en revistas especializadas del sector
            agroalimentario nacional
            <router-link
              :to="{
                name: 'Anexo',
                params: {
                  anexo: 'anexo-5',
                },
              }"
              class="link text-uppercase gold pt-3"
              >Ver más</router-link
            >
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4">
          <div class="item">
            <div class="main poppy"><span class="big">+ 85</span></div>
            Investigadores, académicos y staff de la Universidad de California
            Davis colaborando activamente en proyectos de I+D y extensión
            tecnológica
            <router-link
              :to="{
                name: 'Anexo',
                params: {
                  anexo: 'anexo-1',
                },
              }"
              class="link text-uppercase gold pt-3"
              >Ver más</router-link
            >
          </div>
          <div class="item">
            <span class="big blue">+ 70</span> investigadores nacionales han
            sido parte del staff del Centro
            <router-link
              :to="{
                name: 'Anexo',
                params: {
                  anexo: 'anexo-2',
                },
              }"
              class="link text-uppercase gold pt-3"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="row info last">
        <div class="col-12 col-md-12 col-lg-6">
          <div class="main d-flex poppy mb-2">
            <span class="big">8</span
            ><span class="genomas"
              >Universidades e instituciones de investigación</span
            >
          </div>
          nacionales e internacionales asociados al Centro para el desarrollo de
          proyectos de investigación
          <ul class="mt-3">
            <li>Universidad Andrés Bello (UNAB)</li>
            <li>Universidad de Talca (UTalca)</li>
            <li>Universidad de Tarapacá (UTA)</li>
            <li>Universidad del Desarrollo (UDD)</li>
            <li>Universidad Técnica Federico Santa María (USM)</li>
            <li>Universidad de Concepción (UdeC)</li>
            <li>Instituto de Investigaciones Agropecuarias (INIA)</li>
            <li>
              Instituto Volcani de Investigación Agrícola (Ministerio de
              Agricultura de Israel)
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="item">
            <div class="main d-flex d-md-block poppy">
              <span class="big">4</span
              ><span class="medium">Tesis de posgrado</span>
            </div>
            con base en proyectos de I+D del centro
            <router-link
              :to="{
                name: 'Anexo',
                params: {
                  anexo: 'anexo-4',
                },
              }"
              class="link text-uppercase gold pt-3"
              >Ver más</router-link
            >
          </div>
          <div class="item">
            <div class="main d-flex d-md-block blue">
              <span class="big">8</span
              ><span class="medium">Publicaciones</span>
            </div>
            científicas indexadas
            <router-link
              :to="{
                name: 'Anexo',
                params: {
                  anexo: 'anexo-3',
                },
              }"
              class="link text-uppercase gold pt-3"
              >Ver más</router-link
            >
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="main d-flex poppy">
            <span class="big">93</span
            ><span class="genomas">Eventos de difusión</span>
          </div>
          para presentar resultados del Centro y compartir el conocimiento y
          experiencia de California en temáticas de interés para el sector
          productivo, académico y público.
          <router-link
            :to="{
              name: 'Anexo',
              params: {
                anexo: 'anexo-7',
              },
            }"
            class="link text-uppercase gold pt-3"
            >Ver más</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Aporte",
};
</script>
<style lang="scss" scoped>
.big {
  font-size: 55px;
  font-weight: 700;
  line-height: 1.2;
  @media #{$min-tablet} {
    font-size: 80px;
  }
}
.main.d-flex {
  align-items: center;
  .genomas {
    font-size: 24px;
    padding-left: 15px;
    font-weight: 700;
    line-height: 1.1;
  }
  .medium {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.1;
    padding-left: 15px;
    @media #{$min-tablet} {
      padding-left: 0px;
    }
  }
}
ul {
  padding-left: 30px;
  list-style: circle;
}
a {
  font-size: 12px;
}

.info {
  @media #{$min-tablet} {
    border-bottom: dotted 2px $gold;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .col-12 {
    border-bottom: dotted 2px $gold;
    margin-right: 10px;
    margin-left: 10px;
    padding-bottom: 30px;
    padding-top: 30px;

    @media #{$large-mobile} {
      max-width: calc(100% - 20px);
    }
    @media #{$min-tablet} {
      border-right: dotted 2px $gold;
      padding-right: 30px;
      padding-left: 30px;
      margin-right: 0px;
      margin-left: 0px;
      &:nth-child(even) {
        border-right: none;
      }
      &:nth-child(3) {
        border-bottom: none;
      }
      &:nth-child(4) {
        border-bottom: none;
      }
    }
    @media #{$min-desktop} {
      border-bottom: none;
      &:nth-child(even) {
        border-right: dotted 2px $gold;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  .item {
    border-bottom: dotted 2px $gold;
    padding-bottom: 20px;
    margin-bottom: 20px;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0px;
    }
    .big {
      display: block;
    }
  }
  &:last-child {
    border-bottom: none;
  }
}
.info.last {
  .col-12 {
    @media #{$min-tablet} {
      border-right: 0;
    }
  }
  .col-12:first-child {
    @media #{$min-desktop} {
      border-right: dotted 2px $gold;
    }
  }
  .col-12:nth-child(2) {
    @media #{$min-tablet} {
      border-bottom: 0;
    }
  }
  .col-12:last-child {
    border-bottom: 0;
    @media #{$min-tablet} {
      border-left: dotted 2px $gold;
    }
  }
  @media #{$min-desktop} {
    margin-top: 30px;
  }
}
.info.medium {
  @media #{$min-tablet} {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .col-12:last-child {
    @media #{$min-tablet} {
      border-right: 0;
    }
  }
  @media #{$min-desktop} {
    padding-bottom: 30px;
  }
}

ol {
  li {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
.subtitle {
  @media #{$min-tablet} {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
.link {
  display: block;
  &:hover {
    color: $blue !important;
  }
}
</style>