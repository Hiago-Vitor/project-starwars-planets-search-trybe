import React, { useContext } from 'react';

function Search() {

  return (
    <form>
      <label htmlFor="user">
        Projeto Star Wars - Trybe
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          placeholder="Escreva o nome de um planeta"
        />
      </label>
    </form>
  );
}

export default Search;
