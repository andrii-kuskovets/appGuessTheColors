import React from 'react'
import Tile from './tile'

export default function BoardList({tiles}) {
    return(
        <ul className="board__list">
            {tiles.map((item, idx) =>
                <Tile key={idx} {...item} />
            )}
        </ul>
    )
}