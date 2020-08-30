import React, {useEffect, useReducer} from 'react';
import './_board.scss';
import {ITEMS} from '../constant';
import BoardList from "./boardList";
import reducer from "../reducer";
import {Context} from "../contex";

function shuffle(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function generateTiles() {
    let tiles = shuffle(ITEMS.concat(ITEMS));
    return tiles.map((tile, idx) =>
    {
        return { id:idx, color: tile.color, state: tile.state };
    })
}

function Board() {
    const [tiles, dispatch] = useReducer(reducer, generateTiles());
    useEffect(()=>
    {
        const interval = setInterval(() =>
        {
            dispatch({
                type: 'update',
                payload: -1
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <Context.Provider value={{dispatch}}>
            <h1>Guess the Colors</h1>
        <div className="board">
            <div className="container">
                <div className="board__wrapper">
                        <BoardList tiles={tiles} />
                </div>
            </div>
        </div>
        </Context.Provider>
    );
}

export default Board;