
import { BrowserRouter } from 'react-router-dom'
import {Cabecalho} from './componentes/Cabecalho'
import GlobalStyled from './componentes/GlobalStyled'
import { Menu } from './componentes/Menú'
import { ConteudoDaPagina } from './componentes/Páginas/Paginação'



function App() {

  return (<>
  <BrowserRouter>
    <GlobalStyled />
    <Cabecalho/>
    <Menu/>
    <ConteudoDaPagina/>
  </BrowserRouter>
    </>
  )
}

export default App
