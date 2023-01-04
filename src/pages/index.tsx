import React from 'react';

import About from '@/components/About';
import GetInTouch from '@/components/GetInTouch';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';

const Index = () => {
  return (
    <div>
      <Preloader />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <GetInTouch />
    </div>
  );
};

export default Index;
