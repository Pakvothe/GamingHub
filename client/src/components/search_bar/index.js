import React, { useState } from 'react';
import strings from './strings';
import { FormSearchBar } from '../styles/styled_search_bar';
import loupe from '../../assets/img/loupe.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSearchProducts } from '../../redux/actions/products_actions';
import { resetCurrentPage } from '../../redux/actions/global_actions';
import commands from './commands';
import { useToasts } from 'react-toast-notifications';
import Modal from 'react-modal';
import Surprise from './Surprise';

const SearchBar = () => {

	const [inputText, setInputText] = useState('');
	const [open, setOpen] = useState(false);
	const history = useHistory()
	const dispatch = useDispatch()
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const { addToast } = useToasts();

	const limitPerPage = 8;

	const handleChange = (ev) => {
		setInputText(ev.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		setInputText('');
		if (inputText.trim()[0] === '!') {
			commands(inputText, addToast, setOpen);
		} else {
			dispatch(getSearchProducts(inputText.trim(), { limit: limitPerPage }));
			dispatch(resetCurrentPage())
			history.push(`/search?query=${inputText.trim().toLowerCase()}`);
		}
	};
	return (
		<>
			<Surprise open={open} setOpen={setOpen} />
			<FormSearchBar onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" placeholder={s.placeholder} value={inputText} />
				<button type="submit">
					<img src={loupe} alt="" />
				</button>
			</FormSearchBar>
		</>
	)
};

export default SearchBar;