import React, { useEffect, useReducer, useState } from "react";
import BoardList from "./boardList";
import reducer from "../reducer";
import { Context } from "../contex";
import PopUp from "./popUp";

const InitialTiles = [
    {
        id: 0,
        color: "",
        state: ""
    }
];

function Board() {
    const [tiles, dispatch] = useReducer(reducer, InitialTiles);
    const [state, setState] = useState('play');

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({
                type: 'update',
                payload: -1
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        dispatch({
            type: "init",
            payload: -1
        });
    }, []);

    if (state === 'play')
    {
        let countOfClosed = 0;
        for (let i = 0; i < tiles.length; ++i)
            if (tiles[i].state === "removed") countOfClosed++;

        if(countOfClosed === tiles.length)
        {
            setState('win');
            dispatch({
                type: 'win',
                payload: -1
            })
        }
    }
    else if(state === 'win' && tiles.length > 0)
        setState('play');

    return (
        <Context.Provider value={{ dispatch }}>
            <h1>Guess the Colors</h1>
            <div className="board">
                <PopUp popUp={state} />
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