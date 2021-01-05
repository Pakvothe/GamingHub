import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/actions/orders_actions';
import { DataTable } from '../../styles/styled_global';
import { StyledOrderDetail } from '../../styles/styled_order_detail';
import { useParams } from 'react-router-dom';

const AdminOrderDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const orderInfo = useSelector(state => state.ordersReducer.order.info);
	const products = orderInfo?.products;

	useEffect(() => {
		dispatch(getOrder(id));
	}, [])

	return (
		<StyledOrderDetail>
			<h1 className='admin-h1'>Orden nº {id}</h1>
			<div className='tables-container'>
				<div>
					<h2>Detalles de la orden</h2>
					<DataTable className='table-small'>
						<tbody>
							<tr>
								<td>Realizada por:</td>
								<td>{orderInfo?.email}</td>
							</tr>
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
					<h2>Productos</h2>
					<DataTable>
						<thead>
							<tr>
								<td /* onClick={handleSortTitle} */>Título</td>
								<td>Cantidad</td>
								<td>Precio Unitario</td>
								<td>Precio Total</td>
							</tr>
						</thead>
						<tbody>
							{products && products.map(prod => (
								<tr key={prod.id}>
									<td>{prod.name}</td>
									<td>{prod.orders_products.quantity}</td>
									<td>${prod.orders_products.unit_price}</td>
									<td>${prod.orders_products.quantity * prod.orders_products.unit_price}</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td>-</td>
								<td>-</td>
								<td>-</td>
								<td>Total: ${orderInfo?.total_amount}</td>
							</tr>
						</tfoot>
					</DataTable>
				</div>
			</div>

		</StyledOrderDetail>
	)
}


export default AdminOrderDetail;
