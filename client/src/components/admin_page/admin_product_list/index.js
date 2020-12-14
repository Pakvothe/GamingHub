import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/actions/products_actions';
import SearchBar from '../admin_search_bar';
import { Btn, DataTable } from '../../styles/styled_global';
import { Link } from 'react-router-dom';

const AdminProductList = ({ products }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		console.log(id);
		dispatch(deleteProduct(id));
		alert('Product deleted.');
	}

	return (
		<>
			{/* <SearchBar /> */}
			<Link to="/admin/product"><Btn className="btn-ppal" >Agregar Producto</Btn></Link>
			<DataTable>
				<thead>
					<tr>
						<td>ID</td>
						<td>Título</td>
						<td>Stock</td>
						<td>Visible</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{products && products.map(prod => (
						<tr key={prod.id}>
							<td>{prod.id}</td>
							<td>{prod.name}</td>
							<td>{prod.stock}</td>
							<td><input type="checkbox" checked={prod.is_active} /></td>
							<td>
								<ul>
									<li><Link to={`/admin/product/${prod.id}`}><button>Editar</button></Link></li>
									<li><button onClick={() => handleDelete(prod.id)}>Eliminar</button></li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</DataTable>

		</>
	);
};

export default AdminProductList;