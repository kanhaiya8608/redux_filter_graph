import React from 'react';
import { useSelector } from 'react-redux';
import SalesChart from './SalesChart'

const DataDisplay = () => {
  const data = useSelector((state) => state.filter.data);
  const selectedFilter = useSelector((state) => state.filter.selectedFilter);

  const filteredData = data.filter((item) => {
    if (selectedFilter === '') {
      return true; // Show all data when no month is selected
    }
    const selectedMonth = selectedFilter; // Selected month is already in 'MM' format
    return item.date.split('-')[1] === selectedMonth;
  });

  return (
    <div>
      <h2>Sales Data</h2>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            {item.date}: ${item.sales}
          </li>
        ))}
      </ul>
      <SalesChart data={filteredData} />

    </div>
  );
};

export default DataDisplay;
