import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/planetsContext';
import fetchPlanetList from '../services/dataAPI';

function Table() {
  const { data, setPlanetsData } = useContext(planetsContext);

  useEffect(() => {
    async function getPlanetsData() {
      const listPlanets = await fetchPlanetList();
      listPlanets.map((planet) => delete planet.residents);
      setPlanetsData(listPlanets);
    }
    getPlanetsData();
  }, [setPlanetsData]);

  const headerList = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
  ];

  return (
    <table>
      <thead>
        <tr>
          { headerList.map((header) => <th key={ header }>{ header }</th>)}
        </tr>
      </thead>
      <tbody>
        { data.map(({
          name, rotation_period: rtPeriod, orbital_period: orbtPeriod, diameter, climate,
          gravity, terrain, surface_water: srfcWater, population, films, created, edited,
          url,
        }) => (
          <tr key={ name }>
            <td>{ name }</td>
            <td>{ rtPeriod }</td>
            <td>{ orbtPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ srfcWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
