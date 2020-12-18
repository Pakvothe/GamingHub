import React from 'react'

/* --- Styled --- */
import { ProfileStyled } from '../../styles/styled_profile'

const Profile = ({ user }) => {
	return (
		<ProfileStyled>
			<div>
				<div className="img-container">
					<img src={user.img} />
				</div>
			</div>
			<div>
				<h2>{user.first_name} {user.last_name}</h2>
				<p>{user.email}</p>
			</div>
		</ProfileStyled>
	)
}

Profile.defaultProps = {
	user: {
		first_name: 'Juancho',
		last_name: 'Perez',
		email: 'Juanchito@gmail.com',
		img: 'https://i.pinimg.com/564x/80/8d/d4/808dd40b74bba0ed00a2d7edf8631e58.jpg'
	}
}

export default Profile;
