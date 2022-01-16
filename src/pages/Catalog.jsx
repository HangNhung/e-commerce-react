import React from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import productCard from "../assets/fake-data/products";
import category from "../assets/fake-data/category";

export const Catalog = () => {
  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Product Catalog
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <p className="catalog__filter__widget__content__item">
                  {item.display}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="catalog_ocntent">
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {productCard.getAllProducts().map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={parseInt(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};
