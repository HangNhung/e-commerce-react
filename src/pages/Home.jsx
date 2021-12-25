import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import { Section, SectionBody, SectionTitle } from "../components";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";

export const Home = () => {
  return (
    <Helmet title="Homepage">
      {/* Hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/* End - Hero slider */}
      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCard {...item} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* End - policy section */}
      {/* best selling section */}
      <Section>
        <SectionTitle>Top selling products of the week</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              // <Link to="/product">
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={parseInt(item.price)}
                slug={item.slug}
              />
              // </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* End - best selling section */}
    </Helmet>
  );
};
