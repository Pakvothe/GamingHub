import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, toggleAdmin } from '../../../redux/actions/users_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import Swal from 'sweetalert2';
import strings from './strings'
import { useToasts } from 'react-toast-notifications';

const AdminUserList = ({ users }) => {
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const { addToast } = useToasts()

	const handleDelete = (id) => {
		Swal.fire({
			heightAuto: false,
			title: strings[language].admin_delete_user,
			text: strings[language].admin_delete_user_text,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			showLoaderOnConfirm: true,
			confirmButtonText: strings[language].admin_button_2,
			preConfirm: () => dispatch(deleteUser(id, true)),
		}).then((data) => {
			if (data.isConfirmed) {
				if (data.value === 200) {
					Swal.fire(
						strings[language].admin_delete_user_2,
						strings[language].admin_delete_user_text2,
						'success',
					)
				} else if (data.value === 500) {
					addToast('Internal Server Error', { appearance: 'error' })
				} else {
					addToast(strings[language].admin_error_text, { appearance: 'error' })
				}
			}
		})
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
			<h1 className='admin-h1'>{strings[language].title}</h1>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">ID</td>
						<td>{strings[language].tableFirstName}</td>
						<td>{strings[language].tableLastName}</td>
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
							<td><input type="checkbox" checked={user.is_admin} onChange={() => handleInput(user.id, !user.is_admin)} /></td>
							<td>{user.email}</td>
							<td><button onClick={() => handleDelete(user.id)}>{strings[language].tableDeleteButton}</button></td>
						</tr>
					))}
				</tbody>
			</DataTable>

		</>
	);
};

export default AdminUserList;