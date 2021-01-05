import React from 'react';
import { Btn, DataTable } from '../../styles/styled_global';
import { Link, Redirect, useHistory } from 'react-router-dom';

const AdminProductList = ({ orders }) => {

	const history = useHistory();

	const handleClick = (id) => {
		history.push(`/admin/order/${id}`)
	}

	return (
		<>
			<h1 className='admin-h1'>órdenes</h1>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">Nº Orden</td>
						{/* <td>Usuario</td> */}
						<td>Email</td>
						<td className="cell-small">Total</td>
						<td>Estado</td>
						<td>Metodo de Pago</td>
					</tr>
				</thead>
				<tbody>
					{orders && orders.map(order => (
						<tr className='row-link' key={order.id} onClick={(ev) => handleClick(order.id)}>
							{/* <td>{order.user}</td> */}
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