import React from "react";
import { colorList } from './colorList.js';
import Tile from './colorTile'

import './App.css'
const App = () => {
    
    return (
        <div id='wrapper'>
         <h1>Memory Game</h1>
         <div id='content'>
             {colorList.map(color => {
               return <Tile name={color.name} source={color.source} key={color.name} />
             })}
         </div>
        </div>
    );
};

export default App;