import { createGlobalStyle } from 'styled-components';

import { reset } from './Reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    outline: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  ::-moz-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  :-moz-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: auto !important;
    font-size: 16px;
    color: #262626;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.font};
    transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  }

  body.no-scroll {
    overflow: hidden;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    cursor: pointer;
    outline: none;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
  }

  a:link {
    color: ${({ theme }) => theme.accent};
  }

  a:active {
    color: ${({ theme }) => theme.accent};
  }

  a:visited {
    color: ${({ theme }) => theme.accent};
  }

  a:hover {
    text-decoration: underline;
  }

  a img {
    border: none;
  }

  img {
    max-width: 100%;
  }

  input,
  textarea,
  button {
    font-family: "Jost";
  }

  label {
    cursor: pointer;
  }

  iframe {
    max-width: 100%;
  }

  b, strong {
    font-weight: 700;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    font-family: "Jost";
    margin: 0;
    margin-bottom: 15px;
    color: #000;
    font-weight: 700;
    line-height: 1.3;
  }

  h1 {
    font-size: 44px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h2 {
    font-size: 41px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  h3 { font-size: 38px; }
  h4 { font-size: 32px; }
  h5 { font-size: 24px; }
  h6 { font-size: 21px; }

  p {
    padding: 0;
    margin: 30px 0;
  }

  strong { font-weight: 700; }

  input[type="text"],
  input[type="email"],
  input[type="search"],
  input[type="password"],
  input[type="tel"],
  input[type="address"],
  input[type="number"],
  textarea {
    position: relative;
    padding: 0 30px;
    display: block;
    width: 100%;
    height: 60px;
    font-family: "Jost";
    font-size: 16px;
    color: #000;
    resize: none;
    outline: 0;
    font-weight: 400;
    background: #fff;
    border: 2px solid #000;
    border-radius: 30px;
    -webkit-border-radius: 30px;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
  }

  textarea {
    height: 140px;
    padding-top: 20px;
    padding-bottom: 20px;
    resize: none;
  }

  label,
  legend {
    display: block;
    padding-bottom: 20px;
    font-family: "Jost";
    font-size: 20px;
  }

  fieldset {
    border-width: 0;
    padding: 0;
  }

  input[type="checkbox"],
  input[type="radio"] {
    display: inline;
  }

  label.error {
    padding-top: 5px;
    font-family: "Jost";
    font-size: 14px;
    color: red;
    display: none;
  }

  ul {
    list-style: disc;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 0px;
    list-style-position: inside;
  }

  ol {
    list-style: decimal;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 0px;
    list-style-position: inside;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
  }

  code {
    padding: 0 4px;
    font-size: 14px;
    font-style: italic;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    overflow: auto;
    max-width: 100%;
    white-space: nowrap;
  }

  pre {
    margin: 30px 0;
    padding: 0;
    max-width: 100%;
    overflow: auto;
    white-space: pre;
    font-size: 14px;
  }

  mark,
  ins {
    text-decoration: none;
  }

  dt {
    margin-bottom: 5px;
    font-weight: 700;
  }

  dd {
    margin-top: 0;
    margin-bottom: 30px;
    margin-left: 30px;
  }
`;

export default GlobalStyles;
