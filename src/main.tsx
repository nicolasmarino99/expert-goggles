import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import ProductsProvider from "./contexts/Products/ProductsProvider";
import CartProvider from "./contexts/Cart/CartProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
);
