import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

/* --- Components --- */
import Profile from './profile'

/* --- Styled --- */
import { UserCard } from '../styles/styled_user_card'
<<<<<<< Updated upstream
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/users_actions'
=======
>>>>>>> Stashed changes

/* --- Strings --- */
import strings from './strings';

const UserPage = () => {
<<<<<<< Updated upstream
	const dispatch = useDispatch()
	const language = useSelector(state => state.globalReducer.language)

	useEffect(() => {
		dispatch(getUser());
	}, [])

=======
>>>>>>> Stashed changes
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
