import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'

/* --- Utils --- */
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'
import { getProducts } from '../../redux/actions/products_actions'

/* --- Styles --- */
import { StyledSVG } from '../styles/styled_global'
import { PaginationStyled } from '../styles/styled_pagination'

const Pagination = () => {
	// 	const count = useSelector(state => state.productsReducer.products.count)
	// 	const dispatch = useDispatch()

	// 	useEffect(() => {
	// 		if (count) {
	// 			setTotalPage(Math.ceil(count / 8))
	// 		}
	// 	}, [count])

	// 	const handleClick = (ev) => {
	// 		setCurrentPage(parseInt(ev.target.name));
	// 		dispatch(getProducts({ query: 'stock', order: 'DESC', limit: 8, offset: ev.target.value }))
	// 	}

	// 	const [totalRecords, setTotalRecords] = useState(0)
	// 	const [pageLimit, setPageLimit] = useState(8)
	// 	const [pageNeighbours, setPageNeighbours] = useState(1)
	// 	return (
	// 		<PaginationStyled>
	// 			<ul>
	// 				<li><button><StyledSVG src={arrowLeft} /></button></li>
	// 				<li><button name={1} value={limit * (currentPage - 1)} onClick={handleClick}>1</button></li>
	// 				<li><button name={2} value={limit * (currentPage - 1)} onClick={handleClick}>2</button></li>
	// 				<li><button name={3} value={limit * (currentPage - 1)} onClick={handleClick}>3</button></li>
	// 				<li><button><StyledSVG src={arrowRight} /></button></li>
	// 			</ul>
	// 		</PaginationStyled>
	// 	)
	// }

	// Pagination.propTypes = {
	// 	totalRecords: PropTypes.number.isRequired,
	// 	pageLimit: PropTypes.number,
	// 	pageNeighbours: PropTypes.number,
	// 	onPageChanged: PropTypes.func
};

export default Pagination
