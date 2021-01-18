import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, toggleAdmin } from '../../../redux/actions/users_actions';
import { DataTable } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
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
			<DataTable className="responsiveTable">
				<Thead>
					<Tr>
						<Th className="cell-small">ID</Th>
						<Th>{s.tableFirstName}</Th>
						<Th>{s.tableLastName}</Th>
						<Th className="cell-small">Admin</Th>
						<Th className="cell-medium">Email</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{users && users.map(user => (
						<Tr key={user.id}>
							<Td>{user.id}</Td>
							<Td>{user.first_name}</Td>
							<Td>{user.last_name}</Td>
							<Td><input type="checkbox" checked={user.is_admin} onChange={() => handleInput(user.id, !user.is_admin)} /></Td>
							<Td>{user.email}</Td>
							<Td><button onClick={() => handleDelete(user.id)}>{s.tableDeleteButton}</button></Td>
						</Tr>
					))}
				</Tbody>
			</DataTable>

		</>
	);
};

export default AdminUserList;