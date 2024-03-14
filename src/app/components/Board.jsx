import React from "react";
import Tiles from "./Tiles";


export default function Board({ tiles, onTileClick, playerTurn }) {
  return (
    <>
   
    <div className="grid grid-cols-3 grid-rows-3 gap-1 mt-5">
      <Tiles 
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        values={tiles[0]}
        className='border-b-4 border-r-4 border-indigo-500'
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        values={tiles[1]}
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        values={tiles[2]}
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        values={tiles[3]}
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        values={tiles[4]}
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        values={tiles[5]}
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        values={tiles[6]}
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        values={tiles[7]}
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        values={tiles[8]}
      />
    </div>
    </>
  );
}
