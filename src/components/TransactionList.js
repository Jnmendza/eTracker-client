import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="mt-4 border-bottom shadow p-3">
      <h3 className="mb-4 pb-2 border-bottom">History</h3>
      <ul className="list-group">
        {transactions.map(transaction => ( <Transaction transaction={transaction} /> ))}
      </ul>
    </div>
  )
}

export default TransactionList;