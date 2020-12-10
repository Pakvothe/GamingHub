import { CHANGE_LANGUAGE } from './../constants';

export const changeLanguage = (payload) => {
	return {
		type: CHANGE_LANGUAGE,
		payload
	}
}
