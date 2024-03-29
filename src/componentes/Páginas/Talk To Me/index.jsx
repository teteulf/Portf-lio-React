import { useState } from "react";
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

const Dialog = styled.span`
  position: fixed;
  width: 200px;
  height: 100px;
  background-color: white;
  text-align: center;
  top: 50%;

  &::backdrop {
    background-color: #03011acc;
  }

  .buttonDialog {
    width: 80px;
    height: 20px;
  }
`;

export function TalkToMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const getInput = (event) => {
    const submitInput = {};

    const elementsInput = event.target.querySelectorAll("input");

    elementsInput.forEach((element) => {
      const type = element.placeholder.toLowerCase();
      const input = element.value;

      submitInput[type] = input;
    });

    return submitInput;
  };

  const checkInput = (input) => {
    let check = true;
    for (let value of Object.values(input)) {
      if (value === "") {
        check = false;
      }
    }
    return check;
  };

  const postSubmit = (input) => {
    fetch("https://send-email-teteu.vercel.app", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(input),
    })
      .then((data) => {
        data.status === 400 ? setConfirmed(false) : setConfirmed(true);
      })
      .finally(() => {
        console.log("fetch true");
        setIsOpen(true);
      });
  };
  return (
    <>
      <Alinhamento>
        <FormContainer
          onSubmit={(event) => {
            event.preventDefault();
            const input = getInput(event);
            const confirmed = checkInput(input);
            console.log(confirmed);
            confirmed ? postSubmit(input) : setIsOpen(true);
          }}
        >
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
          <button type="submit" className="inputButton">
            Send
          </button>
        </FormContainer>
      </Alinhamento>
      {isOpen &&
        (confirmed ? (
          <Dialog>
            Email enviado com sucesso!
            <button
              className="buttonDialog"
              onClick={() => {
                setIsOpen(false);
                setConfirmed(false);
              }}
            >
              Ok
            </button>
          </Dialog>
        ) : (
          <Dialog>
            Por favor preencha todos os campos.
            <button
              className="buttonDialog"
              onClick={() => {
                setIsOpen(false);
                setConfirmed(false);
              }}
            >
              Ok
            </button>
          </Dialog>
        ))}
    </>
  );
}
