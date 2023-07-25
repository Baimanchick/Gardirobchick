import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import ProductDetail from "../pages/ProductDetail";
import ProductsPage from "../pages/ProductsPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayouts />}></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/productdetails" element={<ProductDetail />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}

export default MainRoutes;
