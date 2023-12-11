import { BrowserRouter as Router } from "react-router-dom";
import { Cabecalho } from "./componentes/Cabecalho";
import GlobalStyled from "./componentes/GlobalStyled";
import { Menu } from "./componentes/Menú";
import { ConteudoDaPagina } from "./componentes/Páginas/Paginação";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Cabecalho />
      <Menu />
      <ConteudoDaPagina />
    </Router>
  );
}

export default App;
