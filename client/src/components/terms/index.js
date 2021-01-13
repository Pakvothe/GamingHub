import React from 'react';
import { useSelector } from 'react-redux';
import TermsEN from './en'
import TermsES from './es'
import { StyledTerms } from '../styles/styled_global';
import strings from './strings';
import Fade from 'react-reveal/Fade';

const Terms = () => {
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	return (
		<StyledTerms>
			<Fade>
				<h2>{s.title}</h2>
				<div>
					{
						language === 'es' ? <TermsES /> : <TermsEN />
					}
				</div>
			</Fade>
		</StyledTerms>
	)
}

export default Terms
