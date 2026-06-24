import PropTypes from 'prop-types'


function RecetaCard({
  nombre,
  origen,
  porciones,
  categoria,
  descripcion,
  ingredientes,
  esVegetariana,
}) {
  const categoryClass = {
    Entrada: 'receta-card--entrada',
    Fondo: 'receta-card--fondo',
    Postre: 'receta-card--postre',
  }[categoria] || 'receta-card--default'

  return (
    <article className={`receta-card ${categoryClass} ${esVegetariana ? 'receta-card--vegetariana' : ''}`}>
      <header className="receta-card__header">
        <div>
          <h2 className="receta-card__nombre">{nombre}</h2>
          <p className="receta-card__origen">Origen: {origen}</p>
        </div>
        <div className="receta-card__tags">
          {esVegetariana && <span className="receta-card__veg-label">VEG</span>}
          <span className="receta-card__categoria">{categoria}</span>
        </div>
      </header>

      <p className="receta-card__meta">Porciones: {porciones}</p>
      <p className="receta-card__descripcion">{descripcion}</p>

      <section className="receta-card__ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={`${ingrediente}-${index}`}>{ingrediente}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

RecetaCard.defaultProps = {
  nombre: 'Receta sin nombre',
  origen: 'Origen no especificado',
  porciones: 1,
  categoria: 'Sin categoría',
  descripcion: 'Descripción no disponible.',
  ingredientes: ['Ingrediente no disponible'],
  esVegetariana: false,
}

RecetaCard.propTypes = {
  nombre: PropTypes.string,
  origen: PropTypes.string,
  porciones: PropTypes.number,
  categoria: PropTypes.string,
  descripcion: PropTypes.string,
  ingredientes: PropTypes.arrayOf(PropTypes.string),
  esVegetariana: PropTypes.bool,
}

export default RecetaCard
