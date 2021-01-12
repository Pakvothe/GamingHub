import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from "react-star-ratings";
import ShowMoreText from 'react-show-more-text';
import { Btn, StyledTitle } from '../styles/styled_global';
import { StyledReviews } from '../styles/styled_reviews';
import strings from './strings'
import { getProduct, getReviews } from '../../redux/actions/products_actions';

function Reviews({ id }) {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getReviews(id))
	}, [])

	const theme = useSelector(state => state.globalReducer.theme)
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const reviews = useSelector(state => state.productsReducer.reviews.list)

	const [showMore, setShowMore] = useState(false);
	const [loading, setLoading] = useState(false);

	const filters = {
		recent: {
			name: 'updatedAt',
			order: 'DESC'
		},
		high: {
			name: 'score',
			order: 'DESC'
		},
		low: {
			name: 'score',
			order: 'ASC'
		}

	}

	const handleClick = () => {
		setLoading(true);
		const delay = new Promise(resolve => {
			setTimeout(() => resolve('finish'), 500);
		})
			.then(() => {
				setShowMore(prev => !prev)
				setLoading(false);
			})
	}

	const handleFilter = (ev) => {
		let eventoId = ev.target.id // Porque dio problemas, lo guardamos en un closure
		for (const key in filters) {
			let element = document.getElementById(key);
			if (eventoId === key) {
				element.classList.toggle('filter__selected', true)
			} else {
				element.classList.remove('filter__selected');
			}
		}
		dispatch(getReviews(id, { name: filters[eventoId].name, order: filters[eventoId].order }))
	}

	// if (reviews.length === 0) return <></>;

	return (
		<StyledReviews>
			<StyledTitle><span>{s.reviews}</span></StyledTitle>
			{reviews.length === 0 && <h3 className="text-center">{s.noReviews}</h3>}
			{!!reviews.length && <>
				<p className="reviews__filter" onClick={handleFilter}>{s.order}
					<button id="recent" className="filter__recent filter__selected">{s.recent}</button>
					<button id="high" className="filter__high">{s.higher}</button>
					<button id="low" className="filter__low">{s.lower}</button>
				</p>
				<div className="reviews__container">
					{reviews.slice(0, showMore ? reviews.length : 4).map((review, i) => (
						<div className="review" key={i}>
							<p className="review__username">{review.user.first_name}</p>
							<span className="review__stars">
								<StarRatings
									rating={review.score}
									starRatedColor={theme === 'light' ? 'var(--clr-dark)' : 'var(--clr-primary)'}
									starDimension="1.75em"
									starSpacing="0"
								/>
							</span>
							<ShowMoreText
								lines={8}
								more={s.more}
								less={s.less}
								className='review__description'
								expanded={false}
							>
								{review.description}
							</ShowMoreText>
						</div>
					))}

					{reviews.length > 4 && <div className="w-100 text-center">
						<Btn className="btn btn-ppal" onClick={handleClick}>
							{loading && <i className="mr-1 fas fa-circle-notch fa-spin"></i>}
							{showMore ? s.lessReviews : s.allReviews}...
						</Btn>
					</div>}
				</div>
			</>}
		</StyledReviews>
	)
}

export default Reviews