import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #fff;
        color: #333;
    }
`;
