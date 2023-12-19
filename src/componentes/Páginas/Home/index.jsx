import styled from "styled-components";
import { keyframes } from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import ParticleBackground from "../Animações/Transição/particlesBackground";

const ImagemEu = styled.img.attrs({
  src: "/src/componentes/Páginas/Home/i.png",
})`
  position: fixed;
  max-width: 100%;
  max-height: 100%;
  right: 10%;
  bottom: 0%;
  width: 32rem;
  animation: fadeInAnimation ease 13s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: 5s;
  animation-delay: 2s;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-height: 650px) {
    width: 42rem;
    right: 3%;
  }

  @media (min-height: 1000px) {
    width: 62rem;
    right: 8%;
  }

  @media (max-width: 1111px) {
    visibility: hidden;
  }
`;

const ImageBackGround = styled.img.attrs({
  src: "/src/componentes/Páginas/Home/BackGround.jpeg",
})`
  z-index: -1;
  position: fixed;
  height: 800px;

  right: 3%;
  bottom: 0%;
`;

const AlinhamentoImagens = styled.div`
  display: flex;
`;
const ImagemSplash = styled.img.attrs({
  src: "/src/componentes/Páginas/Home/splash.png",
})`
  position: fixed;
  height: 600px;
  top: 0%;
  left: 0%;
  opacity: 0.4;
  z-index: -1;
`;

const AlinhamentoImagem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -5%;

  @media (max-width: 1111px) {
    left: 0%;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(359deg);
  }
  `;

const ImagemProject = styled.img.attrs({
  src: "/src/componentes/Páginas/Home/projects.png",
})`
  width: 10rem;
  position: relative;
  bottom: 5%;
  animation: ${rotate} 10s linear infinite;
`;

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
  display: flex;

  @media (max-width: 1111px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 1111px) {
    margin-top: -15%;
  }
`;

const Titulo = styled.h1`
  align-items: center;
  color: white;
  font-size: 40px;
  animation: typing 10s;

  @media (min-height: 1000px) {
    font-size: 60px;
  }
`;

const AlinhamentoTexto = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
  width: 418px;
  justify-content: center;

  @media (min-height: 750px) {
    width: 460px;
  }

  @media (min-height: 1000px) {
    width: 620px;
  }
`;

const Texto = styled.p`
  color: #ffffffd6;
  font-size: 13px;

  @media (min-height: 750px) {
    font-size: 20px;
  }

  @media (min-height: 1000px) {
    font-size: 30px;
  }
`;

const Color = styled.strong`
  color: red;
  font-weight: 900;
`;

export function Intro() {
  return (
    <AlinhamentoConteudo>
      <AlinhamentoTexto>
        <Titulo>
          <strong>
            Transforming Ideas Into <Color>Digital Reality </Color>
          </strong>
        </Titulo>
        <Texto>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          fugiat? Reiciendis laudantium ex necessitatibus et corrupti sed
          repudiandae, corporis possimus quas omnis ab quidem. Ratione
          doloremque maiores necessitatibus tempore. Soluta.
        </Texto>
        <AlinhamentoImagem>
          <ImagemProject />
          <Seta>
            <BsArrowRight />
          </Seta>
        </AlinhamentoImagem>
      </AlinhamentoTexto>
      <AlinhamentoImagens>
        <ImagemEu />
        <ImageBackGround />
      </AlinhamentoImagens>
      <ImagemSplash />
    </AlinhamentoConteudo>
  );
}
