import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import strings from './strings';
import { CategoryFormStyled } from "../../styles/styled_admin_category_form";

const AdminCategoryForm = () => {
	const [input, setInput] = useState({
		name_es: '',
		name_en: ''
	})

	const language = useSelector(state => state.globalReducer.language)
	// const dispatch = useDispatch();

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(input);
		// dispatch(addCategory(input))
	}
	return (
		<CategoryFormStyled onSubmit={handleSubmit} method="POST" autoComplete="off">
			<div>
				<label>
					{strings[language].name_en}:
					<input type='text' name='name_es' onChange={handleChange} required />
				</label>
				<label>
					{strings[language].name_es}:
					<input type='text' name='name_en' onChange={handleChange} required />
				</label>
			</div>
			<button type="submit">{strings[language].button}</button>
		</CategoryFormStyled>
	);
};

export default AdminCategoryForm;