import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PrevButton, NextButton } from "./Buttons";

//Assets
import Cyberpunk from '../../assets/img/slider_img/Cyberpunk.png';
import FFVII from '../../assets/img/slider_img/FFVII.jpg';
import Fifa2021 from '../../assets/img/slider_img/Fifa2021.jpg';
import cart from '../../assets/img/cart.svg';
import strings from './strings'

//Styles
import { StyledCarousel } from '../styles/styled_carousel';
import { Btn, StyledSVG } from '../styles/styled_global';
import Fade from 'react-reveal/Fade'

//Embla
import { useEmblaCarousel } from 'embla-carousel/react'
import { useRecursiveTimeout } from "./useRecursiveTimeout";
const AUTOPLAY_INTERVAL = 3500;

const Carousel = () => {
	const [viewportRef, embla] = useEmblaCarousel({ loop: true, speed: 5 });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on("select", onSelect);
		onSelect();
	}, [embla, onSelect]);


	const autoplay = useCallback(() => {
		if (!embla) return;
		if (embla.canScrollNext()) {
			embla.scrollNext();
		} else {
			embla.scrollTo(0);
		}
	}, [embla]);

	const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		embla.on("select", onSelect);
		embla.on("pointerDown", stop);
	}, [embla, onSelect, stop]);

	useEffect(() => {
		play();
	}, [play]);

	return (
		<StyledCarousel>
			<Fade big>
				<div className="embla">
					<div className="embla__viewport" ref={viewportRef}>
						<div className="embla__container">
							<div className="embla__slide">
								<div className="embla__slide__inner">
									<img className="embla__slide__img" src={FFVII} alt="A cool cat." />
									<div className="embla__slide__detail">
										<div className="slide__details__left">
											<h3 className="slide__title">Final Fantasy VII</h3>
										</div>
										<div className="slide__details__right">
											<span className="slide__discount">-20%</span>
											<span className="slide__price">$10.99</span>
											<Btn className="btn btn-ppal btn-img slide__btn">
												{s.addToCart}
												<StyledSVG src={cart} />
											</Btn>
										</div>
									</div>
								</div>
							</div>
							<div className="embla__slide">
								<div className="embla__slide__inner">
									<img className="embla__slide__img" src={Cyberpunk} alt="A cool cat." />
									<div className="embla__slide__detail">
										<div className="slide__details__left">
											<h3 className="slide__title">Cyberpunk 2077</h3>
										</div>
										<div className="slide__details__right">
											<span className="slide__discount">-15%</span>
											<span className="slide__price">$1050.99</span>
											<Btn className="btn btn-ppal btn-img slide__btn">
												{s.addToCart}
												<StyledSVG src={cart} />
											</Btn>
										</div>
									</div>
								</div>
							</div>
							<div className="embla__slide">
								<div className="embla__slide__inner">
									<img className="embla__slide__img" src={Fifa2021} alt="A cool cat." />
									<div className="embla__slide__detail">
										<div className="slide__details__left">
											<h3 className="slide__title">Fifa 2021</h3>
										</div>
										<div className="slide__details__right">
											<span className="slide__discount">-10%</span>
											<span className="slide__price">$0.99</span>
											<Btn className="btn btn-ppal btn-img slide__btn">
												{s.addToCart}
												<StyledSVG src={cart} />
											</Btn>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
					<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
				</div>
			</Fade>
		</StyledCarousel>
	);
};

export default Carousel;