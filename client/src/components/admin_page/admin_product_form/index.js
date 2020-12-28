import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct, getProduct } from '../../../redux/actions/products_actions'

import { Btn, CheckboxLabel, FormStyled } from '../../styles/styled_global'
import { Redirect, useParams } from 'react-router-dom';

import { storage } from "../../../firebase/";

const AdminProductForm = ({ categories }) => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const [imagesAsFile, setImagesAsFile] = useState([]);

	const product = useSelector((state) => state.productsReducer.productDetail.product);
	const isLoading = useSelector((state) => state.productsReducer.productDetail.isLoading);

	const [toAdmin, setToAdmin] = useState(false);

	const fileInput = useRef(null);

	let [input, setInput] = useState({
		name: '',
		description_es: '',
		description_en: '',
		price: 1,
		img: [],
		is_active: true,
		categories: {}
	});

	useEffect(() => {
		if (input.img.length === imagesAsFile.length && input.img.length > 0) {
			dispatch(addProduct(input));
		}
	}, [input.img]);

	useEffect(() => {
		if (id) dispatch(getProduct(id));
	}, []);


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
		ev.persist();
		if (ev.target.name === 'is_active') {
			setInput(prevState => ({
				...prevState,
				is_active: !prevState.is_active
			}))
		} else {
			setInput(prevState => ({
				...prevState,
				[ev.target.name]: ev.target.value
			}))
		}
	}

	const handleImagesAsFile = (e) => {
		const images = [...e.target.files];
		console.log(images)
		let invalidFile = images.some(img => !img.type.includes('image'));
		let invalidSize = images.some(img => img.size > 2097152);
		if (invalidFile) {
			alert('Only images are allowed');
			fileInput.current.value = '';
			return;
		}
		if (invalidSize) {
			alert('Only images below 2mb are allowed');
			fileInput.current.value = '';
			return;
		}
		setImagesAsFile(imageFile => (images));
	}

	const handleCategories = (ev) => {
		ev.persist();
		setInput(prevState => ({
			...prevState,
			categories: {
				...prevState.categories,
				[ev.target.value]: !prevState.categories[ev.target.value]
			}
		}))
	}
	const handleSubmit = (ev) => {
		ev.preventDefault();
		imagesAsFile.map(imageAsFile => {

			if (imageAsFile === '') {
				console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
			}
			const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
			uploadTask.on('state_changed',
				(snapShot) => { console.log(snapShot) },
				(err) => { console.log(err) },
				() => {
					storage.ref('images').child(imageAsFile.name).getDownloadURL()
						.then(fireBaseUrl => {
							setInput(prev => ({
								...prev,
								img: [...prev.img, fireBaseUrl]
							}))
						})
				})
			// id ? dispatch(editProduct(input)) : dispatch(addProduct(input));
			// setToAdmin(true);
		})
	}

	const opciones = id ? 'Editar producto' : 'Agregar producto';

	if (isLoading) return <h1>Loading...</h1>;
	if (toAdmin) return <Redirect to="/admin" />

	return (
		<>
			<h1 className="admin-h1">{opciones}</h1>
			<FormStyled method='post' onSubmit={handleSubmit} autoComplete="off">
				<div className="flex-form-container">
					<div>
						<label>
							<span>Nombre:</span>
							<input type='text' name='name' value={input.name} onChange={handleInput} required />
						</label>
						<label>
							<span>Descripción en español:</span>
							<textarea type='text' name='description_es' value={input.description_es} onChange={handleInput} required>
							</textarea>
						</label>
						<label>
							<span>Descripción en inglés:</span>
							<textarea type='text' name='description_en' value={input.description_en} onChange={handleInput} required>
							</textarea>
						</label>
					</div>
					<div>

						<label>
							<span>Precio:</span>
							<input type='number' step='0.01' name='price' value={input.price} onChange={handleInput} required />
						</label>
						<label>
							<span>Imagen:</span>
							<input ref={fileInput} type='file' name='img' onChange={handleImagesAsFile} multiple required />
						</label>
						<CheckboxLabel className="no-shadow check" checked={input.is_active}>
							<input
								type='checkbox'
								value={input.is_active}
								onChange={handleInput}
								name='is_active'
							/>
							<span className="no-shadow">Activo</span>
						</CheckboxLabel>
						<span className="form__categorias">Categorías:</span>
						<ul>
							{
								categories.map(cat => {
									return (
										<li key={cat.id}>
											<CheckboxLabel className="no-shadow check" checked={input.categories[cat.id]}>
												<input
													type='checkbox'
													name={cat.name_es}
													value={cat.id}
													onChange={handleCategories}
												/>
												<span className="no-shadow">{cat.name_es}</span>

											</CheckboxLabel>
										</li>
									)
								})
							}
						</ul>
						<Btn type='submit' className="btn-ppal">{opciones}</Btn>
					</div>
				</div>
			</FormStyled>
		</>

	);
};

export default AdminProductForm;