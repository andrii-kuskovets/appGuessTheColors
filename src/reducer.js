export default function (tiles, action) {
                let leftIdx = -1;
                let rightIdx = -1;
                for(let i = 0; i < tiles.length; ++i)
                {
                    if(tiles[i].state === 'opened')
                    {
                        if(leftIdx === -1)
                            leftIdx = i;
                        else if(rightIdx === -1) {
                            rightIdx = i;
                            break;
                        }
                    }
                }
                if(leftIdx !== -1 && rightIdx !== -1)
                    if(tiles[leftIdx].color === tiles[rightIdx].color)
                    {
                        tiles[leftIdx].state = 'remove';
                        tiles[rightIdx].state = 'remove';

                        setTimeout(() => {
                            tiles[leftIdx].state = 'removed';
                            tiles[rightIdx].state = 'removed';
                        }, 200);
                    }
                    else
                    {
                        tiles[leftIdx].state = 'close';
                        tiles[rightIdx].state = 'close';

                        setTimeout(() => {
                            tiles[leftIdx].state = 'closing';
                            tiles[rightIdx].state = 'closing';
                            setTimeout(()=>
                            {
                                tiles[leftIdx].state = 'closed';
                                tiles[rightIdx].state = 'closed';
                            }, 200);
                        }, 150);
                    }


            return tiles.map(tile =>
            {
                if(tile.id === action.payload && tile.state !== 'opened')
                {
                    tile.state = 'open';

                    setTimeout(() => {
                            tile.state = 'opening';
                            setTimeout(()=>
                            {
                                tile.state = 'opened';
                            }, 200);
                            }, 200);
                }
                return tile;
            })
   // }
}
