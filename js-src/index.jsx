import React from 'react';
import {render} from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        content: "",
        category: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.classify = this.classify.bind(this)
  }

  handleChange(event) {
    this.setState({content: event.target.value})
  }

  classify() {
    let self = this
    Axios.post("http://127.0.0.1:5000/classify", {
      text: self.state.content
    }).then(function(response) {
      console.log(response)
      self.setState({category: response.data.category})
    })

  }

  render () {
    return <div className="app">
      <textarea
        className="form-control"
        value={this.state.content}
        onChange={this.handleChange}
        placeholder="Paste article to classify here..."/>

      <button
        onClick={this.classify}
        className="btn btn-primary btn-block">
        Classify Text</button>
         <p className="category">{this.state.category}</p>
      </div>
  }
}

render(<App/>, document.getElementById('app'));
