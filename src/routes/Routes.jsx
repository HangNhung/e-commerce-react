import React from "react";
import { Routes as RoutesDom, Route } from "react-router-dom";
import { Home, Cart, Catalog, Product } from "../pages/index";

const Routes = () => {
  return (
    <RoutesDom>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />}>
        <Route path=":slug" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
    </RoutesDom>
  );
};

export default Routes;
