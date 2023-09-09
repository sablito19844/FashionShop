import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Banner1 from "../images/023.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner
        title="Buy better wear longer"
        text=" MOHAMED Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      {/*<TrendingSlider />
      <Newsletter /> */}
      <Footer />
    </>
  );
};

export default Home;
