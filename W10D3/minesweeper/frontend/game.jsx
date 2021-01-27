import React from 'react'; //library becomes avaialble

import * as Minesweeper from '../minesweeper'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Minesweeper.Board()
    }
  }

  updateGame() {

  }

  render() {
    return(
      <div>
        <h1>Rendering Game...</h1>
      </div>
    )
  }

}
