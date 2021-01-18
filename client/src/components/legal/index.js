import React from 'react';
import { useSelector } from 'react-redux';
import LegalEN from './en'
import LegalES from './es'
import { StyledTerms } from '../styles/styled_global';
import Fade from 'react-reveal/Fade';
import strings from './strings';

const Legal = () => {
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	return (
		<StyledTerms>
			<Fade>
				<h2>{s.title}</h2>
				<div>
					{
						language === 'es' ? <LegalES /> : <LegalEN />
					}
				</div>
			</Fade>
		</StyledTerms>
	)
}

export default Legal
