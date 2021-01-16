import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import { StyledAbout } from '../styles/styled_about';
import Fade from 'react-reveal/Fade';

//Assets
import strings from './strings';

//Pictures
import fran from './img/franPhoto.jpeg';
import nacho from './img/nachoPhoto.png';
import emi from './img/emiPhoto.png';
import tincho from './img/tinchoPhoto.jpg';
import paco from './img/pacoPhoto.jpg';

const AboutUs = () => {
	const theme = useSelector(state => state.globalReducer.theme);
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	return (
		<Fade big>
			<StyledAbout theme={theme}>
				<h2>{s.title}</h2>
				<p>{s.text}</p>
				<div className='about_coders_container'>
					<div className='about_coder'>
						<h3>Ignacio Contreras</h3>
						<div>
							<img alt='profile' src={nacho} />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/ignacio-contreras/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/nc-devw' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h3>Emiliano Alfonso</h3>
						<div>
							<img alt='profile' src={emi} />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/emiliano-alfonso/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/Aglowkeys' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h3>Franco Ortiz</h3>
						<div>
							<img alt='profile' src={paco} />
						</div>
						<div className='about_social'>
							<a href='https://github.com/Pakvothe' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://www.linkedin.com/in/franco-david-ortiz/' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h3>Franco Fiori</h3>
						<div>
							<img alt='profile' src={fran} />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/franco-fiori-fullstack/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/franfiori29' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
					<div className='about_coder'>
						<h3>Martín Sánchez</h3>
						<div>
							<img alt='profile' src={tincho} />
						</div>
						<div className='about_social'>
							<a href='https://www.linkedin.com/in/martin-sanchez-6973121b7/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a>
							<a href='https://github.com/tinsanchez00' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
						</div>
					</div>
				</div>
			</StyledAbout>
		</Fade>
	)
}

export default AboutUs
