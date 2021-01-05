import React, { useEffect, useState } from 'react'
import { Btn, DataTable } from './../../../styles/styled_global';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSerials, deleteSerial, editSerial, clearErrorSerial } from './../../../../redux/actions/products_actions';
import { Link } from 'react-router-dom';
import SearchBar from './../../admin_search_bar/index';
import Swal from 'sweetalert2';

const AdminProductStockList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const serials = useSelector(state => state.productsReducer.serials.list);
	const error = useSelector(state => state.productsReducer.serials.error);

	const [input, setInput] = useState('');

	useEffect(() => {
		dispatch(getSerials(id));
	}, []);

	useEffect(() => {
		setInput(serials.reduce((acc, val) => {
			acc[val.id] = val.serial
			return acc
		}, {}))
	}, [serials]);

	useEffect(() => {
		error && Swal.fire({
			heightAuto: false,
			title: 'Serial repetido!',
			text: `El serial ${error.value} ya existe!`,
			icon: 'warning',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'OK',
		}).then(() => {
			dispatch(clearErrorSerial())
		})
	}, [error])

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

	const handleEdit = (inputId) => {
		document.getElementById(inputId).toggleAttribute('disabled');
		document.getElementById(inputId).focus();
	}

	const handleEscape = (ev, inputId) => {
		if (ev.keyCode === 27) {
			document.getElementById(inputId).toggleAttribute('disabled');
			dispatch(getSerials(id));
		}
	}

	const handleChange = (ev) => {
		setInput({ ...input, [ev.target.id]: ev.target.value });
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		let serialInput = ev.target.elements[0];
		if (serialInput.value.length === 20) {
			dispatch(editSerial({ id, serial: serialInput.value }));
			document.getElementById(serialInput.id).toggleAttribute('disabled');
		}
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
							<td>
								<form onSubmit={handleSubmit}>
									<input type="text"
										id={serial.id}
										onChange={handleChange}
										onKeyDown={(e) => handleEscape(e, serial.id)}
										disabled
										value={input[serial.id] || ''}
									/>
								</form>
							</td>
							<td>
								<ul>
									<li><button onClick={() => handleEdit(serial.id)}>Editar</button></li>
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