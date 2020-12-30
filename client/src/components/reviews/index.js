import React from 'react';
import { useSelector } from 'react-redux';
import StarRatings from "react-star-ratings";
import { StyledTitle } from '../styles/styled_global';
import { StyledReviews } from '../styles/styled_reviews';


function Reviews({ reviews }) {
	const theme = useSelector(state => state.globalReducer.theme)

	return (
		<StyledReviews>
			<StyledTitle><span>Reseñas sobre este juego</span></StyledTitle>
			<p className="reviews__filter">Ordenar por:
				<button className="filter__recent filter__selected">Recientes</button>
				<button className="filter__high">Más altas</button>
				<button className="filter__low">Más bajas</button>
			</p>
			<div className="reviews__container">
				{
					reviews.map(review => (
						<div className="review">
							<p className="review__username">{review.user.name}</p>
							<span className="review__stars">
								<StarRatings
									rating={review.score}
									starRatedColor={theme === 'light' ? 'var(--clr-dark)' : 'var(--clr-primary)'}
									starDimension="1.75em"
									starSpacing="0"
								/>
							</span>
							<p className="review__description">{review.description}</p>
						</div>
					))
				}
			</div>
		</StyledReviews>
	)
}

Reviews.defaultProps = {
	reviews: [
		{
			score: 5,
			date: '30-12-2020',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quae debitis quidem necessitatibus. Facere illo explicabo obcaecati nostrum natus quasi, id reprehenderit magnam ducimus sequi delectus animi unde! Dolores, eligendi?',
			product: {
				id: 2
			},
			user: {
				id: 1,
				name: 'Emi',
				mail: 'emi@emi.com'
			}
		},
		{
			score: 5,
			date: '30-12-2020',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quae debitis quidem necessitatibus. Facere illo explicabo obcaecati nostrum natus quasi, id reprehenderit magnam ducimus sequi delectus animi unde! Dolores, eligendi?',
			product: {
				id: 2
			},
			user: {
				id: 1,
				name: 'Emi',
				mail: 'emi@emi.com'
			}
		},
		{
			score: 1.5,
			date: '30-12-2020',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quae debitis quidem necessitatibus. Facere illo explicabo obcaecati nostrum natus quasi, id reprehenderit magnam ducimus sequi delectus animi unde! Dolores, eligendi?',
			product: {
				id: 2
			},
			user: {
				id: 1,
				name: 'Emi',
				mail: 'emi@emi.com'
			}
		},
		{
			score: 3,
			date: '30-12-2020',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quae debitis quidem necessitatibus. Facere illo explicabo obcaecati nostrum natus quasi, id reprehenderit magnam ducimus sequi delectus animi unde! Dolores, eligendi?',
			product: {
				id: 2
			},
			user: {
				id: 1,
				name: 'Emi',
				mail: 'emi@emi.com'
			}
		}
	]
}

export default Reviews