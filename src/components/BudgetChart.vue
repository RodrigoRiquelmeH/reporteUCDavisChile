<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BusgetChart",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Fase 1", "Fase 2", "Fase 3"],
      datasets: [
        {
          label: "Subsidio Corfo",
          backgroundColor: "#003A5D",
          stack: "Stack 0",
          data: [5132, 4105, 1711],
        },
        {
          label: "Pecuniario",
          backgroundColor: "#f095CD",
          stack: "Stack 0",
          data: [3018, 3991, 7602],
        },
        {
          label: "Valorizado",
          backgroundColor: "#FFBF00",
          stack: "Stack 0",
          data: [2863, 2851, 1901],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Miles de US $",
            },
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>