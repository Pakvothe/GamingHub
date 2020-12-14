import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct, getProduct } from '../../../redux/actions/products_actions'

import AdminProductFormStyled from '../../styles/styled_admin_product_form'
import { Btn } from '../../styles/styled_global'
import { Redirect, useParams } from 'react-router-dom';
import { editProduct } from './../../../redux/actions/products_actions';

const AdminProductForm = ({ categories }) => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (id) dispatch(getProduct(id));
	}, []);

	const product = useSelector((state) => state.productsReducer.productDetail.product);
	const isLoading = useSelector((state) => state.productsReducer.productDetail.isLoading);

	let [input, setInput] = useState({
		name: '',
		description_es: '',
		description_en: '',
		price: 1,
		img: '',
		is_active: true,
		categories: {}
	});

	const [toAdmin, setToAdmin] = useState(false);

	useEffect(() => {
		if (id && Object.keys(product).length) {

			const newCategories = product.categories.reduce((acc, cat) => {
				acc[cat.id] = true; return acc;
			}, {});

			setInput({
				id: product.id,
				name: product.name,
				description_es: product.description_es,
				description_en: product.description_en,
				price: product.price,
				img: product.images[0].url,
				is_active: product.is_active,
				categories: newCategories
			})

		}
	}, [product]);

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
		id ? dispatch(editProduct(input)) : dispatch(addProduct(input));
		setToAdmin(true);
	}

	const opciones = id ? 'Editar producto' : 'Agregar producto';

	if (isLoading) return <h1>Loading...</h1>;
	if (toAdmin) return <Redirect to="/admin" />

	return (
		<>
			<h1 className="admin-h1">{opciones}</h1>
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
						<input
							type='checkbox'
							value={input.is_active}
							onChange={handleInput}
							name='is_active'
						/>
				Activo
			</label>
					<span className="form__categorias">Categorías:</span>
					<ul>
						{
							categories.map(cat => {
								return (
									<li key={cat.id}>
										<label>
											<input checked={input.categories[cat.id] ? 'true' : ''}
												type='checkbox'
												name={cat.name_es}
												value={cat.id}
												onChange={handleCategories}
											/>
											{cat.name_es}
										</label>
									</li>
								)
							})
						}
					</ul>
					<Btn type='submit' className="btn-ppal">{opciones}</Btn>
				</div>
			</AdminProductFormStyled>
		</>

	);
};

export default AdminProductForm;