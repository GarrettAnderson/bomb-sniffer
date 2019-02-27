import React, { Component } from 'react'
import BoardCell from './BoardCell'
import axios from 'axios'

class BoardRow extends Component {
  state = {
    game: [ [] ],
    gameStatus: '',
    id: 0,
    difficulty: 0
  }

  render() {
    return (
      <tbody>
        {this.props.gameBoard.map((row, x) => {
          return (
            <tr key={x}>
              {row.map((col, y) => {
                return (
                  <td
                    key={y}
                    onClick={() => this.props.checkBomb(x, y)}
                    onContextMenu={(event) => this.props.flagBomb(event, x, y)}
                  >
                    <BoardCell character={col} />
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    )
  }
}

export default BoardRow
