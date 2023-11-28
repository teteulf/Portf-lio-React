
import {Cabecalho} from './componentes/Cabecalho'
import GlobalStyled from './componentes/GlobalStyled'
import { Menu } from './componentes/Menú'
import { ConteudoDaPagina } from './componentes/Páginas/Paginação'



function App() {

  return (<>
    <GlobalStyled />
    <Cabecalho/>
    <Menu/>
    <ConteudoDaPagina/>
    </>
  )
}

export default App
