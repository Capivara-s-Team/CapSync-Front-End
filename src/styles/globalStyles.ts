import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f2f2f2;
        color: #333;

        transition: .3s;
    }

    body.theme-dark {
        transition: .3s;

        background-color: #373636;
         h1, p {
            color: #f2f2f2;
         }
    }
`;
