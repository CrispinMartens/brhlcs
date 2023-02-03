import 'locomotive-scroll/dist/locomotive-scroll.css';

import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import About from '@/components/About';
import CompanyBrief from '@/components/CompanyBrief';
import Footer from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';

const Index = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        speed: 0.1, // adjust the scroll speed to 0.5 seconds
        // ... all available Locomotive Scroll instance options
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Hero />
        <Intro />
        <CompanyBrief />
        <Services />
        <Pricing />
        <About />
        <GetInTouch />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Index;
