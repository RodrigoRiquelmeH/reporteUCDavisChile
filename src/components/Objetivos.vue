<template>
  <div class="row section-space--pt_60">
    <div class="col-10 objetivos-top">
      <div class="sub__title mb-20">
        <h6 class="font-weight--blod">Objetivos</h6>
      </div>
      <p>
        UC Davis Chile quiere ser un aliado estratégico del sector
        agroalimentario y medioambiental chileno, con el propósito de
        transformar su investigación en soluciones para la industria y la
        sociedad con impacto económico y social a nivel nacional, regional y
        global. Este espíritu se ve reflejado en nuestros objetivos:
      </p>
    </div>
    <div v-for="item in items" :key="item.id" class="col-lg-6 col-md-12 mb-25">
      <div class="ht-service-box--three">
        <div class="service-box-wrap">
          <div class="image__media">
            <img :src="item.icon" class="img-fluid" alt="Icon" />
          </div>
          <div class="content">
            <div class="service_text" v-html="item.text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Objetivos",
  data() {
    return {
      items: [
        {
          icon: require("../assets/img/student_illustration.png"),
          text:
            "Crear una <strong >plataforma para el desarrollo de investigación colaborativa</strong> entre investigadores de Chile y California, capaz de generar innovaciones que impacten la competitividad del sector agroalimentario chileno.",
        },
        {
          icon: require("../assets/img/water_tower_illustration.png"),
          text:
            "Provocar procesos efectivos de <strong>transferencia tecnológica desde UC Davis hacia la industria chilena</strong>, ya sea a partir de desarrollos actualmente disponibles en California y los Estados Unidos, como de los resultados de la I+D que se genere con los socios chilenos.",
        },
        {
          icon: require("../assets/img/egg_illustration.png"),
          text:
            "<strong>Vincular a instituciones chilenas con programas de formación y generación de capacidades</strong> para el desarrollo de investigación aplicada orientada a entregar valor e innovación al sector agroalimentario.",
        },
        {
          icon: require("../assets/img/tree_illustration.png"),
          text:
            "Contribuir al desarrollo y fortalecimiento del <strong>sistema de extensión agroalimentario</strong> en Chile.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.objetivos-top {
  p {
    font-size: 18px;
    margin-bottom: 40px;
  }
}
.image__media {
  max-width: 185px;
  img {
    max-width: 100%;
    height: 150px;
  }
}
</style>
