import React, { useEffect, useState } from 'react';
import Mini from '../../product_card/mini';
import { Btn, FormStyled } from '../../styles/styled_global';
import { StyledSVG, StepOne } from '../../styles/styled_order_detail';
import PurchaseStep1 from '../../../assets/img/purchase-steps-1.svg';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Step1 = ({ cart }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const order = useSelector(state => state.ordersReducer.order.info)

	const [total, setTotal] = useState(0.00);
	const [subtotal, setSubtotal] = useState(0.00);
	const [discount, setDiscount] = useState(0);

	useEffect(() => {
		if (cart) {
			setSubtotal(cart.reduce((acc, product) => {
				acc = acc + (product.price * product.quantity)
				return acc;
			}, 0.00))
		}
	}, [cart])

	useEffect(() => {
		setTotal((subtotal - (subtotal * (discount / 100))).toFixed(2))
	}, [subtotal, discount])

	const handleClick = () => {
		history.push('/order/payment')
	}

	return (
		<>
			<h2>Tu carrito de compras:</h2>
			<StyledSVG src={PurchaseStep1} />
			<StepOne>
				<div>
					{cart.map(purchase => {
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
							<p>{total}</p>
						</div>
						<Btn className='btn-ppal' onClick={handleClick}>Siguiente</Btn>
					</aside>
				</div>
			</StepOne>
		</>
	)
}

export default Step1;