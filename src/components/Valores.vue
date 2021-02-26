<template>
  <div class="product-showcase-feature-wrapper section-space--pt_60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="section-title-wrapper section-space--mb_60">
            <div class="sub__title mb-20">
              <h6 class="font-weight--blod">Valores</h6>
            </div>
            <h3 class="font-weight--light">{{ sectionTitle }}</h3>
          </div>
        </div>
        <div class="col-lg-8 mtn-30">
          <div
            v-for="(feature, index) in productFeature"
            :key="index"
            class="ht-product-service-box mt-30"
          >
            <div class="content-header">
              <div class="icon">
                <i :class="feature.icon"></i>
              </div>
              <h6 class="heading">{{ feature.title }}</h6>
            </div>
            <div class="content-body">
              <div class="service_text">{{ feature.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductShowcase",
  data() {
    return {
      sectionTitle:
        "En nuestro quehacer el equipo UC Davis Chile imprime los valores institucionales, haciéndolos vivos en cada proyecto o programa que se lleva a cabo:",
      productFeature: [
        {
          icon: "fal fa-star",
          title: "EXCELENCIA",
          desc: "Procuramos hacer lo cotidiano de manera sobresaliente.",
        },
        {
          icon: "fal fa-users",
          title: "RESPETO",
          desc:
            "Valoramos a la persona y su entorno social por lo que es, promoviendo su desarrollo.",
        },
        {
          icon: "fal fa-leaf",
          title: "RESPONSABILIDAD AMBIENTAL",
          desc:
            "Respetamos el ambiente, nos reconocemos como parte de él y estamos comprometidos con su desarrollo sustentable.",
        },
        {
          icon: "fal fa-hands-helping",
          title: "COLABORACIÓN",
          desc:
            "Ayudamos y servimos a los demás, espontáneamente, incluso en los pequeños detalles.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 25px;
  line-height: 1.4;
}
.ht-product-service-box {
  padding: 0 15px;
}
</style>