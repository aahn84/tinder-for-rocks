import React , { Component } from 'react'
import Rock from './Rock'
import AddRock from './AddRock'

/*
// extract to new AddRock.js file and import the new file here
class AddRock extends Component {
  state = {newRock: ''}

  handleChange = (e) => {
    this.setState({newRock: e.target.value})
  }

  handleAddRock = () => {
    this.props.addRock(this.state.newRock)
    this.setState({newRock: ''})
  }

  render() {
    return (
      <div>
        <label> New rock name </label>
        <input onChange={this.handleChange} />
        <button onClick={this.handleAddRock}> Add Rock </button>
      </div>
    )
  }
}
*/

class RockList extends Component {
  state = {
    message: 'My class is no fun and uncreative today :(',
    rocks: [
      {
        name: 'stoner',
        type: 'igneous',
        age: 420,
        color: 'green',
        hardness: 'rock solid'
      },
      {
        name: 'limey the limestone',
        type: 'sedimentary',
        age: 20,
        color: 'yellow',
        hardness: 'soft'
      },
    ]
  }

  // preferred method
  updateMessage = (e) => {
    this.setState({message: e.target.value})
  }

  /*
  // alternate method using .bind(this)
  updateMessage2(e) {
    this.setState({message: e.target.value})
  }
  */

  // handleChange = (e) => {
  //   this.setState({newRock: e.target.value})
  // }

  addRock = (rockName) => {
    let newRock = {
      name: rockName,
      type: 'metamorphic',
      hardness: 'super',
      age: 'forever young',
    }
    this.setState({
      rocks: [...this.state.rocks, newRock],
    })
  }

  // handleAddRock = () => {
  //   this.props.addRock(this.state.newRock)
  //   this.setState({newRock: ''})
  // }

  render() {
    let rockElements = this.state.rocks.map((rock, i) => <Rock key={i} {...rock} />)
    return (
      <div>
        <h1> Important message! {this.state.message} </h1>
        <h3>List of rocks for you to mingle with</h3>
        <input onChange={this.updateMessage} />
        {/* <input onChange={this.updateMessage2.bind(this)} /> */}
        {rockElements}
        <AddRock addRock={this.addRock} />
      </div>
    )
  }
}

export default RockList
