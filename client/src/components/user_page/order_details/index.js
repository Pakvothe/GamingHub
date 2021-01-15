import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/actions/orders_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { StyledOrderDetail } from '../../styles/styled_order_detail';
import { useParams, useHistory, Link } from 'react-router-dom';
import strings from './strings';

const UserOrderDetail = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();

	const orderInfo = useSelector(state => state.ordersReducer.order.info);
	const orderError = useSelector(state => state.ordersReducer.order.error);
	const orderLoading = useSelector(state => state.ordersReducer.order.isLoading);
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const products = orderInfo?.products;

	useEffect(() => {
		dispatch(getOrder(id))
	}, [dispatch, id]);

	if (orderError) return <h2>{s.orderNotFound}</h2>;
	if (orderLoading) return <h2>{s.loading}</h2>;

	return (
		<StyledOrderDetail>
			<h2 className="mb-1">{s.title} {id}</h2>
			<div className='tables-container'>
				<div>
					<h3>{s.subtitleDetails}</h3>
					<DataTable className='table-small'>
						<tbody>
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
					<h3>{s.subtitleProducts}</h3>
					<DataTable className="responsiveTable">
						<Thead>
							<Tr>
								<Th>{s.tableTitle}</Th>
								<Th>{s.tableQuantity}</Th>
								<Th>{s.tableUnitPrice}</Th>
								<Th>{s.tableTotalPrice}</Th>
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							{products && products.map(prod => {
								const found = prod.reviews.length > 0
								return (
									<Tr key={prod.id}>
										<Td>{prod.name}</Td>
										<Td>{prod.orders_products.quantity}</Td>
										<Td>${prod.orders_products.unit_price}</Td>
										<Td>${prod.orders_products.quantity * prod.orders_products.unit_price}</Td>
										<Td>{!found && orderInfo.state === 'completed' && (<Link to={`/review/${prod.id}?game=${prod.name}`}><button>{s.review}</button></Link>)}</Td>
									</Tr>
								)
							})}
						</Tbody>
						<tfoot>
							<Tr>
								<Td></Td>
								<Td></Td>
								<Td></Td>
								<Td>Total: ${orderInfo?.total_amount}</Td>
								<Td></Td>
							</Tr>
						</tfoot>
					</DataTable>
				</div>
			</div>
			<Btn className="btn btn-ppal mt-2" onClick={() => history.goBack()}><i className="fas fa-caret-left"></i> {s.goBack}</Btn>
		</StyledOrderDetail>
	)
}


export default UserOrderDetail;
