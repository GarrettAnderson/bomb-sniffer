import React, { Component } from 'react'
import axios from 'axios'

class TableHeader extends Component {
  state = {
    game: [ [] ],
    gameStatus: '',
    id: 0,
    difficulty: 0
  }

  checkDifficulty = (event) => {
    console.log(event)
    if (event.type.value === 'Beginner') {
      this.setState({
        difficulty: 0
      })
    } else if (event.type.value === 'intermediate') {
      console.log(event)
      this.setState({
        difficulty: 1
      })
    } else if (event.type.value === 'Expert') {
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
            {/* <h3>Minesweeper</h3> */}
            <h1>{this.props.status}</h1>
            <select className="skill-level-dropdown">
              <option onClick={this.checkDifficulty} value="Beginner">
                Beginner
              </option>
              <option onClick={this.checkDifficulty} value="Intermediate">
                Intermediate
              </option>
              <option onClick={this.checkDifficulty} value="Advanced">
                Advanced
              </option>
            </select>
          </th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader
