import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root{
    --defaultFontSize: 1.6rem;
    --mobileFontSize: 1.4rem;
    --mobile: 768px;
    --tab: 1180px;
}

*, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    html{
        scroll-behavior: smooth;
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
    }

    
body::-webkit-scrollbar {
    width: .8rem;
    background-color: #222;

}
 
body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 5px;
}

    body {
        box-sizing: border-box;     
        font-family: 'poppins', sans-serif;
        transition: all 0.5s ease;
        background-color: ${({ theme }) => theme.backgroundCl};
        color: ${({ theme }) => theme.textCl};
    }

    p{
        opacity : 0.7;
        line-height: 1.6;
        font-size: 1.4rem;
    }

    span{
        font-size: 1.6rem
    }

    h1{
        font-size: 3.2rem;
    }

    h2{
        font-size: 2.4rem;
    }

    h3{
        font-size: 1.87rem;
    }

    h4{
        font-size: 1.6rem;
    }

    h5{
        font-size: 1.32rem;
    }

    h6{
        font-size: 1.07rem;
    }

    img{
        max-width: 100%;
    }
`;

export default GlobalStyles;
