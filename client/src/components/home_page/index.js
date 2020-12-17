import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/* --- Components --- */
import Catalog from '../catalog'
import Carousel from '../carousel'

/* --- Actions --- */
import { getFilterProducts, getProducts, emptyFilter } from '../../redux/actions/products_actions'
import { getCategories } from '../../redux/actions/categories_actions'

/* --- Utils --- */
import strings from './strings';
import SelectCategories from '../select_categories'

const HomePage = () => {

	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const products = useSelector(state => state.productsReducer.products.productList);
	const productsFilter = useSelector(state => state.productsReducer.productsFilter.productList);
	const categories = useSelector(state => state.categoriesReducer.categoryList);
	const loadingProducts = useSelector(state => state.productsReducer.products.isLoading);
	const errorProducts = useSelector(state => state.productsReducer.products.error);

	useEffect(() => {
		if (!products.length) {
			dispatch(getProducts());
		}
		dispatch(getCategories());
	}, [])


	const handleSelect = (e) => {
		if (e.target.value === 'todos') {
			return dispatch(emptyFilter())
		}
		dispatch(getFilterProducts(e.target.value));
	}

	return (
		<div>
			<Carousel />
			<h1 className="main-title">{strings[language].main_header}</h1>
			<SelectCategories language={language} categories={categories} handleSelect={handleSelect} />
			<Catalog products={productsFilter.length && productsFilter || products} language={language} isLoading={loadingProducts} error={errorProducts} />
		</div>
	)
}

export default HomePage;
