import { useState } from 'react'
import './App.css'

function App() {
  const [nombreProducto, setNombreProducto] = useState("")
  const [listaProductos, setListaProductos] = useState(["Producto 1", "Producto 2", "Producto 3"])


  const enviarFormulario = (e) =>{
    e.preventDefault()
    console.log("Enviamos un formulario")
    setListaProductos([...listaProductos, nombreProducto])
    setNombreProducto("")
  }

  const respuestaUsuario = (e) =>{
    setNombreProducto(e.target.value)
  }

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <input 
          value={nombreProducto}
          type='text' 
          name='nombreProducto' 
          onChange={respuestaUsuario}
        />
        <button>Agregar producto</button>
      </form>
      <ul>
        {listaProductos.map(p => <li key={p}>{p}</li>)}
      </ul>
    </>
  )
}

export default App
