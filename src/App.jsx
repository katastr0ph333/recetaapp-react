import { recetas } from './data/recetas'
import ListaRecetas from './components/ListaRecetas'
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Recetario digital</h1>
        <p>Selecciona una receta para ver su categoría, origen e ingredientes claramente organizados.</p>
      </header>

      <ListaRecetas recetas={recetas} />
    </main>
  )
}

export default App
