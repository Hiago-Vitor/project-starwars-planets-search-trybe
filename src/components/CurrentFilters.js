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
        filterByNumericValues.map((currentValue) => (
          <p
            data-testid="filter"
            key={ currentValue.column }
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
              ❌
            </button>
          </p>
        ))
      }
    </section>
  );
}

export default Currentfilters;
