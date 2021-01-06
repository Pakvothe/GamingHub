import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CloseButton from '../../assets/img/close-filled-purple.svg';
import { addItemCart, deleteItemCart, deleteItemStock, editStock } from '../../redux/actions/cart_actions';
import { MiniCard, QuantityButton, StyledSVG } from '../styles/styled_global';
import { Link } from 'react-router-dom';
import { toggleCart } from '../../redux/actions/global_actions';
import Fade from 'react-reveal/Fade';
import strings from './strings';

const Mini = ({ productDetail }) => {
	const dispatch = useDispatch()
	const [effect, setEffect] = useState(true);
	const language = useSelector(state => state.globalReducer.language);

	const handleClick = () => {
		setEffect(false);
		setTimeout(() => {
			dispatch(deleteItemCart(productDetail.id));
			dispatch(deleteItemStock(productDetail.id));

		}, 100)
	}

	const handleQuantityChange = (amount) => {

		const newValue = productDetail.quantity + amount;

		if (newValue <= productDetail.stock && newValue >= 1 && newValue <= 99) {
			let productToDispatch = { ...productDetail };
			productToDispatch.quantity = amount;
			dispatch(addItemCart(productToDispatch));
			let payload = {
				id: productDetail.id,
				quantity: amount,
				stock: productDetail.stock
			};
			dispatch(editStock(payload));
		}
	}

	return (
		<Fade duration={300} when={effect}>
			<MiniCard key={productDetail.id}>
				<div className='article__img'>
					<img src={productDetail.images[0].url} />
				</div>
				<div className='article__info'>
					<Link to={`/products/${productDetail.id}`} onClick={() => dispatch(toggleCart())}>
						<p className='article__name'>{productDetail.name}</p>
					</Link>
					<p>${productDetail.price}</p>
					<div className="article__quantitybuttons">
						<QuantityButton className='quantitybutton-small' onClick={() => handleQuantityChange(-1)}>-</QuantityButton>
						<span className='quantitytext'> {productDetail.quantity} </span>
						<span>{strings[language].units} </span>
						<QuantityButton className='quantitybutton-small' onClick={() => handleQuantityChange(1)}>+</QuantityButton>
					</div>
				</div>
				<button className='delete__product' onClick={handleClick}><StyledSVG src={CloseButton} /></button>
			</MiniCard>
		</Fade>
	)
}

export default Mini;