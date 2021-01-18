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
import { Link, useHistory } from 'react-router-dom';
import { StyledLoader } from './../styles/styled_global';

const AUTOPLAY_INTERVAL = 4500;

const Carousel = ({ products, product = null }) => {
	const [viewportRef, embla] = useEmblaCarousel({ loop: true, speed: 5 });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const dispatch = useDispatch();
	const stock = useSelector(state => state.cartReducer.cart.stock);
	const { addToast } = useToasts();
	const history = useHistory();

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
		if (!product) {
			play();
		}
	}, [play, product]);

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
			dispatch(editStock(payload))
			addToast(`${product.name} ${s.toast}`, { appearance: 'success' });

		} else {
			dispatch(toggleCart());
		}
	};

	const handleSlideClick = (ev, id) => {
		let slide = ev.target;
		if (slide.timerOn) {
			history.push(`/products/${id}`);
		}
	}
	const handleSlideDown = (ev) => {
		let slide = ev.target;
		if (!slide.timerOn) {
			slide.timerOn = true;
			setTimeout(() => {
				slide.timerOn = false;
			}, 90);
		}
	}
	if ((products && !products.length) || (product && Object.keys(product).length === 0)) return (
		<div style={{ height: '60vh' }}>
			<StyledLoader
				active={true}
				spinner
				text={s.loading}
				className='loading__overlay'
				classNamePrefix='loading__'
			></StyledLoader>
		</div>)
	return (
		<StyledCarousel full={products ? false : true}>
			<Fade big>
				<div className="embla">
					<div className="embla__viewport" ref={viewportRef}>
						<div className="embla__container">
							{products && products.map(prod =>
								<div className="embla__slide" key={prod.id} >
									<div className="embla__slide__inner">
										<img className="embla__slide__img" src={prod.banner_image} alt={prod.name} onMouseDown={(ev) => handleSlideDown(ev)} onClick={(ev) => handleSlideClick(ev, prod.id)} />
										<div className="embla__slide__detail">
											<div className="slide__details__left">
												<Link to={`/products/${prod.id}`}><h3 className="slide__title">{prod.name}</h3></Link>
											</div>
											<div className="slide__details__right">
												<span className="slide__discount">-{100 - Math.round(((prod.price / prod.real_price) * 100))}%</span>
												<span className="slide__price">${prod.price}</span>
												{prod.stock ?
													<Btn className="btn-ppal btn-img slide__btn" onClick={() => handleClick(prod)}  >
														{stock[prod.id] >= 0 ? s.already_in_cart : s.add_to_cart}
														<StyledSVG src={cart} />
													</Btn> : <Badge className="card__noStock error">Sin stock</Badge>}
											</div>
										</div>
									</div>
								</div>
							)}
							{product && product.images.map(image =>
								<div className="embla__slide" key={image.id} >
									<div className="embla__slide__inner">
										<img className="embla__slide__img" src={image.url} alt={`${product.name} ${image.id}`} />
									</div>
								</div>
							)}
						</div>
					</div>
					<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
					<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
				</div>
			</Fade>
		</StyledCarousel >
	);
};

export default Carousel;