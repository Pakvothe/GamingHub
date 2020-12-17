import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCarousel } from '../styles/styled_carousel.js';
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
	return (
		<StyledCarousel>
			<Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={450} showStatus={false}>
				<div>
					<img src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/final-fantasy-vii-remake-1879909.jpg' />
					<Link to='/products/1' className='legend link-styles'>Final Fantasy VII Remake</Link>
				</div>
				<div>
					<img src='https://wallpapercave.com/wp/wp6710683.jpg' />
					<Link to='/products/2' className='legend link-styles'>FIFA 21</Link>
				</div>
				<div>
					<img src='https://images5.alphacoders.com/927/thumb-1920-927025.png' />
					<Link to='/products/3' className='legend link-styles'>Cyberpunk 2077</Link>
				</div>
			</Carousel>
		</StyledCarousel>
	);
};

export default DemoCarousel;