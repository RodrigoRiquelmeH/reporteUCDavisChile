<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "DoughnutChartOne",
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: [
        "22% Aporte Valorizado",
        "47% CORFO",
        "11% Aporte Universidades",
        "18% Contrato con Industria",
        "2% Proyectos Fondos Públicos",
      ],
      datasets: [
        {
          data: [22, 47, 11, 18, 2],
          backgroundColor: [
            "#FFBF00",
            "#003A5D",
            "#00C4B3",
            "#F18A00",
            "#F93549",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        align: "start",
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

