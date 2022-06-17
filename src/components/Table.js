import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Table() {
  const headerList = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
  ];

  const {
    data, filterByName, filterByNumericValues,
  } = useContext(planetsContext);

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
          {headerList.map((header) => <th key={ header }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataFiltred
          .map((planet, i) => (
            <tr key={ i }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
