import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Catering from '@/public/assets/images/catering.png';
import Mixkurse from '@/public/assets/images/mixkurse.png';

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <section>
        <div className="pb-16 text-center">
          <h1>Unser Angebot</h1>
        </div>

        <div className="grid gap-72 border-y border-baarblue py-8 md:mx-24 md:grid-cols-2 md:py-24">
          <div className="m-auto" ref={ref}>
            <AnimatePresence>
              {inView && (
                <motion.div
                  initial={{ opacity: 0, y: 100, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <h2 className="mb-5">Catering</h2>
                  <motion.p
                    initial={{ opacity: 0, y: 100, rotate: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    Coole Drinks, edle Cocktails, Bier oder lieber Wein? Drinnen
                    oder draußen, herausgeputzt oder lässig, mit vielen Gästen
                    oder in kleiner Runde – wir passen uns mit unseren
                    Barkeepern perfekt an Ihre Veranstaltung an. Egal was Sie
                    vorhaben, wir unterstützen Sie tatkräftig und professionell.
                  </motion.p>
                  <div className="py-8">
                    <Link href="/kontakt">
                      <button className="bg-baarblue text-white">
                        Catering buchen
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div>
            <Image src={Catering} alt="Drink" />
          </div>
        </div>

        <div className="grid gap-72 border-b border-baarblue py-8 md:mx-24 md:grid-cols-2 md:py-24">
          <div>
            <Image src={Mixkurse} alt="Drink" />
          </div>
          <div className="m-auto" ref={ref}>
            <AnimatePresence>
              {inView && (
                <motion.div
                  initial={{ opacity: 0, y: 100, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <h2 className="mb-5">Party Mixkurse</h2>
                  <motion.p
                    initial={{ opacity: 0, y: 100, rotate: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    Wollten Sie schon immer wissen, wie Sie spektakuläre
                    Cocktails und Shots selbst mixen? Laden Sie Ihre Freunde zu
                    sich nach Hause ein und freuen Sie sich auf einen
                    abwechslungsreichen, ausgelassenen Abend mit leckeren
                    Cocktails und toller Musik.
                  </motion.p>
                  <div className="py-8">
                    <Link href="/kontakt">
                      <button className="bg-baarblue text-white">
                        Mixkurs buchen
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
