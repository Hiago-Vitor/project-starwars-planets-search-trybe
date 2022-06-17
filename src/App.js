import React from 'react';
import './App.css';
import Currentfilters from './components/CurrentFilters';
import Order from './components/Order';
import Search from './components/Search';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>

      <Search />
      <Order />

      <Currentfilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
