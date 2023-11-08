// store.js
import { configureStore } from '@reduxjs/toolkit';
import salesData from './salesData';

const initialState = {
  data: salesData,
  selectedFilter: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_FILTER':
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
