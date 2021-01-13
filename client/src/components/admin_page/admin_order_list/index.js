import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DataTable } from '../../styles/styled_global';
import { useHistory } from 'react-router-dom';
import { getOrders } from '../../../redux/actions/orders_actions';
import { SelectStyled } from '../../styles/styled_catalog';
import strings from './strings';

const AdminProductList = ({ orders }) => {

	const history = useHistory();
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const [filtered, setFiltered] = useState([]);
	const [all, setAll] = useState(true);
	const s = strings[language];

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
			dispatch(getOrders({ name: ev.target.id, order: object[ev.target.id], all: true }))
		}
	}

	const handleSelect = (ev) => {
		if (ev.target.value === 'all') {
			setAll(true)
		}
		else {
			setAll(false);
			const array = orders.filter(order => ev.target.value === order.state)
			setFiltered(array);
		}
	}

	return (
		<>
			<h1 className='admin-h1'>{s.title}</h1>
			<label className="label-select">
				<span>{s.filterState}</span>
				<SelectStyled onChange={handleSelect}>
					<option value="all" >{s.filterAll}</option>
					<option value="completed" >{s.filterCompleted}</option>
					<option value="created" >{s.filterCreated}</option>
					<option value="processing" >{s.filterProcessing}</option>
					<option value="canceled" >{s.filterCanceled}</option>
				</SelectStyled>
			</label>
			<DataTable>
				<thead>
					<tr onClick={handleSort}>
						<th id="id" className="cell-small icon active down">{s.tableOrderNumber}</th>
						<th>Email</th>
						<th className="cell-small">{s.tableTotal}</th>
						<th id="state" className="icon down">{s.tableStatus}</th>
						<th id="payment_method" className="icon down">{s.tablePayment}</th>
					</tr>
				</thead>
				<tbody>
					{
						(!all ? filtered : orders).map(order => (
							<tr className='row-link' key={order.id} onClick={(ev) => handleClick(order.id)}>
								<td>{order.id}</td>
								<td>{order.email}</td>
								<td>${order.total_amount}</td>
								<td>{order.state}</td>
								<td>{order.payment_method}</td>
							</tr>
						))
					}
				</tbody>
			</DataTable>
		</>
	);
};

export default AdminProductList;