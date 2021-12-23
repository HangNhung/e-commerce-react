import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Cart, Catalog, Product } from "../pages/index";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exac component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
