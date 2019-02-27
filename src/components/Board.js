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

  componentDidMount() {
    this.startNewGame()
  }

  checkDifficulty = (event) => {
    console.log(event)
    if (event.target.value === 'Beginner') {
      this.setState({
        difficulty: 0
      })
    } else if (event.target.value === 'intermediate') {
      console.log(event)
      this.setState({
        difficulty: 1
      })
    } else if (event.target.value === 'Expert') {
      this.setState({
        difficulty: 2
      })
    }
  }

  startNewGame = () => {
    let api = 'https://minesweeper-api.herokuapp.com/games'
    axios
      .post(api, {
        difficulty: this.state.difficulty
      })
      .then((resp) => {
        console.log({ resp })
        this.setState({
          game: resp.data.board,
          id: resp.data.id,
          gameStatus: resp.data.state
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
          console.log('Winner!! Great Job')
          this.setState({
            game: resp.data.board,
            gameStatus: 'Winner!! Great Job'
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
      <section>
        <table>
          <BoardHeader
            status={this.state.gameStatus}
            gameBoard={this.state.game}
            checkDifficulty={this.checkDifficulty}
          />
          <BoardRow
            status={this.state.gameStatus}
            gameBoard={this.state.game}
            checkBomb={this.checkForBomb}
            flagBomb={this.flagBomb}
          />
        </table>
      </section>
    )
  }
}

export default Board
