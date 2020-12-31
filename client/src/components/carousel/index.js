import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCarousel } from '../styles/styled_carousel.js';
import { Carousel } from 'react-responsive-carousel';
import Cyberpunk from '../../assets/img/slider_img/Cyberpunk.png';
import FFVII from '../../assets/img/slider_img/FFVII.jpg';
import Fifa2021 from '../../assets/img/slider_img/Fifa2021.jpg';

const DemoCarousel = () => {
	return (
		<StyledCarousel>
			<Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={450} showStatus={false} dynamicHeight={true}>
				<div className="slider__img-container">
					<Link to='/products/1' className='slider__link' />
					<img src={FFVII} />
				</div>
				<div className="slider__img-container">
					<Link to='/products/2' className="slider__link" />
					<img src={Fifa2021} />
				</div>
				<div className="slider__img-container">
					<Link to='/products/3' className='slider__link' />
					<img src={Cyberpunk} />
				</div>
			</Carousel>
		</StyledCarousel>
	);
};

export default DemoCarousel;