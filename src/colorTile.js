import React from "react";
import './App.css'

class Tile extends React.Component {

    render() {
        return (
            <div className='tileWrapper'>
            <h4>{this.props.name}</h4>
            <div className='colorTile'>
                <img className='colorImage' src={this.props.source}></img>
            </div>
            </div>
        )
    }    
}

export default Tile