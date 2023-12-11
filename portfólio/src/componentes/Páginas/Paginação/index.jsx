import { Route, Routes } from "react-router-dom";
import { AboutMe } from "../About Me";
import { Intro } from "../Home";
import { Projects } from "../Projects";
import { TalkToMe } from "../Talk To Me";
import Transicao from "../Animações/Transição/Transition";

export function ConteudoDaPagina() {
  return (
    <>
      <Transicao />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/About_Me" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Talk_To_Me" element={<TalkToMe />} />
        <Route path="*" element={<div>'Página não encontrada'</div>} />
      </Routes>
    </>
  );
}
