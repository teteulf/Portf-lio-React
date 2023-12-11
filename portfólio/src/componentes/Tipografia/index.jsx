import styled from "styled-components";

const TipografiaStyled = styled.div`
  color: ${(props) => props.cor || "#da1414"};
  font-size: ${(props) => props.tamanhoFonte || "40px"};
`;

function Tipografia({ cor, tamanhoFonte }) {
  return (
    <TipografiaStyled cor={cor} tamanhoFonte={tamanhoFonte}>
      .
    </TipografiaStyled>
  );
}

export default Tipografia;
