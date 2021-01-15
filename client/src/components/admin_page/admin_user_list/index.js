import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, toggleAdmin } from '../../../redux/actions/users_actions';
import { DataTable } from '../../styles/styled_global';
import Swal from 'sweetalert2';
import swals from '../../../utils/swals';
import strings from './strings'
import { useToasts } from 'react-toast-notifications';

const AdminUserList = ({ users }) => {
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const { addToast } = useToasts()

	const handleDelete = (id) => {
		swals.FIRE('warning', s.admin_delete_user, s.admin_delete_user_text, s.admin_button_2, true, s.admin_cancel_button, () => dispatch(deleteUser(id, true)))
			.then((data) => {
				if (data.isConfirmed) {
					if (data.value === 200) {
						swals.CONFIRMOK(
							s.admin_delete_user_2,
							s.admin_delete_user_text2,
							'success',
						)
					} else if (data.value === 500) {
						addToast(s.toastError, { appearance: 'error' })
					} else {
						addToast(s.admin_error_text, { appearance: 'error' })
					}
				}
			})
	}

	const handleInput = (id, is_admin) => {
		swals.FIRE('warning', s.admin_confirm, s.admin_confirm_text, s.admin_button, true, s.admin_cancel_button)
			.then((result) => {
				if (result.isConfirmed) {
					Swal.fire(
						s.admin_confirm_2,
						s.admin_confirm_text2,
						'success',
						dispatch(toggleAdmin({ id, is_admin }))
					)
				}
			})
	}


	return (
		<>
			<h1 className='admin-h1'>{s.title}</h1>
			<DataTable>
				<thead>
					<tr>
						<th className="cell-small">ID</th>
						<th>{s.tableFirstName}</th>
						<th>{s.tableLastName}</th>
						<th className="cell-small">Admin</th>
						<th>Email</th>
						<th></th>
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
							<td><button onClick={() => handleDelete(user.id)}>{s.tableDeleteButton}</button></td>
						</tr>
					))}
				</tbody>
			</DataTable>

		</>
	);
};

export default AdminUserList;