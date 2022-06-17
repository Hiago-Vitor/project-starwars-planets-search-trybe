import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

import fetchPlanetList from '../services/dataAPI';

function PlanetsProvider({ children }) {
  const [data, setPlanetsData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });
  const DOWNWARD = -1;

  const orderName = (planets) => {
    if (order.sort === 'ASC') {
      return planets.sort((a, b) => (a.name > b.name ? 1 : DOWNWARD));
    }
    return planets.sort((a, b) => (a.name < b.name ? 1 : DOWNWARD));
  };

  const orderByNumericFilter = ({ column, sort }) => {
    if (sort === 'ASC') {
      return data.sort((a, b) => (Number(a[column]) > Number(b[column]) ? 1 : DOWNWARD));
    }
    return data.sort((a, b) => {
      if (a[column] === 'unknown') return 1;
      if (a[column] === 'unknown') return DOWNWARD;
      return (Number(a[column]) < Number(b[column]) ? 1 : DOWNWARD);
    });
  };

  useEffect(() => {
    const getPlanets = async () => {
      const listPlanets = await fetchPlanetList();
      listPlanets.map((planet) => delete planet.residents);
      setPlanetsData(orderName(listPlanets));
    };
    getPlanets();
  }, []);

  const gettersAndSetters = {
    data,
    setPlanetsData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    orderName,
    orderByNumericFilter,
  };

  return (
    <planetsContext.Provider
      value={ gettersAndSetters }
    >
      {children}
    </planetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
