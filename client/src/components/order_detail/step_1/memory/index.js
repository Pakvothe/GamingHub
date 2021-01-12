import React from 'react';
import Board from "./Board";
import { useSelector } from 'react-redux';
import { StyledMemory } from '../../../styles/styled_memory';
import strings from './strings';

const MemoryGame = () => {
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	return (
		<StyledMemory>
			<div className='principal'>
				<h1>{s.title}</h1>
				<Board />
			</div>
		</StyledMemory>
	);
}
export default MemoryGame;