<template>
  <div>
    <div class="section-space--pt_120 bg-gray" id="cifras">
      <div class="container">
        <div class="row">
          <div class="col">
            <ChartCircleTwo
              circleValue="10"
              class="section-space--mb_40 section-space--mt_30"
              color="icing"
              sectionProgress="50"
            />
            <SectionTitle
              color="icing"
              sectionTitle="Cifras de nuestra gestión"
              class="wow move-up"
            />
          </div>
        </div>

        <CifrasGestion />
      </div>
    </div>
    <div class="section-space--ptb_120 bg-image">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="subtitle mb-5 blue text-uppercase">
              Mirando hacia la sustentabilidad <br />
              <strong>financiera del centro </strong>
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-10 blue big-text">
            <p>
              La experiencia internacional conocida por todos muestra que la
              investigación fundamental es normalmente financiada por fondos
              públicos, tanto a través de los fondos basales entregados a las
              universidades, como por proyectos individuales en los que éstas
              también participan. Así se genera gran parte de la producción
              científica de nuestra Universidad en California (el 2019, de los
              USD 845,5 millones obtenidos por UC Davis para I+D, más del 81%
              proviene del gobierno federal y del Estado de California).
            </p>
            <p>
              Distinto es el caso de centros con temáticas específicas, con un
              foco claro en la investigación aplicada y el desarrollo de
              tecnología y/o conocimiento destinado a su aplicación productiva o
              como bien público. Este el caso de los Centros de Excelencia
              Internacional que hoy funcionan en Chile y otros Centros
              Tecnológicos. En este caso el modelo apunta a un financiamiento de
              tres tercios: uno basal aportado por el Estado, otro de fondos
              públicos competitivos y el último de contratos específicos con la
              industria
            </p>
            <p>
              UC Davis Chile procura avanzar hacia este modelo, utilizando como
              base el conocimiento y la experiencia de la Universidad de
              California que se ha generado por la inversión del estado de
              California y fondos federales de los Estados Unidos, así como el
              conocimiento de nuestros socios académicos en Chile.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartCircleTwo from "@/components/ChartCircleTwo";
import SectionTitle from "@/components/SectionTitle";
import Timeline from "@/components/Timeline";
import CifrasGestion from "@/components/CifrasGestion";
export default {
  name: "UCDavisChile",
  components: {
    SectionTitle,
    ChartCircleTwo,
    Timeline,
    CifrasGestion,
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  font-size: 28px;
  @media #{$min-tablet} {
    font-size: 35px;
  }
}
.big-text {
  font-size: 18px;
}
</style>