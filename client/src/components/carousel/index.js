import React, { useCallback, useEffect, useState } from 'react';
import { PrevButton, NextButton } from "./Buttons";
import { useDispatch, useSelector } from 'react-redux';

//Assets
import cart from '../../assets/img/cart.svg';
import strings from './strings'

//Styles
import { StyledCarousel } from '../styles/styled_carousel';
import { Badge, Btn, StyledSVG } from '../styles/styled_global';
import Fade from 'react-reveal/Fade'

//Embla
import { useEmblaCarousel } from 'embla-carousel/react'
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import { addItemCart, editStock } from '../../redux/actions/cart_actions';
import { useToasts } from 'react-toast-notifications';
import { toggleCart } from '../../redux/actions/global_actions';

const AUTOPLAY_INTERVAL = 3500;

const Carousel = ({ products }) => {
	const [viewportRef, embla] = useEmblaCarousel({ loop: true, speed: 5 });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const dispatch = useDispatch();
	const stock = useSelector(state => state.cartReducer.cart.stock);
	const { addToast } = useToasts();

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

	const handleClick = (product) => {
		if (!stock[product.id] && stock[product.id] !== 0) {
			let gameToDispatch = { ...product }
			gameToDispatch.quantity = 1;
			dispatch(addItemCart(gameToDispatch));
			let payload = {
				id: product.id,
				quantity: 1,
				stock: product.stock
			}
			dispatch(editStock(payload));
			addToast(`${product.name} ${s.toast}`, { appearance: 'success' });

		} else {
			dispatch(toggleCart());
		}
	};

	return (
		<StyledCarousel>
			<Fade big>
				<div className="embla">
					<div className="embla__viewport" ref={viewportRef}>
						<div className="embla__container">
							{products.map(prod =>
								<div className="embla__slide" key={prod.id}>
									<div className="embla__slide__inner">
										<img className="embla__slide__img" src={prod.banner_image} alt={prod.name} />
										<div className="embla__slide__detail">
											<div className="slide__details__left">
												<h3 className="slide__title">{prod.name}</h3>
											</div>
											<div className="slide__details__right">
												<span className="slide__discount">-{100 - Math.round(((prod.price / prod.real_price) * 100))}%</span>
												<span className="slide__price">${prod.price}</span>
												{prod.stock ?
													<Btn className="btn-ppal btn-img slide__btn" onClick={() => handleClick(prod)}>
														{stock[prod.id] >= 0 ? s.already_in_cart : s.add_to_cart}
														<StyledSVG src={cart} />
													</Btn> : <Badge className="card__noStock error">Sin stock</Badge>}
											</div>
										</div>
									</div>
								</div>
							)}
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