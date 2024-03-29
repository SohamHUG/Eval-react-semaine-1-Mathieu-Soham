import React, { createContext, useContext } from 'react';
import { useExpensesReducer } from '../reducer/expenseReducer'

const expensesContext = createContext();

export const useExpensesContext = () => useContext(expensesContext)

const ExpensesProvider = ({ children }) => {
    const [state, dispatch] = useExpensesReducer();

    return (
        <expensesContext.Provider value={{ state, dispatch }}>
            {children}
        </expensesContext.Provider>
    );
};

export default ExpensesProvider