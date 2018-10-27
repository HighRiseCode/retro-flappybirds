import React from 'react';
import GridCell from './GridCell'

class GridRow extends React.Component{
  render(){
    var style = {
      display: "flex"
    }
    return(
      <div style={style}>
        {
          this.props.row.map( (cell) => {
            return <GridCell cell={cell}/>
          })
        }
      </div>
    )
  }
}

export default GridRow;
