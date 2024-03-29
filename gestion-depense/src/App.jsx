import React from 'react';
import ExpensesForm from './component/Form/index.jsx';
import ExpensesList from './component/List/index.jsx';
import ExpensesProvider  from './context/ExpensesContext.jsx';

function App() {


  return (
    <>
    <ExpensesProvider>
      <div className="App">
        <h1>Gestion des dépenses personnelles</h1>
        <ExpensesForm />
        <ExpensesList />
      </div>
    </ExpensesProvider>
      
    </>
  )
}

export default App
