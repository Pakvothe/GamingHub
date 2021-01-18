import React from 'react'
import { useSelector } from 'react-redux'
/* --- Styled --- */
import { ProfileStyled } from '../../styles/styled_profile'

const Profile = () => {

	const user = useSelector(state => state.usersReducer.user.info)

	return (
		<ProfileStyled>
			<div>
				<div className="img-container">
					<img src={user.profile_pic || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"} alt="pic profile" />
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
