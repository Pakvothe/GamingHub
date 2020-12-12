import axios from 'axios';
import { GET_CATEGORIES, ERROR } from './../constants';

const { REACT_APP_API_URL } = process.env;

export const getCategories = () => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API_URL}/products/categories`)
			.then((categories) => {
				dispatch(
					{
						type: GET_CATEGORIES,
						payload: categories.data
					}
				)
			})
			.catch(err => {
				dispatch({
					type: ERROR
				})
			})
	}
}