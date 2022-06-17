import React, { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

function Order() {
  const {
    orderByNumericFilter, setFilterByNumericValues,
  } = useContext(planetsContext);

  const [columnsOrder, setColumnsOrder] = useState({ column: 'population', sort: 'ASC' });

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleChanges = ({ target }) => {
    setColumnsOrder({ ...columnsOrder, [target.name]: target.value });
  };

  const handleClick = () => {
    orderByNumericFilter(columnsOrder);
  };

  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        setFilterByNumericValues([]);
      } }
    >
      <label htmlFor="column">
        Ordenar
        <select
          data-testid="column-sort"
          name="column"
          onChange={ handleChanges }
        >
          {columns
            .map((column, i) => (
              <option key={ i }>{column}</option>
            ))}
        </select>
      </label>
      <label htmlFor="asc">
        Ascendente
        <input
          type="radio"
          id="asc"
          data-testid="column-sort-input-asc"
          name="sort"
          value="ASC"
          onChange={ handleChanges }
        />
      </label>
      <label htmlFor="desc">
        Descendente
        <input
          type="radio"
          id="desc"
          data-testid="column-sort-input-desc"
          name="sort"
          value="DESC"
          onChange={ handleChanges }
        />
      </label>
      <button
        type="submit"
        data-testid="column-sort-button"
        onClick={ handleClick }
      >
        Ordenar
      </button>
      <button type="submit" data-testid="button-remove-filters">
        Remover Filtros
      </button>
    </form>
  );
}

export default Order;
