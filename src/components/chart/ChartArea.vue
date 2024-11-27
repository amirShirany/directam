<!-- ChartAreaTest.vue -->
<template>
  <div class="chart-container">
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr"],
          labels: {
            show: false,
          },
          axisBorder: { show: false },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        grid: { show: false },
        colors: ["#BE0183"],
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 1,
            opacityTo: 0.5,
          },
        },
        stroke: {
          show: true,
          colors: ["#BE0183"],
          width: 1,
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50],
        },
      ],
    };
  },
};
</script>

<style scoped>
.chart-container {
  border-radius: 8px;
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
}
</style>
