import React from 'react';
import {render} from 'react-dom';
import Chart from 'chart.js';

class ResultsChart extends React.Component {
  constructor() {
    super()
    this.state = {
      ctx: null
    }
  }

  componentDidMount() {
    this.state.ctx = document.getElementById("results_chart_ctx")
    console.log(this.state.ctx)
    var myLineChart = new Chart(this.state.ctx, {
      type: 'line',
      data: {
        labels: ["5", "10", "15", "20"],
        datasets: [{
          label: "Precision",
          data: [1, 2, 3, 4],
          fill: true,
          borderColor: "rgba(52, 152, 219,0.8)",
          backgroundColor: "rgba(52, 152, 219,0.3)"
        }, {
          label: "Recall",
          data: [2, 1, 4, 3],
          fill: true,
          borderColor: "rgba(46, 204, 113,0.8)",
          backgroundColor: "rgba(46, 204, 113,0.3)"
        }]
      },
      options: {
        tooltips: {
          mode: 'label'
        },
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Precision and Recall of Naive Bayes Classifier"
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Number of Categories"
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Percent"
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  render () {
    return (
      <div className="results_chart">
        <canvas id="results_chart_ctx" width="100%" height="500"></canvas>
      </div>
    )
  }
}

export default ResultsChart
