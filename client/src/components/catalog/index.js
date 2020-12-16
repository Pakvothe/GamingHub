import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilterProducts, getProducts } from '../../redux/actions/products_actions';
import { getCategories } from '../../redux/actions/categories_actions';
import ProductCard from '../product_card'
import { CatalogStyled, SelectStyled } from './../styles/styled_catalog';
import strings from './strings';

const Catalog = () => {


	const [filter, setFilter] = useState(false);

	const language = useSelector(state => state.globalReducer.language);
	const products = useSelector(state => state.productsReducer.products.productList);
	const productsFilter = useSelector(state => state.productsReducer.productsFilter.productList);
	const categories = useSelector(state => state.categoriesReducer.categoryList);
	const loadingProducts = useSelector(state => state.productsReducer.products.isLoading);
	const errorProducts = useSelector(state => state.productsReducer.products.error);
	const [options, setOptions] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!products.length) {
			dispatch(getProducts());
		}
		dispatch(getCategories());
	}, [])

	useEffect(() => {
		if (categories.length > 0) {
			let reduce = categories.reduce((acc, category) => {
				acc.push({ value: category.id, label: category['name_' + language] });
				return acc;
			}, [])
			setOptions(reduce)
		}
	}, [categories])



	const handleChange = (e) => {
		if (e.target.value === 'todos') {
			return setFilter(false);
		}
		setFilter(true);
		dispatch(getFilterProducts(e.target.value));
	}

	return (
		<>
			<h1 className="main-title">{strings[language].main_header}</h1>
			<label className="label-select">
				<span>{strings[language].filter_category}</span>
				<SelectStyled onChange={handleChange}>
					<option value="todos">{strings[language].all}</option>
					{options && options.map(category => (
						<option key={category.value} value={category.label}>{category.label.toUpperCase()}</option>
					))}
				</SelectStyled>
			</label>
			<CatalogStyled>
				{loadingProducts && <h1>{strings[language].loading}</h1>}
				{!loadingProducts &&
					(filter && productsFilter.map(product => <ProductCard game={product} key={product.id} />))
					||
					!!Object.keys(products).length && products.map(product => {
						return product.is_active ? <ProductCard language={language} game={product} key={product.id} /> : null
					})
				}
				{errorProducts && <h1 style={{ margin: "20px", textAlign: "center" }}>{strings[language].no_products}</h1>}
			</CatalogStyled>
		</>
	);
}

export default Catalog;