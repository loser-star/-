import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

import "normalize.css";
import "@/assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
