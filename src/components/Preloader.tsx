import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import LogoBlack from './atoms/LogoBlack';

function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPreloader(false);
    }, 3000); // show preloader for 3 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPreloader]);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'easeInOut', duration: 1 }}
          className="flex h-screen bg-transparent"
        >
          <div className="m-auto text-center">
            <div className="mx-24">
              <div className="mb-16 flex justify-center">
                <LogoBlack />
              </div>
              <h1>Bei einem Drink entspannen.</h1>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
