import React, { useState } from 'react';
import { GameDetail } from '../../styles/styled_product';
import StarRatings from "react-star-ratings";
import { CLR_PRIMARY } from '../../../utils/constants.js';
import { useSelector } from 'react-redux';
import { IMAGE_NOT_FOUND } from '../../../utils/constants';

export const ProductDetail = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const language = useSelector(state => state.globalReducer.language);
	const [currentImg, setCurrentImg] = useState(0);

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
		if (newValue <= product.stock && newValue >= 1 && newValue <= 99) {
			setQuantity((prev) => prev + amount);
		}
	};

	return (
		<GameDetail>
			<div className="game__img">
				<img src={product.images[currentImg] ? product.images[currentImg].url
					: IMAGE_NOT_FOUND} onClick={handleImage} alt={`${product.name}`} />
			</div>
			<div className="game__info">
				<div className="">
					<ul className="game__categories">
						{product.categories.map(category => (
							<li key={category.id} className="game__category">{category[`name_${language}`].toUpperCase()}</li>
						))}
					</ul>
					<h1 className="game__title">{product.name}</h1>
					<div className="game__container-price-score">
						<span className="game__price">${product.price}</span>
						<span className="game__star-container">
							<StarRatings
								rating={product.score}
								starRatedColor={CLR_PRIMARY}
								starDimension="30px"
								starSpacing="3px"
							/>
						</span>
					</div>
				</div>
				<p>{product[`description_${language}`]}</p>
				<div className="game__buy-stock-info">
					<span style={{ marginRight: "10px" }}>Cantidad a comprar</span>
					<button className="game__quantitybutton" onClick={() => handleQuantityChange(-1)}>-</button>
					<span className="game__quantityvalue">{quantity} </span>
					<button className="game__quantitybutton" onClick={() => handleQuantityChange(1)}>+</button>
					<span style={{ marginLeft: "10px" }}>{quantity > 1 ? "unidades" : "unidad"}</span>
					<p>Stock: {product.stock}</p>
				</div>
				<div className="game__purchase-container">
					<div className="game__buy-buttons-container">
						<button className="game__buy-now-button">Comprar ahora</button>
						<button className="game__add-to-cart-button">Agregar al carrito</button>
					</div>
					<img className="game__payment-methods-icons" src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0033/3717/Que_tarjetas_acepta_Mercado_Pago.jpg?1552322626" alt="Medios de Pago" />
				</div>
			</div>
		</GameDetail>
	)
}
