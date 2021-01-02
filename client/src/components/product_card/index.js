import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardStyled } from '../styles/styled_product_card';
import { Btn, StyledSVG, Badge } from '../styles/styled_global'
import { IMAGE_NOT_FOUND } from '../../utils/constants';
import strings from './strings';
import cart from '../../assets/img/cart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addItemCart, editStock } from '../../redux/actions/cart_actions';
import { toggleCart } from '../../redux/actions/global_actions';
import Fade from 'react-reveal/Fade';
import { useToasts } from 'react-toast-notifications';

const ProductCard = ({ game, language }) => {

	const dispatch = useDispatch();
	const stock = useSelector(state => state.cartReducer.cart.stock);
	const { addToast } = useToasts();
	const handleClick = () => {
		if (!stock[game.id] && stock[game.id] !== 0) {
			let gameToDispatch = { ...game }
			gameToDispatch.quantity = 1;
			dispatch(addItemCart(gameToDispatch));
			let payload = {
				id: game.id,
				quantity: 1,
				stock: game.stock
			}
			dispatch(editStock(payload));
			addToast(game.name + ' added to cart', { appearance: 'success' })

		} else {
			dispatch(toggleCart())
		}
	};
	return (
		<Fade>
			<ProductCardStyled className="card">
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
					{game.stock ?
						<Btn className="btn-ppal btn-img" onClick={handleClick}>
							{stock[game.id] >= 0 ? strings[language].already_in_cart : strings[language].add_to_cart}
							<StyledSVG src={cart} />
						</Btn> : <Badge className="card__noStock error">Sin stock</Badge>}
				</div>
				<Link to={`/products/${game.id}`} className="card__link">{strings[language].click_to_see}</Link>
			</ProductCardStyled>
		</Fade>
	)
};

export default ProductCard;