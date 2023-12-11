import styled from "styled-components";

const Alinhamento = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
  @media (max-width: 786px) {
    height: 60vh;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  width: 70%;
  margin-top: -10%;
  div {
    display: flex;
    gap: 20px;
    width: 100%;
  }

  .inputDefault {
    width: 100%;
    box-sizing: border-box;
    background-color: #000014ae;
    border: 1px solid #aaa9a974;
    border-radius: 10px;
    padding: 12px 0px 12px 20px;
    color: #ffffff8a;
  }

  .inputDefault:focus {
    border: 1px solid red;
  }

  .inputMessage {
    height: 130px;
    padding: 12px 0px 82px 20px;
  }

  .inputButton {
    width: 10rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid #05b40296;
    padding: 12px -5px 12px 0px;
    box-sizing: border-box;
    background-color: transparent;
    color: #ffffff8a;

    &:hover {
      background-color: #01012b;
    }
  }
`;

const Dialogue = styled.dialog`
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: white;
  text-align: center;

  &::backdrop {
    background-color: #03011acc;
  }

  .buttonDialog {
    position: relative;
    top: 70%;
    right: 16%;
    width: 80px;
    height: 20px;
  }
`;

export function TalkToMe() {
  const modal = document.querySelector(".ModalDialogue");
  return (
    <>
      <Alinhamento>
        <FormContainer>
          <h1
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              fontSize: "40px",
            }}
          >
            Let's <strong style={{ color: "red" }}>Connect.</strong>
          </h1>
          <div>
            <input className="inputDefault" placeholder="name" />
            <input type="email" className="inputDefault" placeholder="email" />
          </div>
          <input className="inputDefault inputSubject" placeholder="Subject" />
          <input className="inputDefault inputMessage" placeholder="Message" />
          <input
            type="button"
            className="inputButton"
            value={"Send"}
            onClick={() => {
              modal.showModal();
            }}
          />
        </FormContainer>
      </Alinhamento>
      <Dialogue className="ModalDialogue">
        Email enviado com sucesso!
        <button
          className="buttonDialog"
          onClick={() => {
            modal.close();
          }}
        >
          Ok
        </button>
      </Dialogue>
      <Dialogue>
        Por favor preencha todos os campos.
        <button
          className="buttonDialog"
          onClick={() => {
            modal.close();
          }}
        >
          Ok
        </button>
      </Dialogue>
    </>
  );
}
