import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExcerciseType extends Component {
  constructor(props) {
    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: ''
    }
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const excerciseType = {
      type: this.state.type
    }

    console.log(excerciseType);

    axios.post('http://localhost:5000/exerciseType/add', excerciseType)
      .then(res => console.log(res.data));

    this.setState({
      type: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Excercise Type</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Excercise Type: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.type}
                onChange={this.onChangeType}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Excercise Type" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}