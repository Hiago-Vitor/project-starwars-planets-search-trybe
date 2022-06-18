import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Currentfilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(planetsContext);

  const removeFilter = (currentValue) => {
    setFilterByNumericValues(
      filterByNumericValues.filter((filter) => filter !== currentValue),
    );
  };

  return (
    <section>
      {
        filterByNumericValues.map((currentValue, index) => (
          <p
            data-testid="filter"
            key={ index }
          >
            { currentValue.column }
            {' '}
            { currentValue.comparison }
            {' '}
            { currentValue.value }
            {' '}
            <button
              type="button"
              onClick={ () => removeFilter(currentValue) }
            >
              <span role="img" aria-label="button">❌</span>
            </button>
          </p>
        ))
      }
    </section>
  );
}

export default Currentfilters;
