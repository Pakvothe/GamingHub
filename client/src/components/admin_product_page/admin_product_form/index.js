import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/actions/products_actions'
import AdminProductFormStyled from '../../styles/styled_admin_product_form'

const AdminProductForm = ({ categories }) => {
	let [input, setInput] = useState({
		name: '',
		description_es: '',
		description_en: '',
		price: 1,
		img: '',
		is_active: true,
		categories: categories.map(cat => {
			cat.checked = false
			return cat
		})
	})
	const dispatch = useDispatch();

	const handleInput = (ev) => {
		setInput({
			...input,
			[ev.target.name]: ev.target.value
		})
	}

	const handleCategories = (ev) => {
		input.categories.map(cat => {
			if (cat.name_es === ev.target.name) {
				cat.checked = !cat.checked
			}
			return cat
		})
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		dispatch(addProduct(input))
	}

	return (
		<AdminProductFormStyled method='post' onSubmit={handleSubmit} autoComplete="off">
			<label>
				Nombre:
				<input type='text' name='name' value={input.name} onChange={handleInput} required />
			</label>
			<label>
				Descripción en español:
				<textarea type='text' name='description_es' value={input.description_es} onChange={handleInput} required>
				</textarea>
			</label>
			<label>
				Descripción en inglés:
				<textarea type='text' name='description_en' value={input.description_en} onChange={handleInput} required>
				</textarea>
			</label>
			<label>
				Precio:
				<input type='number' step='0.01' name='price' value={input.price} onChange={handleInput} required />
			</label>
			<label>
				Imagen:
				<input type='url' name='img' value={input.img} onChange={handleInput} required />
			</label>
			<label>
				<input type='checkbox' value={input.is_active} onChange={handleInput} name='is_active' />
				Activo
			</label>
			<span class="form__categorias">Categorías:</span>
			<ul>
				{
					categories.map((cat, i) => {
						return (
							<li key={cat.name_es}>
								<label>
									<input type='checkbox' name={cat.name_es} value={i} onChange={handleCategories} />
									{cat.name_es}
								</label>
							</li>
						)
					})
				}
			</ul>
			<button type='submit'>Agregar producto</button>
		</AdminProductFormStyled>
	);
};

AdminProductForm.defaultProps = {
	categories: [
		{
			name_en: 'fps',
			name_es: 'fps',
		},
		{
			name_en: 'action',
			name_es: 'accion',
		},
		{
			name_en: 'simulation',
			name_es: 'simulacion',
		},
		{
			name_en: 'sports',
			name_es: 'deportes',
		},
		{
			name_en: 'rpg',
			name_es: 'rpg',
		},
		{
			name_en: 'strategy',
			name_es: 'estrategia',
		},
		{
			name_en: 'platformer',
			name_es: 'plataforma',
		},
		{
			name_en: 'adventure',
			name_es: 'aventura',
		},
		{
			name_en: 'arcade',
			name_es: 'arcade',
		},
		{
			name_en: 'racing',
			name_es: 'carreras',
		},
	]
}

export default AdminProductForm;