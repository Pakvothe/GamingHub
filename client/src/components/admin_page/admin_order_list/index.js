import React from 'react';
import { Btn, DataTable } from '../../styles/styled_global';
import { Link } from 'react-router-dom';

const AdminProductList = ({ orders }) => {

	return (
		<>
			<DataTable>
				<thead>
					<tr>
						<td>Nº Orden</td>
						{/* <td>Usuario</td> */}
						<td>Email</td>
						<td>Total</td>
						<td>Estado</td>
						<td>Metodo de Pago</td>
					</tr>
				</thead>
				<tbody>
					{orders && orders.map(order => (
						<tr key={order.id}>
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