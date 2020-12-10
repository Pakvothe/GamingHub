import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProductForm from '../admin_product_form/';
import SearchBar from '../admin_search_bar/'

const AdminProductContainer = () => {
	const [state, setState] = useState({
		show_form: false,
		show_products: false
	});

	const handleForm = () => {
		setState({
			show_form: true,
			show_products: false
		}
		)
	}

	const handleProduct = () => {
		setState({
			show_form: false,
			show_products: true
		})
	}

	const showForm = state.show_form;
	const showProducts = state.show_products;
	return (
		<div>
			<SearchBar />
			<div>
				<button onClick={handleProduct}>Mostrar Todos</button>
				<button onClick={handleForm}>Agregar Producto</button>
			</div>
			{
				showForm ? (<ProductForm />) : showProducts ? (<h1>list</h1>) : null
			}
		</div>
	)
}

export default AdminProductContainer;
