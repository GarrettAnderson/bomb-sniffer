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
    } else {
      console.log('Still Playing')
      return <>{this.props.character}</>
    }
  }
}
// <td
//   // key={this.props.key}
//   onClick={() => this.props.check(this.props.rowIndex, this.props.columnIndex)}
//   onContextMenu={(event) => this.props.flag(event, this.props.rowIndex, this.props.columnIndex)}
// >

// </td>

export default BoardCell
