import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Intro() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const text =
    'Erleben Sie den \nultimativen Barkeeper Service\n in Stil und Charme \nan Ihrer eigenen Bar.';
  const lines = text.split('\n');
  return (
    <div>
      <section>
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="mx-auto max-w-7xl text-center">
              <div ref={ref}>
                {lines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: '100%', opacity: 0, rotate: 5 }}
                    animate={
                      inView ? { y: 0, opacity: 1, rotate: 0 } : undefined
                    }
                    transition={{
                      delay: index * 0.2,
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                    style={{ position: 'relative' }}
                  >
                    <h2 className="text-5xl md:text-7xl">{line}</h2>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
