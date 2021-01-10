import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from "react-star-ratings";
import ShowMoreText from 'react-show-more-text';
import { Btn, StyledTitle } from '../styles/styled_global';
import { StyledReviews } from '../styles/styled_reviews';
import strings from './strings'

function Reviews({ reviews }) {
	const theme = useSelector(state => state.globalReducer.theme)
	const language = useSelector(state => state.globalReducer.language)
	const [showMore, setShowMore] = useState(false);
	const [loading, setLoading] = useState(false);

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

	return (
		<StyledReviews>
			<StyledTitle><span>{strings[language].reviews}</span></StyledTitle>
			<p className="reviews__filter">{strings[language].order}
				<button className="filter__recent filter__selected">{strings[language].recent}</button>
				<button className="filter__high">{strings[language].higher}</button>
				<button className="filter__low">{strings[language].lower}</button>
			</p>
			<div className="reviews__container">
				{
					!!reviews.length && reviews.slice(0, showMore ? reviews.length : 4).map((review, i) => (
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
								more={strings[language].more}
								less={strings[language].less}
								className='review__description'
								expanded={false}
							>
								{review.description}
							</ShowMoreText>
						</div>
					))
				}
				<div className="w-100 text-center">
					<Btn className="btn btn-ppal" onClick={handleClick}>
						{loading && <i className="mr-1 fas fa-circle-notch fa-spin"></i>}
						{showMore ? strings[language].lessReviews : strings[language].moreReviews}...
						</Btn>
				</div>
			</div>
		</StyledReviews>
	)
}

export default Reviews