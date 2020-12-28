import React, { useState } from 'react'
// import Pagination from '../pagination';
import ProductCard from '../product_card'
import { CatalogStyled } from './../styles/styled_catalog';
import strings from './strings';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/products_actions';

const Catalog = ({ products, isLoading, error, language }) => {

	const count = useSelector(state => state.productsReducer.products.count)
	const dispatch = useDispatch()

	const [currentPage, setCurrentPage] = useState(0)
	if (isLoading) return <h1 className="main-title">{strings[language].loading}</h1>;

	if (error) return <h1 className="main-title">ERROR</h1>

	if (!products.length) return <h1 className="main-title">{strings[language].no_products}</h1>

	const handlePageChange = (ev) => {
		const offset = 8 * ev.selected
		setCurrentPage(ev.selected);
		dispatch(getProducts({ query: 'stock', order: 'DESC', limit: 8, offset }))
	}

	return (
		<>
			<CatalogStyled id="catalog" >
				{products.map(product => {
					if (product.is_active) {
						return <ProductCard language={language} game={product} key={product.id} />
					}
				})}
			</CatalogStyled>
			<ReactPaginate
				forcePage={currentPage}
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				breakClassName={'break-me'}
				pageCount={Math.ceil(count / 8)}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageChange}
				containerClassName={'pagination'}
				subContainerClassName={'pages pagination'}
				activeClassName={'active'}
			/>
		</>
	);
}

export default Catalog;