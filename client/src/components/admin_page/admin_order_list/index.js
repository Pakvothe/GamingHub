import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { DataTable } from '../../styles/styled_global';
import { useHistory } from 'react-router-dom';
import { getOrders } from '../../../redux/actions/orders_actions';

const AdminProductList = ({ orders }) => {

	const history = useHistory();
	const dispatch = useDispatch();

	const [orderSort, setOrderSort] = useState({
		id: 'ASC',
		state: 'ASC',
		payment_method: 'ASC'
	})

	const handleClick = (id) => {
		history.push(`/admin/order/${id}`)
	}

	const handleSort = (ev) => {
		if (orderSort.hasOwnProperty(ev.target.id)) {
			const object = { ...orderSort }
			object[ev.target.id] = object[ev.target.id] === 'ASC' ? 'DESC' : 'ASC'
			for (const key in object) {
				let element = document.getElementById(key);
				if (ev.target.id === key) {
					object[element.id] === 'ASC' ? element.classList.replace('up', 'down') : element.classList.replace('down', 'up')
					element.classList.toggle('active', true)
				} else {
					element.classList.remove('active');
				}
			}
			setOrderSort(object)
			dispatch(getOrders({ name: ev.target.id, order: object[ev.target.id] }))
		}
	}

	return (
		<>
			<h1 className='admin-h1'>órdenes</h1>
			<DataTable>
				<thead>
					<tr onClick={handleSort}>
						<td id="id" className="cell-small icon active down">Nº Orden</td>
						<td>Email</td>
						<td className="cell-small">Total</td>
						<td id="state" className="icon down">Estado</td>
						<td id="payment_method" className="icon down">Metodo de Pago</td>
					</tr>
				</thead>
				<tbody>
					{orders && orders.map(order => (
						<tr className='row-link' key={order.id} onClick={(ev) => handleClick(order.id)}>
							<td>{order.id}</td>
							<td>{order.email}</td>
							<td>{order.total_amount}</td>
							<td>{order.state}</td>
							<td>{order.payment_method}</td>
						</tr>
					))}
				</tbody>
			</DataTable>

		</>
	);
};

export default AdminProductList;