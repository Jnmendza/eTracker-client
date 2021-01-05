import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);
  
  return (
    <div className="d-flex-column justify-content-center">
      <h4 className="text-center">Your Balance</h4>
      <h1 className="text-center">${total}</h1>
    </div>
  )
}

export default Balance;