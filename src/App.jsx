import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Text from './components/Texts/Texts'
import Contador from './components/Contador/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Text firstTitle='Bienvenidos a mi web' />
        <img src={logo} className="App-logo" alt="logo" />
        <Text secondText='¡3ra entrega!'/>
        <Text firstText='El componente TEXT tiene varios tipos de texto asignadas como variables las cuales cambian la fuente del texto' />
        <Contador/>
      </header>
    </div>
  )
}

export default App
