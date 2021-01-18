import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

/* --- Components --- */
import Profile from './profile'

/* --- Styled --- */
import { UserCard } from '../styles/styled_user_card'

/* --- Strings --- */
import strings from './strings';

const UserPage = () => {

	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	return (
		<Fade>
			<UserCard>
				<ul>
					<li><Link to="/edit">{s.edit} </Link></li>
					<li><Link to="/orders">{s.orders} </Link></li>
					<li><Link to="/contact">{s.help} </Link></li>
				</ul>
				<Profile />
			</UserCard>
		</Fade>
	)
}

export default UserPage;
