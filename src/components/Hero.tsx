import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Placeholder from '@/public/assets/images/hero_placeholder.png';

function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const curtainAnimation = useAnimation();

  // useEffect to handle the animation
  useEffect(() => {
    curtainAnimation.start({
      x: '0%',
      opacity: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isLoading]);

  return (
    <div className={`${isLoading ? 'overflow-hidden' : ''}`}>
      {isLoading && (
        <div className="absolute top-0 left-0 h-full w-full">
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-baaryellow"
            animate={curtainAnimation}
            initial={{ x: '-100%' }}
            exit={{ x: '-100%', opacity: 0 }}
          />
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2 bg-baaryellow"
            animate={curtainAnimation}
            initial={{ x: '100%' }}
            exit={{ x: '100%', opacity: 0 }}
          />
        </div>
      )}
      <div className="flex h-screen overflow-hidden bg-baarblue">
        <div className="grid md:grid-cols-2">
          <div className="order-2 m-auto mx-8 md:order-1 md:mx-24">
            <AnimatePresence>
              {!isLoading && (
                <motion.div
                  initial={{ y: 50, opacity: 0, rotate: 2 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <motion.h1
                    initial={{ y: 50, opacity: 0, rotate: 2 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="mb-5 text-5xl leading-snug text-white md:text-8xl"
                  >
                    Das Barleben geniessen.
                  </motion.h1>
                  <motion.p
                    initial={{ y: 50, opacity: 0, rotate: 5 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                    className="text-white"
                  >
                    Baraholics ist der Bar Service für alle, die geniessen
                    wollen.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="order-1 h-full w-full md:order-2">
            <Image
              src={Placeholder}
              alt="Baraholics"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
