import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { deleteCategory } from '../../../redux/actions/categories_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Swal from 'sweetalert2';
import swals from '../../../utils/swals';
import strings from './strings';

const AdminCategoryList = ({ categories, language }) => {
	const dispatch = useDispatch();
	const s = strings[language];

	const handleDelete = (id) => {
		swals.FIRE('warning', s.alertTitle, s.alertText, s.alertButtonConfirm, true, s.alertButtonCancel)
			.then((result) => {
				if (result.isConfirmed) {
					Swal.fire(
						s.alertSuccessTitle,
						s.alertSuccessText,
						'success',
						dispatch(deleteCategory(id))
					)
				}
			})
	}

	return (
		<>
			<h1 className='admin-h1'>{s.title}</h1>
			<Link to="/admin/category"><Btn className="btn-ppal">{s.addCategory}</Btn></Link>
			<DataTable className="responsiveTable">
				<Thead>
					<Tr>
						<Th className="cell-small">ID</Th>
						<Th>{s.tableName}</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{categories && categories.map(category => (
						<Tr key={category.id}>
							<Td>{category.id}</Td>
							<Td>{category[`name_${language}`]}</Td>
							<Td>
								<ul>
									<li><Link to={`/admin/category/${category.id}`}><button>{s.buttonEdit}</button></Link></li>
									<li><button onClick={() => handleDelete(category.id)}>{s.buttonDelete}</button></li>
								</ul>
							</Td>
						</Tr>
					))}
				</Tbody>
			</DataTable>
		</>
	);
};

export default AdminCategoryList;