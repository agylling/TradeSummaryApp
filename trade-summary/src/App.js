import React from 'react';
import './App.css';
import FileEntry from './components/FileEntry'
import TransactionList from './components/TransactionList'
import DataSummary from './components/DataSummary'
import Profit from './components/Profit'
import LoadingPie from './components/LoadingPie'
import StockSummaryWindows from './components/StockSumWindows'
import OverallSummary from './components/OverallSummary'

function App() {
  return (
    <div className="App">
      <OverallSummary/>
      <Profit/>
      <StockSummaryWindows />
      <FileEntry />
      <DataSummary />
      <TransactionList />
    </div>
  );
}

export default App;
