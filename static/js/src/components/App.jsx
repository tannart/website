import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="react-components">
      <AnimatedSection>
        <div className="floating-card" style={{ position: 'relative' }}>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Technical Skills</h3>
                <ul className="list-unstyled">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >• Full-stack Development</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >• Cloud Architecture</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >• Team Leadership</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >• Agile Methodologies</motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="tech-stack">
          <motion.div
            className="tech-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Frontend</h3>
                <ul className="list-unstyled">
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >• React</motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >• Vue.js</motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >• TypeScript</motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >• Tailwind CSS</motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="books-section">
          <motion.div
            className="book-card"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Clean Code</h3>
                <p className="text-muted">Robert C. Martin</p>
                <motion.p
                  className="card-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  A must-read for any developer looking to improve their coding practices and write more maintainable software.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default App; 