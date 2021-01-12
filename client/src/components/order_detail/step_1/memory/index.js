import React from 'react';
import Board from "./Board";
import { StyledMemory } from '../../../styles/styled_memory';

const MemoryGame = () => {
	return (
		<StyledMemory>
			<div className='principal'>
				<h1>Ganate un Descuento!</h1>
				<Board />
			</div>
		</StyledMemory>
	);
}
export default MemoryGame;