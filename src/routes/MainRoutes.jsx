import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProductDetail from "../pages/ProductDetail";
import ProductsPage from "../pages/ProductsPage";
import AuthPage from "../pages/AuthPage";
import NotFounedPage from "../pages/NotFounedPage";
import AdminPage from "../pages/AdminPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayouts />}></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/details/:id" element={<ProductDetail />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFounedPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default MainRoutes;
