import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleActiveProduct, getProductsByName, getProducts } from '../../../redux/actions/products_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import { Link } from 'react-router-dom';
import SearchBar from '../../search_bar';
import { useToasts } from 'react-toast-notifications';
import strings from './strings';

const AdminProductList = ({ products }) => {
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const { addToast } = useToasts();

	const [orderSort, setOrderSort] = useState({
		id: 'ASC',
		name: 'ASC',
		stock: 'ASC'
	})

	const handleDelete = (prod) => {
		if (window.confirm(`${strings[language].swDeleteTitle} ${prod.name}?`)) {
			dispatch(deleteProduct(prod.id));
			addToast(strings[language].toastProductDeleted, { appearance: 'success' })
		}
	}

	const handleInput = (ev) => {
		ev.persist();
		dispatch(toggleActiveProduct(ev.target.name))
	}

	const handleSort = (ev) => {
		if (orderSort.hasOwnProperty(ev.target.id)) {
			const object = { ...orderSort }
			object[ev.target.id] = object[ev.target.id] === 'ASC' ? 'DESC' : 'ASC'
			for (const key in object) {
				let element = document.getElementById(key);
				if (ev.target.id === key) {
					object[element.id] === 'ASC' ? element.classList.replace('up', 'down') : element.classList.replace('down', 'up')
					element.classList.toggle('active', true)
				} else {
					element.classList.remove('active');
				}
			}
			setOrderSort(object)
			dispatch(getProducts({ name: ev.target.id, order: object[ev.target.id] }))
		}
	}

	return (
		<>
			<h1 className='admin-h1'>{strings[language].title}</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to="/admin/product"><Btn className="btn-ppal">{strings[language].addProduct}</Btn></Link>
				<SearchBar />
			</div>
			<DataTable>
				<thead>
					<tr onClick={handleSort}>
						<td id="id" className="cell-small icon down active">ID</td>
						<td id="name" className="icon down">{strings[language].tableTitle}</td>
						<td id="stock" className="cell-small icon down">Stock</td>
						<td className="cell-small">Visible</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{products && products.map(prod => (
						<tr key={prod.id}>
							<td>{prod.id}</td>
							<td>{prod.name}</td>
							<td>{prod.stock}</td>
							<td><input type="checkbox" checked={prod.is_active} onChange={handleInput} name={prod.id} /></td>
							<td>
								<ul>
									<li><Link to={`/admin/product/${prod.id}/stock`}><button>Stock</button></Link></li>
									<li><Link to={`/admin/product/${prod.id}`}><button>{strings[language].tableEditButton}</button></Link></li>
									<li><button onClick={() => handleDelete(prod)}>{strings[language].tableDeleteButton}</button></li>
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