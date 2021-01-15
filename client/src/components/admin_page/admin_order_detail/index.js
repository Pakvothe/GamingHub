import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/actions/orders_actions';
import { DataTable } from '../../styles/styled_global';
import { StyledOrderDetail } from '../../styles/styled_order_detail';
import { useParams } from 'react-router-dom';
import strings from './strings';

const AdminOrderDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const orderInfo = useSelector(state => state.ordersReducer.order.info);
	const products = orderInfo?.products;

	useEffect(() => {
		dispatch(getOrder(id));
	}, [dispatch, id])

	return (
		<StyledOrderDetail>
			<h1 className='admin-h1'>{s.title} {id}</h1>
			<div className='tables-container'>
				<div>
					<h2>{s.subtitleDetails}</h2>
					<DataTable className='table-small'>
						<tbody>
							<tr>
								<td>{s.orderMadeBy}</td>
								<td>{orderInfo?.email}</td>
							</tr>
							<tr>
								<td>{s.orderDate}</td>
								<td>{orderInfo?.createdAt?.split('T')[0]}</td>
							</tr>
							<tr>
								<td>{s.orderTotalAmount}</td>
								<td>${orderInfo?.total_amount}</td>
							</tr>
							<tr>
								<td>{s.orderStatus}</td>
								<td>{orderInfo?.state}</td>
							</tr>
							<tr>
								<td>{s.orderPayment}</td>
								<td>{orderInfo?.payment_method}</td>
							</tr>
							<tr>
								<td>{s.orderQuantity}</td>
								<td>{orderInfo?.products?.length}</td>
							</tr>
						</tbody>
					</DataTable>
				</div>
				<div>
					<h2>{s.subtitleProducts}</h2>
					<DataTable>
						<thead>
							<tr>
								<th>{s.tableTitle}</th>
								<th>{s.tableQuantity}</th>
								<th>{s.tableUnitPrice}</th>
								<th>{s.tableTotalPrice}</th>
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
