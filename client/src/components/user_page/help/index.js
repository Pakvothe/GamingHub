import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProfileHelp } from '../../styles/styled_profile';
import strings from './strings';
import Fade from 'react-reveal/Fade';

const HelpUser = () => {
	const language = useSelector((state) => state.globalReducer.language);
	const s = strings[language];
	return (
		<Fade>
			<ProfileHelp>
				<h2>{s.title}</h2>
				<p>{s.text}</p>
				<a href='mailto:soygaminghub@gmail.com?Subject=User%20Help'>soygaminghub@gmail.com</a>
				<Link className='back' to='/user'>{s.volver}</Link>
			</ProfileHelp>
		</Fade>
	)
}

export default HelpUser;