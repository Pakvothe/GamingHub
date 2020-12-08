import styled from 'styled-components'

export const MainBox = styled.main`
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
`;

export const GameDetail = styled.section`
    display: flex;

    .game__img{
        flex-basis: 200px;
        flex-grow: 1;
        margin-right: 30px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
        }
    }

    .game__info{
        flex: 2 0;
        margin-left: 30px;
    }
`;