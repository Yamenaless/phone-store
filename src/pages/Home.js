import React from "react";
import NavigationBar from "../components/navigation/NavigationBar";
import HeroSection from "../components/navigation/hero-section/HeroSection";
import ProductsSection from "../components/products-section/ProductsSection";
const Home = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <ProductsSection />
    </>
  );
};

export default Home;
