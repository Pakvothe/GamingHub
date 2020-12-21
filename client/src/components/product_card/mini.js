import React from 'react'
import { useDispatch } from 'react-redux';
import CloseButton from '../../assets/img/close-filled-purple.svg';
import { deleteItemCart } from '../../redux/actions/cart_actions';
import { MiniCard, StyledSVG } from '../styles/styled_global';
import { Link } from 'react-router-dom';

const Mini = ({ productDetail }) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(deleteItemCart(productDetail.id))
	}

	return (
		<MiniCard key={productDetail.id}>
			<div className='article__img'>
				<img src={productDetail.images[0].url} />
			</div>
			<div className='article__info'>
				<Link to={`/products/${productDetail.id}`}>
					<p className='article__name'>{productDetail.name}</p>
				</Link>
				<p>${productDetail.price}</p>
				<p>x {productDetail.quantity} U</p>
			</div>
			<button className='delete__product' onClick={handleClick}><StyledSVG src={CloseButton} /></button>
		</MiniCard>
	)
}

export default Mini;