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
