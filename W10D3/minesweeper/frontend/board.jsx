import React from "react";
import Tile from './tile'

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRows() {
    let board = this.props.board
    debugger
    board.grid.map ((row, idx) => {
      return (

      )
    })
  }

  renderTiles(row) {
    row.map ((tile, idx) => {
      <Tile />
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
