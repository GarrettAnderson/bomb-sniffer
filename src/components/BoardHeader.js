import React, { Component } from 'react'
import axios from 'axios'

class BoardHeader extends Component {
  state = {
    game: [ [] ],
    gameStatus: '',
    id: 0,
    difficulty: 0
  }

  checkDifficulty = (event) => {
    console.log(event)
    if (event.target.value === 'Beginner') {
      this.setState({
        difficulty: 0
      })
    } else if (event.target.value === 'intermediate') {
      console.log(event)
      this.setState({
        difficulty: 1
      })
    } else if (event.target.value === 'Expert') {
      this.setState({
        difficulty: 2
      })
    }
  }

  render() {
    return (
      <thead className="table-heading">
        <tr>
          <th colSpan="8">
            <h1>Minesweeper</h1>
            <h3>Level: {this.props.status}</h3>
            <select onChange={this.checkDifficulty} className="skill-level-dropdown">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </th>
        </tr>
      </thead>
    )
  }
}

export default BoardHeader
