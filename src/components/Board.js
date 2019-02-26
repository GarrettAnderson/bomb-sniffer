import React, { Component } from 'react'
import BoardRow from './BoardRow'

class Board extends Component {
  state = {
    game: []
  }

  // checkForBomb = (event) => {
  //  let apiUrl = 'https://minesweeper-api.herokuapp.com/games/' + ${this.state.id} + '/check'
  //  console.log(apiUrl)
  //   axios
  //     .post(`'https://minesweeper-api.herokuapp.com/games/${this.state.id}/check'`, {
  //       difficulty: 0
  //     })
  //     .then((resp) => {
  //       console.log(resp)
  //       // this.setState({
  //       //   updateGame: resp.data.board
  //       // })
  //     })
  // }

  render() {
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th colSpan="8">The table header</th>
            </tr>
          </thead>
          <BoardRow />
        </table>
      </section>
    )
  }
}

export default Board
