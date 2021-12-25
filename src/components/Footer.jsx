import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  { label: "Introduce", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Recruitment", path: "/recruitment" },
  { label: "News", path: "/news" },
  { label: "Branch", path: "/branch" },
];

const footerCustomLinks = [
  { label: "Return Policy ", path: "/contact" },
  { label: "Warranty Policy", path: "/contact" },
  { label: "Refund Policy", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Support call center</div>
            <div className="footer__content">
              <p>
                Contact to order <strong>0833019688</strong>
              </p>
              <p>
                Order problems <strong>0833019688</strong>
              </p>
              <p>
                Comments, complaints <strong>0833019688</strong>
              </p>
            </div>
          </div>

          <div>
            <div className="footer__title">About Yolo</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__title">Customer care</div>
            <div className="footer__content">
              {footerCustomLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </p>
              ))}
            </div>
          </div>

          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              illo, ullam saepe quidem earum hic aliquam impedit temporibus
              aperiam commodi odio. Laborum labore suscipit aperiam officia
              nostrum fugit quisquam aliquam!
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};
