import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileHelp } from '../../styles/styled_profile';
import strings from './strings';

const HelpUser = () => {
	const language = useSelector((state) => state.globalReducer.language);
	const s = strings[language];
	return (
		<ProfileHelp>
			<h2>{s.title}</h2>
			<p>{s.text}</p>
			<a href='mailto:soygaminghub@gmail.com?Subject=User%20Help'>soygaminghub@gmail.com</a>
		</ProfileHelp>
	)
}

export default HelpUser;