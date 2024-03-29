import React, { useState, useContext } from 'react';
import { useExpensesContext } from '../../context/ExpensesContext';
import './form.css';

const ExpensesForm = () => {
  const { dispatch } = useExpensesContext();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0 && title.trim() !== "" && category !== "") {
      dispatch({ type: 'ADD_EXPENSE', payload: { title, amount: parsedAmount, category } });
      setAmount('');
      setCategory('');
      setTitle('');
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <div className='form'>
      {warning && <div style={{ color: 'red' }}>Veuillez remplir tous les champs</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Titre' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" min="0" placeholder="Montant" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)} >
          <option value="">Choisir une catégorie</option>
          <option value="Alimentation">Alimentation</option>
          <option value="Logement">Logement</option>
          <option value="Transport">Transport</option>
          <option value="Divertissement">Divertissement</option>
          <option value="Santé">Santé</option>
          <option value="Éducation">Éducation</option>
          <option value="Autres">Autres</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ExpensesForm;