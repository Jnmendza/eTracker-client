import React from "react";
import "./styles.css";
import Image from './image.jpg'

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

export default function App() {
  return (
    <>
    <GlobalProvider>
      <Header />
      <div className="container-sm">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    </>
  );
}
