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
    let api = 'https://minesweeper-api.herokuapp.com/games'
    axios
      .post(api, {
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
    let api = 'https://minesweeper-api.herokuapp.com/games'
    axios
      .post(api + `/${this.state.id}/check`, {
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
    let api = 'https://minesweeper-api.herokuapp.com/games'
    axios
      .post(api + `/${this.state.id}/flag`, {
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
              {row.map((col, y) => {
                return (
                  <td
                    key={y}
                    onClick={() => this.checkForBomb(x, y)}
                    onContextMenu={(event) => this.flagBomb(event, x, y)}
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
