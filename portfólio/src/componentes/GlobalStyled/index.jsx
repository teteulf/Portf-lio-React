import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
html{margin: 0;
    height: 100vh;
    
}; 
body{margin: 0 20%;
box-sizing: border-box;
height: 100vh;
background-color: #000014;
scrollbar-width: none;
overflow: hidden;
-ms-overflow-style: none;
animation: fadeInAnimation ease 5s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
/* background-image: url('./src/componentes/GlobalStyled/BackGround2.png'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -10; */

&::-webkit-scrollbar {
  display: none;}

@media (max-width: 643px) {
    margin: 0% 0%;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
};

*:focus-visible {
    outline: none;
  }
  
  *{font-family:"Sora";}

`;

export default GlobalStyled;
