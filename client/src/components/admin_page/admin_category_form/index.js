import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import strings from './strings';
import { FormStyled } from "../../styles/styled_global";
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
			<h1 className="admin-h1">Agregar categoría</h1>
			<FormStyled onSubmit={handleSubmit} method="POST" autoComplete="off">
				<label>
					<span>{strings[language].name_es}:</span>
					<input type='text' name='name_es' onChange={handleChange} required />
				</label>
				<label>
					<span>{strings[language].name_en}:</span>
					<input type='text' name='name_en' onChange={handleChange} required />
				</label>
				<Btn type='submit' className="btn-ppal">{strings[language].button}</Btn>
			</FormStyled>
		</>
	);
};

export default AdminCategoryForm;