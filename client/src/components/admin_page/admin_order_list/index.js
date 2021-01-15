import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Btn, DataTable, FormStyled, Flex } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useHistory } from 'react-router-dom';
import { changeStatusOrder, getOrders } from '../../../redux/actions/orders_actions';
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
		payment_method: 'ASC',
		createdAt: 'ASC'
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
		ev && ev.preventDefault();
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

	useEffect(handleSearch, [orders]);

	const handleStatus = (ev, id) => {
		if (ev.target.value) {
			dispatch(changeStatusOrder({ id, body: { state: ev.target.value } }));
		}
	}

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
			<DataTable className="responsiveTable">
				<Thead>
					<Tr onClick={handleSort}>
						<Th id="id" className="cell-small icon active down">{s.tableOrderNumber}</Th>
						<Th>Email</Th>
						<Th className="cell-small">{s.tableTotal}</Th>
						<Th id="createdAt" className="icon down">{s.tableDate}</Th>
						<Th id="state" className="icon down">{s.tableStatus}</Th>
						<Th id="payment_method" className="icon down">{s.tablePayment}</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						(!all ? filtered : orders).map(order => (
							<Tr className='row-link' key={order.id} onClick={(ev) => handleClick(order.id)}>
								<Td>{order.id}</Td>
								<Td>{order.email}</Td>
								<Td>${order.total_amount}</Td>
								<Td>{order.createdAt.slice(0, 10)}</Td>
								<Td>
									<SelectStyled className="select__order-admin" value={order.state} onClick={(ev) => ev.stopPropagation()} onChange={(ev, id) => handleStatus(ev, order.id)}>
										<option value="completed" >{s.completed}</option>
										<option value="created" >{s.created}</option>
										<option value="processing" >{s.processing}</option>
										<option value="canceled" >{s.canceled}</option>
									</SelectStyled></Td>
								<Td>{order.payment_method}</Td>
							</Tr>
						))
					}
					{
						(all ? orders : filtered).length === 0 && <Tr><Td>No Matches</Td></Tr>
					}
				</Tbody>
			</DataTable>
		</>
	);
};

export default AdminProductList;