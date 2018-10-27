import React from 'react';
import GridRow from './GridRow'

class Grid extends React.Component{
  render(){
    return(
      <div>
        {
          this.props.grid.map( (row) => {
            return <GridRow row={row}/>
          })
        }
      </div>
    )
  }
}

export default Grid;
