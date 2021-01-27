import React from "react";
import Tile from './tile';

import * as Minesweeper from '../minesweeper'

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    let board = this.props.board;

    this.renderTiles = this.renderTiles.bind(this)
  }

  renderRows() {
    let board = this.props.board
    board.grid.map ((row, idx) => {
      return (
        <div>
          {this.renderTiles(row, idx)}
        </div>
      )
    })
  }

  renderTiles(row, idx) {
    row.map ((tile, idx) => {
      return (
        <Tile
          tile={tile}
          updateGame={this.props.updateGame}
        />
      )
    })
  }

  render() {
    return (
      <div>
        { this.renderRows() }
      </div>
    )
  }
}

// const JobIndex = (props) => {
//     const jobsArr = props.listings.map((listing) => {
//                         // must return in a map!!
//                         return(
//                             // <li>{listing.company}</li>
//                             <JobIndexItem
//                                 key={listing.id}
//                                 company={listing.company}
//                                 title={listing.title}
//                                 type={listing.type}
//                                 location={listing.location}
//                             />
//                         );
//                     });
//     return(
//         <ul>
//             {jobsArr}
//         </ul>
//     )
// }
