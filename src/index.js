import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
