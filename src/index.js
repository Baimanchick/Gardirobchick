import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Toastify from "./components/Toastify";
import ProductContext from "./context/MainProductContext";
import AuthContext from "./context/AuthConetxt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <AuthContext>
        <Toastify />
        <App />
      </AuthContext>
    </ProductContext>
  </BrowserRouter>
);
