import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Barkultur from '@/public/assets/images/barkultur.png';
import Leidenschaft from '@/public/assets/images/leidenschaft.png';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const sentenceOne = [
    'Mit dem Verein Baraholics pflegen ',
    ' und fördern wir die Barkultur in der Schweiz.',
  ];

  return (
    <div>
      <section>
        <div className="mx-auto max-w-full">
          <div className="text-center">
            <h1>Über Baraholics</h1>
          </div>

          <div className="grid py-24 md:grid-cols-2">
            <div className="m-auto md:mx-16">
              <h2 className="normal-case md:text-6xl">
                {sentenceOne.map((sentence, index) => (
                  <AnimatePresence key={index}>
                    {inView && (
                      <motion.h2
                        className="text-6xl"
                        initial={{ opacity: 0, y: 100, rotate: 2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          delay: index * 0.2,
                          duration: 0.7,
                          ease: 'easeOut',
                        }}
                      >
                        {sentence}
                      </motion.h2>
                    )}
                  </AnimatePresence>
                ))}
              </h2>
            </div>

            <div className="pt-8">
              <Image src={Barkultur} alt="Baraholics" />
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="pt-8 md:mx-16">
              <Image src={Leidenschaft} alt="Baraholics" />
            </div>
            <div className="m-auto">
              <div ref={ref}>
                <AnimatePresence>
                  {inView && (
                    <motion.div
                      initial={{ opacity: 0, y: 100, rotate: 2 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                      <h2 className="text-6xl normal-case">
                        Liebe und Leidenschaft für das Barhandwerk verbindet
                        uns, und lässt uns einzigartige Momente für unsere
                        Kunden zaubern.
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="py-48">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <AnimatePresence>
                  {inView && (
                    <motion.div
                      initial={{ opacity: 0, y: 100, rotate: 2 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                      <h2 className="text-5xl normal-case md:text-7xl">
                        Baraholics -
                      </h2>

                      <h2 className="text-5xl normal-case md:text-7xl">
                        Barkunst auf höchstem Niveau.
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
