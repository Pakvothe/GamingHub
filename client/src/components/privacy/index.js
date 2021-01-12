import React from 'react';
import { useSelector } from 'react-redux';
import PrivacyEN from './en'
import PrivacyES from './es'
import { StyledTerms } from '../styles/styled_global';
import strings from './strings';

const Privacy = () => {
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	return (
		<StyledTerms>
			<h2>{s.title}</h2>
			<div>
				{
					language === 'es' ? <PrivacyES /> : <PrivacyEN />
				}
			</div>
		</StyledTerms>
	)
}

export default Privacy
