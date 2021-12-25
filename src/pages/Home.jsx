import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import { Section, SectionBody } from "../components";
import PolicyCard from "../components/PolicyCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";

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
              <Link to="/policy">
                <PolicyCard key={index} {...item} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* End - policy section */}
    </Helmet>
  );
};
