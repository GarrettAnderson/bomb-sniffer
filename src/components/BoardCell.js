import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class BoardCell extends Component {
  state = {
    game: [ [] ],
    gameStatus: '',
    id: 0
  }

  render() {
    if (this.props.character === '*') {
      console.log('you lost!')
      return <i className="fas fa-bomb" />
    } else if (this.props.character === 'F') {
      console.log('Flagged a bomb!')
      return <i className="fas fa-flag" />
    } else {
      console.log('Still Playing')
      return <span>{this.props.character}</span>
    }
  }
}

export default BoardCell
