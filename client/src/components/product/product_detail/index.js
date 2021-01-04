import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from "react-star-ratings";

import Reviews from '../../reviews';
import { Btn, Badge } from '../../styles/styled_global';
import { GameDetail, StyledSVG } from '../../styles/styled_product';
import Fade from 'react-reveal/Fade';

import cart from '../../../assets/img/cart.svg'
import joystick from '../../../assets/img/joystick.svg'
import { IMAGE_NOT_FOUND } from '../../../utils/constants';

import strings from './strings.js'
import { addItemCart, editStock } from '../../../redux/actions/cart_actions';
import { useToasts } from 'react-toast-notifications';

export const ProductDetail = ({ product }) => {
	const dispatch = useDispatch();

	const [quantity, setQuantity] = useState(1);
	const language = useSelector(state => state.globalReducer.language);
	const stock = useSelector(state => state.cartReducer.cart.stock);
	const [currentImg, setCurrentImg] = useState(0);
	const theme = useSelector(state => state.globalReducer.theme);
	const { addToast } = useToasts();

	function handleImage() {
		if (currentImg >= product.images.length - 1) {
			setCurrentImg(0);
		} else {
			setCurrentImg(prev => prev + 1)
		}
	};

	function handleQuantityChange(amount) {
		// Amount equals +1 or -1 
		const newValue = quantity + amount;
		const conditionalStock = stock[product.id] || product.stock;
		if (newValue <= conditionalStock && newValue >= 1 && newValue <= 99) {
			setQuantity((prev) => prev + amount);
		}
	};

	const handleClick = () => {
		let productToDipatch = { ...product };
		productToDipatch.quantity = quantity;
		dispatch(addItemCart(productToDipatch));
		let payload = {
			id: product.id,
			quantity: quantity,
			stock: product.stock
		};
		dispatch(editStock(payload));
		addToast(`${product.name} added to cart x${quantity}`, { appearance: 'success' })
		setQuantity(1);
	}

	return (
		<>
			<GameDetail>
				<Fade duration={700}>
					<div className="game__img">
						<img src={product.images[currentImg] ? product.images[currentImg].url
							: IMAGE_NOT_FOUND} onClick={handleImage} alt={`${product.name}`} />
					</div>
				</Fade>


				<div className="game__info">
					<h1 className="game__title">{product.name}</h1>
					<ul className="game__categories">
						{product.categories.map(category => (
							<li key={category.id} className="game__category">{category[`name_${language}`].toUpperCase()}</li>
						))}
					</ul>
					<div className="game__container-price-score">
						<p className="game__price">${product.price}</p>
						<span className="game__star-container">
							<StarRatings className="ratingStars"
								rating={product.score}
								starRatedColor={theme === 'light' ? 'var(--clr-dark)' : 'var(--clr-primary)'}
								starDimension="1.5em"
								starSpacing="0"
							/>
						</span>
					</div>
					<p className="game__description">{product[`description_${language}`]}</p>
					{!!product.stock && stock[product.id] !== 0 &&
						<>
							<div className="game__quantity">
								<span>{strings[language].amount}</span>
								<button className="game__quantitybutton" onClick={() => handleQuantityChange(-1)}>-</button>
								<span className="game__quantityvalue">{quantity}</span>
								<button className="game__quantitybutton" onClick={() => handleQuantityChange(1)}>+</button>
							</div>
							<p className="game__stock">Stock: {stock[product.id] >= 0 ? stock[product.id] : product.stock}</p>
						</>
					}
					<div className="game__purchase-container">
						{(!product.stock || stock[product.id] === 0) && <Badge className="error small">Sin stock</Badge>}
						{!!product.stock && stock[product.id] !== 0 &&
							<div className="game__buttons">
								<Btn className="btn-ppal btn-img">
									{strings[language].buy_now}
									<StyledSVG src={joystick} />
								</Btn>
								<Btn className="btn-sec btn-img" onClick={handleClick}>
									{strings[language].add_to_cart}
									<StyledSVG src={cart} />
								</Btn>
							</div>

						}
						<img className="game__payment-methods-icons" src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0033/3717/Que_tarjetas_acepta_Mercado_Pago.jpg?1552322626" alt="Medios de Pago" />
					</div>
				</div>
			</GameDetail>
			<Reviews />
		</>
	)
}
