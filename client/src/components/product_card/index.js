import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardStyled } from '../styles/styled_product_card';
import { Btn, StyledSVG } from '../styles/styled_global'
import { IMAGE_NOT_FOUND } from '../../utils/constants';
import strings from './strings';
import cart from '../../assets/img/cart.svg'

const ProductCard = ({ game, language }) => {
	return (
		<ProductCardStyled className="card">
			<Link to={`/products/${game.id}`} className="card__link">{strings[language].click_to_see}</Link>
			<div className="card__imgContainer">
				<img className="card__img" src={game.images[0] ? game.images[0].url : IMAGE_NOT_FOUND} alt={game.name} />
			</div>
			<div className="card__content">
				<h3 className="card__title">
					{
						game.name.length > 33 ? game.name.substring(0, 30) + '...' : (game.name)
					}
				</h3>
				<p className="card__price">$ {game.price}</p>
				{game.stock ? <Btn className="btn-ppal btn-img">{strings[language].add_to_cart} <StyledSVG src={cart} /> </Btn> :
					<span>Sin stock</span>}
			</div>
		</ProductCardStyled>)
};

export default ProductCard;