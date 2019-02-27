import React, { Component } from 'react'
import BoardRow from './BoardRow'
import axios from 'axios'

class Board extends Component {
  state = {
    game: [ [] ],
    id: 0,
    gameStatus: ''
  }

  checkDifficulty = (event) => {
    let api = 'https://minesweeper-api.herokuapp.com/games/'
    console.log(api)
    axios
      .post(api, {
        difficulty: 0
      })
      .then((resp) => {
        console.log(resp)
        this.setState({
          game: resp.data.board,
          gameStatus: this.data.status
        })
        if (event.type.value === 'intermediate') {
          this.setState({
            difficulty: 1
          })
        } else if (event.type.value === 'Expert') {
          this.setState({
            difficulty: 2
          })
        }
      })
  }

  render() {
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th colSpan="8">
                <h3>Minesweeper</h3>
                <h1>{this.state.gameStatus}</h1>
                <select className="skill-level-dropdown">
                  <option onClick={this.checkDifficulty} value="Beginner">
                    Beginner
                  </option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </th>
            </tr>
          </thead>
          <BoardRow />
        </table>
      </section>
    )
  }
}

export default Board
