import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CloseButton from '../../assets/img/close-filled-purple.svg';
import { deleteItemCart, deleteItemStock } from '../../redux/actions/cart_actions';
import { MiniCard, StyledSVG } from '../styles/styled_global';
import { Link } from 'react-router-dom';
import { toggleCart } from '../../redux/actions/global_actions';
import Fade from 'react-reveal/Fade';

const Mini = ({ productDetail }) => {
	const dispatch = useDispatch()
	const [wea, setWea] = useState(true);


	const handleClick = () => {
		setWea(false);
		setTimeout(() => {
			dispatch(deleteItemCart(productDetail.id));
			dispatch(deleteItemStock(productDetail.id));

		}, 100)
	}

	return (
		<Fade duration={300} when={wea}>
			<MiniCard key={productDetail.id}>
				<div className='article__img'>
					<img src={productDetail.images[0].url} />
				</div>
				<div className='article__info'>
					<Link to={`/products/${productDetail.id}`} onClick={() => dispatch(toggleCart())}>
						<p className='article__name'>{productDetail.name}</p>
					</Link>
					<p>${productDetail.price}</p>
					<p>x {productDetail.quantity} U</p>
				</div>
				<button className='delete__product' onClick={handleClick}><StyledSVG src={CloseButton} /></button>
			</MiniCard>
		</Fade>
	)
}

export default Mini;