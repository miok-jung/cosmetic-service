import React from 'react';
import Navigation from 'components/Navigation';
import AutoSlide from 'components/AutoSlide';
import Container1 from 'components/Container1';
import Container2 from 'components/Container2';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <>
      <Navigation />
      <AutoSlide />
      <Container1 />
      <Container2 />
      <Footer />
    </>
  );
};

export default Home;
