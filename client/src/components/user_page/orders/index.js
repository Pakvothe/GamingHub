import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getOrders } from '../../../redux/actions/orders_actions';
import { DataTable, Btn, Flex } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import strings from './strings';
import Fade from 'react-reveal/Fade';

const UserOrders = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const orders = useSelector((state) => state.ordersReducer.orders.list);

	useEffect(() => {
		dispatch(getOrders())
	}, [dispatch])

	const [orderSort, setOrderSort] = useState({
		id: 'ASC',
		state: 'ASC',
		payment_method: 'ASC'
	})

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

	const handleClick = (id) => {
		history.push(`/orders/${id}`)
	}

	return (
		<Fade>
			{
				orders.length > 0
					?
					<>
						<h2>{s.title}</h2>
						<DataTable className="responsiveTable">
							<Thead>
								<Tr onClick={handleSort}>
									<Th id="id" className="cell-small icon active down">{s.id}</Th>
									<Th>{s.mail}</Th>
									<Th className="cell-small">{s.total}</Th>
									<Th id="state" className="icon down">{s.state}</Th>
									<Th id="payment_method" className="icon down">{s.payment}</Th>
									<Th id="payment_method" className="icon down">{s.payment_link}</Th>
								</Tr>
							</Thead>
							<Tbody>
								{orders && orders.map(order => (
									<Tr className='row-link' key={order.id} onClick={(ev) => handleClick(order.id)}>
										<Td>{order.id}</Td>
										<Td>{order.email}</Td>
										<Td>{order.total_amount}</Td>
										<Td>{order.state}</Td>
										<Td>{order.payment_method}</Td>
										{order.payment_link ?
											<Td>
												<a onClick={(ev) => ev.stopPropagation()} href={order.payment_link}>
													<Btn className="btn btn-ppal">Link</Btn>
												</a>
											</Td>
											:
											<Td></Td>}
									</Tr>
								))}
							</Tbody>
						</DataTable>
					</>
					:
					<Flex>
						<div className='text-center'>
							<h2 className='mb-1'>{s.empty}</h2>
						</div>
					</Flex>
			}
			<Btn className='btn-sec mt-2' onClick={() => history.push('/user')}>Volver</Btn>
		</Fade>
	)
}

export default UserOrders