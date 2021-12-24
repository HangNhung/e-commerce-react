import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components/index";
import Navigation from "../routes/Routes";
const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="container">
            <Header />
            <div className="main">
              <Navigation />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
