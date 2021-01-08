import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

/* --- Components --- */
import Profile from './profile'

/* --- Styled --- */
import { UserCard } from '../styles/styled_user_card'

/* --- Strings --- */
import strings from './strings';

const UserPage = () => {

	const language = useSelector(state => state.globalReducer.language)

	return (
		<UserCard>
			<ul>
				<li><Link to="/edit">{strings[language].edit} </Link></li>
				<li><Link to="/orders">{strings[language].orders} </Link></li>
				<li><Link to="/">{strings[language].help} </Link></li>
			</ul>
			<Profile />
		</UserCard>
	)
}

export default UserPage;
