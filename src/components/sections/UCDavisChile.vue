<template>
  <div class="section-space--ptb_120 bg-gray" id="uc-davis-chile">
    <div class="container mb-md-5 pb-md-5">
      <div class="row">
        <div class="col">
          <ChartCircleTwo
            circleValue="04"
            class="section-space--mb_40 section-space--mt_30"
            color="icing"
            sectionProgress="50"
          />
          <SectionTitle
            color="redbud"
            sectionTitle="UC Davis Chile"
            class="wow move-up"
          />
          <h3 class="subtitle text-center mb-5 redbud text-uppercase">
            Nuestro propósito de instalación
          </h3>
          <p class="text-center intro blue mx-auto mb-5">
            El <em>Centro de Innovación UC Davis Chile</em>, fundación de
            derecho privado sin fines de lucro, se ha consolidado en el país
            como un centro de excelencia con foco prioritario en los desafíos
            del sector agroalimentario y las temáticas medioambientales.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <img src="@/assets/img/UC-Davis-CL.png" width="100%" />
        </div>
        <div class="col-12 col-md-6">
          <p>
            Nuestra historia tiene raíces en esta relación de larga data entre
            Chile y California, la que se consolida definitivamente con la
            postulación y adjudicación en 2013 y lanzamiento en 2015, del
            <em
              >Programa de Atracción de Centros Internacionales de
              Excelencia</em
            >
            de CORFO.
          </p>
          <p>
            Parte de los anhelos y del modelo de trabajo de la Universidad de
            California, Davis están relacionados con el trabajo colaborativo
            entre la academia, la industria y el sector público. Es en ese
            sentido que Chile fue visto como un lugar donde es posible potenciar
            la investigación, aportar con las capacidades de UC Davis y obtener
            así un intercambio valioso de conocimientos e innovación en una red
            global.
          </p>
          <p>
            Con cinco años de vida, nuestro
            <em>Centro de Innovación UC Davis Chile</em> se ha convertido en un
            verdadero puente que conecta la investigación, el desarrollo
            tecnológico y las innovaciones con aplicaciones concretas que crean
            valor público, privado, académico y empresarial.
          </p>
        </div>
      </div>
      <div class="text-center mt-5 pt-3">
        <router-link
          :to="{
            name: 'TimeLine',
          }"
          class="ht-btn ht-btn-md ht-btn-custom bg-gold text-uppercase"
        >
          Ver línea de tiempo
        </router-link>
      </div>
      <!-- product overview -->
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="subtitle mb-5 pt-5 redbud text-uppercase">
            Una plataforma colaborativa al servicio del país
          </h3>
        </div>
        <div class="col-12 col-md-3">
          <p class="intro blue">
            Ser un puente que conecte la investigación, el desarrollo
            tecnológico y las innovaciones de California con Chile y la región.
          </p>
        </div>
        <div class="col-12 col-md-8">
          <div>
            <p>
              Considerando por una parte las capacidades y fortalezas de la
              Universidad de California y, por otra, la necesidad de la economía
              chilena de incrementar sus actividades de I+D e innovación, UC
              Davis Chile procura ser un catalizador de proyectos e iniciativas,
              posicionándose como puente en la transferencia de conocimientos,
              desarrollos y tecnologías desde California a Chile.
            </p>
            <p>
              Para cumplir con este propósito, UC Davis Chile no sólo apalanca
              las fortalezas del Campus Californiano, sino que también actúa en
              colaboración con socios académicos locales y con actores
              empresariales.
            </p>
            <p>
              Nuestros socios académicos son instituciones que poseen
              capacidades técnicas que se integran a la propuesta de valor del
              centro para realizar actividades de colaboración en investigación
              aplicada, así como para desarrollar iniciativas con foco en
              innovación: Universidad de Talca, Universidad Andrés Bello,
              Universidad de Tarapacá, Universidad Federico Santa María,
              Instituto de Investigaciones Agropecuarias (INIA) y la Universidad
              del Desarrollo.
            </p>
            <div class="d-flex logos bg-white mb-4">
              <a href="https://www.unab.cl/" target="_blank">
                <img src="@/assets/img/unab.jpg" />
              </a>
              <a href="https://www.utalca.cl/" target="_blank">
                <img src="@/assets/img/u_talca.jpg" />
              </a>
              <a href="http://www.uta.cl/" target="_blank">
                <img src="@/assets/img/universidad_tarapaca.jpg" />
              </a>
              <a href="https://www.udd.cl/" target="_blank">
                <img src="@/assets/img/udd.jpg" />
              </a>
              <a href="https://www.usm.cl/" target="_blank">
                <img src="@/assets/img/usm.jpg" />
              </a>
              <a href="http://www.inia.cl/" target="_blank">
                <img src="@/assets/img/inia.jpg" />
              </a>
            </div>
          </div>
          <div>
            <p>
              Nuestros socios empresariales son compañías que poseen sus propios
              requerimientos de mejoras o desarrollos tecnológicos, pero que
              también buscan apoyar la existencia de UC Davis Chile para
              acelerar procesos efectivos de transferencia tecnológica hacia la
              industria nacional a partir de desarrollos actualmente disponibles
              en California (licencias y patentes, start-ups). Destacan por su
              contribución durante estos años:
            </p>
            <div class="d-flex logos bg-white">
              <a href="https://vsptwinegroup.com/" target="_blank">
                <img src="@/assets/img/vspt.jpg" />
              </a>
              <a href="https://www.inchalam.cl/" target="_blank">
                <img src="@/assets/img/inchalam.jpg" />
              </a>
              <a href="https://conchaytoro.com/" target="_blank">
                <img src="@/assets/img/vina_concha_toro.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartCircleTwo from "@/components/ChartCircleTwo";
import SectionTitle from "@/components/SectionTitle";

export default {
  name: "UCDavisChile",
  components: {
    SectionTitle,
    ChartCircleTwo,
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
.logos {
  border-radius: 15px;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  img {
    max-width: 164px;
    max-height: 70px;
    @media #{$min-tablet} {
      max-width: 215px;
      max-height: 100px;
      margin: 10px;
    }
  }
}
</style>