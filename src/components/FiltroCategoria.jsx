import PropTypes from 'prop-types'

const categorias = ['Todas', 'Entrada', 'Fondo', 'Postre']

function FiltroCategoria({ categoriaSeleccionada, onCategoriaChange }) {
  return (
    <div className="filtro-categoria">
      <p className="filtro-categoria__label">Filtrar por categoría</p>
      <div className="filtro-categoria__botones">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={`filtro-categoria__boton ${categoriaSeleccionada === categoria ? 'is-active' : ''}`}
            onClick={() => onCategoriaChange(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  )
}

FiltroCategoria.propTypes = {
  categoriaSeleccionada: PropTypes.string,
  onCategoriaChange: PropTypes.func.isRequired,
}

FiltroCategoria.defaultProps = {
  categoriaSeleccionada: 'Todas',
}

export default FiltroCategoria
