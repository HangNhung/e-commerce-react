import React, { useEffect } from "react";
import Helmet from "../components/Helmet";
import { useParams } from "react-router-dom";

import { Section, SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

import productData from "../assets/fake-data/products";

export const Product = (props) => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProducts = productData.getProducts(8);

  useEffect(() => {
    window.scroll(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>More...</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
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
        </SectionBody>
      </Section>
    </Helmet>
  );
};
