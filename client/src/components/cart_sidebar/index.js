import React from 'react';
import { StyledSidebarCart, StyledCloseBtn } from '../styles/styled_sidebar_cart';
import { Btn } from '../styles/styled_global';
import BigCloseButton from '../../assets/img/close-transparent.svg';
import Mini from '../product_card/mini';
import strings from './strings';

const CartSideBar = ({ language, order, show, closeCallback }) => {
	let subtotal = 0;
	return (
		<StyledSidebarCart>
			<div className='modal' style={{ display: show ? 'block' : 'none' }}>
				<button title='Close' className='modal__close' onClick={closeCallback}>
					<StyledCloseBtn src={BigCloseButton} />
				</button>
				<h2 className='modal__title'>{strings[language].your_cart}</h2>
				{order.map(purchase => {
					subtotal = purchase.price + subtotal;
					return (
						<Mini productDetail={purchase} key={purchase.id} />
					)
				})}
				<hr />
				<div className='modal__subtotal'>
					<p>Subtotal:</p>
					<p>${subtotal}</p>
				</div>
				<Btn className='btn btn-ppal'>{strings[language].checkout}</Btn>
			</div>
		</StyledSidebarCart>
	);
};

CartSideBar.defaultProps = {
	order: [{
		id: 1,
		name: 'Final Fantasy VII Remake',
		price: 52.38,
		images: [
			{
				url: 'https://images.goodgam.es/WKE-gd3lr40/enlarge:1/plain/covers/17-final-fantasy-vii-remake-cover.jpg'
			}
		]
	},
	{
		id: 2,
		name: 'FIFA 21',
		price: 40.72,
		images: [
			{
				url: 'https://i.imgur.com/RKCvcWJ.jpg'
			}
		],
	}
	],
	show: false,
	closeCallback: false
}

export default CartSideBar;