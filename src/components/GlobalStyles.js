import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }
    body {
        /* font-family: 'Fredoka One', cursive; */
        font-family: 'Rajdhani', sans-serif;
        width: 100%;
        color: #333;
    }
    h2 {
        font-size: 3rem;
    }
    h3  {
        font-size: 1.2rem;
        padding: 1.5rem 1.5rem 0 1.5rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
