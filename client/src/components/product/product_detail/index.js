import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from "react-star-ratings";

import Reviews from '../../reviews';
import { Btn, Badge, QuantityButton } from '../../styles/styled_global';
import { GameDetail, StyledSVG } from '../../styles/styled_product';
import Fade from 'react-reveal/Fade';

import cart from '../../../assets/img/cart.svg'
import joystick from '../../../assets/img/joystick.svg'
import { IMAGE_NOT_FOUND } from '../../../utils/constants';

import strings from './strings.js';
import { addItemCart, editStock } from '../../../redux/actions/cart_actions';
import { useToasts } from 'react-toast-notifications';
import Carousel from '../../carousel';

import mercadoPagoImg from '../../../assets/img/mercadopago.webp'

export const ProductDetail = ({ product }) => {
	const dispatch = useDispatch();

	const [quantity, setQuantity] = useState(1);
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const stock = useSelector(state => state.cartReducer.cart.stock);
	const theme = useSelector(state => state.globalReducer.theme);
	const { addToast } = useToasts();

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
		addToast(`${product.name} x${quantity} ${s.toast}`, { appearance: 'success' })
		setQuantity(1);
	}

	return (
		<>
			<GameDetail>
				<div className="game__img">
					<Carousel product={product} />
				</div>

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
								<span>{s.amount}</span>
								<QuantityButton onClick={() => handleQuantityChange(-1)}>-</QuantityButton>
								<span className="game__quantityvalue quantitytext">{quantity}</span>
								<QuantityButton onClick={() => handleQuantityChange(1)}>+</QuantityButton>
							</div>
							<p className="game__stock">Stock: {stock[product.id] >= 0 ? stock[product.id] : product.stock}</p>
						</>
					}
					<div className="game__purchase-container">
						{(!product.stock || stock[product.id] === 0) && <Badge className="error small">Sin stock</Badge>}
						{!!product.stock && stock[product.id] !== 0 &&
							<div className="game__buttons">
								<Btn className="btn-ppal btn-img">
									{s.buy_now}
									<StyledSVG src={joystick} />
								</Btn>
								<Btn className="btn-sec btn-img" onClick={handleClick}>
									{s.add_to_cart}
									<StyledSVG src={cart} />
								</Btn>
							</div>

						}
						<img className="game__payment-methods-icons" src={mercadoPagoImg} alt="Medios de Pago" />
					</div>
				</div>
			</GameDetail>
			<Reviews id={product.id} />
		</>
	)
}
