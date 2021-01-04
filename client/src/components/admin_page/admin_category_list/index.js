import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { deleteCategory } from '../../../redux/actions/categories_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import Swal from 'sweetalert2';

const AdminCategoryList = ({ categories, language }) => {
	const dispatch = useDispatch();
	const handleDelete = (id) => {

		Swal.fire({
			heightAuto: false,
			title: 'Confirm!',
			text: 'Category deleted.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success',
					dispatch(deleteCategory(id))
				)
			}
		})
	}

	return (
		<>
			<Link to="/admin/category"><Btn className="btn-ppal" >Agregar Categoria</Btn></Link>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">ID</td>
						<td>Nombre</td>
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
									<li><Link to={`/admin/category/${category.id}`}><button>Editar</button></Link></li>
									<li><button onClick={() => handleDelete(category.id)}>Eliminar</button></li>
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