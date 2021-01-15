import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import strings from './strings';
import { FormStyled } from "../../../styles/styled_global";
import { Btn } from '../../../styles/styled_global'
import { useParams, Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { getProduct, addDiscount } from './../../../../redux/actions/products_actions';
import Swal from 'sweetalert2';
import { storage } from '../../../../firebase';
import { v4 as uuidv4 } from 'uuid';

const AdminProductOfferForm = () => {
	const { id } = useParams();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const product = useSelector(state => state.productsReducer.productDetail.product);
	const dispatch = useDispatch();
	const { addToast } = useToasts();

	const [toAdmin, setToAdmin] = useState(false);

	useEffect(() => {
		dispatch(getProduct(id))
	}, [dispatch, id])

	const [input, setInput] = useState({
		price: '',
		real_price: ''
	})

	const [imageAsFile, setImageAsFile] = useState(false);
	const fileInput = useRef(null);

	useEffect(() => {
		if (Object.keys(product).length > 0) {
			setInput({
				price: product.real_price ? product.price : 0,
				real_price: product.real_price || product.price
			});
		}
	}, [product])

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const handleImageAsFile = (e) => {
		if (e.target.files.length === 0) return;
		const image = e.target.files[0];
		if (!image.type.includes('image')) {
			Swal.fire({
				heightAuto: false,
				title: s.onlyImages,
				icon: 'warning',
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Ok',
			})
			fileInput.current.value = '';
			return;
		}
		if (image.size > 2097152) {
			Swal.fire({
				heightAuto: false,
				title: s.imageSize,
				icon: 'warning',
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Ok',
			})
			fileInput.current.value = '';
			return;
		}
		setImageAsFile(image);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let randomID = uuidv4();
		let bannerImage = product.banner_image;
		if (imageAsFile) {
			const uploadTask = storage.ref(`/bannerImages/${randomID}`).put(imageAsFile)
			uploadTask.on('state_changed',
				(snapShot) => { },
				(err) => { alert(s.imageError) },
				() => {
					storage.ref('bannerImages').child(randomID).getDownloadURL()
						.then(fireBaseUrl => {
							dispatch(addDiscount({
								body: {
									...input,
									banner_image: fireBaseUrl
								},
								id
							}))
								.then(status => {
									switch (status) {
										case 200:
											if (bannerImage) storage.refFromURL(bannerImage).delete();
											addToast(product.real_price ? s.toastOfferEdited : s.toastOfferAdded, { appearance: 'success' })
											setToAdmin(true);
											break;
										case 404:
											storage.ref('bannerImages').child(randomID).delete();
											return addToast(s.toastNotFound, { appearance: 'error' })
										case 500:
										default:
											storage.ref('bannerImages').child(randomID).delete();
											return addToast(s.toastServerError, { appearance: 'error' })
									}
								})
						});
				})
		} else {
			dispatch(addDiscount({ body: { ...input, banner_image: product.banner_image }, id }))
				.then(status => {
					switch (status) {
						case 200:
							addToast(product.real_price ? s.toastOfferEdited : s.toastOfferAdded, { appearance: 'success' })
							setToAdmin(true);
							break;
						case 404:
							storage.ref('bannerImages').child(randomID).delete();
							return addToast(s.toastNotFound, { appearance: 'error' })
						case 500:
						default:
							storage.ref('bannerImages').child(randomID).delete();
							return addToast(s.toastServerError, { appearance: 'error' })
					}
				})
		}
	}

	if (toAdmin) return <Redirect to="/admin/product/offer/list" />
	return (
		<>
			<h1 className="admin-h1">{product.real_price ? s.buttonEdit : s.buttonAdd}</h1>
			<FormStyled onSubmit={handleSubmit} method="POST" autoComplete="off">
				<label>
					<span>{s.price}:</span>
					<input type='number' name='price' value={input.price} onChange={handleChange} min='1' required />
				</label>
				<label>
					<span>{s.real_price}:</span>
					<input type='number' name='real_price' value={input.real_price} required disabled />
				</label>
				<label>
					<span>{s.banner_image}</span>
					<input ref={fileInput} type='file' name='banner_img' onChange={handleImageAsFile} required={!product.real_price} />
				</label>
				<div className='image__container container__banner'>
					<p className="thumbnail__preview">{s.preview}</p>
					{product.banner_image &&
						<div className='image_thumbnail thumbnail__banner'>
							<img alt='banner' src={product.banner_image} width='100px' key={product.id} />
						</div>
					}
				</div>
				<Btn type='submit' className="btn-ppal">{product.real_price ? s.buttonEdit : s.buttonAdd}</Btn>
			</FormStyled>
		</>
	);
};

export default AdminProductOfferForm;