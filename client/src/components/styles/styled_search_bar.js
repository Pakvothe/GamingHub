import styled from 'styled-components';

export const FormSearchBar = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1em;
    
    button {
        width: 10%;
        background-color: white;
        border: 2px solid #9a5cf6;
        border-left: none;
        border-radius: 0 10px 10px 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    button img{
        height: 20px;
        padding-right: 5px;
    }
    input {
        width:90%;
        height: 20px;
        padding-left: 5px;
        background-color: white;
        border: 2px solid #9a5cf6;
        border-right: none;
        border-radius: 10px 0 0 10px;
    }
    button:focus, input:focus{
        outline: none;
    }
`