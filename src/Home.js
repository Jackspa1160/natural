import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import styled from "styled-components";
import Footer from "./Footer";
import Product from "./Products";
import Testimonials from "./Testimonials";
function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Product />
      <Testimonials />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #042826;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: auto;
`;

export default Home;
