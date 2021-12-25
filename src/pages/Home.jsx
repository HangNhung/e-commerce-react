import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";

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
    </Helmet>
  );
};
