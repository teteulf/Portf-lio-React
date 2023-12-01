import styled from 'styled-components';
import { keyframes } from 'styled-components';
import {BsArrowRight} from'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import {motion} from "framer-motion"
import { duration } from '@mui/material';

const ImagemEu = styled.img.attrs({
    src:'/src/componentes/Páginas/Home/i3.png',
  })`
    position: fixed;
    max-width: 100%;
    max-height:100%;
    right: 10%;
    bottom: 0%;
    width: 32rem;
    
    @media (min-height: 650px){
      width: 42rem;
      right: 3%;
    }

   @media (min-height: 1000px){
    width: 62rem;
    right: 8%;
    }


    @media (max-width: 1111px) {
      visibility: hidden;
    }
    `

const AlinhamentoImagem = styled.div`
  
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  left: -5%;

  @media (max-width: 1111px) {

    left: 0%;
  }
  `

  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(359deg);
  }
  `;

const ImagemProject = styled.img.attrs({

src:'/src/componentes/Páginas/Home/projects.png',})`
width: 10rem;
position: relative;
bottom: 5%;
animation: ${rotate} 10s linear infinite;
`

const Seta = styled.p`
  color: #fa0303;
  font-size: 40px;
  position: absolute;

  &:hover {
    animation: rightMove 0.3s linear forwards;
    cursor: pointer;
  }

  @keyframes rightMove {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(10px);
    }
  }
`;

const AlinhamentoConteudo = styled.section`

 display:flex;

@media (max-width: 1111px) {

  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (max-width: 1111px) {
   margin-top: -15%;
}
`

const Titulo = styled.h1`
align-items: center;
color: white;
font-size: 40px;
animation: typing 10s;

@media (min-height: 1000px){
 font-size: 60px;
}`

const AlinhamentoTexto = styled.div`
display:flex;
position: relative;
flex-direction: column;
height: 100vh;
width: 418px;
justify-content: center;

@media (min-height: 750px){
  width: 460px;
}

@media (min-height: 1000px){
width: 620px
}
`

const Texto = styled.p`
color: white;
font-size: 15px;

@media (min-height: 750px){
 font-size: 20px;}

@media (min-height: 1000px){
  font-size: 30px;
 }
`

const Color = styled.strong`
color: red;
`

const transitionVariants = {
  initial: {
   x: '100%',
   width: '0%'
  },
  animate: {
    x: '100%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}

const MotionDiv = styled(motion.div)`
 background-color: blue;
`;

export function Intro(){
    return(
<motionDiv
variants={transitionVariants}
transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
>
<AlinhamentoConteudo>
  <AlinhamentoTexto>
    <Titulo >Transforming Ideas Into <Color>Digital Reality </Color></Titulo>
      <Texto > Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, impedit ducimus dicta explicabo deserunt unde nobis voluptas natus quam tenetur quia delectus at deleniti adipisci, atque doloremque quae. Facere, aliquam.</Texto>
        <AlinhamentoImagem>
          <ImagemProject/>
            <Seta>
          <BsArrowRight/>
        </Seta>
      </AlinhamentoImagem>
    </AlinhamentoTexto>
 <ImagemEu/>
</AlinhamentoConteudo>
</motionDiv>)}

