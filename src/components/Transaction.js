import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li key={transaction.id} class="list-group-item">
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className="btn btn-danger btn-sm float-end">x</button>
    </li>
  )
}

export default Transaction;