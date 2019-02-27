import React, { Component } from 'react'
import BoardRow from './BoardRow'
import TableHeader from './BoardHeader'
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
          <TableHeader />
          <BoardRow />
        </table>
      </section>
    )
  }
}

export default Board
