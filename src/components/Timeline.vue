<template>
  <section class="bg-redbud white">
    <div class="container section-space--pb_120 section-space--pt_60">
      <div class="row example-basic">
        <div class="col-12">
          <ul class="timeline timeline-centered">
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">2008 / 2013</h2>
              </div>
            </li>
            <li v-for="item in periodOne" :key="item.id" class="timeline-item">
              <div class="timeline-info">
                <span>{{ item.date }}</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p>{{ item.description }}</p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">2014 / 2017</h2>
              </div>
            </li>
            <li v-for="item in periodTwo" :key="item.id" class="timeline-item">
              <div class="timeline-info">
                <span>{{ item.date }}</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p v-html="item.description"></p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">2018 / 2020</h2>
              </div>
            </li>
            <li
              v-for="item in periodThree"
              :key="item.id"
              class="timeline-item"
            >
              <div class="timeline-info">
                <span>{{ item.date }}</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p>{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Timeline",
  data: () => ({
    periodOne: [
      {
        id: 101,
        date: "2008",
        description: "Acuerdo Chile – California",
      },
      {
        id: 102,
        date: "Noviembre, 2012",
        description: "Invitación a UC Davis a 2ª llamado Centros de Excelencia",
      },
      {
        id: 103,
        date: "Enero/Marzo, 2012",
        description:
          "Representantes de UC Davis se reúnen con más de 40 empresas y gremiales del sector agroalimentario nacional",
      },
      {
        id: 104,
        date: "Junio, 2013",
        description: "Presentación proyecto UC Davis Chile",
      },
      {
        id: 105,
        date: "Octubre, 2013",
        description: "Adjudicación Centro UC Davis Chile",
      },
    ],
    periodTwo: [
      {
        id: 1061,
        date: "Enero, 2014",
        description:
          "Universidad de Talca, Universidad Andrés Bello y Universidad de Tarapacá comprometen su participación como asociados académicos de UC Davis Chile",
      },
      {
        id: 106,
        date: "Noviembre, 2014",
        description:
          "Inicio administrativo de actividades del Proyecto UC Davis Chile",
      },
      {
        id: 107,
        date: "Enero, 2015",
        description:
          "Taller de la Industria del Vino de Chile en California. <br/> Se definen líneas de I+D iniciales del Centro",
      },
      {
        id: 108,
        date: "Abril, 2015",
        description:
          "Con la presencia de la Presidenta Michelle Bachelet se inaugura UC Davis Chile",
      },
      {
        id: 109,
        date: "Septiembre, 2015",
        description: "Inicio Líneas de I+D",
      },
      {
        id: 110,
        date: "2015",
        description:
          "Entender las necesidades del país abriéndose hacia múltiples sectores del mundo agropecuario",
      },
      {
        id: 111,
        date: "Marzo/Abril 2016",
        description:
          "Viña Concha y Toro y VSPT Wine Group suscriben Convenios de Asociación  Industrial Estratégica con UC Davis Chile",
      },
      {
        id: 112,
        date: "Noviembre, 2017",
        description:
          "Primer evento de la serie de Seminarios “Climate Smart Agro”. Plataforma anual que expone ciencia, tecnología y emprendimientos de impacto para la adaptación agroclimática en Chile",
      },
      {
        id: 113,
        date: "Noviembre, 2017",
        description: "Inauguración Centro de Extensión Vitivinícola del Sur",
      },
    ],
    periodThree: [
      {
        id: 114,
        date: "Enero, 2018",
        description:
          "Universidad del Desarrollo, Universidad Federico Santa María e INIA se suman  como asociados académicos a UC Davis Chile",
      },
      {
        id: 115,
        date: "Septiembre, 2018",
        description:
          "Realización de la 1ª Cumbre Internacional de Bioinsumos para la industria agrícola ",
      },
      {
        id: 116,
        date: "Septiembre, 2018",
        description:
          "Junto con OEA y la Universidad del Desarrollo se dicta en Chile el programa HUB de Comercialización y Transferencia Tecnológica para las Américas ",
      },
      {
        id: 117,
        date: "Septiembre, 2018",
        description: "Lanzamiento Genomas de referencia del viñedo chileno.",
      },
      {
        id: 118,
        date: "Enero, 2019",
        description: "Articulación con distintas regiones. Descentralización",
      },
      {
        id: 119,
        date: "Enero, 2019",
        description:
          "Nace fundación “Chile Lagos Limpios”, programa de cooperación entre Chile y California para la preservación bajo un modelo de desarrollo sustentable de los lagos de Chile",
      },
      {
        id: 120,
        date: "Diciembre, 2019",
        description:
          "Estudio encargado por MINAGRI. Economía circular en el sector agroalimentario chileno",
      },
      {
        id: 121,
        date: "Enero/Febrero 2020",
        description:
          "Primeras presentaciones de solicitudes de patentes a nivel internacional de productos para el biocontrol de enfermedades que afectan a la agricultura",
      },
      {
        id: 122,
        date: "Mayo, 2020",
        description:
          "Cooperative Extention: acuerdo para poner a disposición de Chile todo el material investigativo de utilidad desde UC Davis - campus",
      },
      {
        id: 123,
        date: "Agosto, 2020",
        description:
          "Lanzamiento Plataforma de Extensión Frutícola de UC Davis Chile",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: inherit;
  }
}

/*----- TIMELINE ITEM -----*/

.timeline-item {
  padding-left: 40px;
  position: relative;
  &:last-child {
    padding-bottom: 0;
  }
}

/*----- TIMELINE INFO -----*/

.timeline-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  white-space: nowrap;
  color: white;
}
/*----- TIMELINE MARKER -----*/

.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
  &:before {
    background: $gold;
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  &:after {
    content: "";
    width: 3px;
    background: #ccd5db;
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }
  .timeline-item:last-child &:after {
    content: none;
  }
}
.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid $gold;
}

/*----- TIMELINE CONTENT -----*/

.timeline-content {
  padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
}

/*----- TIMELINE PERIOD -----*/

.period {
  padding: 0;
  .timeline-info {
    display: none;
  }
  .timeline-marker {
    &:before {
      background: transparent;
      content: "";
      width: 15px;
      height: auto;
      border: none;
      border-radius: 0;
      top: 0;
      bottom: 30px;
      position: absolute;
      border-top: 3px solid #ccd5db;
      border-bottom: 3px solid #ccd5db;
    }
    &:after {
      content: "";
      height: 32px;
      top: auto;
    }
  }
  .timeline-content {
    padding: 40px 0 70px;
  }
  .timeline-title {
    margin: 0;
    font-size: 35px;
  }
}

/*----------------------------------------------
        MOD: TIMELINE SPLIT
    ----------------------------------------------*/

.timeline-split {
  @media (min-width: 768px) {
    .timeline {
      display: table;
    }
    .timeline-item {
      display: table-row;
      padding: 0;
    }
    .timeline-info,
    .timeline-marker,
    .timeline-content,
    .period .timeline-info {
      display: table-cell;
      vertical-align: top;
    }
    .timeline-marker {
      position: relative;
    }
    .timeline-content {
      padding-left: 30px;
    }
    .timeline-info {
      padding-right: 30px;
    }
    .period .timeline-title {
      position: relative;
      left: -45px;
    }
  }
}

/*----------------------------------------------
        MOD: TIMELINE CENTERED
    ----------------------------------------------*/

.timeline-centered {
  @extend .timeline-split;
  @media (min-width: 992px) {
    &,
    .timeline-item,
    .timeline-info,
    .timeline-marker,
    .timeline-content {
      display: block;
      margin: 0;
      padding: 0;
    }
    .timeline-item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .timeline-marker {
      position: absolute;
      left: 50%;
      margin-left: -7.5px;
    }
    .timeline-info,
    .timeline-content {
      width: 50%;
    }
    > .timeline-item:nth-child(odd) .timeline-info {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item:nth-child(odd) .timeline-content {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-info {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-content {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item.period .timeline-content {
      float: none;
      padding: 0;
      width: 100%;
      text-align: center;
    }
    .timeline-item.period {
      padding: 40px 0 80px;
    }
    .period .timeline-marker:after {
      height: 30px;
      bottom: 0;
      top: auto;
    }
    .period .timeline-title {
      left: auto;
    }
  }
}

/*----------------------------------------------
        MOD: MARKER OUTLINE
    ----------------------------------------------*/

.marker-outline {
  .timeline-marker {
    &:before {
      background: transparent;
      border-color: $gold;
    }
  }
  .timeline-item:hover .timeline-marker:before {
    background: $gold;
  }
}
</style>