const BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetList = async () => {
  const response = await fetch(`${BASE_API}`);
  const { results } = await response.json();

  return response.ok ? Promise.resolve(results) : Promise.reject(results);
};

export default getPlanetList;
