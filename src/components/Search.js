import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Search() {
  const { setFilterByName } = useContext(planetsContext);
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
    </form>
  );
}

export default Search;
