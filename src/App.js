import {useState} from 'react'
import logo from './logo.svg'
import Boton from './components/Boton'
import Frase from './components/Frase'

function App() {

  const [frase, setFrase] = useState({})

  return (
    <div className="App flex flex-col justify-center w-full h-screen items-center">
      <img src={logo} alt="" className="px-5"/>
      <Frase
        frase = {frase}
      />
      <Boton
        setFrase = {setFrase}
      />
    </div>
  );
}

export default App;
