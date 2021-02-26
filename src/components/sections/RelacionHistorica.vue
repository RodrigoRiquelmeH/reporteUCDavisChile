<template>
  <div>
    <div class="section-space--ptb_120" id="relacion-historica">
      <div class="container">
        <div class="row">
          <div class="col">
            <ChartCircleTwo
              color="pinot"
              sectionProgress="33"
              circleValue="03"
              class="section-space--mb_40"
            />
            <SectionTitle
              color="pinot"
              sectionTitle="Relación histórica <br />entre Chile y UC Davis"
              class="wow move-up"
            />
            <p class="text-center intro pinot mx-auto mb-5">
              La decisión de instalar en Chile el
              <em>Centro de Innovación UC Davis Chile</em>, se enmarca dentro de
              una historia de más de 50 años de colaboración e intercambio
              académico entre Chile y California.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <p>
              A mediados de la década del 60, los respectivos gobiernos firmaron
              un acuerdo que se concretó con el envío de estudiantes y
              profesores desde la Universidad de Chile a la Universidad de
              California, Davis.
            </p>
            <p>
              El valor de esta relación se funda en que ambas regiones presentan
              características climáticas, geográficas similares, en tanto que
              comparten desafíos en el cuidado de la biodiversidad, el manejo de
              cuencas hidrográficas y uso de energías. El desfase estacional,
              además, permite el intercambio comercial en el sector agrícola
              durante todo el año.
            </p>
            <p>
              A este vínculo hoy se le atribuye gran parte del crecimiento de
              las exportaciones de uva y las frutas de carozo en Chile, e
              incluso el desarrollo de la industria de los vinos, de la que
              Chile es un importante actor a nivel mundial.
            </p>
            <p>
              Los acuerdos de colaboración se han mantenido durante décadas y se
              han ido afianzando, con la conformación de comités, planes
              concretos e institucionalización de redes de trabajo y cooperación
              entre la academia y los sectores público y privado de ambos
              países.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <p>
              En este marco, la asociación entre UC Davis y Chile permanece
              hasta hoy con decenas de estudiantes chilenos de postgrado e
              investigadores postdoctorales trabajando en los campus en
              California.
            </p>
            <p>
              En Chile, en tanto, gracias al
              <em>Centro de Innovación UC Davis Chile</em>
              y la experiencia de UC Davis, la investigación agrícola ha movido
              sus fronteras con avanzadas técnicas genómicas, mientras que ha
              expandido sus campos de trabajo a otras áreas de investigación con
              proyectos para el monitoreo y la mitigación del cambio climático,
              gestión de recursos hídricos para la agricultura, manejo
              sustentable de cultivos, conservación y desarrollo sustentable,
              contaminación atmosférica y calidad de aire, economía circular,
              telemedicina, electromovilidad, eficiencia energética e
              iluminación, entre otras.
            </p>
          </div>
        </div>
        <div class="text-center mt-md-5 pt-5">
          <router-link
            :to="{
              name: 'Hitos',
            }"
            class="ht-btn ht-btn-md ht-btn-custom bg-gold text-uppercase"
          >
            Ver Hitos de la relación entre Chile y UC Davis desde los años 60
          </router-link>
        </div>
        <!-- product overview -->
      </div>
    </div>
  </div>
</template>

<script>
import ChartCircleTwo from "@/components/ChartCircleTwo";
import SectionTitle from "@/components/SectionTitle";
import ModalHitos from "@/components/ModalHitos";
import ShowcaseRelacionHistorica from "@/components/ShowcaseRelacionHistorica.vue";
import Gradation from "@/components/Gradation";
export default {
  name: "RelacionHistorica",
  components: {
    SectionTitle,
    ChartCircleTwo,
    ShowcaseRelacionHistorica,
    Gradation,
    ModalHitos,
  },
  data() {
    return {
      showHitos: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-showcase-step-wrap {
  height: 500px;
}
.icon-process-area {
  h3 {
    padding-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}
a.ht-btn.ht-btn-md.ht-btn-custom.bg-gold.text-uppercase {
  line-height: 1.4;
  height: auto;
  padding: 10px 20px;
  @media #{$min-tablet} {
    padding: 20px 25px;
  }
}
</style>