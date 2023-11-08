import "boxicons"
import styled from 'styled-components';
import { useState } from "react";


const IconesMenu = [
    {nome: "home-alt", popUp:"Página inicial", color:'true'},
    {nome: "user", popUp:"Sobre mim", color:''},
    {nome: "message-rounded-dots", popUp:"Fale comigo", color:''},
    {nome: "paste", popUp:"Projetos", color:''}]
    

const EstilizacaoIcones = styled.div`
    display:flex;
    position: fixed;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(100, 100, 100, 0.286);
    width:40px;
    height:190px;
    border-radius: 20px;
    gap: 20px;
    top: 34%;
    left: 96%;
    color: white;

@media (max-width: 643px) {
    
margin: 55% 0% 0% 137%;}`
    

const PopUp = styled.div`
    position: absolute;
    display: inline-block;
    background-color:white;
    align-items: center;
    text-align: center;
    width: 87px;
    height: 23px;
    left: -103px;
    padding: 5px 8px 0px 0px;
    font-size: 12px;
    border-radius: 5px;
    font-weight: bold;
    color: black;
    visibility: hidden;

&:after{
    content:'';
    height:6px;
    width:7px;
    background-color:white;
    border: 2px solid;
    border-color:transparent #ffffff #ffffff transparent;
    display:block;
    position: absolute;
    left: 90px;
    bottom: 8.5px;
    transform: rotate(45deg);
    

}
`
const NavContainer =  styled.div`
    display:flex;
    position:relative;
    align-items: center;
    color: white;`
    
 export function Menu (){
  const [activeIcon, setActiveIcon] = useState(null);
  const [previousActiveIcon, setPreviousActiveIcon] = useState(null);
 
  const clickEvent = () => {
    setPreviousActiveIcon(activeIcon);
    setActiveIcon(index);
   }
  
  return (
<EstilizacaoIcones>
 {IconesMenu.map((element, index) => {

const iconColor = (activeIcon === index || previousActiveIcon === index) ? 'red' : 'white'

  return (
    <NavContainer>
      <PopUp style={{visibility: activeIcon === index ? 'visible' : 'hidden'}}>
        {element.popUp}
      </PopUp>
      <box-icon 
        style={{cursor:"pointer"}}
        name={element.nome}
        type="regular" 
        size="24px" 
        color={index === 0 && previousActiveIcon == null ? 'red' : iconColor}
        onMouseEnter={() => setActiveIcon(index)} 
        onMouseLeave={() => setActiveIcon(null)}
        onClick={clickEvent}> 
      </box-icon>
    </NavContainer>
  );
})}
</EstilizacaoIcones>  
)}