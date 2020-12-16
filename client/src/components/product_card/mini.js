import React from 'react'
import CloseButton from '../../assets/img/close-filled-purple.svg';
import { MiniCard, StyledSVG } from '../styles/styled_global';

const Mini = ({ productDetail }) => {
	return (
		<MiniCard key={productDetail.id}>
			<div className='article__img'>
				<img src={productDetail.images[0].url} />
			</div>
			<div className='article__info'>
				<p className='article__name'>{productDetail.name}</p>
				<p>${productDetail.price}</p>
			</div>
			<button className='delete__product'><StyledSVG src={CloseButton} /></button>
		</MiniCard>
	)
}

export default Mini;