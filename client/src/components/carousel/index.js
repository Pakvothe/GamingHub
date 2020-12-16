import React from 'react';
import { StyledCarousel } from "../styles/styled_carousel.js";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
	return (
		<StyledCarousel>
			<Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={350} showStatus={false}>
				<div>
					<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/final-fantasy-vii-remake-1879909.jpg" />
					<p className="legend">Final Fantasy VII remake</p>
				</div>
				<div>
					<img src="https://wallpapercave.com/wp/wp6710683.jpg" />
					<p className="legend">FIFA 21</p>
				</div>
				<div>
					<img src="https://images5.alphacoders.com/927/thumb-1920-927025.png" />
					<p className="legend">Cyberpunk 2077</p>
				</div>
			</Carousel>
		</StyledCarousel>
	);
};

export default DemoCarousel;