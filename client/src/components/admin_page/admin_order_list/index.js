import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Btn, DataTable, FormStyled, Flex } from '../../styles/styled_global';
import { useHistory } from 'react-router-dom';
import { getOrders } from '../../../redux/actions/orders_actions';
import { SelectStyled } from '../../styles/styled_catalog';
import strings from './strings';
import { useEffect } from 'react';

const AdminProductList = ({ orders }) => {

	const history = useHistory();
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const [filtered, setFiltered] = useState([]);
	const [filter, setFilter] = useState('none');
	const [searchInput, setsearchInput] = useState('');
	const [all, setAll] = useState(true);
	const s = strings[language];

	const [orderSort, setOrderSort] = useState({
		id: 'ASC',
		state: 'ASC',
		payment_method: 'ASC'
	})

	useEffect(() => {
		if (filter === 'none') setAll(true);
	}, [filter])


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

	const handleSearch = (ev) => {
		ev.preventDefault();
		if (filter !== 'none') {
			switch (filter) {
				case 'id':
					setFiltered(orders.filter(order => order.id.toString() === searchInput));
					break;
				case 'min_amount':
					setFiltered(orders.filter(order => order.total_amount > searchInput));
					break;
				case 'max_amount':
					setFiltered(orders.filter(order => order.total_amount < searchInput));
					break;
				default:
					setFiltered(orders.filter(order => order[filter]?.toString().includes(searchInput)))
					break;
			}
			setAll(false);
		}
	}


	console.log(orders)
	return (
		<>
			<h1 className='admin-h1'>{s.title}</h1>
			<Flex align='center'>
				<label className='mr-2'>
					<span>{s.searchBy}</span>
					<SelectStyled onChange={(e) => setFilter(e.target.value)}>
						<option value="none" >{s.searchNone}</option>
						<option value="state" >{s.searchState}</option>
						<option value="id" >id</option>
						<option value="email" >email</option>
						<option value="min_amount" >{s.searchMin}</option>
						<option value="max_amount" >{s.searchMax}</option>
						<option value="payment_method" >{s.searchPayment}</option>
						<option value="userId" >{s.searchUserId}</option>
						<option value="createdAt" >{s.searchCreatedAt}</option>
					</SelectStyled>
				</label>
				<FormStyled onSubmit={handleSearch} id='form' className='mr-1'>
					<input value={searchInput} type={filter === 'createdAt' ? 'date' : 'text'} onChange={(ev) => { setsearchInput(ev.target.value) }} />
				</FormStyled>
				<Btn className='btn btn-ppal' form='form' type='submit'>{s.button}</Btn>
			</Flex>
			<DataTable>
				<thead>
					<tr onClick={handleSort}>
						<th id="id" className="cell-small icon active down">{s.tableOrderNumber}</th>
						<th>Email</th>
						<th className="cell-small">{s.tableTotal}</th>
						<th className="cell-small">{s.tableDate}</th>
						<th id="state" className="icon down">{s.tableStatus}</th>
						<th id="payment_method" className="icon down">{s.tablePayment}</th>
					</tr>
				</thead>
				<tbody>
					{
						(all ? orders : filtered).map(order => (
							<tr className='row-link' key={order.id} onClick={(ev) => handleClick(order.id)}>
								<td>{order.id}</td>
								<td>{order.email}</td>
								<td>${order.total_amount}</td>
								<td>{order.createdAt.slice(0, 10)}</td>
								<td>{s[order.state]}</td>
								<td>{order.payment_method}</td>
							</tr>
						))
					}
					{
						(all ? orders : filtered).length === 0 && <p>No Matches</p>
					}
				</tbody>
			</DataTable>
		</>
	);
};

export default AdminProductList;