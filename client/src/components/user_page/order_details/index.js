import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/actions/orders_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import { StyledOrderDetail } from '../../styles/styled_order_detail';
import { useParams, useHistory, Link } from 'react-router-dom';

const UserOrderDetail = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();

	const orderInfo = useSelector(state => state.ordersReducer.order.info);
	const products = orderInfo?.products;

	useEffect(() => {
		dispatch(getOrder(id));
	}, [])

	return (
		<StyledOrderDetail>
			<h2>Orden nº {id}</h2>
			<div className='tables-container'>
				<div>
					<h3>Detalles de la orden</h3>
					<DataTable className='table-small'>
						<tbody>
							<tr>
								<td>Fecha:</td>
								<td>{orderInfo?.createdAt?.split('T')[0]}</td>
							</tr>
							<tr>
								<td>Precio Total:</td>
								<td>${orderInfo?.total_amount}</td>
							</tr>
							<tr>
								<td>Estado:</td>
								<td>{orderInfo?.state}</td>
							</tr>
							<tr>
								<td>Metodo de Pago:</td>
								<td>{orderInfo?.payment_method}</td>
							</tr>
							<tr>
								<td>Cantidad comprada:</td>
								<td>{orderInfo?.products?.length}</td>
							</tr>
						</tbody>
					</DataTable>
				</div>
				<div>
					<h3>Productos</h3>
					<DataTable>
						<thead>
							<tr>
								<td>Título</td>
								<td>Cantidad</td>
								<td>Precio Unitario</td>
								<td>Precio Total</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{products && products.map(prod => (
								<tr key={prod.id}>
									<td>{prod.name}</td>
									<td>{prod.orders_products.quantity}</td>
									<td>${prod.orders_products.unit_price}</td>
									<td>${prod.orders_products.quantity * prod.orders_products.unit_price}</td>
									<td><Link to={`/review/${prod.id}?game=${prod.name}`}><button>Dejar reseña del producto</button></Link></td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td>Total: ${orderInfo?.total_amount}</td>
								<td></td>
							</tr>
						</tfoot>
					</DataTable>
				</div>
			</div>
			<Btn className="btn btn-ppal" onClick={() => history.goBack()}><i className="fas fa-caret-left"></i> Volver</Btn>
		</StyledOrderDetail>
	)
}


export default UserOrderDetail;
