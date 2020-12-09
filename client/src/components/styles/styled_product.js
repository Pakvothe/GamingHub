import styled from "styled-components";
import {COLOR_PRIMARY} from "./../../constants/colors";

export const MainBox = styled.main`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
`;

export const GameDetail = styled.section`
  display: flex;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    height: 100px;

    border: 3px solid blue;
  }

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
      border: 3px solid ${COLOR_PRIMARY};
    }
  }

  .game__info {
    display: flex;
    flex: 2 0;
    flex-direction: column;
    margin-left: 30px;
    justify-content: space-between;

    .game__categories {
      display: flex;

      justify-content: space-between;
      list-style-type: none;
    }

    .game__price {
    }
  }
`;
