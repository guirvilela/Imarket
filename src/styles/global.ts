import { createGlobalStyle } from 'styled-components/';

export const GlobalStyles = createGlobalStyle`

:root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #75B09C;

    --side-bar: #F0F0F0;


    --text-title: #434343;
    --button-text: #737373;
    --sub-title: #CCCCCC;
    --home-title: #FEFEFE;

    --background: #FFFFFF

}


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.5%
    }
}


body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, text-area, button{
    font-family: "Roboto", sans-serif;
    font-weight:400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`;
