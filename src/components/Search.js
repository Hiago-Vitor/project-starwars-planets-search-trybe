import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Search() {

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const handleChanges = (target) => {
    const newFilter = { name: target.value.toLowerCase() };
    setFilterByName(newFilter);
  };

  return (
      <label htmlFor="name">
        Projeto Star Wars - Trybe
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          placeholder="Escreva o nome de um planeta"
          onChange={ ({ target }) => handleChanges(target) }
        />
      </label>
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
          name="column"
        >
          { columns.map((column) => (<option key={ column }>{ column }</option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          data-testid="comparison-filter"
          name="comparison"
        >
          { comparisons.map(
            (comparison) => (<option key={ comparison }>{ comparison }</option>),
          )}
        </select>
      </label>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default Search;
