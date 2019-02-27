import React, { Component } from 'react'
import BoardRow from './BoardRow'
import BoardHeader from './BoardHeader'
import axios from 'axios'

class Board extends Component {
  state = {
    game: [ [] ],
    gameStatus: '',
    id: 0,
    difficulty: 0
  }

  render() {
    return (
      <section>
        <table>
          <BoardHeader status={this.state.gameStatus} />
          <BoardRow />
        </table>
      </section>
    )
  }
}

export default Board
