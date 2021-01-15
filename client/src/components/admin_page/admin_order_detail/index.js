import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/actions/orders_actions';
import { DataTable } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
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
		dispatch(getOrder(id, '?panel=true'));
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
					<DataTable className="responsiveTable">
						<Thead>
							<Tr>
								<Th>{s.tableTitle}</Th>
								<Th>{s.tableQuantity}</Th>
								<Th>{s.tableUnitPrice}</Th>
								<Th>{s.tableTotalPrice}</Th>
							</Tr>
						</Thead>
						<Tbody>
							{products && products.map(prod => (
								<Tr key={prod.id}>
									<Td>{prod.name}</Td>
									<Td>{prod.orders_products.quantity}</Td>
									<Td>${prod.orders_products.unit_price}</Td>
									<Td>${prod.orders_products.quantity * prod.orders_products.unit_price}</Td>
								</Tr>
							))}
						</Tbody>
						<tfoot>
							<Tr>
								<Td></Td>
								<Td></Td>
								<Td></Td>
								<Td>Total: ${orderInfo?.total_amount}</Td>
							</Tr>
						</tfoot>
					</DataTable>
				</div>
			</div>

		</StyledOrderDetail>
	)
}


export default AdminOrderDetail;
