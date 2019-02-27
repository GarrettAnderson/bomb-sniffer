import React, { Component } from 'react'
import BoardCell from './BoardCell'
import axios from 'axios'

class BoardRow extends Component {
  state = {
    game: [ [] ],
    gameStatus: '',
    id: 0
  }

  componentDidMount() {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: 0
      })
      .then((resp) => {
        console.log({ resp })
        this.setState({
          game: resp.data.board,
          id: resp.data.id
        })
      })
  }

  checkForBomb = (x, y) => {
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`, {
        id: this.state.id,
        row: x,
        col: y
      })
      .then((resp) => {
        console.log({ resp })
        if (resp.data.state === 'lost') {
          console.log('You Lost. Try Again')
          this.setState({
            game: resp.data.board,
            gameStatus: 'You Lost. Try Again'
          })
        } else if (resp.data.state === 'won') {
          console.log('🌟 Winner!! Great Job 🌟')
          this.setState({
            game: resp.data.board,
            gameStatus: '🌟 Winner!! Great Job 🌟'
          })
        } else {
          console.log('Playing...')
          this.setState({
            game: resp.data.board,
            gameStatus: 'Playing...'
          })
        }
      })
  }

  flagBomb = (event, x, y) => {
    event.preventDefault()
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`, {
        id: this.state.id,
        row: x,
        col: y
      })
      .then((resp) => {
        console.log(resp)
        this.setState({
          game: resp.data.board,
          id: resp.data.id
        })
      })
  }

  render() {
    return (
      <tbody>
        {this.state.game.map((row, x) => {
          return (
            <tr key={x}>
              {/* <tr> */}
              {row.map((col, y) => {
                return (
                  <td
                    key={y}
                    onClick={() => this.checkForBomb(x, y)}
                    onContextMenu={(event) => this.flagBomb(event, x, y)}
                  >
                    <BoardCell
                      character={col}
                      // key={y}
                      // rowIndex={x}
                      // row={row}
                      // columnIndex={y}
                      // column={col}
                      // check={this.checkForBomb}
                      // flag={this.flagBomb}
                    />
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
