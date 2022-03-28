import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/planetsContext';
import fetchPlanetList from '../services/dataAPI';

function Table() {
  const headerList = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
  ];

  const {
    data, setPlanetsData, filterByName, filterByNumericValues,
  } = useContext(planetsContext);

  useEffect(() => {
    async function getPlanetsData() {
      const listPlanets = await fetchPlanetList();
      listPlanets.map((planet) => delete planet.residents);
      setPlanetsData(listPlanets);
    }
    getPlanetsData();
  }, [setPlanetsData]);

  const dataFiltred = data.filter(
    (planet) => planet.name.toLowerCase().includes(filterByName.name),
  ).filter((planet) => filterByNumericValues.every(({ comparison, column, value }) => {
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > value;
    case 'menor que':
      return Number(planet[column]) < value;
    default:
      return planet[column] === value;
    }
  }));

  return (
    <table>
      <thead>
        <tr>
          { headerList.map((header) => <th key={ header }>{ header }</th>)}
        </tr>
      </thead>
      <tbody>
        { dataFiltred
          .map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet).map((dataEachPlanet) => (
                <td key={ dataEachPlanet }>
                  { dataEachPlanet }
                </td>))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
