import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DataTable } from '../../styles/styled_global';
import { StyledOrderDetail } from '../../styles/styled_order_detail';

const AdminOrderDetail = () => {
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch()
	}, [])

	return (
		<StyledOrderDetail>
			<div>
				<h1>Titulo</h1>
				<DataTable>
					<thead>
						<tr>
							<td onClick={handleOrder}>Título</td>
							<td className="cell-small">Stock</td>
							<td className="cell-small">Visible</td>
							<td className="cell-small">Imagen</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{products && products.map(prod => (
							<tr key={prod.name}>
								<td>{prod.name}</td>
								<td>{prod.quantity}</td>
								<td>{prod.image[0]}</td>
							</tr>
						))}
					</tbody>
				</DataTable>
			</div>
			<div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</StyledOrderDetail>
	)
}

export default AdminOrderDetail;
