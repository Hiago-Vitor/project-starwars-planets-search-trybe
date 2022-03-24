import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [data, setPlanetsData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  return (
    <planetsContext.Provider
      value={
        { data, setPlanetsData, filterByName, setFilterByName }
      }
    >
      {children}
    </planetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
