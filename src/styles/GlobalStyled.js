import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /* Fonts */


        /* Colors */
        --navy: #043277;
        --light-navy: #114899;
        --orange: #fa622f;
        --black: #000000;
        --dark-grey: #bcbcbc;
        --semi-light-grey: #cfcfcf;
        --light-grey: #f4f4f4;
        --white: #ffffff;


    }    
    body {
        -ms-overflow-style: none;

    }
     
    ::-webkit-scrollbar {
        display: none;
    }
    button {
        /* background: none; */
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
`;