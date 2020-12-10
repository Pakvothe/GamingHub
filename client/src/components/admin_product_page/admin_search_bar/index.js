import React, {useState} from 'react';
import strings from './strings';
import {FormSearchBar} from '../../styles/styled_search_bar';
import loupe from '../../../assets/img/loupe.svg';

const SearchBar = ({propFunction}) => {
	const [inputText, setInputText] = useState('');

	const handleChange = (evt) => {
		setInputText(evt.target.value.trim());
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (inputText) {
			propFunction(inputText);
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

SearchBar.defaultProps = {
	propFunction: function (text) {
		alert(`Escribiste: ${text}`)
	}
};

export default SearchBar;
