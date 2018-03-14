import React , { Component } from 'react'
import Rock from './Rock'

class RockList extends Component {
  state = {
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

  render() {
    let rockElements = this.state.rocks.map((rock, i) => <Rock key={i} {...rock} />)
    return (
      <div>
        <h3>List of rocks for you to mingle with</h3>
        {rockElements}
      </div>
    )
  }
}

export default RockList
