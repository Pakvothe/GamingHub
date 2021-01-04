import React, { useEffect } from 'react'
import { Btn, DataTable } from './../../../styles/styled_global';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSerials, deleteSerial } from './../../../../redux/actions/products_actions';
import { Link } from 'react-router-dom';
import SearchBar from './../../admin_search_bar/index';
import Swal from 'sweetalert2';

const AdminProductStockList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const serials = useSelector(state => state.productsReducer.serials.list);

	useEffect(() => {
		dispatch(getSerials(id));
	}, []);

	const handleDelete = (serialId) => {
		Swal.fire({
			heightAuto: false,
			title: 'Confirm!',
			text: 'Serial deleted.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Deleted!',
					'The serial has been deleted.',
					'success',
					dispatch(deleteSerial({ serial: serialId, productId: id }))
				)
			}
		})
	}

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to={`/admin/product/${id}/stock/new`}>
					<Btn className="btn-ppal" >Agregar Stock</Btn>
				</Link>
				<SearchBar />
			</div>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">ID</td>
						<td>Número</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{!!serials.length && serials.map(serial => (
						<tr key={serial.id}>
							<td>{serial.id}</td>
							<td>{serial.serial}</td>
							<td>
								<ul>
									<li><Link ><button>Editar</button></Link></li>
									<li><button onClick={() => handleDelete(serial.id)}>Eliminar</button></li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</DataTable>
		</>
	)
}

export default AdminProductStockList;