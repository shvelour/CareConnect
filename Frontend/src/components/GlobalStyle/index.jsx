import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PT Sans';
    src: url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    font-weight: 300;
    font-style: normal;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    background-color: #fafafaff;
  }

  .slick-dots {
    position: static !important;
  }
`;

export default GlobalStyle;
