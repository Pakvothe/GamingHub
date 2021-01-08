import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import StarRatings from "react-star-ratings";
import { Btn, Flex, FormStyled } from '../../styles/styled_global';
import queryString from 'query-string';
import { BEARER } from '../../../redux/constants';
import { useToasts } from 'react-toast-notifications'

const { REACT_APP_API_URL } = process.env;

const ReviewForm = () => {
	const theme = useSelector(state => state.globalReducer.theme);
	const location = useLocation();
	const history = useHistory();
	const { id } = useParams();
	const { game } = queryString.parse(location.search);
	const { addToast } = useToasts()

	const [review, setReview] = useState({
		score: 0,
		description: ''
	});

	const setNewRating = (rating) => setReview({
		...review,
		score: rating
	});

	const handleInput = (ev) => {
		setReview({
			...review,
			description: ev.target.value
		})
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		axios.post(`${REACT_APP_API_URL}/products/${id}/review`, review, BEARER())
			.then(() => {
				addToast('Your review was sent', {
					appearance: 'success'
				})
				history.push('/orders')
			})
			.catch(() => {
				addToast('Ocurrió un error al enviar tu review. Intenta de nuevo', {
					appearance: 'error'
				})
			})
	}

	return (
		<>
			<h2>Deja tu opinión sobre {game}</h2>
			<Flex>
				<FormStyled onSubmit={handleSubmit} className="text-center">
					<div>
						<span className="mr-1">Puntaje:</span>
						<StarRatings
							rating={review.score}
							name="ratingStars"
							isSelectable={true}
							changeRating={setNewRating}
							starRatedColor={theme === 'light' ? 'var(--clr-dark)' : 'var(--clr-primary)'}
							starDimension="1.5em"
							starSpacing="0"
							starHoverColor='var(--clr-primary)'
						/>
					</div>
					<label className="mt-1">
						<span>Opinión</span>
						<textarea onChange={handleInput} value={review.description}></textarea>
					</label>
					<Btn className="btn btn-ppal">Enviar</Btn>
				</FormStyled>
			</Flex>
		</>
	)
}

export default ReviewForm