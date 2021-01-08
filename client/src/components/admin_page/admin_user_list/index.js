import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, toggleAdmin } from '../../../redux/actions/users_actions';
import { DataTable } from '../../styles/styled_global';

const AdminUserList = ({ users }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteUser(id));
		alert('User deleted.');
	}

	const handleInput = (id, is_admin) => {
		dispatch(toggleAdmin({ id, is_admin }))
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