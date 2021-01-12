import React from 'react';
import { useSelector } from 'react-redux';
import TermsEN from './en'
import TermsES from './es'
import { StyledTerms } from '../styles/styled_global';
import strings from './strings';

const Terms = () => {
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	return (
		<StyledTerms>
			<h2>{s.title}</h2>
			<div>
				{
					language === 'es' ? <TermsES /> : <TermsEN />
				}
			</div>
		</StyledTerms>
	)
}

export default Terms
