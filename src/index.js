import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyled";
import "../src/styles/common.css";
import "../src/styles/fontStyle.scss";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </RecoilRoot>

    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
);
