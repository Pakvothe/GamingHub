import styled from "styled-components";

export const MainBox = styled.main`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
`;

export const GameDetail = styled.section`
  display: flex;
  padding: 35px 0;
  max-height: 700px;
  height: 100vh;

  .game__img {
    flex-basis: 200px;
    flex-grow: 1;
    margin-right: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      border-radius: 4%;
      border: 3px solid var(--clr-primary);
    }

    &:hover{
      cursor: pointer;
    }
  }

  .game__info {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex: 2 0;
    flex-direction: column;
    margin-left: 30px;
    justify-content: space-between;

    h1 {
      font-size: 2.2em; // Texto sobresale de contenedor cuando se hace zoom en el browser.
      font-weight: 900;
      height: 130px;
      line-height: 1.3;
    }

    .game__categories {
      display: flex;
      list-style-type: none;
      
      li {
        margin-right: 20px;
      }
    }

    .game__container-price-score {
      align-content: center;
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }

    .game__price {
      font-weight: 400;
      font-size: 30px;
      margin-right: 8px;
    }

    .game__quantitybutton {
      color: white;
      background-color: var(--clr-primary);
      border-radius: 100%;
      border: none;
      width: 25px;
      height: 25px;
    }

    .game__quantityvalue{
      display: inline-block;
      width: 30px;
      text-align: center;
    }

    .game__buy-buttons-container {
      display: flex;
      flex-direction: column;
    }

    .game__buy-now-button {
      color: white;
      background-color: var(--clr-primary);
      width: 160px;
      padding: 6px;
      border-radius: 20px;
      border: 2px solid var(--clr-primary)
    }

    .game__add-to-cart-button {
      color: var(--clr-primary);
      background-color: white;
      width: 180px;
      padding: 6px;
      border-radius: 20px;
      margin-top: 10px;
      border: 2px solid var(--clr-primary)
    }

   .game__buy-stock-info{
    font-style: italic;
   }

    .game__purchase-container {
      display: flex;
      justify-content: space-between;
    }

    .game__payment-methods-icons {
      max-width:200px;
    }

  }
`;