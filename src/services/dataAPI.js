const BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const DOWNWARD = -1;

const orderName = (planets) => planets.sort((a, b) => (a.name > b.name ? 1 : DOWNWARD));

const getPlanetList = async () => {
  const response = await fetch(`${BASE_API}`);
  const { results } = await response.json();

  return response.ok
    ? Promise.resolve(orderName(results)) : Promise.reject(orderName(results));
};

export default getPlanetList;
