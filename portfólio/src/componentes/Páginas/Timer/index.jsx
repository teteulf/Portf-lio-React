import React, { useState, useEffect } from 'react';

export function Timer({ children }){
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
   const timer = setTimeout(() => {
     setIsMounted(true);
   }, 1000);

   return () => clearTimeout(timer);
 }, []);

 return isMounted ? children : null;
};

export default Transition;
