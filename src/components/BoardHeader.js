import React, { Component } from 'react'
import axios from 'axios'

class BoardHeader extends Component {
  render() {
    return (
      <thead className="table-heading">
        <tr>
          <th>
            <select onChange={this.props.checkDifficulty} className="skill-level-dropdown">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Advanced</option>
            </select>
          </th>
        </tr>
      </thead>
    )
  }
}

export default BoardHeader
