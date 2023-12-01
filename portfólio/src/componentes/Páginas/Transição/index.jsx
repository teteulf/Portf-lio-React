import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Transicao = () => {
  const location = useLocation();
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isInitialRender) {
      setIsAnimating(true);
    } else {
      setIsInitialRender(false);
    }
  }, [location.pathname]);
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    
    <AnimatePresence initial={false} mode='wait'>
      {isAnimating && (<>
        <motion.div
          key={location.pathname}
          initial={{ x: '-100%', width: '100%' }}
          animate={{ x: 0, width: '100%' }}
          exit={{ x: '-100%', width: '100%'}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          onAnimationComplete={handleAnimationComplete}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: '#04042c',
            zIndex: '999',
          }}
        />
        <motion.div
          key={location.pathname}
          initial={{ x: '-100%', width: '100%' }}
          animate={{ x: 80, width: '100%' }}
          exit={{ x: '-100%', width: '100%' , transition: {duration: 0.9, delay: 0.3 } }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          onAnimationComplete={handleAnimationComplete}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: '#3a3abac1',
            zIndex: '998',
          }}
        />
          <motion.div
          key={location.pathname}
          initial={{ x: '-100%', width: '100%' }}
          animate={{ x: 80, width: '100%' }}
          exit={{ x: '-100%', width: '100%' , transition: {duration: 1, delay: 0.4 } }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          onAnimationComplete={handleAnimationComplete}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: '#9c9cf495',
            zIndex: '998',
          }}
        />
      </>)}
    </AnimatePresence>
  );
};

export default Transicao;
