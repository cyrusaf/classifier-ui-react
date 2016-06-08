import React from 'react';
import {render} from 'react-dom';
import Classifier from './components/Classifier.jsx'
import ResultsChart from './components/ResultsChart.jsx'


render(<Classifier width="100%" height="300px"/>, document.getElementById('classifier'));
render(<ResultsChart />, document.getElementById('results_chart'));
