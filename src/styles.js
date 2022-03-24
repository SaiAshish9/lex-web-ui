import { createGlobalStyle, css } from "styled-components";

import { FontFamily } from "constants/index";

const genericStyles = css`
  body {
    overflow-x: hidden !important;
    font-family: ${FontFamily.inter} !important;
  }
  button {
    font-family: ${FontFamily.inter} !important;
  }
  p {
    padding: 0px;
    margin: 0px;
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
