import React from 'react';
import {render} from 'react-dom';
import Axios from 'axios';

class Classifier extends React.Component {
  constructor() {
    super()
    this.state = {
        content: "",
        category: "..."
    }
    this.handleChange = this.handleChange.bind(this)
    this.classify = this.classify.bind(this)
  }

  handleChange(event) {
    this.setState({content: event.target.value})
  }

  classify() {
    let self = this
    Axios.post("http://localhost:5000/classify", {
      text: self.state.content
    }).then(function(response) {
      console.log(response)
      self.setState({category: response.data.category})
    })

  }

  render () {
    return (
      <div
        className="classifier"
        style={{width: this.props.width}}>

        <textarea
          style={{height: this.props.height}}
          className="form-control"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Paste content of article to classify here..."/>

        <button
          onClick={this.classify}
          className="btn btn-primary btn-block">
          Classify Text</button>
        <p className="category">{this.state.category}</p>
      </div>
    )
  }
}

Classifier.propTypes = {
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired
}

Classifier.defaultProps = {
  width: "300px",
  height: "150px"
}

export default Classifier
