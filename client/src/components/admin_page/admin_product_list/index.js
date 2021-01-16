import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleActiveProduct, getProducts } from '../../../redux/actions/products_actions';
import { Btn, DataTable, FormStyled } from '../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import swals from '../../../utils/swals';
import strings from './strings';
import { useEffect } from 'react';

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
	const [searchInput, setSearchInput] = useState('');
	const [filtered, setFiltered] = useState([]);
	const [all, setAll] = useState(true);

	const handleDelete = (prod) => {
		swals.FIRE('warning', s.swDeleteTitle, s.swDeleteText, s.swDeleteButtonConfirm, true, s.swDeleteButtonCancel, () => {
			dispatch(deleteProduct(prod.id))
				.then(() => {
					addToast(s.toastProductDeleted, { appearance: 'success' })
				})
				.catch(() => {
					addToast(s.err, { appearance: 'error' })
				})
		})
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

	useEffect(() => {
		if (!searchInput) {
			setAll(true);
			setFiltered([])
		} else {
			setAll(false);
			setFiltered(products.filter(product => product.name.toLowerCase().includes(searchInput)));
		}
	}, [searchInput, products])

	const handleSearch = (ev) => {
		let input = '';
		if (ev.target.value) input = ev.target.value.toLowerCase();
		setSearchInput(input);
	}

	return (
		<>
			<h1 className='admin-h1'>{s.title}</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<Link to="/admin/product"><Btn className="btn-ppal mr-1">{s.addProduct}</Btn></Link>
					<Link to="/admin/product/offer/list"><Btn className="btn-ppal">{s.offers}</Btn></Link>
				</div>
				<FormStyled onSubmit={(ev) => { ev.preventDefault() }}>
					<input className="adminInput" value={searchInput} onChange={handleSearch} placeholder={s.productSearch} />
				</FormStyled>
			</div>
			<DataTable className="responsiveTable">
				<Thead>
					<Tr onClick={handleSort}>
						<Th id="id" className="cell-small icon down active">ID</Th>
						<Th id="name" className="icon down">{s.tableTitle}</Th>
						<Th id="stock" className="cell-small icon down">Stock</Th>
						<Th className="cell-small">Visible</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{(!all ? filtered : products).map(prod => (
						<Tr key={prod.id}>
							<Td>{prod.id}</Td>
							<Td>{prod.name}</Td>
							<Td>{prod.stock}</Td>
							<Td><input type="checkbox" checked={prod.is_active} onChange={handleInput} name={prod.id} /></Td>
							<Td>
								<ul>
									<li><Link to={`/admin/product/${prod.id}/offer/new`}><button>{s.offer}</button></Link></li>
									<li><Link to={`/admin/product/${prod.id}/stock`}><button>Stock</button></Link></li>
									<li><Link to={`/admin/product/${prod.id}`}><button>{s.tableEditButton}</button></Link></li>
									<li><button onClick={() => handleDelete(prod)}>{s.tableDeleteButton}</button></li>
								</ul>
							</Td>
						</Tr>
					))}
				</Tbody>
			</DataTable>
		</>
	);
};

export default AdminProductList;