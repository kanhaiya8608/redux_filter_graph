// App.js
import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import DataDisplay from './DataDisplay';
import BarChart from './BarChart';
import ColumnChart from './ColumnChart';

function App() {
  return (
    <div className="App">
      <h1>Monthly Sales Data</h1>
      <Dropdown />
      <DataDisplay />
      <BarChart/>
      <ColumnChart/>
    </div>
  );
}

export default App;
