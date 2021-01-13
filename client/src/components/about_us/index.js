import React from 'react';
import { useSelector } from 'react-redux';

//styles
import { StyledAbout } from '../styles/styled_about';
import Pulse from 'react-reveal/Pulse';

//assets
import strings from './strings';

const AboutUs = () => {
	const theme = useSelector(state => state.globalReducer.theme);
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	return (
		<Pulse>
			<StyledAbout theme={theme}>
				<h2>{s.title}</h2>
				<div className='about_text'>
					<p>{s.text}</p>
				</div>
				<div className='about_coders_container'>
					<div className='about_coder'>
						<h4>Ignacio Contreras</h4>
						<div>
							<img src='https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad.jpg' />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/ignacio-contreras/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/nc-devw' target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h4>Emiliano Alfonso</h4>
						<div>
							<img src='https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad.jpg' />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/emiliano-alfonso/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/Aglowkeys' target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h4>Franco Ortiz</h4>
						<div>
							<img src='https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad.jpg' />
						</div>
						<div className='about_social'>
							<a href='https://github.com/Pakvothe' target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://www.linkedin.com/in/franco-david-ortiz/' target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h4>Franco Fiori</h4>
						<div>
							<img src='https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad.jpg' />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/franco-fiori-fullstack/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/franfiori29' target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h4>Martin Sanchez</h4>
						<div>
							<img src='https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad.jpg' />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/martin-sanchez-6973121b7/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/tinsanchez00' target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
				</div>
			</StyledAbout>
		</Pulse>
	)
}

export default AboutUs
