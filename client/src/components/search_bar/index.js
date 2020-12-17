import React, { useState } from 'react';
import strings from './strings';
import { FormSearchBar } from '../styles/styled_search_bar';
import loupe from '../../assets/img/loupe.svg';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { getSearchProducts } from '../../redux/actions/products_actions';


const SearchBar = ({ propFunction, language }) => {

	const [inputText, setInputText] = useState('');
	const history = useHistory()
	const dispatch = useDispatch()

	const handleChange = (ev) => {
		setInputText(ev.target.value.trim());
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		setInputText('');
		dispatch(getSearchProducts(inputText)) // final
		history.push('/search')
	};
	return (
		<FormSearchBar onSubmit={handleSubmit}>
			<input onChange={handleChange} type="text" placeholder={strings[language].placeholder} value={inputText} />
			<button type="submit">
				<img src={loupe} alt="" />
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