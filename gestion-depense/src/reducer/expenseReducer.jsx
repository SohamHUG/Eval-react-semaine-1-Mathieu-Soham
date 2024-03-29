import {useReducer} from "react";

const initialState = {
  expenses: [],
  filterCategory: ''
};

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case 'SET_FILTER_CATEGORY':
      return {
        ...state,
        filterCategory: action.payload
      };
    default:
      return state;
  }
};

export const useExpensesReducer = () => useReducer(expensesReducer, initialState)