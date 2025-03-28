import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruits from './components/Fruis'
import FruitList from './components/Fruis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Fruit Management System</h1>

        </header>
        <main>
          <FruitList/>
        </main>
      </div>
    </>
  )
}

export default App
