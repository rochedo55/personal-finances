import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: ['chartData'],
//   mixins: [mixins.reactiveProp],
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
    console.log(this.chartData);
    this.renderChart(this.chartData, this.options)
  }
}