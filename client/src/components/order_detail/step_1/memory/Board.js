import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"
import { canSwap, shuffle, swap, isSolved } from "./helpers"
import { StyledMemory } from '../../../styles/styled_memory';
import { Btn } from '../../../styles/styled_global';

function Board() {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  console.log('is started:', isStarted)

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <StyledMemory>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {
        hasWon && isStarted &&
        <div className='win-text'>
          <h3>Felicidades Ganaste un descuento!</h3>
          <p>Copia el siguiente codigo de descuento:</p>
          <p className='Code'>POWERRANGER2021</p>
        </div>
      }
      {
        !isStarted ?
          (
            <>
              <p className='info-text'>Completa el Puzzle para ganar un codigo de descuento!</p>
              <Btn className='btn-ppal' onClick={() => handleStartClick()}>Start game</Btn>
            </>
          ) : (
            <Btn className='btn-ppal' onClick={() => handleShuffleClick()}>Restart game</Btn>
          )
      }
    </StyledMemory>
  );
}

export default Board;
