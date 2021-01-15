import React, { useEffect, useState } from 'react'
import { Btn, DataTable } from './../../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSerials, deleteSerial, editSerial, clearErrorSerial } from './../../../../redux/actions/products_actions';
import { Link } from 'react-router-dom';
import SearchBar from './../../admin_search_bar/index';
import Swal from 'sweetalert2';
import strings from './strings';

const AdminProductStockList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const serials = useSelector(state => state.productsReducer.serials.list);
	const error = useSelector(state => state.productsReducer.serials.error);

	const [input, setInput] = useState('');

	useEffect(() => {
		dispatch(getSerials(id));
	}, [dispatch, id]);

	useEffect(() => {
		setInput(serials.reduce((acc, val) => {
			acc[val.id] = val.serial
			return acc
		}, {}))
	}, [serials]);

	useEffect(() => {
		error && Swal.fire({
			heightAuto: false,
			title: s.alertTitle,
			text: `${s.alertText} ${error.value}`,
			icon: 'warning',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: s.alertButton,
		}).then(() => {
			dispatch(clearErrorSerial())
		})
	}, [error, dispatch, s.alertButton, s.alertText, s.alertTitle])

	const handleDelete = (serialId) => {
		Swal.fire({
			heightAuto: false,
			title: s.swDeleteTitle,
			text: s.swDeleteText,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: s.swDeleteConfirmButton,
			cancelButtonText: s.swDeleteCancelButton,
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					s.swConfirmTitle,
					s.swConfirmText,
					'success',
					dispatch(deleteSerial({ serial: serialId, productId: id }))
				)
			}
		})
	}

	const handleEdit = (inputId) => {
		document.getElementById(inputId).removeAttribute('disabled'); // Que no haga toggle sino que lo quite
		document.getElementById(inputId).focus();
	}

	const handleEscape = (ev) => { // Para que se cancele la edición cuando se aprieta ESC
		if (ev.keyCode === 27) {
			document.querySelectorAll('input').forEach(input => input.setAttribute('disabled', 'true'));
			dispatch(getSerials(id));
		}
	}

	const handleFocus = (ev) => { // Para que se cancele la edición cuando das clic fuera del input
		let input = ev.target;
		input.addEventListener('focusout', () => {
			input.setAttribute('disabled', 'true')
		}, { once: true })
	}

	const handleChange = (ev) => {
		setInput({ ...input, [ev.target.id]: ev.target.value });
	}

	const handleSubmit = (ev, serialId, productId) => {
		ev.preventDefault();
		let serialInput = document.getElementById(serialId);
		if (serialInput.value.length === 20) {
			dispatch(editSerial({ id: serialId, serial: serialInput.value, productId }));
			serialInput.setAttribute('disabled', 'true');
		}
	}

	return (
		<>
			<h1 className='admin-h1'>{s.title}</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to={`/admin/product/${id}/stock/new`}>
					<Btn className="btn-ppal">{s.addButton}</Btn>
				</Link>
				<SearchBar />
			</div>
			<DataTable className="responsiveTable">
				<Thead>
					<Tr>
						<Th className="cell-small">ID</Th>
						<Th>{s.tableSerial}</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{!!serials.length && serials.map(serial => (
						<Tr key={serial.id}>
							<Td>{serial.id}</Td>
							<Td>
								<form className="serial-form" onSubmit={(ev) => handleSubmit(ev, serial.id, serial.productId)}>
									<input type="text"
										id={serial.id}
										onChange={handleChange}
										onKeyDown={(e) => handleEscape(e)}
										onFocus={(e) => handleFocus(e)}
										disabled
										value={input[serial.id] || ''}
									/>
								</form>
							</Td>
							<Td>
								<ul>
									<li><button onClick={() => handleEdit(serial.id)}>{s.tableEditButton}</button></li>
									<li><button onClick={() => handleDelete(serial.id)}>{s.tableDeleteButton}</button></li>
								</ul>
							</Td>
						</Tr>
					))}
				</Tbody>
			</DataTable>
		</>
	)
}

export default AdminProductStockList;