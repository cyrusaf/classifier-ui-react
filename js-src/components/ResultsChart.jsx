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
    this.state.ctx = document.getElementById("results_chart_ctx_"+this.props.i)
    console.log(this.state.ctx)
    var myLineChart = new Chart(this.state.ctx, {
      type: 'bar',
      data: {"labels": ["Electronics", "Mythology", "Geography and Places", "Religion", "Biology", "Mathematics", "Computing", "Nature", "History and Events", "Physical Sciences", "Games and Toys", "Arts and Entertainment", "Sports", "Transport"], "datasets": [{"data": [73.23232323232324, 92.5925925925926, 65.65656565656566, 77.77777777777777, 71.73913043478261, 59.09090909090909, 82.3529411764706, 76.92307692307692, 78.04878048780488, 100.0, 100.0, 65.04854368932038, 91.20879120879121, 70.0], "backgroundColor": "rgba(52, 152, 219,0.3)", "borderColor": "rgba(52, 152, 219,0.8)", "label": "Precision"}, {"data": [92.35668789808918, 78.125, 73.03370786516854, 46.666666666666664, 83.54430379746836, 52.0, 73.6842105263158, 25.0, 73.5632183908046, 20.0, 13.793103448275861, 89.33333333333333, 79.04761904761905, 74.24242424242425], "backgroundColor": "rgba(46, 204, 113,0.3)", "borderColor": "rgba(46, 204, 113,0.8)", "label": "Recall"}]},
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
              labelString: "Categories"
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
        <canvas id={'results_chart_ctx_' + this.props.i} width="100%" height="500"></canvas>
      </div>
    )
  }
}

ResultsChart.propTypes = {
    i: React.PropTypes.string.isRequired
};
ResultsChart.defaultProps = {
    i: "1"
};


export default ResultsChart
