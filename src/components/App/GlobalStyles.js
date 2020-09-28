import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

// Global styles
const GlobalStyles = createGlobalStyle`
  ${normalize()}

  // Document
  // ------------------------------
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.8;
    font-family: Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::selection {
    color: white;
    background-color: ${({ theme }) => theme.color.text};
    text-shadow: none;
  }

  // Default spacing for block elements
  // ------------------------------
  p, h1, h2, h3, h4, h5, h6,
  ul, ol, dl, table, pre, blockquote,
  fieldset, legend, figure, details {
    margin: 0 0 2rem;
  }

  // Embedded media
  // ------------------------------
  img, iframe,
  video, audio, canvas, svg,
  embed, object {
    box-sizing: border-box;
    max-width: 100%;
  }
  img {
    height: auto;
  }
`;

export default GlobalStyles;
