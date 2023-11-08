
import {Cabecalho} from './componentes/Cabecalho'
import GlobalStyled from './componentes/GlobalStyled'
import { Menu } from './componentes/Menú'
import { Intro } from './componentes/BodyInicial'



function App() {

  return (<>
    <GlobalStyled />
    <Cabecalho/>
    <Menu/>
    <Intro/>
    </>
  )
}

export default App
