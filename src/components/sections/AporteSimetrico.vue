<template>
  <div
    class="feature-app-showcase section-space--pt_120 section-space--mb_120"
    id="aporte-simetrico"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ChartCircleTwo
            color="strawberry"
            sectionProgress="63"
            circleValue="09"
            class="section-space--mb_40"
          />
        </div>
        <div class="col-12">
          <SectionTitle
            color="strawberry"
            sectionTitle="Aporte simétrico para <br/>Chile y California"
            class="wow move-up"
          />
        </div>
        <div class="row">
          <div class="col-12 col-lg-3">
            <p class="intro blue">
              El trabajo del
              <em>Centro de Innovación UC Davis Chile</em> se realiza en
              conjunto con UC Davis y el resto de los campus integrantes del UC
              System en California. Con ello generamos un flujo e intercambio de
              investigaciones y conocimientos relevantes para Chile y
              California.
            </p>
          </div>
          <div class="col-12 col-lg-8 mt-4 mt-mb-0">
            <p>
              En el caso de Chile, hemos articulado nuevas formas de trabajo
              colaborativo, obteniendo acceso a laboratorios e investigación de
              punta a nivel mundial y creando puentes para el desarrollo de
              negocios y obtención de recursos con California.
            </p>
            <p>
              A su vez, para UC Davis han surgido nuevas oportunidades para sus
              investigadores y estudiantes, posibilidades de transferencia
              tecnológica, y la instalación de una plataforma que actúa como un
              hub internacional para Latinoamérica.
            </p>
            <h5 class="mt-5">Ecosistema colaborativo y de innovación</h5>
            <p>
              Otro aporte de nuestro centro es la creación de un ecosistema que
              busca generar impactos concretos en las políticas públicas y las
              empresas, a través de la coordinación de diversos actores.
            </p>
            <img
              src="@/assets/img/ecosistema-colaborativo.png"
              class="img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartCircleTwo from "@/components/ChartCircleTwo";
import SectionTitle from "@/components/SectionTitle";
import Aporte from "@/components/Aporte";
export default {
  name: "RelacionHistorica",
  components: {
    SectionTitle,
    ChartCircleTwo,
    Aporte,
  },
};
</script>

<style lang="scss" scoped>
h5 {
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
  color: #022851;
  margin-bottom: 15px;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
</style>