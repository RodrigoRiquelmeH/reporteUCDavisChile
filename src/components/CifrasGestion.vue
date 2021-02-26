<template>
  <section>
    <div class="container cifras section-space--ptb_60">
      <div class="row graficos">
        <div class="col-12 col-md-6">
          <p>
            La instalación del Centro UC Davis Chile fue apoyada financieramente
            por el Programa de Atracción de Centros de Excelencia
            Internacionales de I+D para la Competitividad 2.0” de CORFO. Este
            programa definió condiciones de subsidio a 8 años plazo de forma
            decreciente en 3 Fases:
          </p>
          <p>
            <strong>Fase 1:</strong> Instalación; subsidio de hasta 50% del
            costo total (3 años).
          </p>
          <p>
            <strong>Fase 2:</strong> Operación; subsidio de hasta un 40% del
            costo total (3 años).
          </p>
          <p>
            <strong>Fase 3:</strong> Consolidación; subsidio de hasta 25% del
            costo total (2 años).
          </p>
          <p>
            La inversión completa en el Proyecto Centro de Excelencia
            Internacional UC Davis Chile es de aproximadamente
            <strong class="redbud no-wrap">US$ 33 millones.</strong>
          </p>
        </div>
        <div class="col-12 col-md-6 mt-4 mt-md-0">
          <div class="pl-md-3">
            <h5 class="text-center">
              Presupuesto Proyecto Centro de Excelencia Internacional
            </h5>
            <BudgetChart />
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-md-7 order-2 order-md-1">
          <div class="pr-md-4">
            <h5 class="text-center">Ingresos del Centro</h5>
            <div class="row">
              <div class="col-6 col-md-6">
                <h6>Fase Instalación 3 años <br />(2015-2017)</h6>
                <DoughnutChartOne />
              </div>
              <div class="col-6 col-md-6">
                <h6>Fase Operación 3 años <br />(2018-2020)</h6>
                <DoughnutChartTwo />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 order-1 order-md-2 mb-5 mb-md-0">
          <p class="pt-md-2">
            Durante estas dos primeras fases del proyecto, el Centro UC Davis
            Chile ha logrado, además, generar ingresos a través de otras
            fuentes, más allá del subsidio del Programa de Atracción de Centros
            de Excelencia Internacional, donde en los primeros tres años de
            instalación estos recursos fueron un 2% de la operación total.
            Actualmente el proyecto se encuentra en su Fase 2 de Operación, en
            la cual se ha logrado que el 15% de la actividad sea financiada por
            proyectos fuera del Programa de Atracción de Centros de CORFO.
          </p>
        </div>
      </div>
      <div class="row section-space--ptb_60">
        <div class="col-12 col-md-6">
          <p>
            Desde el punto de vista de las acciones del Centro, reflejado en el
            gasto de los recursos, hemos tenido una evolución desde la Fase de
            Implementación a la Fase de Operación donde se destacan:
          </p>
          <ul class="list">
            <li>Aumento de la eficiencia en Administración</li>
            <li>
              Mayor llegada a la aplicación de la Ciencia y el Conocimiento en
              la industria y la sociedad, a través de Transferencia Tecnológica
              y Extensión
            </li>
            <li>
              Fortalecimiento de las capacidades de I+D e Innovación de los
              socios estratégicos chilenos (Partnership)
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 mt-4 mt-md-0">
          <h5 class="text-center">Gastos del Centro</h5>
          <SpendChart />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BudgetChart from "@/components/BudgetChart";
import SpendChart from "@/components/SpendChart";
import DoughnutChartOne from "./DoughnutChartOne.vue";
import DoughnutChartTwo from "./DoughnutChartTwo.vue";
export default {
  name: "CifrasGestion",
  components: {
    BudgetChart,
    SpendChart,
    DoughnutChartTwo,
    DoughnutChartOne,
  },
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.cifras {
  h5 {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    color: $blue;
    margin-bottom: 15px;
  }
  h6 {
    text-transform: uppercase;
    color: $blue;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .row {
    @media #{$min-tablet} {
      padding-bottom: 30px;
    }
    &:nth-child(1) {
      padding-bottom: 10px;
    }
  }
  .no-wrap {
    white-space: nowrap;
  }
}
.list {
  list-style: circle;
  padding-left: 20px;
  li {
    margin-bottom: 10px;
  }
}
</style>