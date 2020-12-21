import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../../../redux/actions/users_actions';
import { Btn, DataTable } from '../../styles/styled_global';

const AdminUserList = ({ users }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteUser(id));
		alert('User deleted.');
	}

	const handleInput = (ev) => {
		ev.persist();
		// dispatch(toggleAdmin(ev.target.name))
	}

	return (
		<>
			{/* <SearchBar /> */}
			<Link to="/admin/user"><Btn className="btn-ppal">Agregar Usuario</Btn></Link>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">ID</td>
						<td>Nombre</td>
						<td>Apellido</td>
						<td className="cell-small">Admin</td>
						<td>Email</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{users && users.map(user => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							{/* <td>
								<CheckboxLabel className="no-shadow check" checked={input.is_active[prod.id]}>
								<input
								type='checkbox'
										value={input.is_active[prod.id]}
										onChange={handleInput}
										name='is_active'
										/>
										</CheckboxLabel>
									</td> */}
							<td><input type="checkbox" checked={user.is_admin} onChange={handleInput} name={user.id} /></td>
							<td>{user.email}</td>
							<td>
								<ul>
									<li><Link to={`/admin/users/${user.id}`}><button>Editar</button></Link></li>
									<li><button onClick={() => handleDelete(user.id)}>Eliminar</button></li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</DataTable>

		</>
	);
};

export default AdminUserList;