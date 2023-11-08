import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dropdown = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.filter.data);

  const handleFilterChange = (event) => {
    dispatch({ type: 'SET_FILTER', payload: event.target.value });
  };

  const uniqueMonths = [...new Set(data.map((item) => item.date.split('-')[1]))];

  return (
    <div>
      <label htmlFor="filter">Filter by Month:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="">All</option>
        {uniqueMonths.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
