import React from 'react'; //library becomes avaialble
import Tile from './tile'
import Board from './board'

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
        <Board />
        <Tile />
      </div>
    )
  }

}

// Board component = this.state.board
// 
