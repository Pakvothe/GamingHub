import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

/* --- Components --- */
import Profile from './profile'

/* --- Styled --- */
import { UserCard } from '../styles/styled_user_card'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/actions/users_actions'

const UserPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUser());
	}, [])

	return (
		<UserCard>
			<ul>
				<li><Link to="/">Editar Perfil</Link></li>
				<li><Link to="/">Mis Compras</Link></li>
				<li><Link to="/">Ayuda</Link></li>
			</ul>
			<Profile />
		</UserCard>
	)
}

export default UserPage;
