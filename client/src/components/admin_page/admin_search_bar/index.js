import React, { useState } from 'react';
import strings from './strings';
import { FormSearchBar } from '../../styles/styled_search_bar';
import loupe from '../../../assets/img/loupe.svg';

const SearchBar = () => {
	const [inputText, setInputText] = useState('');

	const handleChange = (evt) => {
		setInputText(evt.target.value.trim());
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (inputText) {
			if (/:/.test(inputText)) {
				//value = inputText.match(/(?<=:)\w*/)[0].trim();
				//inputText = inputText.match(/\w*(?=:)/)[0];
				//if (/id/.test(inputText)) {

				//}
			} else {

			}
		}
	};

	return (
		<FormSearchBar onSubmit={handleSubmit}>
			<input onChange={handleChange} type="text" placeholder={strings["es"].placeholder} />
			<button>
				<img src={loupe} />
			</button>
		</FormSearchBar>
	)
};

export default SearchBar;
