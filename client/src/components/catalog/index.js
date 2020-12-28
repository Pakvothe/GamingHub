import React, { useEffect, useReducer, useState } from 'react'
// import Pagination from '../pagination';
import ProductCard from '../product_card'
import { CatalogStyled } from './../styles/styled_catalog';
import strings from './strings';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterProducts, getProducts } from '../../redux/actions/products_actions';
import { PaginationStyled } from '../styles/styled_pagination';
import { changeCurrentPage } from '../../redux/actions/global_actions';

const Catalog = ({ products, productsFilter, isLoading, error, language, limit }) => {
	const count = useSelector(state => state.productsReducer.count)
	const filter = useSelector(state => state.productsReducer.productsFilter.filter)
	const currentPage = useSelector(state => state.globalReducer.currentPage);
	const dispatch = useDispatch()


	if (isLoading) return <h1 className="main-title">{strings[language].loading}</h1>;

	if (error) return <h1 className="main-title">ERROR</h1>

	if (!products.length) return <h1 className="main-title">{strings[language].no_products}</h1>

	const handlePageChange = (ev) => {
		const offset = limit * ev.selected
		dispatch(changeCurrentPage(ev.selected));
		if (productsFilter.length) {
			dispatch(getFilterProducts(filter, { limit: limit, offset }))
		} else {
			dispatch(getProducts({ query: 'stock', order: 'DESC', limit: limit, offset }))
		}
	}
	return (
		<>
			<CatalogStyled id="catalog" >
				{productsFilter.length ? productsFilter.map(product => {
					if (product.is_active) {
						return <ProductCard language={language} game={product} key={product.id} />
					}
				}) : products.map(product => {
					if (product.is_active) {
						return <ProductCard language={language} game={product} key={product.id} />
					}
				})}
			</CatalogStyled>
			<PaginationStyled>
				<ReactPaginate
					forcePage={currentPage}
					pageCount={Math.ceil(count / limit)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageChange}
					previousLabel={strings[language].previous}
					nextLabel={strings[language].next}
					breakLabel={'...'}
					breakClassName={'break-me'}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
					disabledClassName={'disabled'}
					previousClassName={'controls'}
					nextClassName={'controls'}
				/>
			</PaginationStyled>
		</>
	);
}

export default Catalog;