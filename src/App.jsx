import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Header/></div>
        
      <h1>LEGOCARS</h1>
      <div className="card">      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Bienvenido a Legocars! ¡La mejor aplicación de gestión de campeonatos!
      </p>

      <div><Footer/></div>
    </>
  )
}

export default App
