import {Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AboutMe } from '../About Me';
import  {Intro}  from '../Home'
import  {Projects}  from '../Projects';
import  {TalkToMe}  from '../Talk To Me';
import Transicao from '../Transição';

export function ConteudoDaPagina() {
  const location = useLocation();

  return (
    <>
      <Transicao />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Intro />} />
        <Route path="/About_Me" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Talk_To_Me" element={<TalkToMe />} />
      </Routes>
    </>
  );
}