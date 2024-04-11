import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;
        background-color: hsl(0, 0%, 8%);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    html{
        font-size: 62.5%;
    }

    img{
        width: 100%;
    }

`;
