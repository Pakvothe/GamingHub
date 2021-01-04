import React from 'react'
import { Link } from 'react-router-dom'

/* --- Components --- */
import Profile from './profile'

/* --- Styled --- */
import { UserCard } from '../styles/styled_user_card'

const UserPage = () => {
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
