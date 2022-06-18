import React, { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

function Search() {
  const {
    setFilterByName, filterByNumericValues, setFilterByNumericValues,
  } = useContext(planetsContext);

  const [numericFilter, setNumericFilter] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const handleChanges = (target) => {
    setNumericFilter({ ...numericFilter, [target.name]: target.value });
  };

  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        setFilterByNumericValues([...filterByNumericValues, numericFilter]);
      } }
    >
      <label htmlFor="name">
        Projeto Star Wars - Trybe
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          placeholder="Escreva o nome de um planeta"
          onChange={
            ({ target }) => setFilterByName({ name: target.value.toLowerCase() })
          }
        />
      </label>
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
          name="column"
          value={ numericFilter.column }
          onChange={ ({ target }) => handleChanges(target) }
        >
          { columns.filter((columnFiltred) => filterByNumericValues.every(
            ({ column }) => columnFiltred !== column,
          ))
            .map((column, index) => (<option key={ index }>{ column }</option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ numericFilter.comparison }
          onChange={ ({ target }) => handleChanges(target) }
        >
          { comparisons.map(
            (comparison, index) => (<option key={ index }>{ comparison }</option>),
          )}
        </select>
      </label>
      <input
        data-testid="value-filter"
        type="number"
        value={ numericFilter.value }
        name="value"
        onChange={ ({ target }) => handleChanges(target) }
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default Search;
