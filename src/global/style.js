import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family :sans-serif;
}
a{
    text-decoration:none;
}
body{
    background-color:${props=>props.theme.palette.background};
}

`;