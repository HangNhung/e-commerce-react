import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components/index";
import Routes from "../routes/Routes";
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
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
