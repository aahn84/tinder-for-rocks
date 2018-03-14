import React , { Component } from 'react'
import Rock from './Rock'

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

  // alternate method using .bind(this)
  updateMessage2(e) {
    this.setState({message: e.target.value})
  }

  render() {
    let rockElements = this.state.rocks.map((rock, i) => <Rock key={i} {...rock} />)
    return (
      <div>
        <h1> Important message! {this.state.message} </h1>
        <h3>List of rocks for you to mingle with</h3>
        <input onChange={this.updateMessage} />
        <input onChange={this.updateMessage2.bind(this)} />
        {rockElements}
      </div>
    )
  }
}

export default RockList
