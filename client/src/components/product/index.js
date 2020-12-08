import React from 'react'
import { MainBox, GameDetail } from '../styles/styled_product.js'

const Product = (p) => {
    return (
        <MainBox>
            <GameDetail>
                <div className="game__img">
                    <img src={p.images[0]} alt={`${p.name} image`} />
                </div>
                <div className="game__info">
                    <h1 className="game__title">{p.name}</h1>
                    <ul className="game__categories">
                        {
                            p.categories["es"].map((category) => <li className="game__category">{category}</li>)
                        }
                    </ul>
                    <div>
                        <h2>
                            {p.price}
                        </h2>
                        <p>
                            {p.score}
                        </p>
                    </div>
                    <p>
                        {p.description["es"]}
                    </p>
                    <div>
                        <p>Cantidad a comprar</p>
                        <button>-</button>
                        <span>1 unidad</span>
                        <button>+</button>
                    </div>
                    <p>Stock: {p.stock}</p>
                    <div>
                        <div>
                            <button>Comprar ahora</button>
                            <button>Agregar al carrito</button>
                        </div>
                        {/* <img src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0033/3717/Que_tarjetas_acepta_Mercado_Pago.jpg?1552322626" alt="Medios de Pago" /> */}
                    </div>
                </div>
            </GameDetail>
        </MainBox>
    )
}

Product.defaultProps = {
    name: 'Final Fantasy VII Remake',
    stock: 100,
    description: {
        es: 'El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan',
        en: 'The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.'
    },
    price: 52.38,
    score: 5,
    sales: 370,
    is_active: true,
    categories: {
        es: ["RPG", "Fantasia", "Aventura"],
        en: ["RPG", "Fantasy", "Adventure"]
    },
    images: ["https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/buy/fifapre20-standard-pc.jpg"]
}

export default Product
