<template>
  <div class="feature-app-showcase section-space--pt_120" id="presentacion">
    <div class="container">
      <div class="row">
        <div class="col">
          <ChartCircleTwo
            circleValue="01"
            class="section-space--mb_40"
            color="arboretum"
            sectionProgress="11"
          />
        </div>
      </div>
      <SectionTitle
        color="arboretum"
        sectionTitle="El sentido de este reporte"
        class="wow move-up"
      />
      <div class="row">
        <div class="col-12 col-md-3">
          <p class="intro blue">
            Como
            <em>Centro de Innovación UC Davis Chile</em> presentamos una
            recopilación de los principales resultados obtenidos desde nuestra
            instalación en el país en el año 2015.
          </p>
        </div>
        <div class="col-12 col-md-4">
          <p>
            Nuestra llegada responde a un estrecho lazo de más de cinco décadas
            entre Chile y el estado de California, relación que se materializa
            en este Centro cuyo foco principal es contribuir, desde la ciencia
            aplicada, investigación y desarrollo, al crecimiento y productividad
            del país, principalmente en el ámbito de la agroindustria, uno de
            los sectores prioritarios para Chile y en el que la Universidad de
            California, Davis (UC Davis) es uno de los líderes a nivel mundial.
          </p>
          <p>
            Si bien en los inicios nos enfocamos en el sector vitivinícola, con
            el paso de los años fuimos incorporando nuevas competencias y
            abordando requerimientos más amplios del sector agroalimentario,
            para avanzar luego hacia iniciativas en medioambiente, recursos
            hídricos, sustentabilidad, extensionismo, economía circular,
            contaminación atmosférica y calidad de aire, eficiencia energética e
            iluminación y telemedicina, entre otros, lo que nos ha permitido ir
            fortaleciendo el vínculo entre ciencia e industria en temáticas de
            gran relevancia, tanto para Chile como para California.
          </p>
        </div>
        <div class="col-12 col-md-4">
          <p>
            Nuestro propósito, vigente desde la inauguración de UC Davis Chile
            el 2015, ha sido
            <em class="arboretum"
              >brindar soluciones tecnológicas, basadas en ciencia, al mercado y
              a la sociedad.
            </em>
            Esto nos ha permitido ser protagonistas y testigos del impacto de
            nuestro trabajo en comunidades y sobre todo en las personas. El
            compartir la experiencia de California con Chile ha sido inspirador
            para quienes han sido parte y para los beneficiarios de los
            proyectos desarrollados en estos cinco años. No solo por los
            aprendizajes y capacidades adquiridas, sino que, por la oportunidad
            de ponerlos al servicio de Chile, desde Chile.
          </p>
          <p>
            De este modo, queremos compartir con ustedes nuestra experiencia y
            al mismo tiempo invitarlos a ser parte de los desafíos que
            pretendemos abordar de aquí en adelante con el objetivo de seguir
            siendo una institución cuyo aporte está al servicio del país.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import ChartCircleTwo from "@/components/ChartCircleTwo";
import FeatureApp from "@/components/FeatureApp";
export default {
  name: "Presentacion",
  components: {
    SectionTitle,
    ChartCircleTwo,
    FeatureApp,
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 300;
  margin-bottom: 50px;
  margin-top: -25px;
}
.intro {
  margin-bottom: 30px;
}
</style>