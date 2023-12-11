import styled from "styled-components";
import Tipografia from "../Tipografia";
import { motion } from "framer-motion";
import { BsLinkedin, BsDiscord, BsWhatsapp, BsGithub } from "react-icons/bs";

const CabecalhoContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 35px;
  color: white;

  @media (max-width: 786px) {
    font-size: 40px;
    flex-direction: column;
  }
`;

const CabecalhoContainerAlinhamento = styled.div`
  display: flex;
  align-items: center;
`;

const CabecalhoAlinhamento = styled.div`
  display: flex;
  gap: 30px;
  .ulMotion {
    padding-inline-start: 0;
    list-style-type: none;
  }
`;

const Nome = styled.strong`
  letter-spacing: 1.5px;
  margin-right: 6px;
`;

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
      duration: 1.5,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
    },
  },
};

const Icones = styled.div`
  display: flex;
  color: white;
  font-size: 13px;
  gap: 35px;

  & :hover {
    color: red;
    cursor: pointer;
  }

  @media (max-width: 786px) {
    position: relative;
    font-size: 18px;
  }
`;

export function Cabecalho() {
  return (
    <CabecalhoContainer>
      <CabecalhoContainerAlinhamento>
        <Nome>theo </Nome>vargas
        <Tipografia />
      </CabecalhoContainerAlinhamento>
      <CabecalhoAlinhamento>
        <motion.ul
          variants={container}
          className="ulMotion"
          initial="hidden"
          animate="visible"
        >
          <Icones>
            <motion.li variants={item}>
              <BsDiscord />
            </motion.li>
            <motion.li variants={item}>
              <BsWhatsapp />
            </motion.li>
            <motion.li variants={item}>
              <BsGithub />
            </motion.li>
            <motion.li variants={item}>
              <BsLinkedin />
            </motion.li>
          </Icones>
        </motion.ul>
      </CabecalhoAlinhamento>
    </CabecalhoContainer>
  );
}
