import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DataTable } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
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
					<option value="completed" >{s.completed}</option>
					<option value="created" >{s.created}</option>
					<option value="processing" >{s.processing}</option>
					<option value="canceled" >{s.canceled}</option>
				</SelectStyled>
			</label>
			<DataTable className="responsiveTable">
				<Thead>
					<Tr onClick={handleSort}>
						<Th id="id" className="cell-small icon active down">{s.tableOrderNumber}</Th>
						<Th>Email</Th>
						<Th className="cell-small">{s.tableTotal}</Th>
						<Th id="state" className="icon down">{s.tableStatus}</Th>
						<Th id="payment_meThod" className="icon down">{s.tablePayment}</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						(!all ? filtered : orders).map(order => (
							<Tr className='row-link' key={order.id} onClick={(ev) => handleClick(order.id)}>
								<Td>{order.id}</Td>
								<Td>{order.email}</Td>
								<Td>${order.total_amount}</Td>
								<Td>{s[order.state]}</Td>
								<Td>{order.payment_method}</Td>
							</Tr>
						))
					}
				</Tbody>
			</DataTable>
		</>
	);
};

export default AdminProductList;