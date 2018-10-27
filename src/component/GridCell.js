import React from 'react'

class GridCell extends React.Component{
  render(){
    var style = {
      width: 20,
      height: 20,
      border: '1px solid black',
      backgroundColor: this.props.cell
    }
    return(
      <div style={style}></div>
    )
  }
}

export default GridCell;
