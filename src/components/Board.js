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

  render() {
    return (
      <section>
        <table>
          <BoardHeader status={this.state.gameStatus} checkDifficulty={this.checkDifficulty} />
          <BoardRow />
        </table>
      </section>
    )
  }
}

export default Board
