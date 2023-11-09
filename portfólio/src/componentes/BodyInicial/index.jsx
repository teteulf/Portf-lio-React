import styled from 'styled-components';
import { keyframes } from 'styled-components';
import {BsArrowRight} from'react-icons/bs'

const ImagemEu = styled.img.attrs({
    src:'/src/componentes/BodyInIcial/i.png',
  })`
    display: block;
    position: fixed;
    max-width: 100%;
    max-height:100%;
    overflow: auto;
    right: 10%;
    bottom: 0%;
    width: 32rem;`

const AlinhamentoImagem = styled.div`
  
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  right: 3%;
  
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

src:'/src/componentes/BodyInIcial/projects.png',})`
width: 12rem;
position: relative;
bottom: 5%;
animation: ${rotate} 10s linear infinite;
`

 

const Seta = styled.p`
  color: #fa0303;
  font-size: 50px;
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
height: 100%vh;
`

const Titulo = styled.h1`
color: white;
font-size: 40px;
animation: typing 10s;
`

const AlinhamentoTexto = styled.div`
display:flex;
flex-direction: column;
width: 390px;
`

const Texto = styled.p`
color: white;
font-size: 15px;`

const Color = styled.strong`
color: red;`


export function Intro(){
    return(
<AlinhamentoConteudo>
<AlinhamentoTexto>
<Titulo>Transforming Ideas Into <Color>Digital Reality </Color></Titulo>
<Texto>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea alias eaque sit minus harum illo, incidunt sed porro obcaecati. Unde officia expedita laudantium! Rerum porro corporis tempora officiis incidunt. Dolore?</Texto>
<AlinhamentoImagem>
<ImagemProject/>
<Seta>
<BsArrowRight/>
</Seta>
</AlinhamentoImagem>
</AlinhamentoTexto>
<ImagemEu/>
</AlinhamentoConteudo>)}

