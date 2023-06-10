import { createGlobalStyle } from 'styled-components';
import HindSiliguriRegular from '../fonts/HindSiliguri-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Hind Siliguri";
    src: url(${HindSiliguriRegular}) format("truetype");
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    scroll-behavior: smooth;
    font-family: 'Hind Siliguri', Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  a:focus, a:visited, a:link, a:active {
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  button {
    border: none; 
    outline: none;
  }
`;
