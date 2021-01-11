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
	const s = strings[language];
	const { addToast } = useToasts();

	const [orderSort, setOrderSort] = useState({
		id: 'ASC',
		name: 'ASC',
		stock: 'ASC'
	})

	const handleDelete = (prod) => {
		if (window.confirm(`${s.swDeleteTitle} ${prod.name}?`)) {
			dispatch(deleteProduct(prod.id));
			addToast(s.toastProductDeleted, { appearance: 'success' })
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
			<h1 className='admin-h1'>{s.title}</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<Link to="/admin/product"><Btn className="btn-ppal mr-1">{s.addProduct}</Btn></Link>
					<Link to="/admin/product/offer/list"><Btn className="btn-ppal">{s.offers}</Btn></Link>
				</div>
				<SearchBar />
			</div>
			<DataTable>
				<thead>
					<tr onClick={handleSort}>
						<th id="id" className="cell-small icon down active">ID</th>
						<th id="name" className="icon down">{s.tableTitle}</th>
						<th id="stock" className="cell-small icon down">Stock</th>
						<th className="cell-small">Visible</th>
						<th></th>
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
									<li><Link to={`/admin/product/${prod.id}/offer/new`}><button>{s.offer}</button></Link></li>
									<li><Link to={`/admin/product/${prod.id}/stock`}><button>Stock</button></Link></li>
									<li><Link to={`/admin/product/${prod.id}`}><button>{s.tableEditButton}</button></Link></li>
									<li><button onClick={() => handleDelete(prod)}>{s.tableDeleteButton}</button></li>
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