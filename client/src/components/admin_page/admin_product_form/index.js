import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../../../redux/actions/products_actions'

import AdminProductFormStyled from '../../styles/styled_admin_product_form'
import { Btn } from '../../styles/styled_global'


const AdminProductForm = ({ categories }) => {

	const dispatch = useDispatch();

	let [input, setInput] = useState({
		name: '',
		description_es: '',
		description_en: '',
		price: 1,
		img: '',
		is_active: true,
		categories: {}
	})

	const handleInput = (ev) => {
		setInput({
			...input,
			[ev.target.name]: ev.target.value
		})
	}

	const handleCategories = (event) => {
		event.persist();
		setInput((prevState) => ({
			...prevState,
			categories: {
				...prevState.categories,
				[event.target.value]: !prevState.categories[event.target.value]
			}
		}))
	}
	const handleSubmit = (ev) => {
		ev.preventDefault();
		dispatch(addProduct(input))
	}

	return (
		<>
			<h1 className="admin-h1">Agregar producto:</h1>
			<AdminProductFormStyled method='post' onSubmit={handleSubmit} autoComplete="off">
				<div>
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
				</div>
				<div>

					<label>
						Precio:
				<input type='number' step='0.01' name='price' value={input.price} onChange={handleInput} required />
					</label>
					<label>
						Imagen:
				<input type='url' placeholder="http://..." name='img' value={input.img} onChange={handleInput} required />
					</label>
					<label>
						<input type='checkbox' value={input.is_active} onChange={handleInput} name='is_active' />
				Activo
			</label>
					<span className="form__categorias">Categorías:</span>
					<ul>
						{
							categories.map(cat => {
								return (
									<li key={cat.id}>
										<label>
											<input type='checkbox' name={cat.name_es} value={cat.id} onChange={handleCategories} />
											{cat.name_es}
										</label>
									</li>
								)
							})
						}
					</ul>
					<Btn type='submit' className="btn-ppal">Agregar producto</Btn>
				</div>
			</AdminProductFormStyled>
		</>

	);
};

export default AdminProductForm;