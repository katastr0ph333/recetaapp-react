import PropTypes from 'prop-types'
import RecetaCard from './RecetaCard'

function ListaRecetas({ recetas }) {
  return (
    <section className="lista-recetas">
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.id}
          nombre={receta.nombre}
          origen={receta.origen}
          porciones={receta.porciones}
          categoria={receta.categoria}
          descripcion={receta.descripcion}
          ingredientes={receta.ingredientes}
        />
      ))}
    </section>
  )
}

ListaRecetas.propTypes = {
  recetas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      origen: PropTypes.string.isRequired,
      porciones: PropTypes.number.isRequired,
      categoria: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}

export default ListaRecetas
