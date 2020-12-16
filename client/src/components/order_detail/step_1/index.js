import React from 'react';
import Mini from '../../product_card/mini';
import { Btn, FormStyled } from '../../styles/styled_global';
import { StyledSVG, StepOne } from '../../styles/styled_order_detail';
import PurchaseStep1 from '../../../assets/img/purchase-steps-1.svg';

const Step1 = ({ order }) => {
	let subtotal = 0;
	let discount = 10;
	return (
		<>
			<h2>Tu carrito de compras:</h2>
			<StyledSVG src={PurchaseStep1} />
			<StepOne>
				<div>
					{order.map(purchase => {
						subtotal += purchase.price;
						return (
							<Mini productDetail={purchase} key={purchase.id} />
						)
					})}
				</div>
				<div>
					<aside>
						<h3>Detalles de tu compra</h3>
						<FormStyled>
							<label>
								<span>Cupón de descuento</span>
								<input type='text' />
							</label>
						</FormStyled>
						<div className='aside__subtotal'>
							<p>Subtotal:</p>
							<p>{subtotal.toFixed(2)}</p>
						</div>
						<div className='aside__discount'>
							<p>Descuento:</p>
							<p>{discount}%</p>
						</div>
						<hr />
						<div className='aside__total'>
							<p>Total:</p>
							<p>{(subtotal - (subtotal * (discount / 100))).toFixed(2)}</p>
						</div>
						<Btn className='btn-ppal'>Finalizar Compra</Btn>
					</aside>
				</div>
			</StepOne>
		</>
	)
}

Step1.defaultProps = {
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
	},
	{
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
		id: 1,
		name: 'Final Fantasy VII Remake',
		price: 52.38,
		images: [
			{
				url: 'https://images.goodgam.es/WKE-gd3lr40/enlarge:1/plain/covers/17-final-fantasy-vii-remake-cover.jpg'
			}
		]
	}

	],
	show: false,
	closeCallback: false
}


export default Step1;