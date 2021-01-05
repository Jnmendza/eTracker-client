import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, amount) => (acc += amount), 0) * - 1
    .toFixed(2);

  return (
    <div className="row card-body shadow">
        <div className="col-sm border text-center pt-3">
          <h4 className="text-success">Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div className="col-sm border text-center pt-3">
          <h4 className="text-danger">Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses;