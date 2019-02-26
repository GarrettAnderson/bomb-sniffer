import React, { Component } from 'react'
import BoardCell from './BoardCell'
import axios from 'axios'

class BoardRow extends Component {
  state = {
    game: [ [] ],
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
        this.setState({
          game: resp.data.board,
          id: resp.data.id
        })
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
                  // <td onClick={}> / *add onclick call to function here to click and play the game - left and right clicks
                  // <td onClick={this.checkForBomb}>
                  <BoardCell
                    key={y}
                    rowIndex={x}
                    row={row}
                    columnIndex={y}
                    column={col}
                    check={this.checkForBomb}
                    flag={this.flagBomb}
                  />
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
