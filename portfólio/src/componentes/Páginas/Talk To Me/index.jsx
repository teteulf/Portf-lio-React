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
  gap: 38px;
  box-sizing: border-box;
  width: 70%;
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
`;

export function TalkToMe() {
  return (
    <Alinhamento>
      <FormContainer>
        <div>
          <input className="inputDefault" placeholder="name" />
          <input type="email" className="inputDefault" placeholder="email" />
        </div>
        <input className="inputDefault inputSubject" placeholder="Subject" />
        <input className="inputDefault inputMessage" placeholder="Message" />
      </FormContainer>
    </Alinhamento>
  );
}
