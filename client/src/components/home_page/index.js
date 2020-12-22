import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/* --- Components --- */
import Catalog from '../catalog'

/* --- Actions --- */
import { getFilterProducts, getProducts, emptyFilter } from '../../redux/actions/products_actions'
import { getCategories } from '../../redux/actions/categories_actions'

/* --- Utils --- */
import strings from './strings';
import SelectCategories from '../select_categories'
import arrowUp from '../../assets/img/arrow-up.svg';

/* --- Styles --- */
import { StyledSVG } from '../styles/styled_global';

const HomePage = () => {

	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const products = useSelector(state => state.productsReducer.products.productList);
	const productsFilter = useSelector(state => state.productsReducer.productsFilter.productList);
	const categories = useSelector(state => state.categoriesReducer.categories.list);
	const loadingProducts = useSelector(state => state.productsReducer.products.isLoading);
	const errorProducts = useSelector(state => state.productsReducer.products.error);

	const scrollButton = useRef();

	useEffect(() => {
		if (!products.length) {
			dispatch(getProducts());
		}
		if (!categories.length) {
			dispatch(getCategories());
		}
	}, [])

	const handleSelect = (e) => {
		if (e.target.value === 'todos') {
			return dispatch(emptyFilter())
		}
		dispatch(getFilterProducts(e.target.value));
	}

	window.onscroll = function () { scrollFunction() };
	const scrollDistance = 700;

	function scrollFunction() {
		if (scrollButton.current) {
			if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
				scrollButton.current.style.pointerEvents = 'auto';
				scrollButton.current.style.opacity = '100';
			} else {
				scrollButton.current.style.pointerEvents = 'none';
				scrollButton.current.style.opacity = '0';
			}
		}
	}
	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<div>
			<h1 className="main-title">{strings[language].main_header}</h1>
			<SelectCategories language={language} categories={categories} handleSelect={handleSelect} />
			<Catalog products={productsFilter.length ? productsFilter : products}
				language={language} isLoading={loadingProducts} error={errorProducts} />
			<button ref={scrollButton} className="button__top" onClick={scrollToTop}>
				<StyledSVG src={arrowUp} />
			</button>
		</div>
	)
}

export default HomePage;
