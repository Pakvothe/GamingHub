import React, { useState, useEffect } from 'react';
import strings from './strings';
import { FormSearchBar } from '../styles/styled_search_bar';
import loupe from '../../assets/img/loupe.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSearchProducts } from '../../redux/actions/products_actions';
import { resetCurrentPage } from '../../redux/actions/global_actions';
import commands from './commands';
import { useToasts } from 'react-toast-notifications';
import VideoPlayer from './VideoPlayer';

const SearchBar = () => {

	const [inputText, setInputText] = useState('');
	const [open, setOpen] = useState(false);
	const history = useHistory()
	const dispatch = useDispatch()
	const language = useSelector(state => state.globalReducer.language);
	const videoCode = useSelector(state => state.globalReducer.videoCode);
	const s = strings[language];
	const { addToast } = useToasts();

	const limitPerPage = 8;

	useEffect(() => {
		if (videoCode) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [videoCode])

	const handleChange = (ev) => {
		setInputText(ev.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		setInputText('');
		if (inputText.trim()[0] === '!') {
			commands(inputText, addToast, dispatch);
		} else {
			dispatch(getSearchProducts(inputText.trim(), { limit: limitPerPage }));
			dispatch(resetCurrentPage())
			history.push(`/search?query=${inputText.trim().toLowerCase()}`);
		}
	};

	return (
		<>
			<VideoPlayer open={open} videoCode={videoCode} />
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