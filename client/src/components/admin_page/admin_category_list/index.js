import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { deleteCategory } from '../../../redux/actions/categories_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import Swal from 'sweetalert2';
import strings from './strings';

const AdminCategoryList = ({ categories, language }) => {
	const dispatch = useDispatch();
	const handleDelete = (id) => {

		Swal.fire({
			heightAuto: false,
			title: strings[language].alertTitle,
			text: strings[language].alertText,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: strings[language].alertButtonConfirm,
			cancelButtonText: strings[language].alertButtonCancel
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					strings[language].alertSuccessTitle,
					strings[language].alertSuccessText,
					'success',
					dispatch(deleteCategory(id))
				)
			}
		})
	}

	return (
		<>
			<h1 className='admin-h1'>{strings[language].title}</h1>
			<Link to="/admin/category"><Btn className="btn-ppal">{strings[language].addCategory}</Btn></Link>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">ID</td>
						<td>{strings[language].tableName}</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{categories && categories.map(category => (
						<tr key={category.id}>
							<td>{category.id}</td>
							<td>{category[`name_${language}`]}</td>
							<td>
								<ul>
									<li><Link to={`/admin/category/${category.id}`}><button>{strings[language].buttonEdit}</button></Link></li>
									<li><button onClick={() => handleDelete(category.id)}>{strings[language].buttonDelete}</button></li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</DataTable>
		</>
	);
};

export default AdminCategoryList;