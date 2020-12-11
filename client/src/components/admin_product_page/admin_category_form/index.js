import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import strings from './strings';
import { CategoryFormStyled } from "../../styles/styled_category_form";

const AdminCategoryForm = () => {
	const [input, setInput] = useState({
		name_es: '',
		name_en: ''
	})

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
		<CategoryFormStyled onSubmit={handleSubmit} method="POST">
			<div>
				<label>
					{strings["es"].name_en}:
				<input type='text' name='name_es' onChange={handleChange} required />
				</label>
				<label>
					{strings["es"].name_es}:
				<input type='text' name='name_en' onChange={handleChange} required />
				</label>
			</div>
			<button type="submit">Enviar</button>
		</CategoryFormStyled>
	);
};

export default AdminCategoryForm;