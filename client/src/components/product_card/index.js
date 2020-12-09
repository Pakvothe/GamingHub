import React from 'react';
import {ProductCardStyled} from '../styles/styled_product_card';

const ProductCard = (p) => {
    return (
        <ProductCardStyled>
            <a href="#" class="card__link">Clic para ver al producto</a>
            <div className="card__imgContainer">
                <img className="card__img" src={p.image} alt={p.name} />
            </div>
            <div className="card__content">
                <h3 className="card__title">
                    {
                        p.name.length > 35 ? p.name.substring(0, 32) + '...' : (p.name)
                    }
                </h3>
                <p className="card__price">$ {p.price}</p>
            </div>
        </ProductCardStyled>)
};

ProductCard.defaultProps = {
    id: 1,
    name: 'Final Fantasy VII Remake',
    price: 52.38,
    is_active: true,
    image: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/buy/fifapre20-standard-pc.jpg"
};

export default ProductCard;
