import React from 'react';
import './App.css';
import Currentfilters from './components/CurrentFilters';
import Search from './components/Search';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Search />
      <Currentfilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
