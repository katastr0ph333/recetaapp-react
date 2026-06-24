

## 1. Componente
¿Dónde lo usas en este problema?
- En React, un componente representa una parte reutilizable de la interfaz. Para este recetario, se usaría un componente principal como `App` y componentes secundarios como `ListaRecetas` y `RecetaCard`.
¿Por qué es adecuado?
- Porque permite separar responsabilidades: el listado de recetas, la presentación de cada receta y el filtro de opciones vegetarianas son piezas distintas. Esto hace la aplicación más ordenada, fácil de mantener y más segura al evitar código monolítico.

## 2. JSX
¿Dónde lo usas en este problema?
- JSX se usa para escribir la estructura HTML dentro de los componentes, por ejemplo en `return` de `App`, `ListaRecetas` y `RecetaCard`.
¿Por qué es adecuado?
- Porque permite mezclar lógica de JavaScript con marcado de HTML de forma clara y segura. En esta aplicación facilita crear la vista del recetario, mostrar categorías, ingredientes y estilos condicionales para recetas vegetarianas.

## 3. Props
¿Dónde lo usas en este problema?
- Las `props` se usan para pasar datos desde el componente padre a los hijos, por ejemplo pasar cada objeto `receta` desde `ListaRecetas` hacia `RecetaCard`.
¿Por qué es adecuado?
- Porque permite que los componentes sean reutilizables y controlados externamente. Un componente `RecetaCard` no necesita saber de dónde vienen los datos, solo recibe las propiedades necesarias y las muestra.

## 4. Estado (`useState`)
¿Dónde lo usas en este problema?
- `useState` se usa en el componente principal para manejar estados de la UI, como si se desea mostrar solo vegetarianas o todas las recetas.
¿Por qué es adecuado?
- Porque React necesita saber cuándo volver a renderizar la interfaz. El estado representa datos dinámicos de la UI, como un filtro activo, sin necesidad de recargar la página o usar datos externos.

## 5. Renderizado de listas (`.map` + `key`)
¿Dónde lo usas en este problema?
- Se usa `.map` para iterar sobre el arreglo de recetas y crear un elemento `RecetaCard` por cada receta.
- Cada tarjeta usa `key={receta.id}` para identificarla de forma única.
¿Por qué es adecuado?
- Porque el recetario es una lista de datos precargados en un archivo local. React necesita `.map` para generar cada item dinámicamente y la `key` asegura que el DOM virtual pueda actualizar solo los elementos necesarios.

## 6. Renderizado condicional
¿Dónde lo usas en este problema?
- Se usa renderizado condicional para destacar recetas vegetarianas y para mostrar u ocultar secciones según el filtro activo.
- Por ejemplo, `esVegetariana ? "Vegetariana" : "No vegetariana"` o clasificar recetas por categoría.
¿Por qué es adecuado?
- Porque la aplicación debe distinguir visualmente las opciones vegetarianas y puede cambiar la vista según el criterio seleccionado sin recargar la página.

---

## Preguntas breves

1. ¿Qué ventaja tiene dividir el recetario en componentes en lugar de escribir todo en un solo archivo?
- Dividir en componentes mejora la claridad y el orden del proyecto. Facilita el mantenimiento y la lectura, reduce errores y permite reutilizar piezas como la tarjeta de receta en diferentes vistas.

2. ¿Qué diferencia hay entre props y estado en tu solución? 
- `props` son datos que recibe un componente desde su padre, por ejemplo `RecetaCard` recibe `receta` con nombre, categoría y si es vegetariana. `estado` es información interna de un componente que puede cambiar con el tiempo, por ejemplo `mostrarSoloVegetarianas` en `App` controla si la lista filtra recetas vegetarianas.
