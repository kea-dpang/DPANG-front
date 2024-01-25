import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyled";
import "../src/styles/common.css";
import "../src/styles/fontStyle.scss";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);
