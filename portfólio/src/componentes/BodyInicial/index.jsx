import styled from 'styled-components';
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

const ImagemProject = styled.img.attrs({
src:'/src/componentes/BodyInIcial/projects.png',})`
    position: relative;
    display: relative;
    overflow: auto;
    box-sizing: border-box;
    width: 12rem;
    animation: rotate 10s linear infinite;

    @keyframes rotate {
				from {
					transform: rotate(0deg);
				}

				to {
					transform: rotate(359deg);
				}
			}
`

const Seta = styled.div`
  position: absolute;
  color: #fa0303;
  font-size: 50px;
  top: 79%;
  left: 31%;
  transform: translate(-50%, -50%);


  &:hover {
    /* animation: rightMove 0.3s linear forwards; */
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
flex-direction:row;
height: 100%vh;

`

const Titulo = styled.h1`
overflow: hidding;
color: white;
font-size: 40px;
animation: typing 10s;

@keyframes typing{
 from{
  witdth: 0;
 }
}
`

const AlinhamentoTexto = styled.div`
position: relative;
display:flex;
flex-direction: column;
width: 65%;
`

const Texto = styled.p`
color: white;
font-size: 15px;
width: 390px`

const Color = styled.strong`
color: red;`


export function Intro(){
    return(
<AlinhamentoConteudo>
<AlinhamentoTexto>
<Titulo>Transforming Ideas Into <Color>Digital Reality </Color></Titulo>
<Texto>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea alias eaque sit minus harum illo, incidunt sed porro obcaecati. Unde officia expedita laudantium! Rerum porro corporis tempora officiis incidunt. Dolore?</Texto>
<ImagemProject/>
<Seta>
<BsArrowRight/>
</Seta>
</AlinhamentoTexto>
<ImagemEu/>
</AlinhamentoConteudo>)}

