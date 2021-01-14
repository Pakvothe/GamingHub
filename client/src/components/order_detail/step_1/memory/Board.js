import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"
import { canSwap, shuffle, swap, isSolved } from "./helpers"
import { StyledMemory } from '../../../styles/styled_memory';
import { Btn } from '../../../styles/styled_global';
import Pulse from 'react-reveal/Pulse';
import strings from './strings';

function Board() {
  const language = useSelector(state => state.globalReducer.language);
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const s = strings[language];

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
        hasWon && isStarted ?
          (<div className='win-text'>
            <h3>{s.congratz}</h3>
            <p>{s.copy}</p>
            <p className='Code'>POWERRANGER2021</p>
          </div>) : (
            <div className='win-text'>
              <p className='info-text'>{s.info}</p>
              <p className='info-text'>{s.info2}</p>
            </div>
          )}
      {
        !isStarted ?
          (
            <>
              <Btn className='btn-ppal' onClick={() => handleStartClick()}>{s.startButton}</Btn>
            </>
          ) : (
            <Btn className='btn-ppal' onClick={() => handleShuffleClick()}>{s.resetButton}</Btn>
          )
      }
    </StyledMemory>
  );
}

export default Board;
