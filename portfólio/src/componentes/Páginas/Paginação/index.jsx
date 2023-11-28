import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Intro } from '../Home'
import { AboutMe } from '../About Me';
import { Projects } from '../Projects';
import { TalkToMe } from '../Talk To Me';

export function ConteudoDaPagina(){
 return(
     <Router>
     <Routes>
       <Route path="/" element={<Navigate to="/Home" />} />
       <Route path="/Home" element={<Intro/>} />
       <Route path="/About_Me" element={<AboutMe/>} />
       <Route path="/Projects" element={<Projects/>} />
       <Route path="/Talk_To_Me" element={<TalkToMe/>} />
     </Routes>
   </Router>
 );
 }
