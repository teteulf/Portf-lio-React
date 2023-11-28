import "boxicons"
import styled from 'styled-components';
import { useState } from "react";
import { BiHomeAlt, BiEnvelope, BiEdit, BiUser} from "react-icons/bi"; 
import { Link } from 'react-router-dom';




const EstilizacaoIcones = styled.div`
    display:flex;
    position: fixed;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: rgba(100, 100, 100, 0.286);
    width:40px;
    height:190px;
    border-radius: 20px;
    top: 34%;
    left: 96%;
    

@media (max-width: 900px) {
    flex-direction: row;
    border-radius: 0px;
    width: 100%;
    height: 50px;
    gap: 20%;
    justify-content: center;
    top: 95%;
    left: 0%;
}`

const Icones = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
font-size: 22px;
`

const AlinhaPopUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & :hover {
  color: red;

  }
`

const PopUp = styled.div`
  position:absolute;
  right: 150%;
  background-color:  white;
  visibility: hidden;
  padding: 3px;
  border-radius: 10px;
  width: 90px;

  & ::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 66%;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-left-color: white;
  margin-top: -10px;
  margin-right: -12px;
 }
`

const PopUpContent = styled.strong`
display: flex;
align-items: center;
justify-content: center;
color: black;
font-size: 15px;
`

const NavContainer =  styled.div`
    display:flex;
    position:relative;
    align-items: center;
    color: white;`
    
 export function Menu (){
  
  const [popupVisibility, setPopupVisibility] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
    popup4: false
   });
    
  return (
<EstilizacaoIcones>
    <NavContainer>
      <Icones>
      <AlinhaPopUp>
      <BiHomeAlt
      onMouseEnter={() => setPopupVisibility({...popupVisibility, popup1: true})} 
      onMouseLeave={() => setPopupVisibility({...popupVisibility, popup1: false})}
      /> 
      <PopUp style={{visibility: popupVisibility.popup1 ? 'visible' : 'hidden'}}><PopUpContent>Home</PopUpContent></PopUp>
      </AlinhaPopUp>
      <AlinhaPopUp> 
      <BiUser
      onMouseEnter={() => setPopupVisibility({...popupVisibility, popup2: true})} 
      onMouseLeave={() => setPopupVisibility({...popupVisibility, popup2: false})}
      />
      <PopUp style={{visibility: popupVisibility.popup2 ? 'visible' : 'hidden'}}><PopUpContent>About me</PopUpContent></PopUp>
      </AlinhaPopUp> 
      <AlinhaPopUp>
      <BiEnvelope
      onMouseEnter={() => setPopupVisibility({...popupVisibility, popup3: true})} 
      onMouseLeave={() => setPopupVisibility({...popupVisibility, popup3: false})}
      />
      <PopUp style={{visibility: popupVisibility.popup3 ? 'visible' : 'hidden'}}><PopUpContent>Talk to me</PopUpContent></PopUp>
      </AlinhaPopUp>
      <AlinhaPopUp>
      <BiEdit
       onMouseEnter={() => setPopupVisibility({...popupVisibility, popup4: true})} 
       onMouseLeave={() => setPopupVisibility({...popupVisibility, popup4: false})}
      />
      <PopUp style={{visibility: popupVisibility.popup4 ? 'visible' : 'hidden'}}><PopUpContent>Projects</PopUpContent></PopUp>
      </AlinhaPopUp>
      </Icones>
    </NavContainer>
</EstilizacaoIcones>  
)}