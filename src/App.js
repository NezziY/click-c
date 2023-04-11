import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const ClickAdd = () => {
    setNumClicks(numClicks + 1);
  };

  const ClickSubstract = () => {
    if (numClicks === 0) {
      alert("Error!");
      return;
    }
    setNumClicks(numClicks - 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='title-container'>
        <h1>Contador de Clicks</h1>
      </div>
      <div className='contenedor-contador'>
        <Contador numClicks={numClicks} />

        <div>
          <Boton
          texto='+'
          esBotonDeClick={true}
          manejarClick={ClickAdd} />

          <Boton
            texto='-'
            esBotonDeClick={true}
            manejarClick={ClickSubstract} />
        </div>
        

        <Boton
          texto='Reset'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
