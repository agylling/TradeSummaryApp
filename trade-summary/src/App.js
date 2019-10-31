import React from 'react';
import './App.css';
import FileEntry from './components/FileEntry'
import TransactionList from './components/TransactionList'
import DataSummary from './components/DataSummary'
import Profit from './components/Profit'
import LoadingPie from './components/LoadingPie'
import StockSummaryWindows from './components/StockSumWindows'

function App() {
  return (
    <div className="App">
      <Profit/>
      <StockSummaryWindows />
      <FileEntry />
      <DataSummary />
      <TransactionList />
    </div>
  );
}

export default App;
