import React, { useState, useEffect } from "react";
import { colorList } from './colorList.js';
import Tile from './colorTile'
import './App.css';

const App = () => {
    const [list, setList] = useState(colorList);
    const [score, setScore] = useState(0);
    const [hiScore, setHiScore] = useState(0);
    const [clicked, setClicked] = useState([]);

    useEffect(() => {
        if (score == 10) {
            window.alert('You Win!');
            if (score > hiScore) {setHiScore(score);}
            setScore(0);
            setClicked([]);
        }
    }, [score]);

    let shuffle = (color) => {
        for (let i = (colorList.length -1); i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let k = colorList[i];
            colorList[i] = colorList[j];
            colorList[j] = k;
        }
        let newArray = [...colorList]
        setList(newArray);
        setScore(score + 1);
        if (clicked.includes(color.target.id)) {
            if (score > hiScore) {setHiScore(score);}
            setScore(0);
            setClicked([]);
        }
        else {
            setClicked([...clicked, color.target.id])
        }

    }

    return (
        <div id='wrapper'>
         <h1>Memory Game</h1>
         <div id='scores'>
             <p id='currentScore'>Current Score: {score}</p>
             <p id='hiScore'>Hi-Score: {hiScore}</p>
         </div>
         <div id='mainContent'>
             {list.map(color => {
               return <Tile name={color.name} source={color.source} key={color.name} shuffle={shuffle} />
             })}
         </div>
        </div>
    );
};

export default App;