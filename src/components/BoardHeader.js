import React, { Component } from 'react'
import axios from 'axios'

class BoardHeader extends Component {
  render() {
    return (
      <thead className="table-heading">
        <section className="board-heading">
          <header>
            <h1>Minesweeper</h1>
            <h3>{this.props.status}</h3>
          </header>
        </section>
        <select onChange={this.checkDifficulty} className="skill-level-dropdown">
          <option value="0">Beginner</option>
          <option value="1">Intermediate</option>
          <option value="2">Advanced</option>
        </select>
        <button onClick={this.resetGame} className="reset-button">
          Reset
        </button>
        {/* <tr> */}
        {/* <th /> */}
        {/* <select onChange={this.props.checkDifficulty} className="skill-level-dropdown">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Advanced</option>
            </select> */}
        {/* </tr> */}
      </thead>
    )
  }
}

export default BoardHeader
