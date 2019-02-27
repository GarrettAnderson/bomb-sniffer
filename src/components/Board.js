import React, { Component } from 'react'
import BoardRow from './BoardRow'
import TableHeader from './TableHeader'
import axios from 'axios'

class Board extends Component {
  state = {
    game: [ [] ],
    gameStatus: '',
    id: 0,
    difficulty: 0
  }

  // checkDifficulty = (event) => {
  //   let api = 'https://minesweeper-api.herokuapp.com/games/'
  //   console.log(api)
  //   axios
  //     .post(api, {
  //       difficulty: 0
  //     })
  //     .then((resp) => {
  //       console.log(resp)
  //       console.log(event)
  //       this.setState({
  //         game: resp.data.board,
  //         gameStatus: resp.data.status
  //       })
  //       if (event.type.value === 'intermediate') {
  //         console.log(event)
  //         this.setState({
  //           difficulty: 1
  //         })
  //       } else if (event.type.value === 'Expert') {
  //         this.setState({
  //           difficulty: 2
  //         })
  //       }
  //     })
  // }

  render() {
    return (
      <section>
        <table>
          {/* <thead>
            <tr>
              <th colSpan="8">
                <h3>Minesweeper</h3>
                <h1>{this.state.gameStatus}</h1>
                <select className="skill-level-dropdown">
                  <option onChange={this.checkDifficulty} value="Beginner">
                    Beginner
                  </option>
                  <option onChange={this.checkDifficulty} value="Intermediate">
                    Intermediate
                  </option>
                  <option onClick={this.checkDifficulty} value="Advanced">
                    Advanced
                  </option>
                </select>
              </th>
            </tr>
          </thead> */}
          <TableHeader />
          <BoardRow />
        </table>
      </section>
    )
  }
}

export default Board
