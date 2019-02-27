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
    event.persist()
    let api = 'https://minesweeper-api.herokuapp.com/games'
    axios.post(api, { difficulty: 0 }).then((resp) => {
      console.log(event)
      if (event.target.value === 'Beginner') {
        this.setState({
          difficulty: 0,
          game: resp.data.board,
          id: resp.data.id
        })
        this.startNewGame()
      } else if (event.target.value === 'Intermediate') {
        console.log(event)
        this.setState({
          difficulty: 1,
          game: resp.data.board,
          id: resp.data.id
        })
        this.startNewGame()
      } else if (event.target.value === 'Expert') {
        this.setState({
          difficulty: 2,
          game: resp.data.board,
          id: resp.data.id
        })
        this.startNewGame()
        // } else {
        //   this.startNewGame()
      }
    })
    console.log(event)
  }

  startNewGame = () => {
    let api = 'https://minesweeper-api.herokuapp.com/games'
    axios
      .post(api, {
        difficulty: this.state.difficulty
      })
      .then((resp) => {
        console.log({ resp })
        if (resp.data.state === 'new') {
          this.setState({
            difficulty: resp.data.difficulty,
            game: resp.data.board,
            id: resp.data.id,
            gameStatus: 'Begin New Game!'
          })
        }
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
        <h1>Minesweeper</h1>
        <h3>{this.state.gameStatus}</h3>
        <select onChange={this.checkDifficulty} className="skill-level-dropdown">
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Advanced</option>
        </select>
        <table>
          {/* <thead className="table-heading">
            <tr>
              <th />
            </tr>
          </thead> */}
          {/* <BoardHeader
            status={this.state.gameStatus}
            gameBoard={this.state.game}
            checkDifficulty={this.checkDifficulty}
          /> */}
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
