import { useMemo, useState } from 'react'
import { recetas } from './data/recetas'
import ListaRecetas from './components/ListaRecetas'
import FiltroCategoria from './components/FiltroCategoria'
import './App.css'

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const manejadorCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria)
  }

  const manejadorBusqueda = (evento) => {
    const valorBruto = evento.target.value
    const valorNormalizado = valorBruto.trim().slice(0, 40)
    setBusqueda(valorNormalizado)
  }

  const recetasFiltradas = useMemo(() => {
    const termino = busqueda.trim().toLowerCase()
    return recetas.filter((receta) => {
      const coincideCategoria =
        categoriaSeleccionada === 'Todas' || receta.categoria === categoriaSeleccionada
      const coincideNombre = receta.nombre.toLowerCase().includes(termino)
      return coincideCategoria && coincideNombre
    })
  }, [categoriaSeleccionada, busqueda])

  return (
    <main className="app">
      <header className="app__header">
        <h1>Recetario digital</h1>
        <p>Selecciona una receta para ver su categoría, origen e ingredientes claramente organizados.</p>
      </header>

      <section className="app__controles">
        <FiltroCategoria
          categoriaSeleccionada={categoriaSeleccionada}
          onCategoriaChange={manejadorCategoria}
        />

        <label className="app__busqueda-label" htmlFor="busqueda-recetas">
          Buscar por nombre
          <input
            id="busqueda-recetas"
            type="search"
            value={busqueda}
            onChange={manejadorBusqueda}
            className="app__busqueda"
            placeholder="Ej: Ensalada César"
            maxLength={40}
          />
        </label>
      </section>

      {recetasFiltradas.length > 0 ? (
        <ListaRecetas recetas={recetasFiltradas} />
      ) : (
        <p className="app__sin-resultado">No hay recetas que coincidan</p>
      )}
    </main>
  )
}

export default App
