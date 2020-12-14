import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: ['chartData'],
    data: () => ({
      options: {
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    }),
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
}