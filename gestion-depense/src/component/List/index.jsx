import React, { useContext } from 'react';
import { useExpensesContext } from '../../context/ExpensesContext';
import "./list.css"

const ExpensesList = () => {
  const { state, dispatch } = useExpensesContext();
  const { expenses, filterCategory } = state;

  const filteredExpenses = filterCategory ? expenses.filter(expense => expense.category === filterCategory) : expenses;

  const totalExpenses = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);

  const handleSetFilterCategory = (category) => {
    dispatch({ type: 'SET_FILTER_CATEGORY', payload: category });
  };

  return (
    <div>
      <h2>Vos dépenses :</h2>
      <div className='nav'>
        <button onClick={() => handleSetFilterCategory('')}>Toutes les dépenses</button>
        <button onClick={() => handleSetFilterCategory('Alimentation')}>Alimentation</button>
        <button onClick={() => handleSetFilterCategory('Logement')}>Logement</button>
        <button onClick={() => handleSetFilterCategory('Transport')}>Transport</button>
        <button onClick={() => handleSetFilterCategory('Divertissement')}>Divertissement</button>
        <button onClick={() => handleSetFilterCategory('Santé')}>Santé</button>
        <button onClick={() => handleSetFilterCategory('Éducation')}>Éducation</button>
        <button onClick={() => handleSetFilterCategory('Autres')}>Autres</button>
      </div>
      <p><strong>Total des dépenses:</strong> {totalExpenses} €</p>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index}>
            <div>Catégorie: {expense.category}</div>
            <div>Titre: {expense.title}</div>
            <div>Montant: {expense.amount} €</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;