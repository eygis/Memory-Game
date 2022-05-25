import React from "react";
import './App.css'

class Tile extends React.Component {

    render() {
        return (
            <div className='tileWrapper'>
            <h4>{this.props.name}</h4>
            <div className='colorTile'>
                <img className='colorImage' id={this.props.name} src={this.props.source} onClick={(e) => this.props.shuffle(e)}></img>
            </div>
            </div>
        )
    }    
}

export default Tile