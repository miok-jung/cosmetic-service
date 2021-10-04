import React from 'react';
import Navigation from 'components/Navigation';
import AutoSlide from 'components/AutoSlide';
import Container1 from 'components/Container1';
import Container2 from 'components/Container2';

const Home = () => {
  return (
    <div>
      <Navigation />
      <AutoSlide />
      <Container1 />
      <Container2 />
    </div>
  );
};

export default Home;
