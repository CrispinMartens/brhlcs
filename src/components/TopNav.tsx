import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import LogoBlackSmall from './atoms/LogoBlackSmall';

function TopNav() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed top-0 z-10 grid w-full grid-cols-3 bg-transparent px-4 pt-8 pb-4`}
      >
        <h4>Menu</h4>
        <div className="flex items-center justify-center">
          <Link href="/" passHref={true}>
            <LogoBlackSmall />
          </Link>
        </div>
        <Link href="/kontakt" passHref={true}>
          <h2 className="text-right text-lg duration-200 ease-in hover:cursor-pointer hover:invert">
            Kontakt aufnehmen
          </h2>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

export default TopNav;
