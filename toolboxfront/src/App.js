/* import logo from './logo.svg'; */

import './App.css';
import './components/headerContenido'
// import TituloPage from './components/headerContenido';
import {Main} from './components/main';


function App() {
  return (
    <div className="App">
      {/* <TituloPage titulo='Listado de la entidad' /> */}
      <Main />
    </div>
  );
}

export default App;
