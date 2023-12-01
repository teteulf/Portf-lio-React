import {motion} from 'framer-motion'
import styled from 'styled-components';

const AnimatedDiv = styled(motion.div)`
.slide-in{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background: #9292f5;
transform-origin: bottom;
}

.slide-out{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background: #9292f5;
transform-origin: top;
}
`;

export function Transição({ children }) {
    return (
      <><div >
          {children}
        </div>
        <AnimatedDiv
          className='slide-in'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <AnimatedDiv
          className='slide-out'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        
      </>
    );
  }
