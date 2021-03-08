import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1200px){
            font-size: 90%;
        }
    }

    body {
        background: #1c1a1c;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5 ease;
        font-family: 'Lobster', sans-serif;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-size: 2rem;
        font-weight: bold;
    }
    span {
        font-weight: bold;
        color:  #23d997;
    }
    a{
        font-size: 1.1rem;
    }
    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
        line-height:150%;
    }
`;

export default GlobalStyled;