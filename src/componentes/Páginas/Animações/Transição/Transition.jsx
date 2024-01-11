import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const MotionDiv = styled(motion.div)`
  &.layer1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #04042c;
    z-index: 999;
  }

  &.layer2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #3a3abaab;
    z-index: 998;
  }

  &.layer3 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #9c9cf463;
    z-index: 997;
  }
`;

const Transicao = ({ children }) => {
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
    <AnimatePresence initial={false} mode="wait">
      {isAnimating && (
        <>
          <MotionDiv
            className={"layer1"}
            initial={{ x: "-100%", width: "100%" }}
            animate={{ x: 0, width: "100%" }}
            exit={{ x: "-100%", width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={handleAnimationComplete}
          />
          <MotionDiv
            className={"layer2"}
            initial={{ x: "-100%", width: "100%" }}
            animate={{ x: 80, width: "100%" }}
            exit={{
              x: "-100%",
              width: "100%",
              transition: { duration: 0.9, delay: 0.3 },
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            onAnimationComplete={handleAnimationComplete}
          />
          <MotionDiv
            className={"layer3"}
            initial={{ x: "-100%", width: "100%" }}
            animate={{ x: 80, width: "100%" }}
            exit={{
              x: "-100%",
              width: "100%",
              transition: { duration: 1, delay: 0.4 },
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            onAnimationComplete={handleAnimationComplete}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Transicao;
