import { useState } from 'react'
import { productosStock } from './Tres'
import './App.css'

function App() {
  const [nombreProducto, setNombreProducto] = useState("")
  const [listaProductos, setListaProductos] = useState(productosStock)


  const enviarFormulario = (e) =>{
    e.preventDefault()
    console.log("Enviamos un formulario")
    setListaProductos([...listaProductos, { id: Math.random(), nombre: nombreProducto, stock: true }])
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
        {listaProductos.map(p => 
        <li key={p.id}>
          {p.nombre}
          {!p.stock? <p style={{color:"red"}}>NO HAY STOCK</p> : <button>Comprar</button>}
        </li>)}
      </ul>
    </>
  )
}

export default App
