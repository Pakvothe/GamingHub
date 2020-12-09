import React, {useState} from "react";
import {MainBox, GameDetail} from "../styles/styled_product.js";
import StarRatings from "react-star-ratings";

const CLR_PRIMARY = getComputedStyle(document.documentElement)
.getPropertyValue('--clr-primary');

const Product = p => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(amount) {
    // Amount equals +1 or -1 
    const newValue = quantity + amount;
    if (newValue <= p.stock && newValue >= 1 && newValue <= 99) {
      setQuantity((prev) => prev + amount);
    }
  }

  return (
    <MainBox>
      <GameDetail>
        <div className="game__img">
          <img src={p.images[0]} alt={`${p.name} image`} />
        </div>
        <div className="game__info">
          <div className="">
            <ul className="game__categories">
              {p.categories["es"].map(category => (
                <li className="game__category">{category}</li>
                ))}
            </ul>
            <h1 className="game__title">{p.name}</h1>
            <div className="game__container-price-score">
              <span className="game__price">${p.price}</span>
              <span className="game__star-container">
                <StarRatings
                  rating={p.score}
                  starRatedColor={CLR_PRIMARY}
                  starDimension="30px"
                  starSpacing="3px"
                />
              </span>
            </div>
          </div>
          <p>{p.description["es"]}</p>
          <div className="game__buy-stock-info">
            <span style={{marginRight: "10px"}}>Cantidad a comprar</span>
            <button className="game__quantitybutton" onClick={()=>handleQuantityChange(-1)}>-</button>
            <span className="game__quantityvalue">{quantity} </span>
            <button className="game__quantitybutton"onClick={()=>handleQuantityChange(1)}>+</button>
            <span style={{marginLeft: "10px"}}>{quantity > 1 ? "unidades" : "unidad"}</span>
          <p>Stock: {p.stock}</p>
          </div>
          <div className="game__purchase-container">
            <div className="game__buy-buttons-container">
              <button className="game__buy-now-button">Comprar ahora</button>
              <button className="game__add-to-cart-button">Agregar al carrito</button>
            </div>
            <img className="game__payment-methods-icons" src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0033/3717/Que_tarjetas_acepta_Mercado_Pago.jpg?1552322626" alt="Medios de Pago" />
          </div>
        </div>
      </GameDetail>
    </MainBox>
  );
};

Product.defaultProps = {
  name: "Final Fantasy VII Remake",
  stock: 100,
  description: {
    es:
      "El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan",
    en:
      "The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.",
  },
  price: 52.38,
  score: 5,
  sales: 370,
  is_active: true,
  categories: {
    es: ["RPG", "Fantasia", "Aventura"],
    en: ["RPG", "Fantasy", "Adventure"],
  },
  images: [
    "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/buy/fifapre20-standard-pc.jpg",
  ],
};

export default Product;
