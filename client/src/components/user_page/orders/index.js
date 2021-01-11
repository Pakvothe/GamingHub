import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getOrders } from '../../../redux/actions/orders_actions';
import { DataTable, Btn, Flex } from '../../styles/styled_global';
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
	}, [])

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
						<DataTable>
							<thead>
								<tr onClick={handleSort}>
									<th id="id" className="cell-small icon active down">{s.id}</th>
									<th>{s.mail}</th>
									<th className="cell-small">{s.total}</th>
									<th id="state" className="icon down">{s.state}</th>
									<th id="payment_method" className="icon down">{s.payment}</th>
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
					:
					<Flex>
						<div className='text-center'>
							<h2 className='mb-1'>{s.empty}</h2>
							<Btn className='btn-sec' onClick={() => history.push('/user')}>Volver</Btn>
						</div>
					</Flex>
			}
		</Fade>
	)
}

export default UserOrders