import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;   
        overflow-x: hidden;
        }

        html {
            @media (max-width: 1700px) {
                font-size: 75%;
            }
        }

        button {
            font-weight: bold;
            font-size: 1.1.rem;
            cursor: pointer;
            padding: 1rem 2rem;
            border: 2px solid #0b6198;
            background: transparent;
            color: white;
            transition: all 0.5s ease;
            font-family: 'Inter', sans-serif;
            &:hover {
                padding: 1rem 2rem;
                background: #0b6198;
                color: white;
            }
        }

        h2 {
            font-weight: lighter;
            font-size: 4rem;
        }

        h3 {
            color: white;
        }

        h4 {
            font-weight: bold;
            font-size: 2rem;
        }

        span {
            font-weight: bold;
            color: #0b6198;
        }

        p {
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;
        }

        a {
            font-size: 1.1rem;
        }

        


`;

export default GlobalStyle;
