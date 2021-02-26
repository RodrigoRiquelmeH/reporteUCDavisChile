<template>
  <div>
    <div class="mb-5 intro blue">
      <strong>4 Tesis de posgrado </strong> con base en proyectos de I+D del
      centro:
    </div>
    <div class="row">
      <div v-for="tesis in list" :key="tesis.id" class="col-12 col-md-6 mb-5">
        <div class="tesis">
          <h4>{{ tesis.authors }}</h4>
          <h3>
            <small>{{ tesis.type }}</small>
            {{ tesis.title }}
          </h3>
          <p>{{ tesis.grade }}</p>
          <div class="project-link" v-if="tesis.path">
            <router-link
              :to="{
                name: 'ProjectDetail',
                params: { slug: tesis.path },
              }"
              ><i class="fa fa-chevron-right gold"></i>
              <em>{{ tesis.other }}</em></router-link
            >
          </div>
          <p v-else>
            <em>{{ tesis.other }}</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Anexo4",
  data: () => ({
    list: [
      {
        id: "tesis-1",
        authors: "Richard Bustos y Wladimir Esteban",
        type: "Tesis de Magíster",
        title:
          "EVALUACIÓN DEL MÉTODO DE RENOVACIÓN SUPERFICIAL PARA ESTIMAR FLUJOS DE CALOR LATENTE SOBRE UN VIÑEDO (cv. Cabernet sauvignon) REGADO POR GOTEO",
        grade: "Magíster en hortofruticultura",
        other: "Asociados a proyecto “Surface renewal”",
        path: "surface-renewal",
      },
      {
        id: "tesis-2",
        authors: "Felipe Sáez",
        type: "Tesis de Magíster",
        title:
          "Desarrollo de un método de detección de Botryosphaeriaceae asociadas a la enfermedad de la madera de Vitis vinifera basado en PCR isotérmico",
        grade: "Magíster en Biotecnología",
        other:
          "Asociado a proyecto “Microbial diagnostics using Omic-Based Technologies”",
        path: "diagnistico-lamp",
      },
      {
        id: "tesis-3",
        authors: "Claudio Urra",
        type: "Tesis de Doctorado",
        title:
          "Caracterización de la variabilidad genética de los clones de las variedades de Vitis vinifera utilizadas por las viñas chilenas",
        grade: "Doctor en Biotecnología",
        other: "Asociado a proyecto “Whole Genome Analytics”",
        path: "id-clones",
      },
      {
        id: "tesis-4",
        authors: "Jaime Alarcón",
        type: "Tesis doctorado",
        title:
          "Determinación de la influencia de sequía en la respuesta molecular de Araucaria araucana frente a la inoculación de microorganismos patógenos asociados al daño foliar",
        grade: "Dr (c) en Biociencias moleculares",
        other:
          "Asociado a proyecto “Desarrollo e implementación de herramientas genómicas para el manejo del Daño Foliar de Araucaria araucana y su relación con prácticas culturales de conservación”",
        path: "araucarias",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.title-unit {
  font-size: 25px;
  margin-bottom: 20px;
}
.tesis {
  padding: 37px 30px 37px 30px;
  box-shadow: 0 0 40px 5px rgba(51, 51, 51, 0.1);
  background: #fff;
  border-radius: 10px;
  height: 100%;
  h4 {
    font-size: 22px;
    font-weight: bold;
    color: $gold;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    color: $blue;
    margin-bottom: 20px;
    small {
      text-transform: uppercase;
      display: block;
      margin-bottom: 8px;
      font-size: 15px;
    }
  }
  p {
    margin-bottom: 0;
  }
  .project-link {
    a {
      display: flex;
      align-items: baseline;
      i {
        font-size: 14px;
        padding-right: 8px;
      }
    }
  }
}
</style>



