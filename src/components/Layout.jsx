import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components/index";
import Routes from "../routes/Routes";
import ProductViewModal from "./ProductViewModal";
const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="container">
            <Header />
            <div className="main">
              <Routes />
            </div>
            <Footer />
            <ProductViewModal />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
