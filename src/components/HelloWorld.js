import React, { Component } from 'react'
import axios from 'axios'

class HelloWorld extends Component {
  state = {
    game: []
  }

  componentDidMount() {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: 0
      })
      .then((resp) => {
        console.log({ resp })
        this.setState({
          game: resp.data.board
          // id: resp.data.board.id
        })
      })
  }

  // checkForBomb = (event) => {
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
          <tbody>
            {this.state.game.map((row) => {
              return (
                <tr>
                  {row.map((col) => {
                    return (
                      // <td onClick={}> / *add onclick call to function here to click and play the game - left and right clicks
                      // <td onClick={this.checkForBomb}>
                      <td>
                        <button>{col}</button>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    )
  }
}

export default HelloWorld
