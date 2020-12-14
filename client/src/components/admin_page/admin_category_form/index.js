import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import strings from './strings';
import { CategoryFormStyled } from "../../styles/styled_admin_category_form";
import { addCategory } from '../../../redux/actions/categories_actions';
import { Btn } from '../../styles/styled_global'

const AdminCategoryForm = () => {
	const [input, setInput] = useState({
		name_es: '',
		name_en: ''
	})

	const language = useSelector(state => state.globalReducer.language)
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addCategory(input))
	}
	return (
		<>
			<h1 className="admin-h1">Agregar categoría:</h1>
			<CategoryFormStyled onSubmit={handleSubmit} method="POST" autoComplete="off">
				<div>
					<label>
						{strings[language].name_es}:
					<input type='text' name='name_es' onChange={handleChange} required />
					</label>
					<label>
						{strings[language].name_en}:
					<input type='text' name='name_en' onChange={handleChange} required />
					</label>
				</div>
				<Btn type='submit' className="btn-ppal">{strings[language].button}</Btn>
			</CategoryFormStyled>
		</>
	);
};

export default AdminCategoryForm;