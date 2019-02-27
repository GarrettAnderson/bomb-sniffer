import React, { Component } from 'react'
import axios from 'axios'

class BoardHeader extends Component {
  render() {
    return (
      <thead className="table-heading">
        <tr>
          <th colSpan="8">
            <h1>Minesweeper</h1>
            <h3>Level: {this.props.status}</h3>
            <select onChange={this.props.checkDifficulty} className="skill-level-dropdown">
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
