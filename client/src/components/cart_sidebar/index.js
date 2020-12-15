import React from 'react';
import { StyledSidebarCart, StyledSVG, StyledCloseBtn } from '../styles/styled_sidebar_cart';
import { Btn } from '../styles/styled_global';
import CloseButton from '../../assets/img/close-filled-purple.svg';
import BigCloseButton from '../../assets/img/close-transparent.svg';

const CartSideBar = ({ order, show, closeCallback }) => {
	let subtotal = 0;
	return (
		<StyledSidebarCart>
			<div className='modal' style={{ display: show ? 'block' : 'none' }}>
				<button title='Close' className='modal__close' onClick={closeCallback}>
					<StyledCloseBtn src={BigCloseButton} />
				</button>
				<h2 className='modal__title'>Tu carrito de compras:</h2>
				{order.map(purchase => {
					subtotal = purchase.price + subtotal;
					return (
						<article key={purchase.id}>
							<div className='article__img'>
								<img src={purchase.images[0].url} />
							</div>
							<div className='article__info'>
								<p className='article__name'>{purchase.name}</p>
								<p>${purchase.price}</p>
							</div>
							<button className='delete__product'><StyledSVG src={CloseButton} /></button>
						</article>
					)
				})}
				<hr />
				<div className='modal__subtotal'>
					<p>Subtotal:</p>
					<p>${subtotal}</p>
				</div>
				<Btn className='btn-ppal'>Finalizar Compra</Btn>
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