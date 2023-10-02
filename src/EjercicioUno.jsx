
// import { useState } from 'react'
import './App.css'

function App() {
  // let productos = ["Producto 1", "Producto 2", "Producto 3"]
  let colores = ["red", "gray", "blue", "orange"]

  return (
    <>
      {/* <ul>
        {productos.map(p => <li key={p}>{p}</li>)}
      </ul> */}
      
      <ul>
        {colores.map(c => <li style={{color:c}} key={c}>{c}</li>)}
      </ul>
      
    </>
  )
}

export default App
