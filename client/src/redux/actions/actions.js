import { CHANGE_LANGUAGE } from './../constants';

export const setLanguage = (payload) => {
	return {
		type: CHANGE_LANGUAGE,
		payload
	}
}