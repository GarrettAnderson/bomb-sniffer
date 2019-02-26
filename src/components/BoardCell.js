import React, { Component } from 'react'

class BoardCell extends Component {
  // state = {
  //   game: [ [] ],
  //   id: 0
  // }
  render() {
    return (
      <td
        // key={this.props.key}
        onClick={() => this.props.check(this.props.rowIndex, this.props.columnIndex)}
        onContextMenu={(event) => this.props.flag(event, this.props.rowIndex, this.props.columnIndex)}
      >
        {this.props.column}
      </td>
    )
  }
}

export default BoardCell
