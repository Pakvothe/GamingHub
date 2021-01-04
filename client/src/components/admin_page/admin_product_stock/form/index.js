import React, { useState } from 'react'
import { addSerial } from '../../../../redux/actions/products_actions';
import { Btn, FormStyled } from '../../../styles/styled_global'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AdminProductStockForm = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	let [serial, setSerial] = useState('');

	const handleInput = (ev) => {
		ev.persist();
		setSerial(ev.target.value);
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		let serialArray = serial.split('\n').map(s => s.trim());
		serialArray = [...new Set(serialArray)];
		if (serialArray.every(ser => ser.length === 20)) {
			dispatch(addSerial({ id, serials: serialArray }))
		}
	}

	return (
		<>
			<h1 className="admin-h1">Agregar serials</h1>
			<FormStyled onSubmit={handleSubmit} method="POST" autoComplete="off">

				<label>
					<span>Serials:</span>
					<textarea type='text' name='serial' value={serial} onChange={handleInput} required>
					</textarea>
				</label>
				<Btn type='submit' className="btn-ppal">Agregar</Btn>
			</FormStyled>
		</>
	)
}

export default AdminProductStockForm
