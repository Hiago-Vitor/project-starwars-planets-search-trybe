import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [data, setPlanetsData] = useState([]);
  return (
    <planetsContext.Provider value={ { data, setPlanetsData } }>
      {children}
    </planetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
