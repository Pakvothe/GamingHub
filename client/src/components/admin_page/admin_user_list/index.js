import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, toggleAdmin } from '../../../redux/actions/users_actions';
import { DataTable } from '../../styles/styled_global';
import Swal from 'sweetalert2';
import strings from './strings'

const AdminUserList = ({ users }) => {
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);

	const handleDelete = (id) => {
		dispatch(deleteUser(id));
		alert('User deleted.');
	}

	const handleInput = (id, is_admin) => {
		Swal.fire({
			heightAuto: false,
			title: strings[language].admin_confirm,
			text: strings[language].admin_confirm_text,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: strings[language].admin_button,
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					strings[language].admin_confirm_2,
					strings[language].admin_confirm_text2,
					'success',
					dispatch(toggleAdmin({ id, is_admin }))
				)
			}
		})
	}

	return (
		<>
			<h1 className='admin-h1'>usuarios</h1>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">ID</td>
						<td>Nombre</td>
						<td>Apellido</td>
						<td className="cell-small">Admin</td>
						<td>Email</td>
					</tr>
				</thead>
				<tbody>
					{users && users.map(user => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td><input type="checkbox" checked={user.is_admin} onChange={() => handleInput(user.id, !user.is_admin)} /></td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</DataTable>

		</>
	);
};

export default AdminUserList;