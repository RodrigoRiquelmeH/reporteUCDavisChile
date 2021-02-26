<template>
  <div class="feature-app-landing" id="uc-devis-us">
    <section class="light-yellow section-space--ptb_120">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ChartCircleTwo
              color="cabernet"
              sectionProgress="22"
              circleValue="02"
              class="section-space--mb_40"
            />
          </div>

          <div class="col-12">
            <SectionTitle
              color="cabernet"
              sectionTitle="La Universidad de <br />California, Davis"
              class="wow move-up"
            />
            <p class="text-center intro cabernet mx-auto mb-5">
              Fundada en 1908, UC Davis es la universidad académicamente más
              completa e integral de la costa oeste, y una de las cinco
              universidades públicas en los Estados Unidos con mayor desarrollo
              y trayectoria en salud humana, medicina veterinaria, ciencias
              agrícolas y ambientales.
            </p>
          </div>
        </div>
        <div class="row relative">
          <div class="col-12 col-md-4 uc-davis-images">
            <img src="@/assets/img/UC-Davis-US-1.jpg" class="img-responsive" />
            <img src="@/assets/img/UC-Davis-US-2.jpg" class="img-responsive" />
            <img src="@/assets/img/UC-Davis-US-3.jpg" class="img-responsive" />
          </div>
          <div class="bg-image"></div>
          <div class="col-12 col-md-8">
            <p class="pl-md-3">
              UC Davis es una universidad de investigación con programas
              académicos de alto prestigio distribuidos en cuatro facultades
              (Ciencias Agrícolas y Ambientales, Ciencias Biológicas,
              Ingeniería, y Letras y Ciencias) y seis escuelas (Educación,
              Leyes, Administración y Negocios, Medicina, Enfermería y Medicina
              Veterinaria). A otoño de 2019, contó con 39.629 estudiantes
              matriculados en más de 100 carreras pregrado y más de 100
              programas de postgrado.
            </p>
            <p class="pl-md-3">
              UC Davis es conocida internacionalmente por trabajar de manera
              multidisciplinaria en la resolución de los desafíos más
              apremiantes del mundo, además de su compromiso con la expresión
              artística y cultural. En 2019-20 se adjudicó US$941,2 millones en
              fondos patrocinados de investigación, y el conjunto de sus
              actividades generan más de US$8.100 millones a la economía de
              California cada año. Entre los numerosos rankings, UC Davis es
              reconocida como la quinta mejor universidad pública de los Estados
              Unidos, primera en el mundo en ciencias veterinarias y segunda en
              el mundo en agricultura y ciencias veterinarias.
            </p>
            <p class="pl-md-3">
              En noviembre de 2020 la Universidad de California, Davis fue la
              única institución de educación superior norteamericana galardonada
              con el
              <a
                href="https://www.ucdavis.edu/news/uc-davis-earns-aplus-platinum-award-global-learning-research-and-engagement"
                target="_blank"
                >Premio Platino 2020 Aprendizaje, Investigación y Compromiso
                Global Institucional</a
              >, máxima distinción entregada por la Asociación de Universidades
              Públicas de EEUU (APLU; The Association of Public and Land-grant
              Universities) y que reconoce los últimos seis años de esfuerzos de
              UC Davis, impulsando estrategias integrales e inclusivas
              vinculadas con el compromiso global, la investigación y el
              aprendizaje.
            </p>
            <p class="pl-md-3">
              Las iniciativas internacionales son parte fundamental del Plan
              Estratégico de UC Davis
              <a
                href="https://leadership.ucdavis.edu/strategic-plan"
                target="_blank"
                >“To Boldly Go”</a
              >, incluyendo el plan del campus impulsado por Global Affairs
              <a href="https://globalaffairs.ucdavis.edu/ge4a" target="_blank"
                >“Global Education for All”</a
              >, el cual tiene por finalidad proporcionar a todos sus
              estudiantes, graduados y profesionales oportunidades de
              aprendizaje que les ayuden a crear conciencia, explorar la
              diversidad mundial y buscar acción global.
            </p>
            <p class="pl-md-3">
              Además del reconocimiento de la APLU, este 2020 UC Davis compartió
              el
              <a
                href="https://www.ucdavis.edu/news/uc-davis-wins-national-recognition-diversity-internationalization"
                target="_blank"
                >primer lugar</a
              >
              entre las universidades de EE.UU. destacadas en cuanto a
              diversidad e internacionalización, asimismo se le otorgó el premio
              <a
                href="https://globalaffairs.ucdavis.edu/news/uc-davis-nafsa-simon-award-internationalization"
                target="_blank"
                >Simon por la Internacionalización Integral del Campus</a
              >, y fue reconocida como una de las mejores universidades en
              cuanto a la formación de
              <a
                href="https://globalaffairs.ucdavis.edu/news/uc-davis-ranked-among-top-producers-of-fulbright-us-scholars"
                target="_blank"
                >becarios Fulbright de EE.UU.</a
              >,
              <a
                href="https://globalaffairs.ucdavis.edu/news/uc-davis-named-top-producer-gilman-scholars"
                target="_blank"
              >
                becarios Gilman</a
              >
              y
              <a
                href="https://www.ucdavis.edu/news/campus-ranked-among-top-producers-peace-corps-volunteers/"
                target="_blank"
                >voluntarios del Cuerpo de Paz.</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <UCDavisFeature class="section-space--mb_80 section-space--ptb_60" />

    <Hitos />
    <Colaboracion />
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import ChartCircleTwo from "@/components/ChartCircleTwo";
import FeatureApp from "@/components/FeatureApp";
import UCDavisFeature from "@/components/UCDavisFeature";
import CurveShape from "@/components/CurveShape";
import Hitos from "@/components/Hitos";
import Colaboracion from "@/components/Colaboracion";
import Diagonales from "@/components/sections/Diagonales";

export default {
  name: "UCDavisUS",
  components: {
    SectionTitle,
    ChartCircleTwo,
    FeatureApp,
    UCDavisFeature,
    CurveShape,
    Colaboracion,
    Hitos,
    Diagonales,
  },
};
</script>
<style lang="scss" scoped>
.light-yellow {
  background: #fff9e5;
  position: relative;
}
.uc-davis-images {
  z-index: 20;
  img {
    max-width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
  }
}
.relative {
  position: relative;
  .bg-image {
    background: $cabernet;
    width: 200px;
    height: 22%;
    display: block;
    position: absolute;
    z-index: 0;
    top: -20px;
    left: -80px;
    @media #{$min-tablet} {
      height: 420px;
    }
    @media #{$min-desktop} {
      height: 80%;
    }
  }
}
p {
  a {
    display: inline;
    color: $cabernet;
    &:hover {
      color: $gold;
    }
  }
}
</style>
